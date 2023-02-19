
// Home page router
router.get('/', (req,res)=>{
    Photo.find({}, (error, images)=>{
        if (error){
            console.log(error);
        }else{
 
            res.render('index', { images:images, msg: req.query.msg});
        }
    })
 })