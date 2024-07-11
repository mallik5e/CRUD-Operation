import React, { useState } from 'react';
import ItemList from './ItemList';
import ItemForm from './ItemForm';

const App = () => {
    const [currentItem, setCurrentItem] = useState(null);

    const handleEdit = (item) => {
        setCurrentItem(item);
    };

    return (
        <div className="container">
            <ItemForm currentItem={currentItem} setCurrentItem={setCurrentItem} />
            <ItemList onEdit={handleEdit} />
        </div>
    );
};

export default App;
