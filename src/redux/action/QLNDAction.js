
//action loại 2: function
//cần truyền tham số => trả về 1 hàm chưa được gọi
// dispatch cần truyền vào hàm chưa gọi

import axios from "axios";
import { ACCESS_TOKEN, TOKENCYBER, URL_API, USERLOGIN } from "../../util/setting";

import { history } from "../../App";

export const dangKyAction = (userInfo) => {
    //dispatch2: hàm thư viện thunk hỗ để đưa data từ api lên redux
    return (dispatch2) => { 
        //xử lý call api đăng ký 
        //input: userInfo (dữ liệu người dùng) => dữ liệu cần truyền từ UI form

        let promise = axios({
            url:`${URL_API}/QuanLyNguoiDung/DangKy`,
            method:"post",
            data:userInfo,
            headers:{
                "TokenCybersoft":TOKENCYBER
            }
        });
        promise.then((result) => { 
            console.log(result.data);
            //nếu cần đưa data từ api lên redux thì gọi dispatch2
            //TODO: nếu thành công thì thông báo và chuyển hướng người dùng sang Login
            alert("Thành công rồi");
            //Cài thêm thư viện history để hỗ trợ các file không phải component
            history.push('/login');

         });
         promise.catch((error) => { 
            console.log(error.response?.data);
          });


     }
}

//action liên quan về người dùng

export const dangNhapAction = (userInfo) => { 
    return (dispatch2) => { 
        let promise = axios({
            url:`${URL_API}/QuanLyNguoiDung/DangNhap`,
            method:"post",
            data:userInfo,
            headers:{
                "TokenCybersoft":TOKENCYBER
            }
        });
        promise.then((result) => { 
            console.log(result.data);
            //Luu xuong local storage
            
            localStorage.setItem(ACCESS_TOKEN,result.data.content.accessToken);

            let userInfo = JSON.stringify(result.data.content);

            localStorage.setItem(USERLOGIN,userInfo);
           
            let action = {
                type: "LOGIN",
                uLogin: userInfo
            }
            dispatch2(action);


         });
         promise.catch((error) => { 
            console.log(error.response?.data);
          });


     }
 }