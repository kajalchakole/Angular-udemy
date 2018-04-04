
import { Point} from "./point";
import { Like } from "./like";
var point : Point = new Point(1, 2);
point.y = 4;
point.x = 3;
point.draw();
console.log('x: '+ point.x, 'y: ' + point.y);

let like = new Like(1, false);
like.onClickLike();
