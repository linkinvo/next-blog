import { Sequelize } from "sequelize";
import { createServer } from "http";
import { parse } from "url";
import next from "next";
import config from "../config";

// const models = require("./models/models");
const mysql2 = require("mysql2");
const port = parseInt(process.env.PORT || "3000", 10);
console.log("port", port);

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const start = async () => {
  try {
    //database connection
    // await config.authenticate()

    //database state with db schema
    // await config.sync()

    app.prepare().then(() => {
      createServer((req, res) => {
        const parsedUrl = parse(req.url!, true);
        handle(req, res, parsedUrl);
      }).listen(port);

      // tslint:disable-next-line:no-console
      console.log(
        `> Server listening at http://localhost:${port} as ${
          dev ? "development" : process.env.NODE_ENV
        }`
      );
    });
  } catch (e) {
    console.log(e);
  }
};

start();

const db = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    dialect: config.db.dialect,
    dialectModule: mysql2,
  }
);