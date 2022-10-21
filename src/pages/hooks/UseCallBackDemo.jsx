// rfc
import React, { useState } from 'react'
import Post from './Post'

export default function UseCallBackDemo() {

    let [like,setLike] = useState(0);
    let [num,setNum] = useState(0);

    let renderLike = () => {
        console.log("like");
    }

    return (
        <div className='container'>
            <div className="card w-75">
                <div className="card-body">
                    {/* <Post like={like}/> */}
                    <Post renderLike={renderLike} />
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
