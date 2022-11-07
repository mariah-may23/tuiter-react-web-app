import React from "react";

import ProfileHappening from "./profile-happening";
import {useSelector} from "react-redux";



const ProfileComponent = () => {
    const profArray = useSelector(state => state.profiles)
    return(
        <>
            <h4>Profile</h4>
            {
                profArray.map(prof =>
                                   <ProfileHappening
                                       key={prof._id} prof={prof}/> )
            }


        </>
    );
};
export default ProfileComponent;