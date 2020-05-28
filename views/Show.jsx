const React = require('react');
const Layout = require('./components/Layout');

class Show extends React.Component {
    render(){
        const {WorkOut} = this.props
        return(
            
            <div>
                <Layout></Layout>
                <h1>Exercise Details</h1>
                <h2>{WorkOut.Name}</h2> 
                <img src={WorkOut.img}/>
                <h2>Last Session Info</h2>
                <h3>Warm up Info</h3>
                <ul> 
                    <li>Warm up weight: {WorkOut.Warm_up_weight} lbs</li>
                     <li>{WorkOut.Sets} sets for {WorkOut.Reps} reps </li>
                </ul> 
                <h3>Working Sets Info</h3>
                <ul>
        <li>Working weight: {WorkOut.Working_weight} lbs</li>
        <li>{WorkOut.Working_sets} sets for {WorkOut.Working_reps} reps</li>
                </ul>
                {/* <button>
                    <a href={`/edit/${index}`}>Update Exercise Data</a>
                    </button> */}
                <button>
                    <a href='/workout'>Back to Main Page</a>
                </button>
            </div>
            
           
        )
    }
}
 
module.exports = Show;