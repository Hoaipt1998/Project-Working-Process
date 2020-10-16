module.exports = function(obj) {
    for (var x in obj) { return false };
    return true;
}