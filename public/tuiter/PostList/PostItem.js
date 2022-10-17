const PostItem = (post) => {
    let blank = false;
    if (post.info == null){
        blank = true;
    }
    return(`

               <li class="list-group-item wd-color">
                        <div class="row">
                            <div>
                                <div class="fw-bolder">
                                    <span>
                                     <img src=${post.avatarIcon} width="10%" height="10%" class="rounded-circle">
                                    </span>
                                    ${post.userName}
                                    <i class="fa fa-check-circle"></i>
                                    <span class=text-secondary>
                                        @${post.handle}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                                ${post.title}
                        </div>
                        <div class="row mt-2">
                        <div>
                                   <figure  >
                                        <img src=${post.image}
                                     
                                              style="border-radius: 6% 6% 0 0 ">
                                              
                                        <figcaption 
                                        >
                                            
                                            
                                            <b>
                                            ${post.infoTitle}
                                            
                                            
                                                
                                                
                                            </b>
                                            <br>
                                            <span class="text-secondary" >  
                                                ${post.info}
                                                <br>
                                               

                                                    ${post.linked}
                                                  
                                                <br>
                                             <br>
                                            </span>
                                    </figcaption>
                                   </figure>

                </div>
                </div>
                <div class="row">
                     <ul class="wd-nav-tabs">
                        <li class="col-3"><a href="#" style="text-decoration: none" class="wd-unselected"><i class='far fa-comment' style='font-size:15px'></i> ${post.chat}</a></li>
                        <li class="col-3"><a href="#" style="text-decoration: none" class="wd-unselected "><i class='fas fa-sync-alt' style='font-size:15px'></i> ${post.retweet}</a></li>
                        <li class="col-3"><a href="#" style="text-decoration: none" class="wd-unselected" ><i class="fa fa-heart" style="font-size:15px"></i> ${post.heart}</a></li>
                        <li class="col-2"><a href="#" style="text-decoration: none" class="wd-unselected"><i class='fas fa-upload' style='font-size:15px'></i></a></li>

                     </ul>
                </div>
                </li>
               
                
                     

       `);
}
export default PostItem;