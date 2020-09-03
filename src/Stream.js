import React from 'react'
import { Field, reduxForm, formValues } from 'redux-form';
import { Provider, connect } from 'react-redux';
import {Link } from 'react-router-dom';
import {RouterConcept} from './RouterConcept'

class Stream extends   React.Component {

    renderInput({input, label,meta}){
        return (

            
            <div className="field">
                <label>{label}</label>
                <input {...input} />
                <div>{meta.error}</div>
            </div>);
    }
    onSubmit(formValues){
        console.log(formValues);
    }
    render(){
        return (
            <form  onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form"> 
                <Field  name="title" component={this.renderInput} label="Enter title:-"/>
                <Field  name="description" component={this.renderInput} label="Enter Description:-"/> 
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate =    formValues => {
    const errors ={};
    
    if(!formValues.title){
        errors.title = 'You must enter title'
    }

    if(!formValues.description){
        errors.description = 'You must enter Description'
    }
   return errors;

  
};


export default reduxForm({
    form: 'streamCreate',
    validate 
})(Stream);