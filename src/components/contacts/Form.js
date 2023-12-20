import { useState } from 'react'



function Form({addContact, contacts}) {

    const [form, setForm] = useState({ name: '', surname: '' });

    const onChangeInput = (e) => {
       
        setForm({ ...form, [e.target.name]: e.target.value });  

    }


    const onSubmit = (e) => {
        e.preventDefault()

         addContact([...contacts,form])
        console.log(form);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input name='name' type='text' placeholder='Name' onChange={onChangeInput} />
                </div>
                <div>
                    <label htmlFor="surname">SurName:</label>
                    <input name='surname' type='text' placeholder='surname' onChange={onChangeInput} />
                </div>
                <button >Ekle</button>


            </form>
        </div>
    )
}

export default Form;