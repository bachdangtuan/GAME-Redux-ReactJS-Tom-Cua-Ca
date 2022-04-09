import React from 'react'
import { useDispatch } from 'react-redux';


export default function QuanCuoc(props) {
    const { quanCuoc } = props;
    const dispatch = useDispatch();

    return (
        <div className=''>
            <img src={quanCuoc.hinhAnh} alt="" srcset="" className='d-block' style={{
                width: '100%'
            }} />
            <div className='pb-3 bg-success w-100 text-center m-auto'>
                <button className='btn btn-danger mt-2' onClick={() => {
                    // console.log('ấn test đặt ');
                    dispatch({
                        type: 'DAT_CUOC_BAU_CUA',
                        quanCuoc,
                        tangGiam: true
                    })
                }}>+ </button>
                <span className='p-2' style={{
                    fontSize: '20px'
                }}>{quanCuoc.diemCuoc.toLocaleString()}$</span>
                <button className='btn btn-danger mt-2' onClick={() => {
                    dispatch({
                        type: 'DAT_CUOC_BAU_CUA',
                        quanCuoc,
                        tangGiam: false
                    })
                }}>-</button>
            </div>
        </div>
    )
}
