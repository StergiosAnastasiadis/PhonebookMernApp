import React from 'react';

const PersonList = (props) => {
    return ( 
    <div>
        <ul className="collection with-header">
            <li className="collection-header"><h4>Persons</h4></li>
            {props.persons.map((item) => (
                <a href="#!" className="collection-item" key={item._id} 
                onClick={props.updateCurrentPerson.bind(this,item)}>{item.firstName} {item.lastName}</a>
            ))}
        </ul>
    </div> 
    );
}
 
export default PersonList;