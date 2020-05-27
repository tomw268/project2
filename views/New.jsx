const React = require('react');

class New extends React.Component {
    render(){
        return (
            <>
                <h1>Add New Exercise</h1>
                <div>
                <form action='/create' method='POST'>
                    <input type='text' name='Name' placeholder='Name'/><br/>
                    <input type='url' name='img' placeholder='Image URL'/><br/>
                    <input type='number' name='Warm_up_weight' placeholder='Warm Up Weight'/><br/>
                    <input type='number' name='Sets' placeholder='Warm Up Sets'/><br/>
                    <input type='number' name='Reps' placeholder='Warm Up Reps'/><br/>
                    <input type='number' name='Working_weight' placeholder='Working Weight'/><br/>
                    <input type='number' name='Working_sets' placeholder='Working Sets'/><br/>
                    <input type='number' name='Working_reps' placeholder='Working Reps'/><br/>
                    <input type='submit' name='' value='Add New Exercise'/>
                    

                </form>
            </div>
            </>
        )
    }
}

module.exports = New;