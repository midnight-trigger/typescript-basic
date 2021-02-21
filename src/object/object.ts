export default function objectSample() {
  // const a: object = {
  //   name: 'Junya',
  //   age: 27
  // }
  // a.name

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: "Japanese",
    name: "Japan"
  }
  console.log("Object object sample 1:", country)

  country = {
    language: "English",
    name: "USA"
  }
  console.log("Object object sample 2:", country)

  // オプショナルとreadonly
  const junya: {
    age: number,
    lastName: string,
    readonly firstName: string,
    gender?: string
  } = {
    age: 27,
    lastName: "Nishiwaki",
    firstName: "Junya"
  }
  junya.gender = "male"
  junya.lastName = "Test"
  // junya.firstName = "Test"
  console.log("Object object sample 3:", junya)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: "Tokyo",
    Kora: "Seoul"
  }
  capitals.China = "Beijing"
  capitals.Canada = "Ottawa"
  console.log("Object object sample 4:", capitals)
}
