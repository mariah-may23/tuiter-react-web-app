const PostSummaryItem = (post) => {
    return(`
           <li class="list-group-item wd-color wd-follow">
                        <div class="row">
                            <div class="col-xxl-10 col-xl-9 col-lg-8 col-md-9 col-sm-9">
                                <div class="text-secondary">
                                    ${post.topic}
                                </div>
                                <div class="fw-bolder">
                                    ${post.userName}
                                    <i class="fa fa-check-circle"></i>
                                    <span class="text-secondary fw-lighter">
                                        -${post.time}
                                    </span>
                                </div>
                                <div class="fw-bolder">
                                    ${post.title}
                                </div>
                            </div>
                            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-3 col-sm-3">
                                <img class="float-end" src=${post.image} height="100px" >
                            </div>
                        </div>
                    </li>
    
       `);
}
export default PostSummaryItem;