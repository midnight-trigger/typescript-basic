// オプションパラメータを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if(userId === 'ABC') {
    console.log('function parameters sample 1: signedin!', username)
    return true
  } else {
    console.log('function parameters sample 2: not signedin!')
    return false
  }
}

// デフォルトパラメータを持つ関数
export const isUserSignedIn2 = (userId: string, username = "NO NAME"): boolean => {
  if(userId === 'ABC') {
    console.log('function parameters sample 3: signedin!', username)
    return true
  } else {
    console.log('function parameters sample 4: not signedin!')
    return false
  }
}

// レストパラメータを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice
  }, 0)
}

// 呼び出しシグネチャ(省略記法)
type LogMessage = (message: string) => void
export const logMessage6: LogMessage = message => {
  console.log('function parameters sample 6:', message)
}

// 呼び出しシグネチャ(完全系)
type FullLogMessage = {
  (message: string): void
}
export const logMessage7: FullLogMessage = message => {
  console.log('function parameters sample 7:', message)
}
