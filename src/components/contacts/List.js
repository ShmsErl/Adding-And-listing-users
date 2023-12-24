import {useState} from 'react'

function List({ contacts }) {

    const [filterText,setFilterText] = useState("") 
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key)=> {
         return   item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        } );
    });

    console.log(filtered)
    return (
        <div>
             

            <input type='text' placeholder='Filter Contact' value={filterText} onChange={(e)=>setFilterText(e.target.value)} />
            <ul className='list' >
                {

                    filtered.map((value, index) =>

                        <li key={index} >
                            
                            {`${value.name} ${value.surname}`}

                        </li>




                    )
                }  {filtered.length}
                </ul>
               
        </div>
    )
}

export default List