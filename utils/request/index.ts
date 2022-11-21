import axios from "axios"

type ResponseHandle = (data: ResponseData<any>) => unknown

interface RequestData {
  [key: string]: unknown
}

interface ResponseData<T> {
  errno: string
  errmsg: string
  data: T
}

const get = <T>(url: string, params: RequestData = {}, filter?: ResponseHandle): Promise<[any, ResponseData<T> | undefined]> =>
  new Promise((resolve) => {
    axios
      .get(url, { params })
      .then((result) => {
        let res: ResponseData<T>
        if (filter !== undefined) {
          res = filter(result.data) as unknown as ResponseData<T>
        } else {
          res = result.data as ResponseData<T>
        }
        resolve([null, res as ResponseData<T>])
      })
      .catch((err) => {
        resolve([err, undefined])
      })
  })