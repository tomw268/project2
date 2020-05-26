//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
require('dotenv').config();
const db = mongoose.connection;
/////////Model Folder
const WorkOut = require('./models/workout');
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;
//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project2';
// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
db.on('open' , ()=>{});
//___________________
//Middleware
//___________________
//use public folder for static assets
app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
//////// 
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//___________________
// Routes
//___________________
//localhost:3000 
/// Test Root Route
app.get('/' , (req, res) => {
  res.send('Hello World!');
});

//// Index Route
app.get('/workout', (req,res) => {
    res.render('Index',{
        WorkOut: WorkOut
    })
});

////// New Route
app.get('/workout/new',(req,res) =>{
    res.render('New')
});

/// Create 
app.post('/workout', (req,res) =>{
    WorkOut.create(req.body, (error, createdWorkOut)=>{
        res.redirect('/workout')
    });
});


////seed Data
app.get('/workout/seed',(req,res) =>{
    WorkOut.create([
        {
    Exercise_Name: 'Squat',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRZxBtNbPG2f3h7r3IQl3Ooi6qji8MCWCPmsqZJUMvNtXU7JWX&usqp=CAU',
    Warm_up_weight: 135 ,
    Sets: 2,
    Reps: 10,
    Working_weight: 245,
    Working_sets: 3,
    Working_reps: 8

        },
        {
    Exercise_Name: 'Leg Press',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwQkNRfE_AirUp5bTfHVBoKG_MxjmwnEhD6zaoJJ1-vnNqldXm&usqp=CAU',
    Warm_up_weight: 225 ,
    Sets: 2,
    Reps: 10,
    Working_weight: 405,
    Working_sets: 3,
    Working_reps: 8

        },
        {
    Exercise_Name: 'Split Squat',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfdO3ge8EAmNk5P_XhBbzmyJnYZ0DQXiSjQ4D3qOsJP94pzR02&usqp=CAU',
    Warm_up_weight: 0 ,
    Sets: 2,
    Reps: 10,
    Working_weight: 25,
    Working_sets: 3,
    Working_reps: 8
            
        },
        {
    Exercise_Name: 'Bench Press',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQK19BzeQ1h2aHnE1TCsAGao0RyOUxEKXHmnpvd8tUC1TgV7sOs&usqp=CAU',
    Warm_up_weight: 135 ,
    Sets: 2,
    Reps: 10,
    Working_weight: 265,
    Working_sets: 3,
    Working_reps: 8

        },
        {
    Exercise_Name: 'Incline Bench Press',
    img:{},
    Warm_up_weight: 135 ,
    Sets: 2,
    Reps: 10,
    Working_weight: 225,
    Working_sets: 3,
    Working_reps: 8

        },
        {
    Exercise_Name: 'Chest Flyes',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmAau8EHdoF6sGkw-uK6Dn7ZYvjldFml0Q8J594pGsGKY0XGto&usqp=CAU',
    Warm_up_weight: 20 ,
    Sets: 2,
    Reps: 10,
    Working_weight: 35,
    Working_sets: 3,
    Working_reps: 8
        },
        {
    Exercise_Name: 'Chest Flyes',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmAau8EHdoF6sGkw-uK6Dn7ZYvjldFml0Q8J594pGsGKY0XGto&usqp=CAU',
    Warm_up_weight: 20 ,
    Sets: 2,
    Reps: 10,
    Working_weight: 35,
    Working_sets: 3,
    Working_reps: 8

        }

    ])
})






//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));