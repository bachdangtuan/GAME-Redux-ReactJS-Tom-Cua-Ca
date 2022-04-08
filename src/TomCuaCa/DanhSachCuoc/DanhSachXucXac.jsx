import React from 'react'
import XucXac from './XucXac'
import { head, deburr } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'

export default function DanhSachXucXac(props) {

  const dispatch = useDispatch();
  const mangXucXac = useSelector(state => state.BauCuaReducer.mangXucXac)

  return (
    <div className='text-center'>

      <div className='bg-white mt-2' style={{
        width: '450px',
        height: '450px',
        borderRadius: '300px'
      }}>
        <div className="row">
          <div className="col-10 text-center">
            <XucXac XucXacItem={mangXucXac[0]}></XucXac>
          </div>
          <div className="col-6 text-center">
            <XucXac XucXacItem={mangXucXac[1]}></XucXac>
          </div>
          <div className="col-6 text-center">
            <XucXac XucXacItem={mangXucXac[2]}></XucXac>
          </div>
        </div>
      </div>
      <div className="row m-auto pt-5">
        <button id='xocBat' className='btn btn-success m-auto' style={{
          display:'none'
        }} onClick={() => {
          document.getElementById('moBat').style.display = 'none';
           document.getElementById('xocBat').style.display = 'none';
           document.getElementById('upBat').style.display = 'block'
          dispatch({
            type: 'XOC_DIA',
          })
        }}>
          <h1>  MỞ BÁT</h1>
        </button>

        {/* Úp Bát */}
        <button id='upBat' className='btn btn-primary  m-auto' style={{display:'block'}} onClick={() => {
          document.getElementById('moBat').style.display = 'block'
          document.getElementById('xocBat').style.display = 'none'
        }}>
         <h1>ÚP BÁT</h1>
        </button>

        <button className='btn btn-dark text-light' onClick={()=>{window.location.reload()}}><h3>RESET</h3></button>
      </div>


      {/* Đĩa */}
      <div id='moBat' style={{
        width: '350px',
        height: '350px',
        borderRadius: '300px',
        background: 'red',
        position: 'absolute',
        top: '8px',
        left: '16%',
        top: '36px',
        display: 'none'
      }} className='image' onClick={()=>{
        document.getElementById('xocBat').style.display = 'block';
        document.getElementById('upBat').style.display = 'none';
      }} >
        <h3 className='text-center'>
             DI CHUỘT VÀO ĐỂ XÓC <br/>
             CLICK ĐỂ MỞ BÁT
        </h3>

      </div>
      {/* LUẬT CHƠI */}

    </div>
  )
}
