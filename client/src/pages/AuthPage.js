import React, {useEffect,useState} from 'react'
import { useHttp } from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'

export const AuthPage = () => {
   const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })
    
    useEffect(() => {        
        message(error)
        clearError()
    }, [error, message, clearError])
    
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value })
    }
    
    const registerHandler = async () =>{
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log('Data', data)// я добавил
           // auth.login(data.token, data.userId)// было
        } catch (e) {}
    }

    /*const loginHandler = async () =>{
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            message(data.message)
        } catch (error) {
            
        }

    }*/

    return (
        <div className = "row">
            <div className="col s6 offset-s3">
                <h1>Сокращение ссылок</h1>
                <div className="card light-blue darken-3">
                    <div className="card-content white-text">
                        <span className="card-title" style={{marginLeft: 205}}>Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input 
                                    placeholder="" 
                                    id="email"
                                    type="text"
                                    name="email"                                       
                                    className="color-input"                                       
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Введите почту</label>
                            </div>

                            <div className="input-field">
                                <input 
                                    placeholder=""
                                    id="password"
                                    type="password"
                                    name= "password"
                                    className="color-input"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Введите пароль</label>
                            </div>
                            
                        </div>
                    </div>
                    <div className="card-action">
                        <button 
                        className="btn ldeep-purple lighten-3"  
                        style={{marginLeft: 85, marginRight: 30}}
                        //onClick={loginHandler}
                        disabled={loading}>
                        Войти в систему
                        </button>
                        <button 
                        className="btn deep-orange lighten-1"
                        onClick={registerHandler}
                        disabled={loading}>
                        Зарегистрироваться</button>
                    </div>
                </div>                
            </div>
        </div>
    )
}