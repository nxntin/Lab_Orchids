import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOrchidById } from '../services/api';

const OrchidDetail = () => {
    const { id } = useParams();
    const [orchid, setOrchid] = useState(null);

    useEffect(() => {
        fetchOrchidById(id).then(response => {
            console.log('Fetched orchid detail:', response.data); // Thêm console log
            setOrchid(response.data);
        }).catch(error => {
            console.error('Error fetching orchid detail:', error);
        });
    }, [id]);

    if (!orchid) {
        return <div>Orchid not found</div>;
    }

    return (
        <div>
            <h2>Details for {orchid.name}</h2>
            <p>Name: {orchid.name}</p>
            <p>ID: {orchid.id}</p>
            <p>Rating: {orchid.rating}</p>
            <p>Special: {orchid.isSpecial ? 'Yes' : 'No'}</p>
            <p>Color: {orchid.color}</p>
            <p>Origin: {orchid.origin}</p>
            <p>Category: {orchid.category}</p>
            <img
                style={{ border: '1px solid #ccc', borderRadius: '10px', margin: '10px', padding: '10px', width: '200px' }}
                src={orchid.image}
                alt={orchid.name}
            />
        </div>
    );
};

export default OrchidDetail;
