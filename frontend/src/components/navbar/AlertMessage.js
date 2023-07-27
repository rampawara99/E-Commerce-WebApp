import { useSelector } from 'react-redux'; 

const AlertMessage = () => {
    // alertData for state management for this components
    const { alertData } = useSelector((data) => data); 
    // console.log("alert-components useSelector: ", alertData);

    return (
        <div className={`add-cart-alert-message ${alertData.isRemove ? 'opacity-1-top-20' : ""}`}> 
            <span>{alertData.message}</span>
        </div>
    )
}

export default AlertMessage

