import React from 'react'
import './HeaderOptions.css'

function HeaderOptions({ Icon, Title }) {
    return (
        <div className='headerOption'>
            {Icon && <Icon className='headerOption' />}
            <h3>{Title}</h3>

        </div>
    )
}

export default HeaderOptions