var aug = require('aug');
var currie = require('currie');

var init = false;
var Thrive = function() {}
Thrive.extend = function extend(obj) {

  init = true;
  var proto = new this();
  init = false;

  aug(proto, obj);

  var Thrive = function(params) {
    aug(this, params);
    if (!init && this.init) {
      this.init();
    }
  }

  Thrive.prototype = proto;
  Thrive.prototype.constructor = Thrive;
  Thrive.extend = extend
 
  return Thrive;

}

Thrive.prototype.proxy = function(fn, arg1, arg2, arg3) {
  return currie(fn, this, arg1, arg2, arg3);
}

module.exports = Thrive;