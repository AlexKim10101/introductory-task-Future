import React from 'react';

class FormSearch extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            value: this.props.search,
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
    	this.setState({value: event.target.value});
  	}

    render(){
    	return(
    		<form className="searchForm" onSubmit={this.props.findThis} value={this.state.value}>
        		<input type="text" value={this.state.value} onChange={this.handleChange}></input>
        		<input type="submit" value="Найти"></input>
        	</form>
    	)	
    }
}

export default FormSearch;