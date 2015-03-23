Meteor.startup(function () {

  if (!Contacts.find().count()) {
    Contacts.insert({"name": "foo"})
    Contacts.insert({"name": "bar"})
    Contacts.insert({"name": "baz"})
  }
});

Meteor.publish("contacts", function () {
  return Contacts.find();
});