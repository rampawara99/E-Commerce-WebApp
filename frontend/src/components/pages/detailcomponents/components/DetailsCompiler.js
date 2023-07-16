import React from 'react'
import Title from '../../reusecomponents/Title'
import Name from './Name'
import Price from './Price'
import Company from './Company'
import Details from './Details'
// import BuyBtn from '../../../productlist/BuyBtn'
import BuyBtn from '../../productlist/BuyBtn'

const DetailsCompiler = ({ data }) => {
    return (

        <div className='col-md-6 my-3'>
            <Title name="About" />
            <div className='lh-lg'>
                <Name data={data} />
                <Price data={data} />
                <Company data={data} />
                <Details data={data} />
                
                {data.from === "shop" &&
                <div className='w-50 rounded-5px-overflow-hidden-margin-top-45px'>
                    <BuyBtn data={data}/>
                </div>
                }
            </div>
        </div>
    )
}

export default DetailsCompiler