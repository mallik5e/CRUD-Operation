import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = ({ onEdit }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log('onEdit prop:', onEdit);  // Log the onEdit prop
        axios.get('http://localhost:8000/api/items/')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the items!", error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/items/${id}/`)
            .then(response => {
                setItems(items.filter(item => item.id !== id));
            })
            .catch(error => {
                console.error("There was an error deleting the item!", error);
            });
    };

    return (
        <div className="container">
            <h1 className="mt-4">Item List</h1>
            <ul className="list-group mt-3">
                {items.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                        </div>
                        <div>
                            <button className="btn btn-primary me-2" onClick={() => onEdit(item)}>Edit</button>
                            <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
