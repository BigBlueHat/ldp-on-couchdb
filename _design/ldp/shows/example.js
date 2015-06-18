function(doc, req){
  provides('json', function(){
    return {body: toJSON(doc)};
  });
/*  provides('html', function(){
    return '<pre>' + toJSON(doc) + '</pre>';
  });
  provides('xml', function(){
    return {
      'headers': {'Content-Type': 'application/xml'},
      'body' : ''.concat(
        '<?xml version="1.0" encoding="utf-8"?>\n',
        '<doc>',
        (function(){
          escape = function(s){
            return s.replace(/&quot;/g, '"')
                    .replace(/&gt;/g, '>')
                    .replace(/&lt;/g, '<')
                    .replace(/&amp;/g, '&');
          };
          var content = '';
          for(var key in doc){
            if(!doc.hasOwnProperty(key)) continue;
            var value = escape(toJSON(doc[key]));
            var key = escape(key);
            content += ''.concat(
              '<' + key + '>',
              value,
              '</' + key + '>'
            )
          }
          return content;
        })(),
        '</doc>'
      )
    };
  });*/
/*  registerType('text-json', 'text/json');
  provides('text-json', function(){
    return {body: 'hi there'};
  });*/
}
