import bunyan, { LogLevel } from 'bunyan';
import { config } from 'server/environment';

const { appName: name } = config;

const streams = [{ level: 'info' as LogLevel, stream: process.stdout }];

export const log = bunyan.createLogger({ name, streams });

export const trace = log.trace.bind(log);
export const debug = log.debug.bind(log);
export const info = log.info.bind(log);
export const warn = log.warn.bind(log);
export const error = log.error.bind(log);
export const fatal = log.fatal.bind(log);
