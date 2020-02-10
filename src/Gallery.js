import React from 'react';
import Description from './Description';
import GalleryHeaders from './GalleryHeaders';
import GalleryRow from './GalleryRow';
import Switcher from './Switcher';
import FormSearch from './FormSearch';
import FormAddRow from './FormAddRow';

import {HEADERS} from './GlobalValues';
import {NUMBER_VISIBLE_ROWS} from './GlobalValues';



class Gallery extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            galleryItems: [],
            pages: 0,
            currentPage: 1,
            selectItem: null,
            sort: 'NOT_ACTIVE',
            sortColumn: '',
            search: '',
            searchResult: null,
            isLoading: false,
        }
        this.sortGalleryItems = this.sortGalleryItems.bind(this);
        this.showDescription = this.showDescription.bind(this);
        this.changeGalleryPage = this.changeGalleryPage.bind(this);
        this.findThis = this.findThis.bind(this);
        this.addRow = this.addRow.bind(this);

    }

    componentDidMount = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.props.url, true); 
        xhr.send();
        this.setState({ isLoading: true })
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return false;
            }
            if (xhr.status !== 200) {
                console.log(xhr.status + ': ' + xhr.statusText)
            } else {
            	let data = JSON.parse(xhr.responseText);
            	let pages = Math.ceil(data.length/NUMBER_VISIBLE_ROWS);
            	let dataWithVisibilityField = data.map(function(item){
            		item.visibility=true;
            		return item;
            	});

                this.setState({
                    galleryItems: dataWithVisibilityField,
                    pages: pages,
                    sort: 'NOT_ACTIVE',
            		sortColumn: '',
                    isLoading: false, 
                })
            }
        }
    }

    sortGalleryItems(event){
   
    	let columnName = event.target.name;
    	let sortArr = [];
    	let sort = 'ASC';
    	let copyArr = this.state.galleryItems.slice();
    

    	if((columnName == this.state.sortColumn)&&(this.state.sort == 'ASC')){
    		sortArr = copyArr.reverse();
    		sort = 'DESC';
    	}

    	if((columnName == this.state.sortColumn)&&(this.state.sort == 'DESC')){
    		sortArr = copyArr.reverse();
    		sort = 'ASC';
    	} 

    	if(columnName !== this.state.sortColumn){
    		sortArr = copyArr.sort(function(a, b){
	    		if (a[columnName] > b[columnName]) {
	    			return 1;
	  			}
	  			return -1;
    		});
    	}
    	
    	this.setState({
    		galleryItems: sortArr,
    		sort: sort,
            sortColumn: columnName,
            currentPage:1,
    	})
    }


    showDescription(index){
    	console.log(index);
    	this.setState({
    		selectItem: this.state.galleryItems[index],
    	})
    }

    changeGalleryPage(value){
    	let result = +this.state.currentPage + value;
    	result = (result == 0)? this.state.pages : result;
    	result = (result > this.state.pages)? 1 : result;

    	this.setState({
    		currentPage: result,
    	})
    }

    addRow(event){
    	event.preventDefault();
    	let id = event.target.getAttribute('data-id');
    	let firstName = event.target.getAttribute('data-firstName');
    	let lastName = event.target.getAttribute('data-lastName');
    	let email = event.target.getAttribute('data-email');
    	let phone = event.target.getAttribute('data-phone');
    	let newUser = {
    		id: id,
    		firstName: firstName,
    		lastName: lastName,
    		email: email,
    		phone: phone,
    		address: {
    			streetAddress: '',
				city: '',
				state: '',
				zip: ''
    		},
    		description:'',
    		visibility: true,
    	}
    	let newGalleryItems = [newUser].concat(this.state.galleryItems);
    	console.log(newGalleryItems);
    	this.setState({
    		galleryItems: newGalleryItems,
    		pages: Math.ceil(newGalleryItems.length/NUMBER_VISIBLE_ROWS),
    		currentPage: 1,
            selectItem: null,
            sort: 'NOT_ACTIVE',
            sortColumn: '',
    	})

    }

    findThis(event){
    	event.preventDefault();
    	let value = event.target.getAttribute('value');
    	let searchResult = [];
    	let pages;
    	console.log(Boolean(value));
    	if(!value){
    		searchResult = this.state.galleryItems.map(function(item){
    			item.visibility = true;
    			return item;
    		})

    	} else{
    		let visibleRow = 0;
    		searchResult = this.state.galleryItems.map(function(item){
    			let isVisible = false;
    			for (let key of HEADERS){
    				if(String(item[key]).toLowerCase().includes(String(value).toLowerCase())){
    					isVisible = true;
    				}
    			}
    			if(isVisible){
    				visibleRow++;
    			}
    			item.visibility = isVisible;
    			return item;
    		})
    		pages = Math.ceil(visibleRow/NUMBER_VISIBLE_ROWS);
    		console.log('visibleRow',visibleRow);
    		console.log('pages',pages);

    	}

    	pages = pages ? pages : Math.ceil(searchResult.length/NUMBER_VISIBLE_ROWS);

    	this.setState({
    		galleryItems:searchResult,
    		pages: pages,
    		currentPage: 1,
    	});
   
    }

    renderGalleryRows = () =>{
        let list = null;
        let position = 0;
        let showDescription = this.showDescription;
        let currentPage = this.state.currentPage;

        list = this.state.galleryItems.map(function(item, index){
        	if(item.visibility==true){
        		position++;
        		if(Math.ceil(position/NUMBER_VISIBLE_ROWS) == currentPage){
        			return <GalleryRow 
			            key={index}
			            id={item.id} 
			            firstName={item.firstName}
			            lastName={item.lastName}
			            email={item.email}
			            phone={item.phone}
			            address={item.address}
			            description={item.description}
			            showDescription={()=>{showDescription(index)}}
		            />
        		}
        	}

        })
        if (position==0){
        	list = <div>ничего не найдено</div>
        }
        return list;
    }

    render() {

    	if(this.state.isLoading){
    		return(
    			<React.Fragment>
    				<div className="preloader preloader--circle"></div>
    				<div className="preloader">LOADING</div>
    			</React.Fragment>

    		);

    	} else{
    		return (
	        	<div className="gallery-wrapper">
	        		<FormAddRow addRow={this.addRow}/>

	        		<FormSearch value={this.state.value} findThis={this.findThis}/>

	            	<Switcher 
	            		rightClick={()=>{this.changeGalleryPage(1)}} 
	            		leftClick={()=>{this.changeGalleryPage(-1)}}
	            		currentPage={this.state.currentPage}
	            		allPages={this.state.pages}
	            	/>

	            	<ul className="gallery">
	            		<GalleryHeaders 
	            			typeOfSort={this.state.sort} 
	            			sortColumn={this.state.sortColumn}
	            			func={this.sortGalleryItems}
	            		/>
	            		{this.renderGalleryRows()}
	            	</ul>
	            	
	            	{
	            		this.state.selectItem ? <Description data={this.state.selectItem} /> : null
	            	}

	            </div>
        	);
    	}   
    }
}


export default Gallery;