
/**
 * Expose `parse()`.
 */

module.exports = parse;

/**
 * Parse the given query `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api public
 */

function parse(str) {
  var query = {};
  var parts = str.split(/\s*(FIELDS|LIMIT|SORT)\s*/);

  query.string = parts.shift();

  while (parts.length) {
    var name = parts.shift().toLowerCase();
    query[name] = parts.shift().split(/\s+/);
  }

  return query;
}