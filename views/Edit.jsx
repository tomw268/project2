const React = require('react');


class Edit extends React.Component{
    render(){
        const {WorkOut, index} = this.props;
        return(
            <div>
                <h1>Edit Exercise Data</h1>
                <form action={`/update/${index}?_method=PUT`} method='POST'>
                    Name: <input type='text' name='Name' value={WorkOut.Name}/><br/>
                    img: <input type='url' name='img' value={WorkOut.img}/><br/>
                    Warm up weight: <input type='number' name='Warm_up_weight' value={WorkOut.Warm_up_weight}/><br/>
                    Sets: <input type='number' name='Sets'value={WorkOut.Sets}/><br/>
                    Reps: <input type='number' name='Reps' value={WorkOut.Reps}/><br/>
                    Working weight: <input type='number' name='Working_weight' value={WorkOut.Working_weight}/><br/>
                    Working Sets:<input type='number' name='Working_sets' value={WorkOut.Working_sets}/><br/>
                    Working Reps: <input type='number' name='Working_reps' value={WorkOut.Working_reps}/><br/>
                    <input type='submit' name='' value='Update Exercise Data'/>

                </form>
            </div>
        )
    }
}









module.exports = Edit;