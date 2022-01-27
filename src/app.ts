import express, { Express } from 'express';
import routes from './router';
import 'reflect-metadata';

class AppController {
  public express: Express;

  constructor() {
    this.express = express();
  }

  public middlewares() {
    this.express.use(express.json());
  }

  public routes() {
    this.express.use(routes);
  }
}

export default new AppController();
