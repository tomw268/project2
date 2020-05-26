const React = require('react');

class New extends React.Component {
    render(){
        return (
            <div>
                <h1>New Exercise</h1>
                <form action='/workout' method='POST'>
                    Exercise Name: <input type='text' name='exercise name'/><br/>
                    img: <input type='url' name='img'/><br/>
                    Warm up weight: <input type='number' name='warmup'/><br/>
                    Sets: <input type='number' name='sets'/><br/>
                    Reps: <input type='number' name='reps'/><br/>
                    Working weight: <input type='number' name='workingweight'/><br/>
                    Working Sets:<input type='number' name='workingsets'/><br/>
                    Working Reps: <input type='number' name='workingreps'/><br/>
                    

                </form>
            </div>
        )
    }
}

module.exports = New;