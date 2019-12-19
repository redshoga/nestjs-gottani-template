import { systemLogger } from './logger';
import { Request, Response } from 'express';

export function requestLoggerMiddleware(req: Request, res: Response, next: Function) {
  systemLogger.info('headers:\n', req.headers);
  if (req.params) {
    systemLogger.info('param:', req.params);
  }
  if (req.query) {
    systemLogger.info('query:', req.query);
  }
  next();
}
