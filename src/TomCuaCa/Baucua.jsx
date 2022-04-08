import React from 'react'
import DanhSachQuanCuoc from './DanhSachCuoc/DanhSachQuanCuoc'
import DanhSachXucXac from './DanhSachCuoc/DanhSachXucXac'
import DiemCuoc from './DanhSachCuoc/DiemCuoc'

export default function Baucua() {
  return (
    <div className='container-fluid'>
        <DiemCuoc></DiemCuoc>
        <div className="row">
                <div className="col-8">
                    <DanhSachQuanCuoc></DanhSachQuanCuoc>
                </div>
                <div className="col-4">
                    <DanhSachXucXac></DanhSachXucXac>
                </div>
        </div>
    </div>
  )
}
