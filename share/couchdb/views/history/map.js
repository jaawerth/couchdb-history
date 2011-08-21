function(doc) {
  emit(doc._id.split(' @ '), null);
}
