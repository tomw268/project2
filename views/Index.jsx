const React = require('react');



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
        const {WorkOut,Index} =this.props

        return (
            <>
            <h1>Workout Tracker</h1>
            <nav>
                <a href='/workout/new'>Add New Exercise</a>
            </nav>
            <div key={Index}>
                {
                WorkOut.map((WorkOut, Index) => {
                    
                    return (
                        <div key={Index}>
                           
                            <p>{WorkOut.Name}</p>

                             <button>< a href={`/workout/${Index}`}>See Workout Details</a></button>
                             <form action={`/delete/${Index}?_method=DELETE`}method='POST'>
                                 <input type="submit" value="delete" />
                             </form>
                        </div>
                    )
                    
                })}
            </div>
          



            </>


        )
    }
}

module.exports = Index;