class FollowToggle {
    constructor(el){
        debugger
        this.userId = el.data("user-id");
        this.followState = el.data("initial-follow-state");
        this.el = el;
    }

    render(){
        if (this.followState === "Unfollowed"){
            $('follow-toggle').text = "Follow!"
        }
    }

}




module.exports = FollowToggle;