const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const userSchema = new Schema({
    name:{type : String, required : true},
    phoneNum:{type : Number, required:true,unique:true},
    profilePic:{type:String, required:true,unique:true},
    address:{type:String , required: true},
    facebookLink:{type:String, required:true, unique:true},
    instagramLink:{type:String, required:true,unique:true},
    linkedinLink:{type:String, required:true,unique: true},
    skills:{type:Array, required: true},
    projects:[{
        projectname:{type:String},
        description:{type:String},
        technologies:{type:Array}
    }]


},{
    timestamps: true,
}
);
userSchema.path('profilePic').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');
userSchema.path('facebookLink').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');
userSchema.path('instagramLink').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');
userSchema.path('linkedinLink').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');
const User =mongoose.model('User',userSchema);
module.exports=User;