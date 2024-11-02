import React from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';

const Category = () => {
    const data = useLoaderData()
    // console.log(data[0]);
    return (
        <div role="tablist" className="tabs tabs-lifted">
            {
                data.map(tab => <NavLink to={`/category/${tab.category}`} key={tab.id} role="tab"
                    className={({ isActive }) => `tab text-xl ${isActive ? 'tab-active font-bold ' : ''} `}
                >{tab.category}</NavLink>)
            }
        </div>
    );
};

export default Category;