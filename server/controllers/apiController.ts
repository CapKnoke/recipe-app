import { Request, Response } from 'express';
import apiModel from '../models/apiModel';

export default {
  welcomeMessage: (req: Request, res: Response): void => {
    res.json({ message: 'CONNECTED TO RECIPE API'});
  },
  getById: async (req: Request, res: Response, next: CallableFunction): Promise<void> => {
    apiModel.get(req.params.id)
      .then(recipe => res.json(recipe))
      .catch(err => next(err));
  },
  getRandomRecepies: async (req: Request, res: Response, next: CallableFunction): Promise<void> => {
    apiModel.getRandom(req.query)
      .then(recipes => res.json(recipes))
      .catch(err => next(err));
  },
  getOneRandomRecepie: async (req: Request, res: Response, next: CallableFunction): Promise<void> => {
    apiModel.getOneRandom()
      .then(recipes => res.json(recipes))
      .catch(err => next(err));
  },
  searchRecepies: async (req: Request, res: Response, next: CallableFunction): Promise<void> => {
    apiModel.search(req.query)
      .then(recipes => res.json(recipes))
      .catch(err => next(err));
  },
};