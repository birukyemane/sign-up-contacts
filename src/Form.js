import React, { Component } from 'react';
import './index.css';

class Form extends React.Component {

   constructor(props) {
	super(props);
	this.state = {
		id:'',
		fullName: '',
		email:'',
		phone:'',
		errorMessage:'',
		sucessMessage:''
	};
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
   }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

 
  handleSubmit(event) {
  	const formValid = this.isValid();
  	if(formValid){
  		this.setState({id:this.props.nextId});
    	this.props.add(this.state);
  	}
  	
    event.preventDefault();
  }

  isValid (){
	var emailPattern = /\S+@\S+/;
	var phonePattern = /^\d{10}$/;

  	if(this.state.fullName.length > 15 || this.state.fullName.length < 5){ // true if its invalid name  
  		this.setState({errorMessage: 'Invalid name legnth - it should be more than 5 and upto 15', sucessMessage:''});	
  		return false;
  	}else if (!this.state.email.match(emailPattern)){ // true if its invalid email
  		this.setState({errorMessage: 'Invalid E-mail - should be in the format name@domain', sucessMessage:''});
  		return false;
  	}else if (!this.state.phone.match(phonePattern)){ // true if its invalid phone
  		this.setState({errorMessage: 'Invalid phone number - enter 10 digits with no comma, no spaces, no punctuation and no + sign in front', sucessMessage:''});
  		return false;
  	}else {
  		this.setState({
  			sucessMessage: 'Thank you!! your data is entered successfully', 
	  		id:'',
			fullName: '',
			email:'',
			phone:'',
			errorMessage:''
  		});
  		return true;
  	}
 }

  render() {        
    return (
    	<form onSubmit={this.handleSubmit} noValidate>
    		<table>
	    	<tr>
	    		<td className="Form-table-cell"> 
	    			<input 
			        type = "text" 
			        placeholder = "Full name" 			        
			        name="fullName"	 
			        value= {this.state.fullName} 
                    onChange={this.handleChange}
                  	/>	
	    		</td>
	    		<td className="Form-table-cell"> 
	    			<input 
			        type = "email" 
			        placeholder = "E-mail address" 
			        name="email" 
			        value= {this.state.email} 
                    onChange={this.handleChange}
			    	/>
	    		</td>
	    		<td className="Form-table-cell"> 	
	    			<input 
			        type = "tel" 
			        placeholder = "Phone number" 
			        name="phone"
			        value= {this.state.phone} 
                    onChange={this.handleChange}
			    	/>
	    	  	</td> 
	    	  	<td> 
	    	  		<input type="submit" className = "btn btn-primary" value="Add new" />	
	    			
	    	  	</td>
	    	</tr>	    	
            </table> 
            <p className="Error-message"> {this.state.errorMessage}</p> 
            <p className="Success-message"> {this.state.sucessMessage}</p>   		    
         </form>
    );  
  }  
}

export default Form;

  
