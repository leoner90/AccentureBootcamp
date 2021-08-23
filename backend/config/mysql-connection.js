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
  async getAll(postLimit){
    let sqlLimiter = '';
    if(postLimit >= 0 ){
      sqlLimiter = `ORDER BY id_blogs DESC LIMIT ${postLimit}`;
    }
    const [rows] = await pool.promise().query(`SELECT u.login, b.* FROM users u INNER JOIN blogs b 
    ON b.Creator_Id = u.id_User ${sqlLimiter}`);
    return rows.reverse();
  }

//SELECTS SPECIFIC DATA
  async getByKey(key, value) {
    const [rows] = await pool.promise().query(`SELECT * FROM ${this._table} WHERE ${key}='${value}'`);
    return rows;
  }

//CREATE NEW USER
  async CreateUser(NewUserData){
    const [rows] = await pool.promise().query(`INSERT INTO ${this._table} (	Login, 	Email, Password)  
    VALUES ('${NewUserData.login}', '${NewUserData.email}', '${NewUserData.password}')`);
    return rows.insertId;
  }

  //CREATE NEW BLOG
  async createBlog(newBlogData,imgFile){
    const [rows] = await pool.promise().query(`INSERT INTO ${this._table} (	BlogHeader, 	BlogBody, Creator_Id, BlogImg)  
    VALUES ('${newBlogData.BlogHeader}', '${newBlogData.BlogBody}' , '${newBlogData.creatorId}' , 'img/${imgFile.name}')`);
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
  async updatePost(UpdatedPost) {
    const [rows] = await pool.promise().query(`UPDATE  ${this._table} SET 
    BlogBody = '${UpdatedPost.BlogBody}',
    BlogHeader = '${UpdatedPost.BlogHeader}'
    WHERE id_blogs= '${UpdatedPost.id}'`);
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