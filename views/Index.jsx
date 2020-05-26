const React = require('react');



class Index extends React.Component{
    render(){
        const {WorkOut} =this.props

        return (
            <>
            <h1>Workout App Title</h1>
            <nav>
                <a href='/workout/new'>Add New Exercise</a>
            </nav>
            <ul>
                {WorkOut.map(() => {
                    return (
                        <li></li>
                    )
                })}
            </ul>



            </>


        )
    }
}