import React from 'react'
import XucXac from './XucXac'
import {head, deburr} from 'lodash'
import { useSelector } from 'react-redux'

export default function DanhSachXucXac(props) {

  const mangXucXac = useSelector (state => state.BauCuaReducer.mangXucXac)

  return (
    <div className='text-center'>
        
        <div className='bg-white mt-2' style={{
            width: '450px',
            height:'450px',
            borderRadius:'300px'
        }}>
            <div className="row">
                <div className="col-12 text-center">
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
            <button className='btn btn-primary mt-5' style={{
              marginLeft:'35%',
              padding:'40px'
            }}>
                XÓC ĐĨA
            </button>
    </div>
  )
}
