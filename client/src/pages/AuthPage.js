import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'

export const AuthPage = () => {
    const auth = useContext(AuthContext)
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
            auth.login(data.token, data.userId)
        } catch (error) {
            
        }

    }

    const loginHandler = async () =>{
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            message(data.message)
        } catch (error) {
            
        }

    }

    return (
        <div className = "row">
            <div className="col s6 offset-s3">
                <h1>Сокращение ссылок</h1>
                <div className="card light-blue darken-3">
                    <div className="card-content white-text">
                        <span className="card-title" style={{marginLeft: 205}}>Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input placeholder="" 
                                       id="email"
                                       type="text"
                                       name="email"
                                       className="color-input"
                                       onChange={changeHandler}
                                       />
                                    <label htmlFor="email">Введите почту</label>
                            </div>

                            <div className="input-field">
                                <input placeholder=""
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
                        onClick={loginHandler}
                        disabled={loading}>
                        Войти в систему</button>
                        <button 
                        className="btn deep-orange lighten-1"
                        onClick={registerHandler}
                        disabled={loading}>
                        Зарегистрироваться</button>
                    </div>
                </div>
                <h8>Учебный проект по ПИ</h8>
            </div>
        </div>
    )
}