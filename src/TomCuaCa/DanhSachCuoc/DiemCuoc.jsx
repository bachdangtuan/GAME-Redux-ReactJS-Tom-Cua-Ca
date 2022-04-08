import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function DiemCuoc(props) {

  const diemCuoc = useSelector(state => state.BauCuaReducer.tongDiem)

  const renderDieuKien = () => {
    if (diemCuoc < 0) {
      return <span className='text-light'>{diemCuoc.toLocaleString()} VNĐ
      </span>

    } else {
      return <span className='text-light'>{diemCuoc.toLocaleString()} VNĐ
        {/* <button id='vayTien' className='btn btn-danger pb-2 mb-2' onClick={
          () => {
            dispatch({
              type: 'TANG_TIEN',
              diemCuoc
            })
          }
        }> VAY THÊM TIỀN + 10.000 VNĐ
        </button> */}

      </span>
    }
  }

  const dispatch = useDispatch();


  return (
    <div className="text-center container pb-1">
      <p style={{
        fontSize: '25px',
        fontWeight: 'bold'
      }}>TÔM CUA CÁ</p>
      <div>
        <span style={{
          fontSize: '30px',
          fontWeight: 'bold'
        }}>TIỀN THƯỞNG:
          {/* <span>{diemCuoc.toLocaleString()}</span> */}
          {renderDieuKien()}
          <div className="row">
            <button id='vayTien1' style={{ display: 'block' }} className='btn btn-danger mr-2 pb-1 mb-1' onClick={
              () => {
                document.getElementById('vayTien3').style.display = 'none'
                document.getElementById('vayTien2').style.display = 'none'
                document.getElementById('vayTien1').style.display = 'none'
                dispatch({
                  type: 'TANG_TIEN',
                  diemCuoc
                })
              }
            }> VAY THÊM TIỀN + 10.000 VNĐ
            </button>
            <button id='vayTien2' style={{ display: 'block' }} className='btn btn-primary mr-2 pb-1 mb-1' onClick={
              () => {
                document.getElementById('vayTien3').style.display = 'none'
                document.getElementById('vayTien2').style.display = 'none'
                document.getElementById('vayTien1').style.display = 'none'
                dispatch({
                  type: 'TANG_TIEN1',
                  diemCuoc
                })
              }
            }> VAY THÊM TIỀN + 100.000 VNĐ
            </button>
            <button id='vayTien3' style={{ display: 'block' }} className='btn btn-success mr-2 pb-1 mb-1' onClick={
              () => {
                document.getElementById('vayTien3').style.display = 'none'
                document.getElementById('vayTien2').style.display = 'none'
                document.getElementById('vayTien1').style.display = 'none'
                dispatch({
                  type: 'TANG_TIEN2',
                  diemCuoc
                })
              }
            }> VAY THÊM TIỀN + 1.000.000 VNĐ
            </button>            
          </div>
        </span>
      </div>
    </div>
  )
}
