import React from 'react';

import HeaderItem from'./HeaderItem';
import {HEADERS} from './GlobalValues';



class GalleryHeaders extends React.Component {

	constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderHeaders = () => {
    	let list = null;
    	let typeOfSort = this.props.typeOfSort;
    	let sortColumn = this.props.sortColumn;
    	let func = this.props.func;
    	list = HEADERS.map(function(item, index){
    		return <HeaderItem
    			key={index} 
    			name={item} 
    			typeOfSort={typeOfSort}
    			sortColumn={sortColumn}
    			func={func}
    		/>
    	})
    	return list;
    }

    render(){
    	return(
    		<li className="gallery__row">
    			{this.renderHeaders()}
    			
    		</li>
    	)
    }
}


export default GalleryHeaders;