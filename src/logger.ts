import { configure, getLogger } from 'log4js';

configure({
  appenders: {
    out: { type: 'stdout' },
  },
  categories: {
    default: { appenders: ['out'], level: 'ALL' },
    system: { appenders: ['out'], level: 'ALL' },
    debug: { appenders: ['out'], level: 'ALL' },
  },
});

export const systemLogger = getLogger('system');
export const debugLogger = getLogger('debug');
