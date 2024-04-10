import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return <div>
    <div className="bg-blue-400 h-48 flex items-center justify-center rounded ">
      <div className="w-1/2 rounded border">
        <p className="rounded border text-center text-2xl">Movie.org</p>
        <p className="py-1 text-center">Xem Phim Bộ Mới | Phim Thuyết Minh | Phim HD VietSub mới nhất được cập nhật liên tục.</p>
        <p className="py-1 text-center">TraPhim.org - Xem phim không quảng cáo. Phim được thành viên tổng hợp từ nhiều nguồn trên internet với mục đích sưu tầm chia sẻ phi lợi nhuận.</p>
      </div>
    </div>
    <div className="font-bold bg-blue-400">
       <p className="text-center">Liên Hệ Tại :  <a href="https://www.cgv.vn/home/">https://www.cgv.vn/home/</a>    </p>
    </div>
  </div>
    
  }
}
