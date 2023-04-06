
require("dotenv").config()
const express = require("express")
const blogsSchema = require("./src/model/blogschema")
const app = express()
const cors = require('cors')
const connecDB = require("./src/db/connect")

const routes = require('./src/routes/index')

const PORT = process.env.PORT || 5000

app.use(cors());

app.get("/", async (req, res) => {
    res.send("I'm live")
})

app.use('/blogpost', routes)

app.use(express.json())

//! Adding Data
app.post("/blogpost", async (req, res) => {
    try {
        const addData = new blogsSchema(req.body)
        addData.save()
        console.log(req.body);

    } catch (error) {
        console.log(error);
    }
})


//! Find indviv
app.get("/blogpost/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const findData = await blogsSchema.findById(_id)
        res.send(findData)

    } catch (error) {
        console.log(error);
    }
})


//! Update Data
app.patch("/blogpost/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const updateData = await blogsSchema.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(updateData)

    } catch (error) {
        console.log(error);
    }
})


//! Delete Data
app.delete("/blogpost/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const deleteData = await blogsSchema.findByIdAndDelete(_id)
        res.send(deleteData)

    } catch (error) {
        console.log(error);
    }
})


const start = async () => {
    try {
        await connecDB(process.env.MONGOBD_URI)
        app.listen(PORT, () => {
            console.log(`Connected at ${PORT}`);
        })

    } catch (error) {
        console.log(error);
    }

}

start()