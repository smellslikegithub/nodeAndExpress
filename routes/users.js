const express = require('express');
const router = express.Router();

// Root Page
router.get('/', (req, res, next) => {
    res.send("Root page For the users!");
    next();
});

// Resgister 
router.post('/Register', (req, res, next) => {
    res.send("You are in the user registration page");
    next();
});

// Authenticate
router.post('/authenticate', (req, res, next)=>{
    res.send("Authenticate");
});

//Profile needs Authentication
router.get('/profile', (req, res, next) => {
    res.send("profile")
});


router.get('/db' , async (req,res,next) => {
    try{
        console.log("Working");
        res.send("Working");
    }catch(err){
        next(err);
    }
});

module.exports = router;