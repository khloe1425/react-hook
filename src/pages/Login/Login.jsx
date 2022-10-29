import React, { useState } from 'react'
import { Prompt } from 'react-router-dom'

//router => props history, match

export default function Login(props) {
  //Nếu đăng nhập thành công => chuyển sang Home
  //Ngược lại không chuyển đi và thông báo lỗi

  //lấy dữ liệu từ form
  let [userAccount, setAccount] = useState({
    username:"",
    password:"",
    isLeaveForm:true
  })

  let handleInput = (e) => {
      let {id, value} = e.target;
      console.log(id, value);
      setAccount({
        ...userAccount,
        [id]:value
      })
  }
  // met
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(userAccount.username);

    if(userAccount.username == "thancongbao"){
       //đăng nhập thành công => chuyển về Home
       //thư viện router tự thêm vào props của comment
       //push(): chuyển về comment khác theo url


        // api => login => home
        // props.history.push('/home');

        // api => login(home) (ghi đè lịch sử duyệt web)
        props.history.replace('/home');
    }else{
      alert("Tài khoản hoặc mật khẩu không đúng")
    }
  }
  return (
    <div className='loginForm'>
      <form onSubmit={handleSubmit} className="py-5">
        <div className="form-group">
          <input onChange={handleInput} type="text" className="form-control" id="username" placeholder="Enter Username" />
        </div>
        <div className="form-group">
          <input onChange={handleInput} type="password" className="form-control" id="password" placeholder="Enter Pass" />
        </div>
        <button className='btn btn-success'>Login</button>
        <button className='btn btn-danger' type="button" onClick={() => { 
          
           props.history.goBack();

         }} >Go Back</button>
      </form>
         <Prompt when={userAccount.isLeaveForm} message={(location) => { 
              return "Bạn có chắc muốn rời khỏi trang"
          }}  />
      


    </div>
  )
}
