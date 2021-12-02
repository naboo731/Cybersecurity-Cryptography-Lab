const users = []

const bcrypt = require("bcryptjs")

module.exports = {
    login: (req, res) => {
      console.log("Logging in user")
      const { username, password } = req.body
        for (let i = 0; i < users.length; i++) {
         if (users[i].username === username){
          const existingUser = bcrypt.compareSync(password, users[i].passwordHash)
             if (existingUser) {
              let userReturn = {...users[i]}
              delete userReturn.passwordHash
              res.status(200).send(userReturn)
              return
        }
      }
    }
      res.status(400).send("User not found.")
    },


    register: (req, res) => {
        const {username, email, firstName, lastName, password} = req.body
        const salt = bcrypt.genSaltSync(5)
        const passwordHash = bcrypt.hashSync(password, salt)
        let userObj = {
          username,
          email,
          firstName,
          lastName,
          passwordHash
        }

      users.push(userObj)
      const userReturn = {...userObj}
      delete userReturn.passwordHash
      res.status(200).send(userReturn)
    }
}