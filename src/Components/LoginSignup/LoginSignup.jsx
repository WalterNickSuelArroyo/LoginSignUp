import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {
    const [action, setAction] = useState("Iniciar sesión")
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Iniciar sesión" ? <div></div> : <div className="input">
                    <img src={user_icon} />
                    <input type="text" placeholder='Nombre' />
                </div>}
                <div className="input">
                    <img src={email_icon} />
                    <input type="email" placeholder='Correo' />
                </div>
                <div className="input">
                    <img src={password_icon} />
                    <input type="password" placeholder='Contraseña' />
                </div>
            </div>
            {action==="Registrarse" ? <div></div> : <div className="forgot-password">¿Olvidaste tu contraseña? <span>Click Aqui!</span></div>}
            
            <div className="submit-container">
                <div className={action === "Iniciar sesión" ? "submit gray" : "submit"} onClick={() => { setAction("Registrarse") }}>Registrarse</div>
                <div className={action === "Registrarse" ? "submit gray" : "submit"} onClick={() => { setAction("Iniciar sesión") }}>Iniciar sesión</div>
            </div>
        </div>
    )
}

export default LoginSignup