var mongoose = require('mongoose');
var schema = mongoose.Schema;

var preservesSchema = new schema({
    Protected_Area	:{
        type:String,
        required:true
    },

    Declaration_Date:{
        type:Number,
        required:true
    },

    Area:{
        type:Number,
        required:true
    },

    Governorate:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Preserves',preservesSchema)