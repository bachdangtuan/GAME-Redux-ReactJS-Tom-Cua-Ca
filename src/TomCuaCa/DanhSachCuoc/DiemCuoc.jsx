import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'

export default function DiemCuoc(props) {

  const diemCuoc = useSelector(state => state.BauCuaReducer.tongDiem)


  console.log(diemCuoc);

  const dispatch = useDispatch();


  return (
    <div className="text-center">
      <p style={{
        fontSize: '50px',
        fontWeight: 'bold'
      }}>TÔM CUA CÁ</p>
      <div>
        <span style={{
          fontSize: '30px',
          fontWeight: 'bold'
        }}>TIỀN: <span>{diemCuoc.toLocaleString()}$</span>
        </span>

      </div>
      <button className='btn btn-danger pb-2 mb-2' onClick={
        () => {
          dispatch({
            type: 'TANG_TIEN',
            diemCuoc
          })
        }
      }> BUFF TIỀN + 10.000 $ </button>
    </div>
  )
}
