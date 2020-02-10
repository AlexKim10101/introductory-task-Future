import React from 'react';


class Modal extends React.Component {

	constructor(props) {
        super(props);
    }

    render(){
    	return(
    		<div className="modal-wrapper">
    			<div className="modal">
    				<div className="modal__content">Выберите объем данных</div>
    				<div className="buttons-wrapper">
    					<input type="button" value="Big data" className="modal__button" onClick={this.props.choiseViewOfData}></input>
    					<input type="button" value="Small data" className="modal__button" onClick={this.props.choiseViewOfData}></input>
    				</div>
    				
    			</div>
    		</div>
    	)
    }
}

export default Modal;