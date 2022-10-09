import React from 'react'

function ContactForm(props) {
    return(
        <div className='form'>
        <div className='input--form'>
            <p>First Name: {props.badge.fName}</p>
            <p>Last Name: {props.badge.lName}</p>
            <p>Email: {props.badge.email}</p>
            <p>Phone Number: {props.badge.phone}</p>
            <hr/>
        </div>
        </div>
    )
}

export default ContactForm;