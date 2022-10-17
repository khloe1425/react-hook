// rfc

import React, { useEffect, useState } from 'react'

//biến toàn cục
//chỉ tạo 1 lần, khi render lại UI sẽ không tạo lại nữa
const arrDiaChi = [
    {
        id: "HCM",
        name: "Hồ Chí Minh",
        arrQuan: [
            { id: 1, name: "Quận 1" },
            { id: 2, name: "Quận 2" },
            { id: 3, name: "Quận 3" },
        ]
    },
    {
        id: "DN",
        name: "Đà Nẵng",
        arrQuan: [
            { id: 4, name: "Hải Châu" },
            { id: 5, name: "Liên Chiểu" },
            { id: 6, name: "Sơn Trà" },
        ]
    }
]
let timeOut = "";

export default function UseEffectDemo() {
    //khai báo biến trong hàm cục bộ

    let [number, setNumber] = useState(0);// [pt1 - state,pt2 - hàm setState]
    let [like, setLike] = useState(0);

    // mouting(chạy 1 lần khi load ứng dụng), updating (state, props thay đổi), unmounting (chạy khi component biến mất khỏi UI)

    //? useEffect(hàm callback, [])

    //number đổi => chạy useEffect => setlike trong useEffect thì like đổi theo 

    // useEffect(() => { 
    //         console.log("componentdidmound");
    //         console.log("componentdidupdate");
    //         // setLike(like + 1);
    //  })

    useEffect(() => {
        console.log("componentdidmound");
    }, []);//tham số thứ 2 là mảng rỗng thì chạy theo componentdidmound

    // truyền giá trị state và tham số [], chạy khi number thay đổi
    useEffect(() => {
        //vẫn chạy khi load ứng dụng
        //nhưng ở lần 2 tức là khi updating thì chỉ chạy khi number đổi
        setLike(like + 1)
    }, [number]);//shallow compare (number,string, boolean)


    let [idTP, setTP] = useState("");
    let [arrQuan, setQuan] = useState([]);

    useEffect(() => {
        //xét xong tp => render Ui => useeffect => setQuan
        if (idTP !== "") {
            let thanhPho = arrDiaChi.find((tp) => {
                return tp.id === idTP;
            })
            let arrQuanNew = thanhPho.arrQuan;
            setQuan(arrQuanNew);
            console.log("arrQuan", arrQuan);
        }
    },[idTP]);//


    useEffect(() => { 
        timeOut =setInterval(() => { 
            console.log("interval");
         }, 1000);

         return () => {
            //code trong hàm sẽ được thực thi khi component biến mất khỏi UI
            //dùng để tắt các server chạy ngầm (willUnmount)
            console.log("willUnmount");
            clearInterval(timeOut);
         }

     },[]);// chạy mouting






    let renderQuan = () => {
        if (arrQuan.length == 0) {
            return <option>Hãy chọn thành phố trước</option>
        } else {
            return arrQuan.map((quan) => {
                return <option value={quan.id} key={quan.id}>
                    {quan.name}
                </option>
            })
        }

    }




    return (
        <div className='container'>
            {console.log("render")}
            <div className='w-50 mx-auto'>
                <p>Number: {number}</p>
                <p>Like: {like}</p>
                <button onClick={() => {

                    setNumber(number + 1);

                }} className='btn btn-danger'>+</button>


                <div className="form-group">
                    <label htmlFor="">Thành phố</label>
                    <select className="form-control" value={idTP} onChange={(event) => {
                        let idTPChon = event.target.value
                        setTP(idTPChon);
                        // console.log(idTPChon);

                    }}>
                        <option>Hãy chọn thành phố</option>
                        <option value={"HCM"}>Hồ Chí Minh</option>
                        <option value={"DN"}>Đà Nẵng</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Quận</label>
                    <select className="form-control" id="">
                        {renderQuan()}
                    </select>
                </div>

            </div>
        </div>
    )


    // lệnh sau return sẽ không được chạy

}
