
let posts = [{
    id: 1,
    title: 'Post One'
},
{
    id: 2,
    title: 'Post Two'
},
{
    id: 3,
    title: 'Post Three'
}
];



const getPosts = (req, res) => {
    const limit = +req.query.limit;
    if (!isNaN(limit) && limit > 0) {
        res.send(posts.slice(0, limit))

    }else{
        res.status(200).json(posts)
    }
    
}


const getPost =  (req, res) => {
    const id = +req.params.id;
    const findUser = posts.find((res) => {
        return res.id === id
    })
    if(!findUser){
        res.status(404).send(`No user found with this id ${id}`)
    }
    else{
        res.status(200).send(findUser);
    }
   
}


const createPost = (req,res)=>{
    const newId = posts.length+1;
        console.log(req.body);
        posts.push({ id:newId, ...req.body})
        res.status(201).json(posts)
    }

    const updatePost = (req,res)=>{
        const id = +req.params.id;
        
        const index = posts.findIndex(el =>{
            return el.id === id;
        })
        
        console.log(index);
        
         posts[index]= {...posts[index], ...req.body};
         res.send(posts)
        
        }


    const deletePost =  (req,res)=>{
        const id  = +req.params.id;
    
        const index = posts.findIndex(el =>{
            return el.id === id;
        })
    
        if(index === -1){
            res.send(`${id} is an invalid ID`)
        }else{
            posts.splice(index,1);
            res.json(posts)
        }
    }


    module.exports = {
        getPosts,
        getPost,
        createPost,
        updatePost,
        deletePost
    };