// //___________________
// //Dependencies
// //___________________
// const express = require('express');
// const methodOverride  = require('method-override');
// const mongoose = require ('mongoose');
// const app = express ();
// require('dotenv').config();
// const db = mongoose.connection;
// const show = console.log;
// /////////Model Folder
// const WorkOut = require('./models/workout.js');
// //___________________
// //Port
// //___________________
// // Allow use of Heroku's port or your own local port, depending on the environment
// const PORT = process.env.PORT || 3000;
// //___________________
// //Database
// //___________________
// // How to connect to the database either via heroku or locally
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project2';
// // Connect to Mongo
// mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });
// // Error / success
// db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
// db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
// db.on('disconnected', () => console.log('mongo disconnected'));
// // open the connection to mongo
// db.on('open' , ()=>{});
// //___________________
// //Middleware
// //___________________
// //use public folder for static assets
// app.use(express.static('public'));
// // populates req.body with parsed info from forms - if no data from forms will return an empty object {}
// app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
// app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
// //use method override
// app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
// //////// 
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());

// //___________________
// // Routes
// //___________________
// //localhost:3000 
// /// Test Root Route
// app.get('/' , (req, res) => {
//   res.send('Hello World!');
// });

// //// Index Route
// app.get('/workout', (req,res) => {
//     res.render('Index',{
//         WorkOut
//     })
// });

// ////// New Route
// app.get('/workout/new',(req,res) =>{
//     res.render('New')
// });

// ////Show Route
// app.get('/workout/:id',(req,res) => {
//     // res.send(WorkOut[req.params.indexOfWorkOutArray]);
 
//     res.render('Show',{
//         WorkOut: WorkOut[req.params.index],
//         index:req.params
//     });
   
// });

/// Create 
app.post('/workout', (req,res) =>{
    req.body = WorkOut.length + 1
    WorkOut.push(req.body);
    res.redirect('/workout')
    // WorkOut.create(req.body, (error, createdWorkOut)=>{
    //     res.redirect('/workout')
    // });
});

// //// Edit Route
// app.get('/workout/:index/edit', (req,res)=>{
//     res.render('Edit', {
//         WorkOut: WorkOut[req.params.index],
//         index:req.params.index
//     });
// });

// //// Update Route
// app.put('/workout/:index',(req,res)=>{
//     const {index} = req.params
//     req.body.id = WorkOut[index].id
//     WorkOut[index]=req.body
//     res.redirect('/workout')
// });

// /////// Delete Route
// app.delete('/delete/:index', (req,res)=>{
//     WorkOut.splice(req.params.index,1)
//     res.redirect('/workout')
// });





// //___________________
// //Listener
// //___________________
// app.listen(PORT, () => console.log( 'Listening on port:', PORT));