let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req,rest) => {
    Controllers.userController.getUsers(res);
})

router.get('/create',(req,res) => {
    Controllers.userController.createUser(req.body, res)
})

router.put('/:id',(req,res) => {
    Controllers.userController.updatedUser(req.res)
})

router.delete('/id:', (req,res) => {
    Controllers.userController.deleteUser(req,res)
})

module.exports = router;