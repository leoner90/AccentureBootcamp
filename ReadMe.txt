#mysql:
-sql file from backend\DbMigrationScript folder , import to phpMyAdmin

#Backend
cd backend
npm i 
terminal -> node server.js

#Frontend
cd frontend 
npm i 
terminal ->  npm run serve
    #FrontEnd structure:
        - "views" folder our view files for user which are loaded through router(index.js)
        - "view" files uses components folder and Server Side Functions folder
        - Server Side functions uses ajax to get or send data to the server
    #backend structure:
        - server.js file - just server setups
        - routes/routes.js file which depending on request calls appropriate controller
        - controller calls the model 
        - model communicates with DB and sends data / error back