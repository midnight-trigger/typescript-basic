export default function tupleSample() {
  // 一般的なタプルの型定義
  let response: [number, string] = [200, "OK"]
  // response = [400, "Bad Request", "email"]
  // response = ["ABC", 100]
  console.log("Array tuple sample 1:", response)

  // 可変長なタプル
  const girlfriends: [string, ...string[]] = ["Kana", "Miku", "Keiko"]
  girlfriends.push("Lisa")
  console.log("Array tuple sample 2:", girlfriends)
}
