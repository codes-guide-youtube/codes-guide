import React from 'react'

const Accordian = (props) => {
    return (
        <div>

                <details className="details-container">
                    <summary className='details-title'>{props.title}</summary>
                    <p className='details-detail'>{props.details}</p>
                </details>
        </div>
    )
}

export default Accordian