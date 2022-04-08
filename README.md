# TÔM CUA CÁ REACT JS (REACT FUNCTION COMPONENT - RFC)
Luyện sử dụng các hook trong reactJS và xử lý data redux
## Xử lý nghiệp vụ
- .....
- Xử lý action đặt cược trên redux:
    1. Tìm index khi click đặt cược 
     (Copy tạo mảng mới đặt tên: danhsachDatCuocUpdate từ store state danhSachCuoc )
    2. Duyệt mảng danhsachDatCuocUpdate findIndex trả về quân cược mã trùng với mã quân cược mà action gửi lên thì thực hiện sét lại tổng thưởng và điểm cược trong store
