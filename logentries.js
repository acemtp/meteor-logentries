Logger = Npm.require('le_node');

if(Meteor.settings && Meteor.settings.logentries && Meteor.settings.logentries.token) {
  log = new Logger(Meteor.settings.logentries);

  console.debug = function () {
    if (arguments.length > 1) log.debug(Array.prototype.slice.call(arguments));
    else if (arguments.length === 1) log.debug(arguments[0]);
  };
  console.log = function () {
    if (arguments.length > 1) log.info(Array.prototype.slice.call(arguments));
     else if (arguments.length === 1) log.info(arguments[0]);
  };
  console.info = function () {
    if (arguments.length > 1) log.info(Array.prototype.slice.call(arguments));
    else if (arguments.length === 1) log.info(arguments[0]);
  };
  console.warn = function () {
    if (arguments.length > 1) log.warning(Array.prototype.slice.call(arguments));
    else if (arguments.length === 1) log.warning(arguments[0]);
  };
  console.error = function () {
    if (arguments.length > 1) log.err(Array.prototype.slice.call(arguments));
    else if (arguments.length === 1) log.err(arguments[0]);
  };
}
