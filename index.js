const express = require("express")
const cors = require("cors")
const db = require("./db")

const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())
db()

app.use("/", require("./routes/Auth"))
app.use("/", require("./routes/Resume"))

app.get("/", (req, res)=>{
    res.send("HomePage")
})

app.listen(PORT, ()=>{
    console.log("App is running on", PORT);
})