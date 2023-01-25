import React from "react";
    class Productos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data

    }
}
componentDidMount(){
    console.log("inicio")
    fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    this.setState({productos:data})

    })
    .catch(error => {
    console.log(error)
    });
    
}
render(){
    return(<div></div>)
}

}
export default Productos