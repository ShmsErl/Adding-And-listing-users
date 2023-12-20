import React from 'react'

function List({ contacts }) {
    return (
        <div>
            <ul >
                {

                    contacts.map((value, index) =>

                        <li key={index} >
                            {index}
                            {value.name}

                        </li>




                    )
                } </ul>
        </div>
    )
}

export default List