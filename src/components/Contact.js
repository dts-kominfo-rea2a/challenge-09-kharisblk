// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import "./Contact.css";

const Contact = (props) => {
    return (
        <div className='Isi'>
            <div className='gambar'>
                <img src={props.data.photo} alt={props.data.name} />
            </div>
        <div className='teks'>
            <h1>{props.data.name}</h1>
            <h5>{props.data.phone}</h5>
            <h5>{props.data.email}</h5>
        </div>
        </div>
    )
}

export default Contact;