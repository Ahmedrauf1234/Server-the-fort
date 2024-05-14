function getData(){
    axios.get('http://localhost:3000/api/v1/todos').then((res)=>{
    console.log(res.data);
   
}).catch((err)=>{
    console.log(err);
})
}


const form = document.querySelector('#form')
const title = document.querySelector('#title');
const div = document.querySelector('#div');
form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    axios.post('http://localhost:3000/api/v1/todos' , {
        title: title.value
    }).then((res)=>{
        console.log(res.data);
    }).catch((err)=>{
        console.log(err);
    })
})
 const deleteTodo = ()=>{
    axios.delete(`http://localhost:3000/api/v1/todos/1715689134737
    `).then((res)=>{
        console.log(res.data);
    }).catch((err)=>{
        console.log(err);
    })
 }