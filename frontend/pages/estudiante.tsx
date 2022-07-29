import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Login() {
    return (
        <div>
            <div className="LogoUleam">
                <img src="../IMG/logouleam.png" />
            </div>
            <div className="NAV">
                <a href="../LOGIN/login-inicio.html"><h3>Inicio</h3></a>
            </div>
            <div className="login-form">
                <h1>Iniciar Sesión </h1>
                <h1>Estudiante </h1>
                <div className="form-group ">
                    <input type="text" className="form-control" placeholder="Usuario " id="UserName" required />
                        <i className="fa fa-user"></i>
                </div>
                <div className="form-group log-status">
                    <input type="password" className="form-control" placeholder="Contraseña" id="Passwod" required />
                        <span className="icon-eye">
                            <i className="fa-solid fa-eye-slash"></i>
                        </span>
                </div>
                <a className="link" href="#">Forgort your password?</a>
                <a href="../ESTUDIANTE/MenuE.html" type="button" className="log-btn"  >Iniciar sesion </a>
            </div>
        </div>
    );

}