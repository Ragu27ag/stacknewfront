
import * as api from '../Axios/api.js'
import { setcurrentuser } from './currentuser.js'

export const login = (authData,navigate) => async(dispatch) => {
    
            try {
                
                const {data} = await api.login(authData)
                dispatch({type : 'AUTH',data})
                dispatch(setcurrentuser( JSON.parse(localStorage.getItem('Profile'))))
                navigate('/')
            } catch (error) {
                console.log(error)
            }
}

export const signup = (authData,navigate) => async(dispatch) => {
    try {
        const {data} = await api.signup(authData)
        dispatch({type : 'AUTH',data})
        dispatch(setcurrentuser( JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}