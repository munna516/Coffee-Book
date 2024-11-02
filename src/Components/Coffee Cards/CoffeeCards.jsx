import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from '../Card/Card';

const CoffeeCards = () => {
    const navigate = useNavigate()
    const { category } = useParams()
    const data = useLoaderData()
    const [coffee, setCoffee] = useState([])

    useEffect(() => {
        if (category) {
            const filterByCategory = [...data].filter(coffee => coffee.category === category)
            setCoffee(filterByCategory)
        } else {
            setCoffee(data.slice(0, 6))
        }
    }, [category, data])


    return (
        <>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 my-10 gap-7'>
                {
                    coffee.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }

            </div>
            <button onClick={() => navigate('/coffees')} className='btn btn-warning'>View All</button>
        </>

    );
};

export default CoffeeCards;