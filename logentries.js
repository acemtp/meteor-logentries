Logger = Npm.require('le_node');

if(Meteor.settings && Meteor.settings.logentries && Meteor.settings.logentries.token) {
  log = new Logger(Meteor.settings.logentries);

  var convert = function (argArray) {
    var args = _.map(argArray, function (arg) {
      return (_.isObject(arg) || _.isArray(arg)) ? JSON.stringify(arg) : String(arg);
    });
    var argString = args.join(' ');
    return argString || ' ';
  };

  var consoleLogOrig = console.log;

  var logAndCatch = function(level, argArray) {
    try {
      log[level](convert(argArray));
    } catch (e) {
      consoleLogOrig.call(console, e);
    }
  };

  console.log = function () {
    // special case for meteor dev mode
    if(arguments.length === 1 && arguments[0] === 'LISTENING') return consoleLogOrig.call(console, 'LISTENING');
    logAndCatch('info', Array.prototype.slice.call(arguments));
  };

  console.debug = function () { logAndCatch('debug', Array.prototype.slice.call(arguments)); };
  console.info = function () { logAndCatch('info', Array.prototype.slice.call(arguments)); };
  console.warn = function () { logAndCatch('warning', Array.prototype.slice.call(arguments)); };
  console.error = function () { logAndCatch('err', Array.prototype.slice.call(arguments)); };

  // test border cases
  // console.log('start');
  // console.log();
  // console.log(undefined);
  // console.log(null);
  // console.log(false);
  // console.log(0);
  // console.log(-5);
  // console.log(10);
  // console.log(10.5);
  // console.log('');
  // console.log('test', undefined, null, false, 0, '');
  // console.log('end');
  // console.debug('test', 'debug');
  // console.info('test', 'info');
  // console.warn('test', 'warn');
  // console.error('test', 'error');
}
