


const initialState = {
    danhSachCuoc: [
        { ma: 'bau', hinhAnh: './img/bau.png', diemCuoc: 0 },
        { ma: 'cua', hinhAnh: './img/cua.png', diemCuoc: 0 },
        { ma: 'ga', hinhAnh: './img/ga.png', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './img/nai.png', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './img/ca.png', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './img/tom.png', diemCuoc: 0 }
    ],
    tongDiem: 100000,
    mangXucXac: [
        { ma: 'nai', hinhAnh: './img/nai.png' },
        { ma: 'ca', hinhAnh: './img/ca.png' },
        { ma: 'tom', hinhAnh: './img/tom.png' }
    ]

}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'DAT_CUOC_BAU_CUA':{
            //Tìm trong danh sách cược quân cược nào đc click tăng hoặc giảm điểm
            console.log('action',action);
            const danhSachDatCuocUpdate = [...state.danhSachCuoc]
            const index = danhSachDatCuocUpdate.findIndex(qc => qc.ma ===action.quanCuoc.ma)
            console.log(index);
            // if (index != -1) {
            //     if (action.tangGiam && state.tongDiem >0) {
            //         state.tongDiem-=10000;
            //         danhSachDatCuocUpdate[index].diemCuoc +=10000;
            //     }else{
            //         if (danhSachDatCuocUpdate[index].diemCuoc>0) {
            //             danhSachDatCuocUpdate[index].diemCuoc -=10000;
            //             state.tongDiem+=10000;
            //         }
            //     }
            // }
            
            if (index != -1) {
                if (action.tangGiam ===true && state.tongDiem >0) {
                    state.tongDiem-=10000;
                    danhSachDatCuocUpdate[index].diemCuoc +=10000;
                }
                if (action.tangGiam ===false && action.quanCuoc.diemCuoc >0) {
                    state.tongDiem+=10000;
                    danhSachDatCuocUpdate[index].diemCuoc -=10000;
                }
            }
            console.log('tong diem',state.tongDiem);
            state.danhSachCuoc = danhSachDatCuocUpdate;
        }

        default:
            return {...state}
    }
}
