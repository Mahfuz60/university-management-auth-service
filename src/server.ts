import mongoose from 'mongoose';
import { Server } from 'http';
import app from './app';
import config from './config/index';
import { logger, errorLogger } from './shared/logger';

process.on('uncaughtException', error => {
  errorLogger.error(error);

  process.exit(1);
});

let server: Server;

//database connection
async function mainServer() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info(`🧧 Database Connected Successfully!`);

    server = app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`);
    });
  } catch (err) {
    errorLogger.error(`Failed to Connected database`, err);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

mainServer();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is Received');
  if (server) {
    server.close();
  }
});
