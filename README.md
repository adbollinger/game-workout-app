## Game Workout Server

**This is only the server-side portion of this project. You can view the overview of the project and client-side specific installation instructions [here](https://github.com/adbollinger/game-workout-client).**

## Installation and Setup Instructions

To run this project, you will need `Node` installed globally on your machine.

Start by cloning this repository and following the installation instructions below.

### MongoDB set up:

### Create a database

This link will guide you through creating a Mongo Database

https://www.mongodb.com/basics/create-database

Once your database is set up, you will need to configuire your config file:

- Create a folder named **config**
- Create a file named **default.json**
- Add your database connection string and JWT secret as a JSON object

For example: 
```
{
    "mongoURI": "mongodb://127.0.0.1:27017/workouts",
    "jwtSecret": "YourJWTSecret"
}
```

### Installation:

**This installation only covers the server-side portion of this project.**

Install dependancies

`npm install`  

Run the server:  

`npm run start`  

Once the [client](https://github.com/adbollinger/game-workout-client#installation-and-setup-instructions) is set up, you can run the server and the client together:

`npm run dev`  

