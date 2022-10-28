import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { TOKENCYBER, URL_API } from '../../util/setting';
import { LAY_DS_PHIM } from '../../redux/types/phimType';
import { layDanhSachPhimAction } from '../../redux/action/phimAction';



export default function ApiMiddleWare() {

  //1. Khai báo reducer cho nghiệp vụ Phim
  //2. kết nối api => mảng phim 
  //    hàm getAPI
  //    lifecycle didmount => useEffect(,[])
  //3. dispatch mảng phim => phimReducer



  let { mangPhim } = useSelector(state => state.phimReducer)
  // console.log(mangPhim)
  let dispatch = useDispatch();

  useEffect(() => {
    getAPI();
  }, []);//didmount



  let renderPhim = () => {
    return mangPhim.map((phim) => {
      return <div className="col-3" key={phim.maPhim}>
        <div className="card">
          <img src={phim.hinhAnh} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{phim.tenPhim}</h5>
            <p className="card-text">{phim.moTa}</p>
          </div>
        </div>

      </div>
    })
  }

  let getAPI = () => {
    /**
     * Tổ chức action creator => tạo action loại function
     * Nếu action có call api thì sẽ đem toàn bộ code api sang file action
     * => bị bất đồng bộ
     *? Middleware => xử lý bất động giữa API và dispatch data lên redux + tổ chức theo action creator
     * 
     * Middleware (redux-thunk, redux saga) 
     * => sinh ra 2 hàm dispatch cho redux 
     * => dispatch gọi call api => chờ cho đến khi lấy đc data
     * => dispatch2 đẩy data lên redux
     */
    //hàm call api
    //let action = layDanhSachPhimAction("maPhim");//gọi hàm mà ko thông qua dispatch

    //nhận kết quả trả về là hàm chưa gọi
    let action = layDanhSachPhimAction("GP04");

    //dispatch: truyền vào hàm chưa gọi
    dispatch(action);//gọi hàm call api




  }

  return (
    <div className='container'>
      <h2>Demo API Redux</h2>
      <div className="row">
        {renderPhim()}
      </div>
    </div>
  )
}
