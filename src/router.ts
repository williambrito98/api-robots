import LoginController from 'app/Controllers/LoginController';
import { Router } from 'express';

const routes = Router();

routes.get('/api/login', LoginController.store);

export default routes;
