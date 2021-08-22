import React, {useEffect, useState} from 'react';

function Api() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        (async () => {
        let userData;
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            userData = await response.json();
        } catch (error) {
            console.log(error);
            userData = [];
        }
        setUsers(userData);
        })();
    }, []);
    return [users]
}

export default Api;