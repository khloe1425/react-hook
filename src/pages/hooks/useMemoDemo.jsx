import React, { useMemo, useState } from 'react'
import Cart from './Cart';


// let cart = [
//     { id: 1, name: 'iphone', price: 1000 },
//     { id: 2, name: 'htc phone', price: 2000 },
//     { id: 3, name: 'lg phone', price: 3000 }
// ];


export default function useMemoDemo() {
    let [like,setLike] = useState(0);

    let cart = [
    { id: 1, name: 'iphone', price: 1000 },
    { id: 2, name: 'htc phone', price: 2000 },
    { id: 3, name: 'lg phone', price: 3000 }
];



// useMemo: lưu lại các biến kiểu array và object
  let cartMemo  = useMemo(() => { 
        return cart
   },[])


    return (
        <div className='container'>
            <div className="card w-75">
                <div className="card-body">
                    <div>
                        Like: <span>{like}</span> <span style={{ cursor: "pointer" }} onClick={() => {
                            setLike(like + 1);
                        }}>❤️</span>
                    </div>
                    <Cart cart={cartMemo}/>
                </div>
            </div>

        </div>
    )
}
