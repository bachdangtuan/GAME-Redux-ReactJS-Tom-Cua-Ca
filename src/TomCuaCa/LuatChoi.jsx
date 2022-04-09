import React, { Component } from 'react'

export default class LuatChoi extends Component {
  render() {
    return (
      <div className='container'>
         <h2 className='text-center'>LUẬT CHƠI</h2>
        <p>Mới vào sẽ có 0 điểm, có 3 chế độ vay tiền, chơi hết tiền thì ấn reset để chơi lại từ đầu</p>
        <p>Đặt cược vào các quân trên màn hình: BẦU, TÔM, CUA, CÁ, NAI, GÀ sau đó ấn ÚP BÁT, VÊ CHUỘT nhấn xóc đĩa, vê bao lần xóc bấy nhiêu lần, ấn CLICK hiện ra nút mở MỞ BÁT</p>
        <p>QUY TẮC TÍNH ĐIỂM </p>
        <p>Ra 3 con giống nhau thì ăn (1 vốn + 3 lời) </p>
        <p>Ra 2 con giống nhau thì ăn (1 vốn + 2 lời) </p>
        <p>Ra 1 con giống nhau thì ăn (1 vốn + 1 lời) </p>
        <p>Không ra con nào thì mất diểm cược</p>
      </div>
    )
  }
}
