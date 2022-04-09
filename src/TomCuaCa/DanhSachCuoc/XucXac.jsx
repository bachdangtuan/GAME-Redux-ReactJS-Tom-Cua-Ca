import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

export default function XucXac(props) {
    let {XucXacItem} = props
    // console.log('XucXacItem',XucXacItem);
    return (
        <Fragment>
            <img src={XucXacItem.hinhAnh} alt="" className='pt-5' style={{
                width: '30%'
            }} />
        </Fragment>
    )
}
