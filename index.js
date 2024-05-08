const express = require('express')
const app = express()
const port = 3000
const arr = [];

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello Ahmed')
})

app.get('/api/v1/todos' , (req , res)=>{
    res.send({
        todo : arr
    })
})
//=============post================>>
app.post('/api/v1/todos' ,(req , res)=>{
    const {title} = req.body;
    if(title.length < 1){
        res.send({massage : 'please wrrite 1 character'})
        return
    }
    const obj = {
        title : title,
        id : Date.now()
    }
    arr.push(obj)
    res.send({massage : 'todo added sucessfully', todo : obj})
})

//=======================Delete=========================>>
app.delete('/api/v1/todos/:id' , (req , res)=>{
    const {id} = req.params;
    const index = arr.findIndex((items)=>{
       return items.id == id
    })
    if(index != -1){
        arr.splice(index , 1);
        res.send({
            massage : 'element deleted sucessfully'
        })
        return
    }
    res.status(404).send({
        massage : 'item not found'
    })
    
})
//========================Edit todo==================>>

app.put('/api/v1/todos/:id' , (req , res)=>{
    const {id} = req.params
    const {title} = req.body

    const index = arr.findIndex((items)=>{
        return items.id == id
    })
    if(index != -1){
        arr[index].title = title;
        res.send({
            massage : 'element updated sucessfully'
        })
        return
    }
    res.status(404).send({
        massage : 'item not found'
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//GET
//POST
//PUT
//DELETE