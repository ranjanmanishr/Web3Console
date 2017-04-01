var winston = require('winston');

module.exports = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({
      name: 'info-file',
      filename: 'app.log',
      level: 'info'
    })
  ]
});
