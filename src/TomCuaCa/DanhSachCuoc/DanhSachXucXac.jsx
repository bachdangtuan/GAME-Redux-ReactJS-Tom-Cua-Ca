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
        <button id='xocBat' className='btn btn-primary m-auto' style={{
          display:'none'
        }} onClick={() => {
          document.getElementById('moBat').style.display = 'none';
          //  document.getElementById('moBat').className = 'moBat';
          dispatch({
            type: 'XOC_DIA',
          })
        }}>
          MỞ BÁT
        </button>
        <button className='btn btn-primary  m-auto' onClick={() => {
          document.getElementById('moBat').style.display = 'block'
          document.getElementById('xocBat').style.display = 'none'
        }}>
          ÚP BÁT
        </button>
      </div>
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
      }} >
        <h1 className='text-center'>
             KICK CHUỘT VÀO ĐỂ XÓC
        </h1>

      </div>
    </div>
  )
}
