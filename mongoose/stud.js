var mongoose= require('mongoose');

var studschema = mongoose.Schema({

first: {

        type:String,
        required: true

},

second : {

        type:String,
        required: true

},

three : {

    type:String,
        required: true

}
});
//exporting thr file
var studentCollection =  module.exports= mongoose.model('studentCollection',studschema);


// inserting student details
module.exports.addStudent = function (student, callback) {
    studentCollection.create(student,callback);
}

//retrieving student details
module.exports.getDetails = function (callback, limit) {

    studentCollection.find(callback).limit(limit);
}
module.exports.getStudentByField = function (name, callback) {

    console.log(name);
    studentCollection.find({first :name}, callback);
}
//updating student values
/*module.exports.updateStudent= function (id, student, options, callback){
    var query= {

    }*/
module.exports.update=function(conditions,update,options,callback){
    studentCollection.findOneAndUpdate(conditions,update,options,callback);
}

//removing
module.exports.remStudentByField=function(name,callback){

    console.log(name)
    studentCollection.remove({ first : name},callback);
}



//* Created by Harish Kumar on 08-05-2017.

