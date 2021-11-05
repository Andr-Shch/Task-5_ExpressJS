const errorHendler = (err,req, res, next)=>{
    if (err.status){
        res.status(error.status).json({ success: false, msg:err.message})
        return
    }
    res.sendStatus(500)
}