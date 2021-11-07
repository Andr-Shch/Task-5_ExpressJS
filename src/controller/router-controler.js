
let data = [
  {
    id: 1,
    name: "Nell",
    posts: [
      {
        id: 1,
        text: "Hello Nell"
      },
      {
        id: 2,
        text: "lol Nell"
      }
    ]
  },
  {
    id: 2,
    name: "Caitrin Gorvette",
    posts: [
      {
        "id": 1,
        text: "Hello Caitrin Gorvette"
      },
      {
        id: 2,
        text: "lol Caitrin Gorvette"
      }
    ]
  },
  {
    id: 3,
    name: "Augustine Sandon",
    posts: [
      {
        id: 1,
        text: "Hello Augustine Sandon"
      },
      {
        id: 2,
        text: "lol Augustine Sandon"
      }
    ]
  },
  {
    id: 4,
    name: "Sim Lecointe",
    posts: [
      {
        id: 1,
        text: "Hello Sim Lecointe"
      },
      {
        id: 2,
        text: "lol Sim Lecointe"
      }
    ]
  },
  {
    id: 5,
    name: "Cristie Cooling",
    posts: [
      {
        id: 1,
        text: "Hello Cristie Cooling"
      },
      {
        id: 2,
        text: "lol Cristie Cooling"
      }
    ]
  },
  {
    id: 6,
    name: "Ferne Schreurs",
    posts: [
      {
        id: 1,
        text: "Hello Ferne Schreurs"
      },
      {
        id: 2,
        text: "lol Ferne "
      }
    ]
  }]

// get all list


 //middleware check id
const checkAuthorId = ((req, res, next, id) => {
   if ( !data.some(item=>item.id===+id) ){
          return res
          .status(404)
          .json({ success: false, msg: `no author with id:${id}` })
   }
   next()
})
//check POST request
const checkNewAuthor=(req, res, next)=>{
   const {id, name} = req.body
   if ( data.some(item=>item.id===+id) ){
    return res
    .status(409)
    .json({ success: false, msg: ` author with id:${id} exist` })
} else if (name.length===0){
  return res
    .status(400)
    .json({ success: false, msg: `neeed name` })
}
next()
  }
  const getAuthors = (req, res) => {
    res.status(200).json({ success: true, data: data })
  }
  

//get One Author with posts
const getOneAuthor = (req, res) => {
  const author = data.find(item => item.id === +req.params.id)
  res.status(200).json({ success: true, data: author })
}

//delate author by ID
const removeAuthor = (req, res) => {
  const author = data.find(item => item.id === +req.params.id)
  data = data.filter(item => item.id !== +req.params.id);
  return res.status(200).json({ success: true, data: data })
}

// //add new athor. Name and Id required, propety posts will be created if not provided
const addAuthor = (req, res) => {
   const {name, id, posts} = req.body
   data= [...data, {id, name, posts:posts?posts:[]}]
   res.status(200).json({ success: true, data: data })
}

//Rename Author
 const renameAuthor = (req, res) => {
  const author = data.find(item => item.id === +req.params.id)
  console.log(req.body);
  res.status(200).json({ success: true, data:{...author,name:req.body.name}})
 } 


const getPosts = (req, res) => {
  const author = data.find(item => item.id === +req.params.id)
  res.status(200).json({ success: true, data: author.posts }) 
}

const getOnePost = (req, res) => {
  const author = data.find(item => item.id === +req.params.id)
  const post = author.posts.find(item => item.id === +req.params.postID)
  if (!post) {
    return res
      .status(404)
      .json({ success: false, msg: `no post with id:${req.params.postID}` })
  }
    res.status(200).json({ success: true, data: post }) 
}


module.exports = {
  getAuthors,
  getOneAuthor,
  removeAuthor,
  getPosts, 
  getOnePost,
  renameAuthor,
  addAuthor,
  checkAuthorId,
  checkNewAuthor
}