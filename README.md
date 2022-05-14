# Node Express Session

A simple project demonstrating how to setup and use sessions with a node-express application. This app uses MongoDB Atlas as a session store but can either be changed to use a local instance of Mongo DB (if you don't have Atlas) or to another provider, like Redis.

## Environment Variables

If you do choose to use MongoDB as your session store, make sure to create and add the following properties to either an `.env` file or directly to the code. Both these environment variables are used in the `session.ts` file.

```
URI: your-mongo-db-uri
SESSION_SECRET: 217389dfb3461f357204b9a189833935ac273f97
```

## Getting Started

1. Download the project as a zip file or clone it to your machine.
2. `cd` into the project folder (root) and run `npm i` to install all the dependencies.
3. Run `npm run dev` to start the development server at `PORT = 4000`. You can change the server port value by, either adding a `PORT` variable in your `.env` file or change the value in `index.ts` file.
4. Run `npm run ts-compile` to transpile typescript code to javascript.

## Tech Stack

1. Nodejs
2. Express.js
3. MongoDB Atlas
4. TypeScript
