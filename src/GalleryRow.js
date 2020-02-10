import React from 'react';
import {HEADERS} from './GlobalValues';

class GalleryRow extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render(){
    	console.log('test');
    	return(
    		<li className="gallery__row" onClick={this.props.showDescription}>
    			<div className="gallery__column--id gallery__cell">{this.props.id}</div>
    			<div className="gallery__column--firstName gallery__cell">{this.props.firstName}</div>
    			<div className="gallery__column--lastName gallery__cell">{this.props.lastName}</div>
    			<div className="gallery__column--email gallery__cell">{this.props.email}</div>
    			<div className="gallery__column--phone gallery__cell">{this.props.phone}</div>
    		</li>
    	);
    }
}

export default GalleryRow;