import React from 'react'
import { useDispatch } from 'react-redux';


export default function QuanCuoc(props) {
    const { quanCuoc } = props;

    const dispatch = useDispatch();

    return (
        <div className=''>
            <img src={quanCuoc.hinhAnh} alt="" srcset="" className='d-block' style={{
                width: '75%'
            }} />
            <div className='pb-3 bg-success w-75 text-center mb-3'>
                <button className='btn btn-danger mt-2' onClick={() => {
                    console.log('ấn test đặt ');
                    dispatch({
                        type: 'DAT_CUOC_BAU_CUA',
                        quanCuoc,
                        tangGiam: true
                    })
                }}>+ </button>
                <span className='p-5' style={{
                    fontSize: '40px'
                }}>{quanCuoc.diemCuoc}$</span>
                <button className='btn btn-danger mt-2' onClick={() => {
                    dispatch({
                        type: 'DAT_CUOC_BAU_CAU',
                        quanCuoc,
                        tangGiam: false
                    })
                }}>-</button>
            </div>
        </div>
    )
}
