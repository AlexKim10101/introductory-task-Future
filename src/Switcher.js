
import React from 'react';

class Switcher extends React.Component {
	constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="switcher">
                <label className="switcher__button">
                    ◄
                    <input className="switcher-input" type="button" onClick={this.props.leftClick}></input>
                </label>
                {this.props.currentPage}/{this.props.allPages}
                <label className="switcher__button">
                    ►
                    <input className="switcher-input" type="button" onClick={this.props.rightClick}></input>
                </label>
            </div>
        )
    }
}

export default Switcher;