import { useSelector } from 'react-redux'

const AboutPriceDiv = () => {

    // extracting redux store state using useSelector hooks
    const state = useSelector((data) => data.addToCartUpdater);
    const { data, total, discountAmount } = state;

    return (
        <div
            className='px-4 small'>
            <div
                className='my-4 d-flex justify-content-between'>
                <span>Price ({data.length})</span>
                <span>${Math.trunc(total)}</span>
            </div>
            <div
                className='my-4 d-flex justify-content-between'>
                <span>Discount</span>
                <span className='text-success'>-${Math.trunc(discountAmount)}</span>
            </div>
            <div
                className='my-4 d-flex justify-content-between'>
                <span>Delivery Charges</span>
                <span className='text-success'>Free</span>
            </div>
            <div
                className='py-4 fw-bolder border-top border-dashed border-bottom border-dashed d-flex justify-content-between'>
                <span>Total Amount</span>
                <span>${Math.trunc(total - discountAmount)}</span>
            </div>
            <div
                className='my-3 text-success fw-bold'>
                <span>You will save ${Math.trunc(discountAmount)} on this order</span>
            </div>
        </div>
    )
}

export default AboutPriceDiv