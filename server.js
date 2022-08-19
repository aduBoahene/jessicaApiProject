var express = require('express')
var bodyParser = require('body-parser')

const { sequelize, user, bookings } = require('./models')


var app = express()
app.use(express.json())

app.get("/hello", async (req, res) => {
    res.send("welcome")
})


app.post("/login", async (req, res) => {

    try {
        const { email, password } = req.body
        const userToLogIn = await user.findAll({
            where: {
                email
            }
        });
        if (userToLogIn === null) {
            res.json({ message: 'User Not found!' });
        } else {
            if (userToLogIn.password == password) {
                return res.json(userToLogIn)
            }
        }
        console.log("userToLogIn", userToLogIn)
        return res.json(userToLogIn)
    } catch (error) {
        res.status(500).json(error)
    }

})

app.post("/register", async (req, res) => {

    try {
        const { firstname, lastname, email, password } = req.body
        const newUser = await user.create({
            firstname, lastname, email, password
        })

        return res.json(newUser)
    } catch (error) {
        res.status(500).json(error)
    }

})


app.post("/book", async (req, res) => {
    try {
        const { userId,fullname, email, phone, numberOfPeople, bookDate, additionalNote } = req.body
        const booking = await bookings.create({
            userId,fullname, email, phone, numberOfPeople, bookDate, additionalNote
        })

        return res.json(booking)
    } catch (error) {
        res.status(500).json(error)
    }
})



app.listen({ port: 3030 }, async () => {
    console.log("firing on 3030")
    await sequelize.sync({ force: false, alter: true })
    console.log("database synced")
})