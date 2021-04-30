import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';
import { Checkbox } from './Checkbox';

function ListItems(props) {

    const items = props.items;
    console.log(items);
    props.saveToDoToLocalStorage();    
    
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
                    
                    <Checkbox
                    onClick={() => props.onChangeBox(item)}
                    defaultChecked={item.done}
                    />

                    <span>
                        <FontAwesomeIcon className="faicons" icon="trash" color="red" onClick={ () => props.deleteItem(item.key)}/>
                    </span>
                </p> 
            </div>
            );
    });

    return (
        <div>
            <FlipMove duration="500" easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    );
}

export default ListItems;