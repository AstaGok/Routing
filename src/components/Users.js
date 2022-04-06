import React, { useState, useEffect } from 'react'
import User from './User';

const url = 'https://api.github.com/users';

const Users = () => {
    const [users, setUsers] = useState ([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
    };

    useEffect (() => {
        getUsers();
    }, []);

    const list = users.map (user => {
        return <User key={user.id} imgSrc={user.avatar_url} login={user.login}/>
    })

    return <div className='container'>
        <div className='row'>{list}</div>
    </div>



};

export default Users;