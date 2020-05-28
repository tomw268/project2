const React = require('react');
const Layout = require('./components/Layout');


class Edit extends React.Component{
    render(){
        const {WorkOut, Index} = this.props;
        return(
            <div key={Index}>
                <Layout></Layout>
                <h1>Edit Exercise Data</h1>
                <form action={`/update/${Index}?_method=put`}method='POST'>
                    <input type='text' name='Name' value={WorkOut.Name} /><br/>

                    <input type='url' name='img' value={WorkOut.img}/><br/>

                    <input type='number' name='Warm_up_weight' value={WorkOut.Warm_up_weight} /><br/>

                    <input type='number' name='Sets' value={WorkOut.Sets}/><br/>

                    <input type='number' name='Reps' value={WorkOut.Reps} /><br/>

                    <input type='number' name='Working_weight' value={WorkOut.Working_weight}/><br/>

                    <input type='number' name='Working_sets' value={WorkOut.Working_sets} /><br/>

                    <input type='number' name='Working_reps' value={WorkOut.Working_reps}/><br/>

                    <input type='submit' name='' value='Update Exercise Data'/>

                </form>
            </div>
        )
    }
}









module.exports = Edit;