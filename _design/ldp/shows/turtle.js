function(doc, req) {
  var t2j = require('lib/t2j');
  if (doc) {
    return {
      body: t2j.fromJsonld(JSON.stringify(doc))
    };
  }
}
