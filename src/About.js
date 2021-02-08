import React from 'react'

class About extends React.Component {


    constructor() {
        super();
        // this.state = {
        //     name:'Darshan',
        //     age:28
        // }

        
    }

    componentDidMount() {
        console.warn('props: ',this.props.name);
        
    }

    componentDidUpdate() {
        console.warn('props in update ',this.props.name);
        //alert("Name and age are updated");
    }

    render() {
        console.warn("render called");
        return(<div>
            <h1>About us class component.</h1>
            {/* <h2>Developer Name : {this.state.name}</h2>
            <h3>developer Age: {this.state.age}</h3>
            <button onClick={()=>{this.setState({name:'Darshan Chauhan', age:25})}}>Update</button> */}
            <h2>{this.props.name}</h2>
        </div>)
    }

}

export default About;

// constructor() {

// }
// componentDidMount() {

// }

// componentDidUpdate() {

// }

// componentWillunmount() {

// }
