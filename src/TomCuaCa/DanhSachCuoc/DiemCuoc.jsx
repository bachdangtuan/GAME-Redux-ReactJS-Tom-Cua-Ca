import React from 'react'
import { useSelector } from 'react-redux'

export default function DiemCuoc(props) {
  const diemCuoc = useSelector(state => state.BauCuaReducer.tongDiem)
  console.log(diemCuoc);
  return (
    <div className="text-center">
      <p style={{
        fontSize: '80px',
        fontWeight: 'bold'
      }}>TÔM CUA CÁ</p>
      <div>
        <span style={{
          fontSize: '50px',
          fontWeight: 'bold'
        }}>TIỀN THƯỞNG: <span>{diemCuoc.toLocaleString()}$</span>
        </span>

      </div>
        <button className='btn btn-primary p-3'>
          SÓC ĐĨA
        </button>
    </div>
  )
}
