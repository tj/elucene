
var parse = require('./');

var query = parse('level:error ONLY projectId FROM 5 minutes ago');
console.log(query);
