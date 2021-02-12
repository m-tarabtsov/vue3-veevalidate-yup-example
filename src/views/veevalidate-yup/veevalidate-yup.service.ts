import { http } from '@/services'
import { ILoginType } from '@/types'

const prefix = 'auth'

class ValidationExample {
  login (data: ILoginType) {
    return http.post(`/${prefix}/login`, data)
  }
}

export const validationExample = new ValidationExample()
