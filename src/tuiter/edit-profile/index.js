import React from "react";

import {useSelector} from "react-redux";
import Edits from "./editing";


const EditProfile = () => {
    const profArray = useSelector(state => state.profiles)
    return(
        <>
            <h4>Profile</h4>
            {
                profArray.map(prof =>
                                  <Edits
                                      key={prof._id} prof={prof}/> )
            }


        </>
    );
};
export default EditProfile;