import React from 'react';
class Description extends React.Component {
	constructor(props) {
        super(props);
    }

    render(){
    	let userName = this.props.data.firstName + ' ' + this.props.data.lastName;
    	let description = this.props.data.description;
    	let address = this.props.data.address.streetAddress;
    	let town = this.props.data.address.city;
    	let state = this.props.data.address.state;
    	let zip = this.props.data.address.zip;

    	return(
    		<div className="description">
    			<div className="description__item">
    				<span>Выбран пользователь:</span> {userName}
    		    </div>
    			<div className="description__item">
    				<span>Описание:</span> {description}
    		    </div>
    		    <div className="description__item">
    				<span>Адрес проживания:</span> {address}
    		    </div>
    		    <div className="description__item">
    				<span>Город:</span> {town}
    		    </div>
    		    <div className="description__item">
    				<span>Провинция/штат:</span> {state}
    		    </div>
    		    <div className="description__item">
    				<span>Индекс:</span> {zip}
    		    </div>
    		</div>

    	);
    }
}

export default Description;