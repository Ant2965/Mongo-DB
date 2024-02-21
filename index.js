const mongoose =require("mongoose");



main().then(()=>{
    console.log("connected")
})
.catch(err => console.log(err))

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/ant");
}


const userschema = mongoose.Schema({
    name: String,
    email: String,
    age: Number
})
const user = mongoose.model("user",userschema);


const user2 = new user({
    name: "Avni",
    email:"a@gmail.com",
    age:17
})

user2.save()
.then((res=>{
    console.log(res)
}))
.catch((err =>{
    console.log(err)
}));