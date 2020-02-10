import React from 'react';

class HeaderItem extends React.Component {

	constructor(props) {
        super(props);
    }
    renderIcon = () =>{
        let nameOfClass='header-icon';
        let iconContent = '▲';
        if(this.props.sortColumn == this.props.name){
            nameOfClass+=' header-icon--active';
            if(this.props.typeOfSort == 'DESC'){
                iconContent = '▼';
            }
        }
        return <span className={nameOfClass}>{iconContent}</span>;
    }
    render(){
    	let nameOfClass = 'gallery__header gallery__column--' + this.props.name;
    	return(
    		<label htmlFor={this.props.name} className={nameOfClass}>
    			{this.props.name}
                {this.renderIcon()}
    			<input className="header-input" 
                    id={this.props.name}
                  
    				name={this.props.name}
    				type="button" 
    				onClick={this.props.func}>
    			</input>
    		</label>
    	);
    }

}

export default HeaderItem;
