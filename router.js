Router.configure({
    layoutTemplate:'layout'

});
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
//
//import { Short } from '/imports/api/shorty.js';
Router.map(function(){
    this.route('home', {path: '/'});
});
