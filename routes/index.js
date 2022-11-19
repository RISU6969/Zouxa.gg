const express = require('express');
const router  = express.Router();
const {ensureAuthenticated} = require('../config/auth') 
//login page
router.get('/', (req,res)=>{
    res.render('welcome');
})
//register page
router.get('/register', (req,res)=>{
    res.render('register');
})
router.get('/dashboard',ensureAuthenticated,(req,res)=>{
    res.render('dashboard',{
        user: req.user
    });
})
router.get('/info', (req,res)=>{
    res.render('info');
})
router.get('/signin', (req,res)=>{
    res.render('signin');
})
router.get('/test', (req,res)=>{
    res.render('test');
})
router.get('/test2', (req,res)=>{
    res.render('test2');
})
router.get('/commands/slashcommands', (req,res)=>{
    res.render('slashcommands');
})
module.exports = router; 