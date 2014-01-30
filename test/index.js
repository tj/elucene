
var parse = require('..');

describe('parse(str)', function(){
  it('should support FIELDS', function(){
    var query = 'level:error FIELDS message';
  })

  it('should support SORT', function(){
    var query = 'level:error SORT timestamp:asc';

  })

  it('should support LIMIT', function(){
    var query = 'level:error LIMIT 2';

  })

  it('should support all additions', function(){
    var query = 'level:error SORT timestamp:asc LIMIT 2 5 FIELDS message code';

    var ret = parse(query);

    ret.should.eql({
      string: 'level:error',
      sort: ['timestamp:asc'],
      limit: ['2', '5'],
      fields: ['message', 'code']
    });
  })
})