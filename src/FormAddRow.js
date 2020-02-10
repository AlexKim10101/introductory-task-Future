import React from 'react';
class FormAddRow extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
        	visible: false,
        	contentShowBtn: 'Добавить',
        	id:'',
        	firstName:'',
        	lastName:'',
        	email:'',
        	phone:'',
        	disabled: false,

        }
        this.showForm=this.showForm.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    showForm(){
    	if(this.state.visible){
    		this.setState({
    			visible: false,
    			contentShowBtn: 'Добавить',
    		})
    	} else{
    		this.setState({
    			visible: true,
    			contentShowBtn: 'Скрыть',
    		})
    	}
    }

    handleChange(event) {
    	const target = event.target;
    	const value = target.value;
    	const name = target.name;
    	this.setState({[name]: value});
  	}

    render(){
    	return(
    		<div className="addForm-wrapper">
    			<button className="button--showAddForm" onClick={this.showForm}>{this.state.contentShowBtn}</button>

	    		{this.state.visible ?
	    			<form 
	    				onSubmit={this.props.addRow}
	    				data-id={this.state.id} 
	    				data-firstName={this.state.firstName} 
	    				data-lastName={this.state.lastName} 
	    				data-email={this.state.email} 
	    				data-phone={this.state.phone}>
		    			<input type="text" placeholder='id' name="id" onChange={this.handleChange} value={this.state.id}></input>
		    			<input type="text" placeholder='firstName' name="firstName" onChange={this.handleChange} value={this.state.firstName}></input>
		    			<input type="text" placeholder='lastName' name="lastName" onChange={this.handleChange} value={this.state.lastName}></input>
		    			<input type="text" placeholder='e-mail' name="email" onChange={this.handleChange} value={this.state.email}></input>
		    			<input type="text" placeholder='phone' name="phone" onChange={this.handleChange} value={this.state.phone}></input>
		    			<input className="button--pushData" type="submit" value="Добавить" disabled={!(this.state.id&&this.state.firstName&&this.state.lastName&&this.state.email&&this.state.phone)}></input>

	    			</form> : null
    		}
    		
    		</div>
    	)

    }
}

export default FormAddRow;