import express from 'express';
import carController from '../controllers/car.controller';

const carRoutes = express.Router();

carRoutes.get('/', carController.getAll);

carRoutes.post('/', carController.create);

export default carRoutes;
