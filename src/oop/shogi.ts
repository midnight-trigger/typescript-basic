// type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
// type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
//
// // 駒の位置を表すクラス
// class Position {
//   constructor(private suji: Suji, private dan: Dan) {}
//
//   // パラメータに渡された位置と現在地を比較するメソッド
//   distanceFrom(position: Position, player: Player) {
//     if (player === 'first') {
//       return {
//         suji: Math.abs(position.suji - this.suji),
//         dan: Math.abs(Number(position.dan) - Number(this.dan)),
//       }
//     } else {
//       return {
//         suji: Math.abs(position.suji - this.suji),
//         dan: -(Math.abs(Number(position.dan) - Number(this.dan))),
//       }
//     }
//   }
// }
//
// // 駒を表すクラス
// abstract class Piece {
//   protected position: Position
//
//   constructor(private readonly player: Player, suji: Suji, dan: Dan) {
//     this.position = new Position(suji, dan)
//   }
//
//   // 駒移動用のメソッド
//   moveTo(position: Position) {
//     this.position = position
//   }
//
//   // 移動可能か判断するメソッド
//   abstract canMoveTo(position: Position, player: Player): boolean
// }
//
// class Osho extends Piece {
//   canMoveTo(position: Position, player: Player): boolean {
//     const distance = this.position.distanceFrom(position, player)
//     return (distance.suji < 2 && distance.dan < 2)
//   }
// }
//
// class Game {
//   private pieces = Game.makePirces()
//
//   private static makePirces() {
//     return [
//       new Osho('first', 5, '1'),
//       new Osho('second', 5, '9')
//     ]
//   }
// }
