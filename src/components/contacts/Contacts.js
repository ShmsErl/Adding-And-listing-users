import React, { useState, useEffect } from 'react'
import List from './List'
import Form from './Form';
import './style.css';

function Contacts() {
    
    const [contacts, setContacts] = useState([{
        name:"Şeyhmus",
        surname:'Erol'
    }]);


    useEffect = (() => {
        console.log(contacts);
    }, [contacts])


    return (

        <div className='container'>
            <h1 className='header'>Contact</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts ={contacts} />
        </div>
    )
}

export default Contacts