const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    Exercise_Name: {type: String},
    img:{},
    Warm_up_weight: {type: Number},
    Sets: {type: Number},
    Reps: {type: Number},
    Working_weight: {type: Number},
    Working_sets: {type: Number},
    Working_reps: {type: Number}

});

/// create workout model from my schema
const WorkOut = mongoose.model('WorkOut', workoutSchema);

/// Export Workout model
module.exports = WorkOut;