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

  console.debug = function () { log.debug(convert(Array.prototype.slice.call(arguments))); };
  console.log = function () { log.info(convert(Array.prototype.slice.call(arguments))); };
  console.info = function () { log.info(convert(Array.prototype.slice.call(arguments))); };
  console.warn = function () { log.warning(convert(Array.prototype.slice.call(arguments))); };
  console.error = function () { log.err(convert(Array.prototype.slice.call(arguments))); };

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
}
