Profiles = new Meteor.Collection('profiles');

People = new Mongo.Collection('people');

var imageStore = new
FS.Store.GridFS('images');

Images = new
FS.Collection("images", {
	stores: [imageStore]
})