import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCommentAction } from '../../redux/action/fakeBookAction';
import { ADD_COMMENT } from '../../redux/types/fakeBookType';

export default function ReduxDemo() {

     //lưu các giá trị lấy từ form
     let [userComment, setUserComment] = useState({
        username: "",
        comment: ""
    })

    // const { mangComment } = useSelector((state) => {
    //     // state.fakeBookReducer.mangComment
    //     return state.fakeBookReducer
    // });

    const { mangComment } = useSelector(state => state.fakeBookReducer);
   
    let dispatch = useDispatch();



    let renderComment = () => {
        return mangComment.map((post) => {
            return <div className='row' key={post.username}>
                <div className="col-2">
                    <img className='img-fluid' src={post.avatar} alt="" />
                </div>
                <div className="col-10">
                    <p>{post.username}</p>
                    <p>{post.comment}</p>
                </div>
            </div>
        })
    }

    let handleInput = (e) => {
        let { id, value } = e.target;
        // console.log(id, value);
        setUserComment({
            ...userComment,
            [id]: value
        })

    }

    //    console.log(userComment);

    let handleSubmit = (e) => {
        //ngăn load lại trang của form 
        e.preventDefault();

        //tạo action
        //
        /**
         * 
         * action 2 có loại
         * 1: action là object
         * 2: action là function (tách action ở 1 file riêng => dễ quản code - action creator)
         */
        
        let action = addCommentAction(userComment);

        dispatch(action)

    }


    return (
        <div className='container'>
            <div className="w-50">
                {renderComment()}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input onChange={handleInput} type="text" className="form-control" id="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input onChange={handleInput} type="text" className="form-control" id="comment" placeholder="Comment" />
                    </div>
                    <button className='btn btn-danger'>Sent</button>
                </form>
            </div>
        </div>
    )
}

// mapStateToProps => lấy reducer về props comment