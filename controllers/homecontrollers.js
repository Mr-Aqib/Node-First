const getdata= (req,res) =>
{
    res.send("Welcome to my Node.js server")
}
const deletedata= (req,res) =>
{
    const test = req.params.id
    res.send(`Working on Port ${process.env.PORT} with id ${test}`)
}
module.exports = {
    getdata,
    deletedata,  // exporting the two functions
}