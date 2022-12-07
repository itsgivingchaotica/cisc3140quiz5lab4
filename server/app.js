const express  = require("express")
const putSquirrel  = require("./dynamo").putSquirrel
const getAllSquirrels = require("./dynamo").getAllSquirrels
const getSquirrelById = require("./dynamo").getSquirrelById
const updateSquirrel = require("./dynamo").updateSquirrel
const deleteSquirrel = require("./dynamo").deleteSquirrel
const app = express()
const cors = require("cors");

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended: true}))

const port = process.env.port || 8080

//all of the express routes will go in here

app.get("/", (req,res)=>{
    res.status(200)
    res.write("Welcome To The BCSquirrels API")
    res.end()
})

app.get("/squirrels", async (req,res) =>{
    const data  = await getAllSquirrels()
    res.json(data.Items)
    res.end()
})

app.get("/squirrels/:id", async (req,res) => {
    const data = await getSquirrelById(req.params.id)
    //console.log(req.params.id)
    res.json(data)
    res.end()
})

app.post("/squirrels", async (req,res) => {
    try{
        // const squirrel = {
        // squirrel_id: req.body.squirrel_id,
        // age: req.body.age,
        // country: req.body.country, 
        // active_time: req.body.active_time,
        // loc_quad: req.body.loc_quad,
        // loc_building: req.body.loc_buiding,
        // size: req.body.size,
        // gender: req.body.gender,
        // };
        // // const squirrel_id = req.body.squirrel_id
        // // const age = req.body.age
        // // const country = req.body.country
        // // const active_time = req.body.active_time
        // // const loc_quad = req.body.loc_quad
        // // const loc_building = req.body.loc_buiding
        // // const size = req.body.size
        // // const gender = req.body.gender
        // // const squirrel = "";
        const squirrel = req.body
        const newSquirrel = await putSquirrel(squirrel)
        res.json(newSquirrel)
        res.end()
    }
    catch(err){
        console.log(err)
        res.status(500).json({err: "something broke, check request"})
    }
   
})

app.put("/squirrels", async (req,res) => {
    try {
        const squirrel = req.body
        const updatedSquirrel = await updateSquirrel(squirrel)
        res.json(updatedSquirrel)
        res.end()

    }
    catch(err) {
        console.log(err)
        res.status(500).json({err: "not valid, check request"})
    }
})

app.delete("/squirrels", async (req, res) => {
    try {
        const squirrel = req.body
        const deletedSquirrel = await deleteSquirrel(squirrel)
        res.json(deletedSquirrel)
        res.end()
    }
    catch(err) {
        console.log(err)
        res.status(500).json({err: "not valid, check request"})
    }
})

app.listen(port, ()=>{
    console.log("listening on " + port)
})