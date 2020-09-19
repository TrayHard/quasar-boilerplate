import { auth } from './auth'
import { counter } from './counter'

export const rootObj = {
    data1: 100,
    data2: "test"
}

export default {
    ...rootObj,
    auth,
    counter,
}
