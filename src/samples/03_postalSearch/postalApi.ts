import jsonp from 'jsonp'

type ApiResult = {
  status: number
  results: {
    address1: string
    address2: string
    address3: string
  }[]
}

// 株式会社アイビスの郵便番号検索APIを使用しています：
// http://zipcloud.ibsnet.co.jp/doc/api
const ENDPOINT = 'https://zipcloud.ibsnet.co.jp/api/search'
export const postalApi = async (postalCode: string): Promise<string[]> => {
  if (!postalCode.match(/^[0-9]{7}$/)) return []

  const url = `${ENDPOINT}?zipcode=${postalCode}`
  const data = await new Promise<ApiResult>((resolve, reject) => {
    jsonp(url, {}, (err, data) => {
      if (err) reject(err)
      resolve(data as ApiResult)
    })
  })
  console.log(data)
  if (data.status !== 200 || !data.results) {
    return []
  }
  return data.results.map((result) => `${result.address1} ${result.address2} ${result.address3}`)
}
