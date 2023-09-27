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




IN GENERAL:
ON SERVER SIDE USED EXPRESS , EXPREESS FILE LOADER , jsonwebtoken,bcrypt ,mysql2,,coockie parser
ON FRONTEDN VUE , VUEX , ROUTER

HOME
	ON MOUNT LOAD THREE LAST POSTS FROM DB,  HOW MANY IS SET IN VUEX STATE
ALL IMAGES ARE LOADED FROM BACKEND WILL SHOW U LATTER
-webkit-line-clamp
inner joint table to display user name
MOBILE RESISNG FOR EVERY PAGE
404 page
ALL BLOGS
ON MOUNT LOADS ONE POST FROM DB LIMIT IS SET IN VUEX STATE
THEN CHECKS IF SCREEN IS HIGHT ENOUGHT LOAD RECURSIVE FUNCTION WITCH LOADS MORE BLOGS AND STOPS WHEN   BLOG HIGHT IS = WINDOW HIGHT
THEN ADD SCROLL FUNCTION , ON SCROLL IT CHECK HIGHT AND IF IT'S ENOUGHT TO LOAD MORE BLOG IS WILL DESABLE SCROLL EVENT LOAD ONE BLOG , AND ENABLE SCROLL EVENT AGAIN
ON FIRST DB CALL IT SAVE IN VUEX STATE HOW MANY BLOGS ARE IN DB - WHEN LIMIT IS REACHED NO MORE SERVER CALLS.
RESULT SAVED WHEN YOU GO THROUGHT WEBSITE

COMMON FOR HOME & ALL BLOGS
IF HOME WAS LOADED FIRST , THEN LAST THREE BLOGS IN ALL PAGE ARE LOADED FROM MEMORY
IF ALL BLOGS WERE LOADED FIRST AND WE GOT ALL BLOGS FROM DB , THEN HOME PAGE LOADS BLOGS FROM MEMORY


SINGLE PAGE
IF BLOG WAS ACCESSED FROM BLOG PAGE THEN LOADS DATA FROM PARAMS
ON REFRESH , OR IF USER USES LINK TO SEE BLOG , THEN IT'S LOAD DROM DB , AND ID PROVIDED IN QUERY

REG
validation  html , js , server side ,  show and explain reg exp

LOGIN
dosent have validation just check it's not empty , and does user exist and password is correct

COMON FOR REG & LOG
on registration or log in server is creating a session ,where it stores public api key and user id , and in database it saves private key, frontend just updates value of loginStatus state , sets it true.

On page refresh before  everything , is called function to check is user loged in , it's checks dose user session public key is = to private key stored in db.

Router before render each page cheks do we need autorisation for this page or not , then cheks user status and redirects to proper page

USER POST BEFORE - no blogs yet , for onother user it's own blogs
ADD POST
Validation img and text .
 If no img - default will go in use.
image is saved on server side , in db save patch to it , and on call it converts img to base64 and sends to front end

USER POST AFTER
	Provides user post using id in session
	provides ability to delete post
	and edit btn
EDIT BLOG
IF BLOG WAS ACCESSED FROM USER BLOG PAGE THEN LOADS DATA FROM PARAMS
ON REFRESH , OR IF USER USES LINK TO SEE BLOG , THEN IT'S LOAD DROM DB , AND ID PROVIDED IN QUERY
ON SERVER SIDE CHECKS DOSE USER HAVE RIGHTS TO EDIT THIS BLOG 

EDIT CURENT BLOG ,U CAN PROVIDE NEW IMG OR LEAVE OLD ONE , IF NEW IMG PROVIDED OLD IMG WILL BE  DELETED
 
lOG OUT 
	DESTROY SESSION AND DELETE API KEY FROM DB
COVER IF NOT DATA IN DB
NO BLOG HANDLER
