import React from "react"


const Title = ({ name, color = "" }) => {
    return (
        <React.Fragment>
            <h1 className={`h4 px-3 py-2 mb-3 bg-primary ${color}`}>{name}</h1>
        </React.Fragment>
    )
}

Title.defaultProps = {
    color: 'text-light'
};
export default Title