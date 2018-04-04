export class Point {

    constructor(private _x?: number, private _y?:number){}
   
    draw(){
      console.log('x: '+ this._x, 'y: '+ this._y);
    }
  
    public set x(v : number) {
      this._x = v;
    }
    
    public set y(v : number) {
      this._y = v;
    }
    
    public get x() : number {
      return this._x
    }
    
    public get y() : number {
      return this._y;
    }
  }
  