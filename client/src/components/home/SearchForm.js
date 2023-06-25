import React, { useState } from 'react';

export const SearchForm = () => {
    const [userLocation, setUserLocation] = useState('')
    const [userDestination, setUserDestination] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onsubmit(userLocation, userDestination)
        setUserLocation('')
        setUserDestination('')
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Located:</label>
                    <input 
                        className='form-control'
                        type='text'
                        name='location'
                        value={userLocation}
                        onChange={e => setUserLocation(e.target.value)}
                    />
                </div>
                <div>
                    <label>Destination:</label>
                    <input 
                        className='form-control'
                        type='text'
                        name='destination'
                        value={userDestination}
                        onChange={e => setUserDestination(e.target.value)}
                    />
                </div>
                
                <input className='inputBtn' type='submit' value='search' />
            </form>
    </div>
    )
}
