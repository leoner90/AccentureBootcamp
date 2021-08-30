const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "assignment",
  waitForConnections: true,
  connectionLimit: 10,
})
 
class DbStorage {
  constructor(tableName){
    this._table = tableName;
  }

//GET ALL INFORMATION (Get all data from db if no limiter , otherwise limit it)
  async getAll(limitStart,postLimit,ASCorDESC ){
    let sqlLimiter = '';
    if(postLimit >= 0 ){
      sqlLimiter = `ORDER BY id_blogs ${ASCorDESC}  LIMIT ${postLimit} OFFSET ${limitStart}; `;
    }
    let AllCounter = await pool.promise().query(`SELECT COUNT(*) AS AllBlogs FROM blogs;`);
    // count(b.id_blogs) OVER() AS AllCounter,
    const [rows] = await pool.promise().query(`
      SELECT 
      u.login, 
      b.*
      FROM users u INNER JOIN blogs b 
      ON b.Creator_Id = u.id_User ${sqlLimiter}`);  
 
    if(ASCorDESC == 'DESC'){
      const reversedRows = rows.reverse();
      return  {rows: reversedRows , total: AllCounter[0][0].AllBlogs};
    } else {
      return  {rows: rows , total: AllCounter[0][0].AllBlogs};
    }
  }

//SELECTS SPECIFIC DATA
  async getByKey(key, value) {
    const [rows] = await pool.promise().query(`SELECT * FROM ${this._table} WHERE ${key}='${value}'`);
    return rows;
  }
  async getUserPostByID(key, value) {
    let AllCounter = await pool.promise().query(`SELECT COUNT(*) AS AllBlogs FROM blogs WHERE ${key}='${value}'`);
    const [rows] = await pool.promise().query(`SELECT 
    u.login, 
    b.*
    FROM users u INNER JOIN blogs b 
    ON b.Creator_Id = u.id_User
    WHERE ${key}='${value}'`);
    return  {rows: rows , total: AllCounter[0][0].AllBlogs};
  }

//CREATE NEW USER
  async CreateUser(NewUserData){
    const [rows] = await pool.promise().query(`INSERT INTO ${this._table} (	Login, 	Email, Password)  
    VALUES ('${NewUserData.login}', '${NewUserData.email}', '${NewUserData.password}')`);
    return rows.insertId;
  }

  //CREATE NEW BLOG 
  //prepared statment to escape special characters
  async createBlog(newBlogData,imgFile){
    const [rows] = await pool.promise().query(`INSERT INTO ${this._table} (	BlogHeader, 	BlogBody, Creator_Id, BlogImg , 	TimeStamp)  
    VALUES (?, ?, ?, ? , ?)` ,  [newBlogData.BlogHeader, newBlogData.BlogBody, newBlogData.creatorId, 'img/'+ imgFile.name , newBlogData.date]); 
    return rows.insertId;
  }
 
 

//UPDATE API KEY
  async updateAPIkey(secretKey, Id) {
    const [rows] = await pool.promise().query(`UPDATE  ${this._table} SET 
    ApiKey = '${secretKey}'
    WHERE id_User= '${Id}'`);
    return 'succes';
  }

//UPDATE POSTS
  async updatePost(UpdatedPost ,imgFileName) {
    const [rows] = await pool.promise().query(`UPDATE ${this._table} SET 
    BlogHeader = ? ,
    BlogBody = ? ,
    BlogImg = ?
    WHERE id_blogs= ? ` ,  
    [UpdatedPost.BlogHeader, UpdatedPost.BlogBody, imgFileName ,UpdatedPost.id]) 
    return 'succes';
  }

//DELETE POSTS
  async delete(id) {
    //TRY CATCH GOES HERE...
    const [rows] = await pool.promise().query(`DELETE FROM ${this._table} WHERE id_blogs=${id}`);
    return 'succes';
  }
}

module.exports = DbStorage;