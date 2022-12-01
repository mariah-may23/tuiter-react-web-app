
import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (

    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.jpeg",
            "dislikes": 0

        }
    }
) => {
    const dispatch = useDispatch();

    return(
        <div className="row mt-2">

            <div className="col wd-unselected">

                <i  className="bi bi-chat"/>
                {tuit.replies}

            </div>
            <div className="col wd-unselected">

                <i className="bi bi-recycle"/>
                {tuit.retuits}

            </div>
            <div className="col wd-unselected">


                {tuit.likes}
                <i onClick={() => dispatch(updateTuitThunk({
                                               ...tuit,
                                               likes: tuit.likes + 1,

                                           }))} className="bi bi-heart-fill me-2 text-danger"/>



            </div>
            <div className="col wd-unselected">


                {tuit.dislikes}
                <i onClick={() => dispatch(updateTuitThunk({
                                                               ...tuit,
                                                               dislikes: tuit.dislikes + 1,

                                                           }))} className="bi bi-hand-thumbs-down"/>


            </div>
            <div className="col wd-unselected">

                <i className="bi bi-box-arrow-up"/>

            </div>

        </div>
    );
};
export default TuitStats;
