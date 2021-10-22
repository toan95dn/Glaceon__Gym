I/ Run the client

    cd client/
    npm i
    npm start

2/ Run the server

    cd server/
    npm i
    touch .env

    After creating an .env file, open text editor and add line "PORT = 3001"
    the app.js file will use this port to run the server. We'll add secret keys
    in here, such as our MONGO_URL . The .env file will be ignored when we commit
    to our github repo.

    Finally, run the command under to start our server

    npm start
