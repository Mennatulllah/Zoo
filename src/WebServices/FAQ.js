var router=require('express').Router();

var faqModel=require('../collections/FAQ');

// any url will start with /roles
router.get("/",function(request,respone){
    faqModel.find({}).populate({path:'FAQ_Type' , select:'Name - _id'}).then(_result=>respone.json(_result));
});

router.post("/",function(request,respone){
    var _faq=new faqModel(request.body);
    _faq.save();
})


module.exports=router;