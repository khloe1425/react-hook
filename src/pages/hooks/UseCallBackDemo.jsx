// rfc
import React, { useCallback, useState } from 'react'
import Post from './Post'

export default function UseCallBackDemo() {

    let [like,setLike] = useState(0);
    let [num,setNum] = useState(0);

    let renderLike = () => {
        console.log("like");
    }//tạo lại => đổi địa chỉ => memo tưởng đổi 

    //useCallback: giúp lưu lại hàm tránh thay đổi khi render lại UI
    // let renderLikeCallback =  useCallback(renderLike,[]);
    let renderLikeCallback =  useCallback(renderLike,[like]);

    return (
        <div className='container'>
            <div className="card w-75">
                <div className="card-body">
                    {/* <Post like={like}/> */}
                    {/* <Post renderLike={renderLikeCallback} like={like} /> */}
                    <Post renderLike={renderLikeCallback} />
                    <div>
                        Like: <span>{like}</span> <span style={{cursor:"pointer"}} onClick={() => { 
                            setLike(like + 1);
                         }}>❤️</span>
                    </div>
                    <div>
                        Number: {num}
                        <button onClick={() => { 
                            setNum(num + 1);
                         }}  className='btn btn-danger'>Tăng num</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
