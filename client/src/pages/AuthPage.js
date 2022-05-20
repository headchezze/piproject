import React, {useState} from 'react'

export const AuthPage = () => {
    const [form, setForm] = useState({
        email: '', password: ''
    })
    
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value })
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
                        <button className="btn ldeep-purple lighten-3" style={{marginLeft: 85, marginRight: 30}}>Войти в систему</button>
                        <button className="btn deep-orange lighten-1">Зарегистрироваться</button>
                    </div>
                </div>
                <h8>Учебный проект по ПИ</h8>
            </div>
        </div>
    )
}