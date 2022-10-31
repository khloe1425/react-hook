// rfc
import React from 'react';
import { useFormik } from 'formik';
import { GP_ID } from '../../util/setting';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { dangKyAction } from '../../redux/action/QLNDAction';

export default function Register() {
  // this.state ={
  //   taiKhoan:"",
  //   email:""
  // }

  const dispatch = useDispatch();

  const formik = useFormik({
    //giá trị khởi tạo (data cần lưu trữ)
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt: '',
      hoTen: '',
      maNhom: GP_ID
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Tài khoản không được để trống"),
      matKhau: Yup.string().required("Mật khẩu không được để trống"),
      email: Yup.string().required("Email không được để trống").email("Email chưa đúng định dạng"),
      hoTen:Yup.string().required("Họ tên không được để trống").matches(/^[A-Z a-z]+$/,"Họ tên không đúng định dạng")
    }),
    onSubmit: values => {
      console.log(values);

      //gọi dispatch đưa dữ liệu cho dangKyAction
      let action = dangKyAction(values);

      //dispatch1: giúp gọi hàm call API
      dispatch(action);

    },
  });

  return (
    <div className='py-5'>
      <h2>Đăng ký</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <input name='taiKhoan' type="text" className="form-control" placeholder='Tài khoản' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.taiKhoan} />
          {/* thong báo lỗi */}
          {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
            <div className='alert alert-danger'>{formik.errors.taiKhoan}</div>
          ) : null}

        </div>
        <div className="form-group">
          <input name='matKhau' type="password" className="form-control" placeholder='Mật khẩu' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.matKhau} />
          {formik.touched.matKhau && formik.errors.matKhau ? (
            <div className='alert alert-danger'>{formik.errors.matKhau}</div>
          ) : null}
        </div>
        <div className="form-group">
          <input name='hoTen' type="text" className="form-control" placeholder='Họ tên' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.hoTen} />
          {formik.errors.hoTen ? (
            <div className='alert alert-danger'>{formik.errors.hoTen}</div>
          ) : null}
        </div>
        <div className="form-group">
          <input name='soDt' type="text" className="form-control" placeholder='Số điện thoại' onChange={formik.handleChange} value={formik.values.soDt} />
        </div>
        <div className="form-group">
          <input name='email' type="text" className="form-control" placeholder='Email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
          {formik.errors.email ? (
            <div className='alert alert-danger'>{formik.errors.email}</div>
          ) : null}
        </div>
        <button className='btn btn-danger'>Đăng ký</button>
      </form>


    </div>
  )
}
