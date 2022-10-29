import React from 'react'

export default function Detail(props) {
    //maPhim: tên tham số cần lấy từ url
    //param trên url là dữ liệu không bảo mật
  return (
    <div className='container'>
        <h1 className='alert alert-danger'>
            Tham số (param): {props.match.params.maPhim}
        </h1>

    </div>
  )
}
