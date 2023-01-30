import React, { useEffect, useState } from 'react';
import axios from 'axios';

function websiteMenu() {
    const [items, setItems] = useState([])
    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            // ...
            console.log('response', response);
            setItems([...response.data]);
        }
        fetchData();
    }, []);

    return (
        <ul>{items && items.map(({ id, username }) => <li key={id}>{username}</li>)}</ul>
    )
}

export default websiteMenu;