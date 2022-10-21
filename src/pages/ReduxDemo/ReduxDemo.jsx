import React from 'react'
import { useSelector } from 'react-redux'

export default function ReduxDemo() {

    const { mangComment } = useSelector((state) => {
        // state.fakeBookReducer.mangComment
        return state.fakeBookReducer
    });

    console.log(mangComment);

    let renderComment = () => {
        return mangComment.map((post) => {
            return <div className='row'>
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


    return (
        <div className='container'>
            <div className="w-50">
                {renderComment()}
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" id="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="comment" placeholder="Comment" />
                    </div>
                    <button className='btn btn-danger'>Sent</button>
                </form>
            </div>
        </div>
    )
}

// mapStateToProps => lấy reducer về props comment