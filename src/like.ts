export class Like {
    constructor(private likeCount:number, private isSelected:boolean) {
        
    }

    onClickLike() {
        this.likeCount += (this.isSelected) ? -1 : +1;
        this.isSelected = !this.isSelected;

        console.log("like count : "+this.likeCount, 'isselected: ' + this.isSelected);        
    }
}