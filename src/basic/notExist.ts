export default function notExistSample() {
  let name = null
  console.log("not exist sample 1:", typeof name, name)

  name = 'Junya'
  if (name) {
    console.log("not exist sample 2:", "名前は" + name)
  } else {
    console.log("not exist sample 3:", "名前はまだ" + name)
  }

  let age = undefined
  console.log("not exist sample 4:", typeof age, age)
  age = 23

  if (age) {
    console.log("not exist sample 5:", "年齢は" + age)
  } else {
    console.log("not exist sample 6:", "年齢は秘密です")
  }
}
