import { auth } from './auth'
import { counter } from './counter'

export const rootObj = {
    data1: 100,
    data2: "test"
}

const state = {
    ...rootObj,
    auth,
    counter,
}

export type Store = typeof state;

export default state;