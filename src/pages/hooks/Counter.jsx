// rfce
import React, { useState } from 'react'
//f2
function Counter() {

  //? RCC
  // this.state ={
  //   count:0
  // }

  //this.setState (kế thừa )

  //?để sử dụng đc state thì dùng hook useState
  //? trả về 1 mảng 2 phần tử [giá trị state, setState]
  //! Luôn khai báo hook ở đầu
  //? gia tri khoi tao = 0, neu khong co gia tri khoi tao thi gia tri khoi tao mac dinh la undefined
  //? count se nhan gia tri khoi tao cua useState
  const [count, setCount] = useState(0);
  // console.log('count', count);

  //khai báo state chứa đối tượng user
  const [user, setUser] = useState({
    id: 77,
    avatar: "https://i.pravatar.cc/?u=77"
  })


  return (
    <div className='container'>count: {count}
      <hr />
      <button onClick={() => {
        console.log('click me')
        //?đổi giá trị của state (count) và render lại UI
        // this.setState({
        //   count: this.state.count + 1
        // })
        setCount(count + 1);
      }}>Increament</button>

      <div className='row'>
        <div className="col-3">
          <div className="card">
            <img className="card-img-top" src={user.avatar} alt />
            <div className="card-body">
              <button onClick={() => { 
                //random số từ 0 - 99
                   let num = Math.floor(Math.random() * 100);
                   let newUser = {...user, avatar: `https://i.pravatar.cc/?u=${num}`}
                  //  console.log(newUser);
                   setUser(newUser);

               }} className='btn btn-danger'>Random</button>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Counter