const mid = (req, res, next, id)=>{
    console.log(req.method);
    console.log(id);
    next()
}

module.exports = {
   mid
  }