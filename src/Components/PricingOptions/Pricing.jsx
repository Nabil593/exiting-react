import React, { Suspense, use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const Pricing = ({PricingPromise}) => {

    const PricingData = use(PricingPromise)
    // console.log(PricingData);
    return (
        <div>
            <h2 className='text-5xl'>Get Our Mwmbweship</h2>
            <div className='grid grid-cols-3 justify-between'>
                {
                    PricingData.map(pricingg => <PricingCard key={pricingg.price} pricingg = {pricingg}/>)
                }
            </div>
        </div>
    );
};

export default Pricing;