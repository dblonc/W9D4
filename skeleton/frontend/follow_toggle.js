class FollowToggle {
    constructor(el){
        this.userId = el.data("user-id");
        this.followState = el.data("initial-follow-state");
        this.el = el;
        this.render();
    }

    render(){
        if (this.followState === "unfollowed"){
            $('.follow-toggle').text("Follow!");
        }else {
            $('.follow-toggle').text("Unfollow!");
        }
    }

    handleClick(){
        this.el.on('click', event => {
            event.preventDefault();
            if (this.followState === 'unfollowed'){
                return $.ajax ({
                    method: 'POST',
                    url: 'users/${this.userId}/follow',
                    success: () => {
                        this.followState = 'followed';
                        this.render();                        
                    }
                });
            } else {
                return $.ajax({
                    method: 'DELETE',
                    url: 'users/${this.userId}/follow',
                    success: () => {
                        this.followState = 'unfollowed';
                        this.render();
                    }
                });
            }
            })
    }

}




module.exports = FollowToggle;