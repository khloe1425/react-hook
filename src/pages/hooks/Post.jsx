import React, { memo } from 'react'

 function Post(props) {
    console.log("post");
    return (
        <div>
            <h5 className="card-title">Hôm nay trời đẹp quá</h5>
            <p className="card-text">
                <img className='w-25' src="https://i.pravatar.cc/?u=77" alt="" />
            </p>
            {/* Like: <span>{props.like}</span> */}
        </div>
    )
}

export default memo(Post);
// memo: tự nhận biết state có truyền xuống cho component hay không => nếu có thì render lại UI của con
// ngược lại không render lại