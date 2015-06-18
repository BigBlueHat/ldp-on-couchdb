function(doc, req){
  // if no existing doc was loaded from CouchDB,
  if (!doc){
    // then see if the user wants to PUT to a certain ID
    if ('id' in req && req['id']){
      // if so, create new, empty document with that ID
      return [{'_id': req['id']}, 'Document ' + req['id'] + 'created!'];
    }
    // POSTed request, so let's check the Content-Type
    if (req.header['Content-Type'] == 'application/json') {
      // since it's JSON, let's save it
      return [JSON.parse(req.body), 'Stored a new document...somewhere.'];
    }
    // right now we're only supporting JSON, so...send a note back about that
    return [null, 'Sorry, kids. Only JSON is allowed to play here.'];
  }

  // We've got an existing doc
  // so let's update some part of it
  // based on what was sent in the req.body
  doc.got_something = 'yep!';
  return [doc, 'Updated an existing doc with some meaningless stuff.'];
}
