const express = require("express")
const fs = require("fs")

const server = express()
server.use(express.json())

server.get("/", (req, res) => {
    fs.readFile("db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("error read data !")
            return
        }
        const users = JSON.parse(data).users
        res.send(users)
    })
})

server.post("/", (req, res) => {
    fs.readFile("db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("Error to read file")
            return
        }

        const users = JSON.parse(data).users
        const newUser = { id: Date.now(), ...req.body }
        users.push(newUser)

        fs.writeFile("db.json", JSON.stringify({ users }), (err) => {
            if (err) {
                res.status(500).send("Error to write file")
                return
            }
            res.status(201).send({ msg: "Post added", user: newUser })
        })
    })
})

server.put("/:id", (req, res) => {
    fs.readFile("db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("file reading error!")
            return
        }

        const users = JSON.parse(data).users
        const userIndex = users.findIndex(user => user.id == req.params.id)

        if (userIndex === -1) {
            res.status(404).send("User not found!")
            return
        }

        users[userIndex] = { id: Number(req.params.id), ...req.body }

        fs.writeFile("db.json", JSON.stringify({ users }), (err) => {
            if (err) {
                res.status(500).send("Error writing file")
                return
            }
            res.send(users[userIndex])
        })
    })
})
server.delete("/:id", (req, res) => {
    fs.readFile("db.json", "utf-8", (err, data) => {
        if (err) return res.status(500).send("file reading error!")

        let users
        try {
            users = JSON.parse(data).users || []
        } catch {
            return res.status(500).send("Invalid JSON")
        }

        const filteredUser = users.filter(user => user.id != req.params.id)

        if (filteredUser.length === users.length)
            return res.status(404).send("User not found")

        fs.writeFile("db.json", JSON.stringify({ users: filteredUser }, null, 2), err => {
            if (err) return res.status(500).send("Error writing file")
            res.send("User deleted successfully")
        })
    })
})

server.listen(3000, () => {
    console.log("server is running")
})
