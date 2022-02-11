import React from 'react';

export default function Alert(props) {
    // function to capitalize first letter of any word
    const capitalize=(word)=>{
        let lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase() +lower.slice(1);
    }
    return (
        // below div will create space for alert so that our textBox does not move after alert disappers. A ideal web site should have least dislocating objects 
        <div style={{height: '50px'}}> 
       {// if we dont use "props.alert1 &&" we were getting error because alert earlier is null value and we cannot return null. So it will 1st check props.alert1 and if its true than it will check other 
           props.alert1 && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{capitalize(props.alert1.type)}</strong> {props.alert1.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
            </div>
    );
}
