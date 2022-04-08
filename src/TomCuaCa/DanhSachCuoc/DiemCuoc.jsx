import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function DiemCuoc(props) {

  const diemCuoc = useSelector(state => state.BauCuaReducer.tongDiem)

  const renderDieuKien = () => {
    if (diemCuoc !== 0) {
      return <span className='text-light'>{diemCuoc.toLocaleString()} VNĐ</span>
    } else {
      return  <span className='text-light'>{diemCuoc.toLocaleString()} VNĐ
        <button className='btn btn-danger pb-2 mb-2' onClick={
          () => {
            dispatch({
              type: 'TANG_TIEN',
              diemCuoc
            })
          }
        }> VAY THÊM TIỀN + 10.000 VNĐ
        </button>

      </span>
    }
  }

  const dispatch = useDispatch();


  return (
    <div className="text-center pb-3">
      <p style={{
        fontSize: '25px',
        fontWeight: 'bold'
      }}>TÔM CUA CÁ</p>
      <div>
        <span style={{
          fontSize: '20px',
          fontWeight: 'bold'
        }}>ĐIỂM THƯỞNG:
          {/* <span>{diemCuoc.toLocaleString()}</span> */}
          {renderDieuKien()}
        </span>

      </div>
    </div>
  )
}
