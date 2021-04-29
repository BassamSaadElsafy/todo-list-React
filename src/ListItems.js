import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ListItems(props) {

    const items = props.items;
    console.log(items);
    const listItems = items.map(item => 
        {
            return (
            <div key={item.key} className='list' > 
                <p>
                    <input type="text" 
                    id={item.key} 
                    value = { item.text }
                    onChange = { (e) => { props.updateItem(e.target.value, item.key) } }
                    />
                    <span>
                        <FontAwesomeIcon className="faicons" icon="trash" color="red" onClick={ () => props.deleteItem(item.key)}/>
                    </span>
                </p> 
            </div>
            );
    });

    return (<div>{listItems}</div>);
}

export default ListItems;