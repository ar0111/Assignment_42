import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const {name, email, website, phone, username} = user;

    return (
        <div className="col w-25 mx-auto my-5">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{email}</p>
                    <p className="card-text">{username}</p>
                    <p className="card-text">Website: {website}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;