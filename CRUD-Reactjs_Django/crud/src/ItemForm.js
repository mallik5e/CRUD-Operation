import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemForm = ({ currentItem, setCurrentItem }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (currentItem) {
            setName(currentItem.name);
            setDescription(currentItem.description);
        } else {
            setName('');
            setDescription('');
        }
    }, [currentItem]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = { name, description };

        if (currentItem) {
            axios.put(`http://localhost:8000/api/items/${currentItem.id}/`, item)
                .then(response => {
                    console.log(response.data);
                    setCurrentItem(null);
                })
                .catch(error => {
                    console.error("There was an error updating the item!", error);
                });
        } else {
            axios.post('http://localhost:8000/api/items/', item)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error("There was an error creating the item!", error);
                });
        }

        setName('');
        setDescription('');
    };

    return (
        <div className="container">
            <h1 className="mt-4">{currentItem ? 'Update Item' : 'Create Item'}</h1>
            <form onSubmit={handleSubmit} className="mt-3">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    {currentItem ? 'Update' : 'Create'} Item
                </button>
            </form>
        </div>
    );
};

export default ItemForm;
