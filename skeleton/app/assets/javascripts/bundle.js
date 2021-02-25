/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js")

$(() => {
    const button_follow_toggle = $('button.follow-toggle')

    button_follow_toggle.each( function(idx,button){
       new FollowToggle($(button));
        
  
    })
    }
)
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map