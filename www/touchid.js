
var exec = require("cordova/exec");

var TouchID = function () {
    this.name = "TouchID";
};

TouchID.prototype.authenticate = function (text, successCallback, errorCallback) {
    if (!text) {
        text = "Please authenticate via TouchID to proceed";
    }
    exec(successCallback, errorCallback, "TouchID", "authenticate", [text]);
};

TouchID.prototype.checkSupport = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "TouchID", "checkSupport", []);
};

module.exports = new TouchID();
