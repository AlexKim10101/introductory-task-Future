import React from 'react';
import Gallery from './Gallery';
import Modal from './Modal';
import {ADDRESS} from './GlobalValues';

class Main extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
        	choiseIsDone: false,
        	viewOfData:'',
        }
        this.choiseViewOfData = this.choiseViewOfData.bind(this);
    }

    choiseViewOfData(event){
    	event.preventDefault();
    	let url;
    	if(event.target.getAttribute('value') == 'Big data'){
    		url = ADDRESS['BIG_DATA_ADDRESS'];
    	}
    	if(event.target.getAttribute('value') == 'Small data'){
    		console.log('fgfg');
    		url = ADDRESS['SMALL_DATA_ADDRESS'];
    	}
    	this.setState({
    		choiseIsDone: true,
        	viewOfData: url,
    	});
    }

    render() {
    	if(this.state.choiseIsDone) {
    		return (
            	<Gallery url={this.state.viewOfData}/>
        	);
    	} else{
    		return(
    			<Modal choiseViewOfData={this.choiseViewOfData}/>
    		)
    	}
        
    }
}


export default Main;