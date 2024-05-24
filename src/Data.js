import React from "react"

class Data extends React.Component{
	constructor(){
		super()
		this.state = {
			count:false
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.setState(prevState =>{
			return{
				count: !prevState.count
				}
		})
	}
	render(){
		let choosed
		if (this.state.count){
			choosed = "Dislike"
		}
		else{
			choosed = "Like"
		}
		return(
		    <div className="Data-item">
		      <h1>Name: {this.props.data.name}</h1>
		      <h3>Passion: {this.props.data.passion}</h3>
		      <button onClick={this.handleClick}> {choosed}</button>
		    </div>
		    )
	}
}
export default Data;
