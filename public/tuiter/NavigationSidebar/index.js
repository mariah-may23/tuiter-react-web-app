const NavigationSidebar = (active) => {
    let done = null;
    if(active === 'Explore'){
        done = true;
    }
    if(active === 'Home'){
        done = false;
    }
    return(`

   <div class="list-group">
                    <a href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
                       class="list-group-item list-group-item-action wd-color wd-follow">
                        <i class="fab fa-twitter fa-1x"></i><br/>
                    </a>
                    <!--HOME SCREEN-->
                    <a href="../HomeScreen/index.html"
                       ${done ? 'class="list-group-item list-group-item-action wd-color wd-follow"' :
                         'class="list-group-item list-group-item-action active wd-color wd-follow"'}>
                        <div class="row">
                            <div class="col-xxl-2 col-xl-2 col-l-12">
                                <i class="fa fa-home"></i>
                            </div>
                            <div class="col-xxl-10 col-xl-10 d-none d-xl-block">
                                Home
                            </div>
                        </div>
                    </a>
                    <!--EXPLORE-->
                    
                    <a href="../explore/index.html"
                        ${done ? 'class="list-group-item list-group-item-action active wd-color wd-follow"' : 
                          'class="list-group-item list-group-item-action wd-color wd-follow"'}
                       >
                        <div class="row">
                            <div class="col-xxl-2 col-xl-2 col-l-12">
                                <i class='fas fa-hashtag'></i>
                            </div>
                            <div class="col-xxl-10 col-xl-10 d-none d-xl-block">
                                Explore
                            </div>
                        </div>
                    </a>
                    <a href="https://en.wikipedia.org/wiki/The_Forever_War"
                       class="list-group-item list-group-item-action wd-color wd-follow">
                        <div class="row">
                            <div class="col-xxl-2 col-xl-2 col-l-12">
                                <i class="fa fa-bell"></i>
                            </div>
                            <div class="col-xxl-10 col-xl-10 d-none d-xl-block">
                                Notifications
                            </div>
                        </div>
                    </a>
                    <a href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
                       class="list-group-item list-group-item-action wd-color wd-follow">
                        <div class="row">
                            <div class="col-xxl-2 col-xl-2 col-l-12">
                                <i class='fas fa-envelope-open'></i>
                            </div>
                            <div class="col-xxl-10 col-xl-10 d-none d-xl-block">
                                Messages
                            </div>
                        </div>
                    </a>
                    <a href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
                       class="list-group-item list-group-item-action wd-color wd-follow">
                        <div class="row">
                            <div class="col-xxl-2 col-xl-2 col-l-12">
                                <i class='fas fa-bookmark'></i>
                            </div>
                            <div class="col-xxl-10 col-xl-10 d-none d-xl-block">
                                Bookmarks
                            </div>
                        </div>
                    </a>
                    <a href="https://en.wikipedia.org/wiki/The_Forever_War"
                       class="list-group-item list-group-item-action wd-color wd-follow">
                        <div class="row">
                            <div class="col-xxl-2 col-xl-2 col-l-12">
                                <i class='fas fa-list'></i>
                            </div>
                            <div class="col-xxl-10 col-xl-10 d-none d-xl-block">
                                Lists
                            </div>
                        </div>
                    </a>
                    <a href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
                       class="list-group-item list-group-item-action wd-color wd-follow">
                        <div class="row">
                            <div class="col-xxl-2 col-xl-2 col-l-12">
                                <i class='fas fa-user-alt'></i>
                            </div>
                            <div class="col-xxl-10 col-xl-10 d-none d-xl-block">
                                Profile
                            </div>
                        </div>
                    </a>
                    <a href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
                       class="list-group-item list-group-item-action wd-color wd-follow">
                        <div class="row">
                            <div class="col-xxl-2 col-xl-2 col-l-12">
                                <i class="fa fa-ellipsis-h"></i>
                            </div>
                            <div class="col-xxl-10 col-xl-10 d-none d-xl-block">
                                More
                            </div>
                        </div>
                    </a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;