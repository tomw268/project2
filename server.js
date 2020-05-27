//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
require('dotenv').config();
const db = mongoose.connection;
const show = console.log;
/////////Model Folder
const WorkOut = require('./models/workout.js');
//Port
//___________________

const PORT = process.env.PORT || 3000;
//___________________
//Database
//___________________

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project2';

mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on('open' , ()=>{});
//___________________
//Middleware
//___________________

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


////// Routes
/////Index
app.get('/workout',(req,res)=>{
    
    res.render('Index',{WorkOut})
});
//             const props ={
//                 workout:allWorkouts
//             }
//         res.render('Index', props)
//     }

// );





////////////New

app.get('/workout/new', (req,res) =>{
    res.render('New')
})



///////////Create

app.post('/create', (req,res) =>{
    req.body.id = WorkOut.length + 1
    WorkOut.push(req.body);
    res.redirect('/workout')

});




/////////////Show
app.get('/workout/:index',(req,res)=>{
    res.render('Show', {
        WorkOut: WorkOut[req.params.index]
    })
     
})


///////////////Edit
app.get('/edit/:index',(req,res)=>{
    res.render('Edit',{
        WorkOut: WorkOut[req.params.index],
        index:req.params.index
    });
});







//////////Update
app.put('/update/:index', (req,res) =>{
    const {index} = req.params
    req.body.id = WorkOut[index].id
    WorkOut[index]=req.body;
    res.redirect('/workout')

});




/////////////Destroy
app.delete('/delete/:index', (req,res)=>{
    WorkOut.splice(req.params.index,1)
    res.redirect('/workout')
});











//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));