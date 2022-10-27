import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutDetails from './CheckoutDetails';

const CheckOut = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            {
                data.map(singleCourse=><CheckoutDetails
                key={singleCourse.id}
                singleCourse={singleCourse}
                ></CheckoutDetails>)
            }
        </div>
    );
};

export default CheckOut;