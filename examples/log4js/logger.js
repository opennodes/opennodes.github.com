/**
 * Usage: 
 * var logger = require('nodeutil').logger.getInstance();
 * logger.debug('TEST...123');
 */
var log4js = require('log4js')
  , logger = log4js.getLogger()
  , logFile = process.env.LOGPATH ? process.env.LOGPATH : '/tmp/node.log'
  , logCategory = process.env.LOGCATG ? process.env.LOGCATG : 'normal'
  , logLevel = process.env.LOGLEVEL ? process.env.LOGLEVEL : 'DEBUG'
  , logMaxSize = process.env.LOG_MAX_SIZE ? process.env.LOG_MAX_SIZE : 20480
  , logBackup = process.env.LOG_BACKUP ? process.env.LOG_BACKUP : 7;
log4js.configure(
{
  "appenders": [
    { type: 'console' },
    {
      "type": "file",
      "filename": logFile,
      "maxLogSize": logMaxSize,
      "backups": logBackup,
      "category": logCategory
    }
  ]
}
);
var logger = log4js.getLogger(logCategory);
logger.setLevel(logLevel);
exports.getInstance = function() {
  return logger;
}
