abstract class Game {
  abstract initialize():void
  abstract startPlay():void
  abstract endPlay():void
 play ():void{
  this.initialize()
  this.startPlay()
  this.endPlay()
 }
}
class Cricket extends Game {
  initialize(): void {
    throw new Error("Method not implemented.");
  }
  startPlay(): void {
    throw new Error("Method not implemented.");
  }
  endPlay(): void {
    throw new Error("Method not implemented.");
  }
 

}
class Football extends Game {
  initialize(): void {
    throw new Error("Method not implemented.");
  }
  startPlay(): void {
    throw new Error("Method not implemented.");
  }
  endPlay(): void {
    throw new Error("Method not implemented.");
  }
 
}
