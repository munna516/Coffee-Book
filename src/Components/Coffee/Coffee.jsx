import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Coffee = () => {
    const data = useLoaderData()
    const [coffee, setCoffee] = useState(data)

    const handleSort = sortBy => {
        if (sortBy === 'popularity') {
            const sorted = [...data].sort((a, b) => b.popularity - a.popularity)
            setCoffee(sorted)
        }
        else {
            const sorted = [...data].sort((a, b) => b.rating - a.rating)
            setCoffee(sorted)
        }
    }

    return (
        <>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-3xl font-thin'>
                        Sort Coffee&apos;s by Popularity & Rating-&gt;
                    </h1>
                </div>
                <div className='space-x-4'>
                    <button
                        className='btn btn-warning'
                        onClick={() => handleSort('popularity')}
                    >
                        Sort By Popularity (DSC)
                    </button>
                    <button
                        className='btn btn-warning'
                        onClick={() => handleSort('rating')}
                    >
                        Sort By Rating (ASC)
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 my-10 gap-7'>
                {
                    coffee.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>


        </>
    );
};

export default Coffee;