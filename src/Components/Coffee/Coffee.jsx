import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Coffee = () => {
    const data = useLoaderData()
    return (
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 my-10 gap-7'>
            {
                data.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
    );
};

export default Coffee;