import {useDispatch} from "react-redux";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../home/index.css";
import {deleteTuit} from "./tuits-reducer";





const TuitItem = (

    {
        post = {
        }

    }



) => { const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(

        <li className="list-group-item">

            <div className="row fw-semibold text-secondary">

            </div>

            <div className="row">
                <div className="text-secondary">
                    <img className="rounded-circle" height={48} src={`/images/${post.avataricon}`} alt={""}/>
                    <span className="fw-bolder text-black">&nbsp;{post.topic}</span>
                    &nbsp;{post.userName}
                    <i className="bi bi-patch-check text-bg-primary rounded-circle"/>
                    &nbsp;-{post.time}

                    <i className="bi bi-three-dots float-end"/>
                </div>

            </div>
            <div className="row mt-1">
                <div>{post.tuit}
                    <span>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
</span>
                </div>

            </div>



            <div className="row mt-2">

                <div className="col wd-unselected">

                    <i  className="bi bi-chat"/>
                    {post.replies}

                </div>
                <div className="col wd-unselected">

                    <i className="bi bi-recycle"/>
                    {post.retuits}

                </div>
                <div className="col wd-unselected">
                    {post.liked ?

                     <i className="bi bi-heart text-danger"/>

                                 : <i className="bi bi-heart"/>}

                    {post.likes}

                </div>
                <div className="col wd-unselected">

                    <i className="bi bi-box-arrow-up"/>

                </div>

            </div>
        </li>
    );
};
export default TuitItem;
