"use strict";
exports.__esModule = true;
var Like = /** @class */ (function () {
    function Like(likeCount, isSelected) {
        this.likeCount = likeCount;
        this.isSelected = isSelected;
    }
    Like.prototype.onClickLike = function () {
        this.likeCount += (this.isSelected) ? -1 : +1;
        this.isSelected = !this.isSelected;
        console.log("like count : " + this.likeCount, 'isselected: ' + this.isSelected);
    };
    return Like;
}());
exports.Like = Like;
