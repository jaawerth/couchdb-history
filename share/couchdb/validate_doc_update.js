function(newDoc, currDoc, user) {
  if(currDoc) {
    throw({ forbidden: "Documents in this database are immutable." });
  }
}
