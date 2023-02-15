# This API-Webserver app is created to be able to connect any RDMS database for example MySQL or MariaDB with simply and main endpoints like GET, POST and to be able to see this connection through this API application.
 * PS: this endpoints number can be increased when needed and -related to this- for a web server with better functionality. (e.g PUT, DELETE ...)

[] As basic prog. Language was chosen Node.js which is based on JavaScript progr. language and as Framework, the Express.

[] The web server has to be able keeping the credential data for a successful connection with the database container. 
 * Therefore, we'll be seeing in that app that the all log-in data are in the server.json file.

[] The dependencies for the correct working of web server are in the file named package.json which also will be downloaded while creating the docker image through Dockerfile

[] table_create.sh file is a shell script programmed file and stays for the creation of our first table named customer_data in the database. 
 * If we'll amend the table name, we'll have to amend the table name in the data of the database as well, which are in the server.json file.   
