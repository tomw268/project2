const React = require('react');
const Layout = require('./components/Layout');



// class Index extends React.Component{
//     render(){
//         const {WorkOut} = this.props;
//         return(
//             <div>
//                 <h1>Your Fitness Tracker</h1>
//                 <nav>
//                     <button><a href ='/workout/new'>Add New Exercise</a></button>
//                 </nav>
//                 <>
//                 {WorkOut.map((workout,i)=>{
//                     return(
//                        <p>
//                            {WorkOut.Name}
//                        </p>
                            
                        
//                     )
//                 })}
//                 </>
//             </div>
//         )
//     }
// }



class Index extends React.Component{
    render(){
        const {WorkOut} =this.props

        return (
        
            < div className="p-3 mb-2 bg-success text-dark">
            <Layout> </Layout>
            <h1 className="text-center">Workout Tracker</h1>
           
            <nav>
                <a href='/workout/new'>Add New Exercise</a>
            </nav>
            <div>
                {
                WorkOut.map((WorkOut, index) => {
                    
                    return (
                        <div className="card">
                           <div className="card-body" className="text-capitalize"> 
                            <p className="card-title">{WorkOut.Name}</p>

                             <button>< a className="badge badge-primary text-wrap"href={`/workout/${index}`}>See Workout Details</a></button>

                              <button>
                                <a className="card-link" className="badge badge-primary text-wrap" href={`/workout/edit/${index}`}>Update Exercise Data</a>
                                </button>

                             <form className="badge badge-primary text-wrap" action={`/delete/${index}?_method=DELETE`}method='POST'>
                                 <input type="submit" value="delete" />
                             </form>
                             </div>
                        </div>
                    )
                    
                })}
            </div>

            </div>
           
            


        );
    };
};

module.exports = Index;