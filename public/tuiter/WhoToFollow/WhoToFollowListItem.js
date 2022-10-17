const WhoToFollowListItem = (who) => {
    return(`
           <a href="https://en.wikipedia.org/wiki/Dune_(novel)"
                       class="list-group-item list-group-item-action wd-follow ">
                        <div class="row">
                            <div class="col-xxl-2 col-xl-2 col-lg-2">
                                <img src=${who.avatarIcon} width="100%" height="100%" class="rounded-circle">
                            </div>
                            <div class="col-xxl-7 col-xl-6 col-lg-5 ">
                                <div class="fw-bolder">
                                    ${who.userName}

                                    <i class="fa fa-check-circle"></i>
                                </div>
                                <div >
                                    @${who.handle}
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-4 col-lg-5">
                                <button class="btn btn-light w-100 mt-1 rounded-pill">
                                    Follow
                                </button>
                            </div>
                        </div>

                    </a>
   `);
}
export default WhoToFollowListItem;
