const FollowToggle = require('./follow_toggle.js')

$(() => {
    const button_follow_toggle = $('button.follow-toggle')

    button_follow_toggle.each( function(idx,button){
       new FollowToggle($(button));
        
  
    })
    }
)