import React from 'react';

const PricingCard = ({pricingg}) => {
    console.log(pricingg)
    return (
        <div>
            {/* Card */}
            <div className='border-2 border-gray-300 p-6 max-w-100'>
                <h1 className='text-7xl'>{pricingg.plan}</h1>
                <h3 className='text-3xl'>{pricingg.price}</h3>
            </div>
        </div>
    );
};

export default PricingCard;