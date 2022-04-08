import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function DiemCuoc(props) {

  const diemCuoc = useSelector(state => state.BauCuaReducer.tongDiem)

  const renderDieuKien = () => {
    if (diemCuoc !== 0) {
      return <span>{diemCuoc.toLocaleString()} VNĐ</span>
    } else {
      return <div>
        <button className='btn btn-danger pb-2 mb-2' onClick={
          () => {
            dispatch({
              type: 'TANG_TIEN',
              diemCuoc
            })
          }
        }> BUFF THÊM + 100.000 $
        </button>

      </div>
    }
  }

  const dispatch = useDispatch();


  return (
    <div className="text-center pb-3">
      <p style={{
        fontSize: '50px',
        fontWeight: 'bold'
      }}>TÔM CUA CÁ</p>
      <div>
        <span style={{
          fontSize: '30px',
          fontWeight: 'bold'
        }}>ĐIỂM THƯỞNG:
          {/* <span>{diemCuoc.toLocaleString()}</span> */}
          {renderDieuKien()}
        </span>

      </div>
    </div>
  )
}
