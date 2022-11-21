import {useDispatch} from "react-redux";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../home/index.css";
// import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitsStats from "./tuits-stats";

const TuitItem = (

    {
        tuit = {
        }

    }

) => { const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(

        <li className="list-group-item">

            <div className="row fw-semibold text-secondary">

            </div>

            <div className="row">
                <div className="text-secondary">
                    <img className="rounded-circle" height={48} src={`${tuit.image}`} alt={""}/>
                    <span className="fw-bolder text-black">&nbsp;{tuit.topic}</span>
                    &nbsp;{tuit.handle}
                    <i className="bi bi-patch-check text-bg-primary rounded-circle"/>
                    &nbsp;-{tuit.time}

                    <i className="bi bi-three-dots float-end"/>
                </div>

            </div>
            <div className="row mt-1">
                <div>{tuit.tuit}
                    <span>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </span>
                </div>

            </div>
                              <TuitsStats
                                  key={tuit._id} tuit={tuit}/>

        </li>
    );
};
export default TuitItem;
