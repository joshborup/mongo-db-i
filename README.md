# Project Summary

## Setup

- `fork` and `clone` this repository.
- `cd` into the project directory.
- Run `npm i mongoose express dotenv`

## Step 1

### Summary

In this step we will head over to https://mLab.com and create and account so we can host our database, we'll also want to download a tool to help us interact with out DB outside of the context of out application. Download `mongoDB compass community edition.

## Step 2

### Summary

In this step, we'll install `mongoose` into our project and require it in `index.js`, we will then call `mongoose` and pass in the `CONNECTION_STRING`. Unlike `massive`, `mongoose` is an ORM (Object-relational-mapper). An ORM helps us to interact with our database using our language of choice instead of SQL.

### Instructions

- Require and configure `dotenv` at the top of the file.
- require `express`.
- Require `mongoose` underneath `express`.
- invoke `mongoose`

  - pass in your CONNECTION_STRING variable as the first argument
  - pass in an object with a few configurations as the second argument, we want to set `useNewUrlParser: true`
    and `useCreateIndex: true`

- `mongoose` is a promise and needs to leave our application in order to make the connection
  - chain a `.then` to your invokation of `mongoose` and add a console log notifying you that the connection was successful

### Solution

<details>

<summary> <code> index.js </code> </summary>

```js
require("dotenv").config();
const express = require("express");
const massive = require("mongoose");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

mongoose
  .connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("mongo connected");
  });

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
```

</details>

## Step 3

### Summary

Like any data store, we need to have a way to define how we would like to store our data, Mongo defines its data structures with a `Schema`, we can then call that `Schema` when we need it by creating a `model` with it.

If you are coming from SQL you can think of a `Schema` as a `CREATE TABLE query`, the `model` is simply a way of querying a `Schema` when we would like to use it

Because mongoose is an ORM and allows us to use our language of choice, we can use the built in JavaScript types when setting up the schema

### Instructions

- in `server/`, create a directory called schemas with a file called `customers.js`
- open the `customers.js` file and require `mongoose` at the top
- create a variable called `customerSchema` and set it equal to `mongoose.Schema()`, pass in an object that will be a blueprint for how to store our data
  - the object should have the following properties
    - `name` with a type of `String`, and a `required` property set to true
      - in order to add multiple properties to a particular field, set the field name equal to an object and pass in the options your field should follow.
    - `age` with a type of `Number`
    - `date_joined` with a type of `Date`
      - this should also have a default property set to the current date, `Date().toLocaleString()`
    - `description` with a type of `String`
    - finally call `module.exports` and set it equal to `mongoose.model("customer", customerSchema);`

### Solution

<details>

<summary> <code> customers.js </code> </summary>

```js
const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: { type: Number },
  date_joined: {
    type: Date,
    default: Date().toLocaleString()
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model("customer", customerSchema);
```

</details>
