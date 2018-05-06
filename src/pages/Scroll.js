import React from 'react';

const Scroll = ({where})=>{

    const scroll = where==="oferta"?
            (<a href="#oferta">
                <i className="fas fa-chevron-down fa-2x"></i>
            </a>)
            :
            (<a href="/">
                <i className='scroll fas fa-chevron-up fa-2x'></i>
            </a>)

    return (
        <div className="scroll">
            {scroll}
        </div>
    )
}
export default Scroll 