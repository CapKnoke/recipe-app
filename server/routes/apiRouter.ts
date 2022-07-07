import { Router } from 'express';
import apiController from '../controllers/apiController';

const router: Router = Router();

router.get('/', apiController.welcomeMessage);
router.get('/random', apiController.getRandomRecepies);
router.get('/random/info', apiController.getOneRandomRecepie);
router.get('/search', apiController.searchRecepies);
router.get('/:id/info', apiController.getById);

export default router;