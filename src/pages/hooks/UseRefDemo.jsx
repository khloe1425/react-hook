import React, { useRef, useState } from 'react'

export default function UseRefDemo() {

    // let [userAccount, setUser] = useState({
    //     username:"",
    //     password:""
    // }) => render lại UI

    let [num, setNum] = useState(0);

    let user = {} //!=> thì dữ liệu không đổi ở các hàm khác

    let userAccRef = useRef({
        username:"",
        password:""
    })

    let handleInput = (e) => {
        //destructoring (e.target.id, e.target.value)
        let {id,value} = e.target;
        
        // userAccRef.current.username = value;
        userAccRef.current[id]= value

        // user = {
        //     ...user,
        //     [id]:value
        // }
    
        // let newState = {
        //     ...userAccount,
        //     [id]: value
        // }
        // console.log(newState)
        // setUser(newState);
    }

    console.log("Login");
    console.log(userAccRef);//? lưu được dữ liệu mà không render lại UI
    // console.log(user);//! không có dữ liệu mới do không render UI
    // let handleSubmit = (e) => {
       
    //     // console.log(user);
    //     // console.log(id, value);
    //     // let newState = {
    //     //     ...userAccount,
    //     //     [id]: value
    //     // }
    //     // console.log(newState)
    //     // setUser(newState);
    // }
    return (
        <div className='container'>
            <div>Number: {num} <button onClick={() => { 
                setNum(num + 1);
             }} >Tăng</button></div>


            <form className='w-50'>
                <div className="form-group">
                    <input onChange={(e) => { 
                        handleInput(e);
                     }} type="text" className="form-control" id="username" aria-describedby="helpId" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <input  onChange={handleInput} type="password" className="form-control" id="password" aria-describedby="helpId" placeholder="Enter password" />
                </div>
                <button className='btn btn-danger'>Submit</button>
            </form>



        </div>
    )
}
