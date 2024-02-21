const mongoose = require("mongoose");



main().then(() => {
    console.log("connected")
})
    .catch(err => console.log(err))

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}


const bookschema = mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    author: String,
    price: Number
})


const book =mongoose.model("book",bookschema)


let book1 = book({
    title: "maths",
    author: "rd sharma",
    price: 700
})

book1.save().then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})