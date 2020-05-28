const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const workoutSchema = new Schema({
//     Exercise_Name: {type: String},
//     img:{},
//     Warm_up_weight: {type: Number},
//     Sets: {type: Number},
//     Reps: {type: Number},
//     Working_weight: {type: Number},
//     Working_sets: {type: Number},
//     Working_reps: {type: Number}

// });

// /// create workout model from my schema
// const WorkOut = mongoose.model('WorkOut', workoutSchema);

// // // Export Workout model
// module.exports = WorkOut;



WorkOut = [
{
    
    Name: 'Squat',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRZxBtNbPG2f3h7r3IQl3Ooi6qji8MCWCPmsqZJUMvNtXU7JWX&usqp=CAU',
    Warm_up_weight: 135 ,
    Sets: 2,
    Reps: 10,
    Working_weight: 245,
    Working_sets: 3,
    Working_reps: 8

        },
        {
    Name: 'Leg Press',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwQkNRfE_AirUp5bTfHVBoKG_MxjmwnEhD6zaoJJ1-vnNqldXm&usqp=CAU',
    Warm_up_weight: 225 ,
    Sets: 2,
    Reps: 10,
    Working_weight: 405,
    Working_sets: 3,
    Working_reps: 8

        },
        {
    Name: 'Split Squat',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfdO3ge8EAmNk5P_XhBbzmyJnYZ0DQXiSjQ4D3qOsJP94pzR02&usqp=CAU',
    Warm_up_weight: 0 ,
    Sets: 2,
    Reps: 10,
    Working_weight: 25,
    Working_sets: 3,
    Working_reps: 8
            
        },
        {
    Name: 'Bench Press',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQK19BzeQ1h2aHnE1TCsAGao0RyOUxEKXHmnpvd8tUC1TgV7sOs&usqp=CAU',
    Warm_up_weight: 135 ,
    Sets: 2,
    Reps: 10,
    Working_weight: 265,
    Working_sets: 3,
    Working_reps: 8

        },
        {
    Name: 'Incline Bench Press',
    img:{},
    Warm_up_weight: 135 ,
    Sets: 2,
    Reps: 10,
    Working_weight: 225,
    Working_sets: 3,
    Working_reps: 8

        },
        {
    Name: 'Chest Flyes',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmAau8EHdoF6sGkw-uK6Dn7ZYvjldFml0Q8J594pGsGKY0XGto&usqp=CAU',
    Warm_up_weight: 20 ,
    Sets: 2,
    Reps: 10,
    Working_weight: 35,
    Working_sets: 3,
    Working_reps: 8
        },
        {
    Name: 'Lat Pull Down',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWUU_62XiIBCvbVzTkeb5JmoJW7qWKXPWPz2hBZf9WFqk0tcY8&usqp=CAU',
    Warm_up_weight: 100 ,
    Sets: 2,
    Reps: 10,
    Working_weight: 170,
    Working_sets: 3,
    Working_reps: 8

        },
        
        {
    Name: 'Cable Seated Row',
    img:{},
    Warm_up_weight: 100 ,
    Sets: 2,
    Reps: 10,
    Working_weight: 170,
    Working_sets: 3,
    Working_reps: 8

        },
        {
    Name: 'Pull Up',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQJzDcBehY_C1jyhSLzc7P5_00ooLzN_R6qtPA0mFhhZ5Ths_N&usqp=CAU',
    Warm_up_weight:0 ,
    Sets: 2,
    Reps: 10,
    Working_weight: 0,
    Working_sets: 3,
    Working_reps: 8
        }
]
// // Export Workout model
module.exports = WorkOut;
        