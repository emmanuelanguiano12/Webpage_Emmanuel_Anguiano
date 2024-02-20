"use client"

import styles from '../../../styles/styles.module.css';
import React from 'react';
import 'animate.css';

export default function ContactFunction() {
    const copiarTexto = async () => {
        const textoCopiado = 'emmanuelanguiano120502@gmail.com';
        try {
            await navigator.clipboard.writeText(textoCopiado);
            console.log('Contenido copiado al portapapeles');
            mostrarAlerta();
        } catch (error) {
            console.log(error);
        }
    };

    const mostrarAlerta = () => {
        const alerta = document.createElement('div');
        alerta.className = 'p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 fixed top-0 left-0 w-full z-50';
        alerta.setAttribute('role', 'alert');
        alerta.innerHTML = `
            <span class="font-medium">Info alert!</span> Copied to clipboard
        `;
        document.body.insertBefore(alerta, document.body.firstChild);
        setTimeout(() => {
            document.body.removeChild(alerta);
        }, 3000);
    };


    return (
        <>
            <h2 className="text-7xl py-4 text-white animate__animated animate__backInDown">Contact</h2>
            <div className='flex'>
                <div className={`${styles.square} ${styles.linkedin}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className={styles.content}>
                        <h2>LinkedIn</h2>
                        <p>You can contact me on LinkedIn</p>
                        <a href="https://www.linkedin.com/in/emmanuel-anguiano-058021291/" target="_blank">@Emmanuel Anguiano</a>
                    </div>
                </div>
                <div className={`${styles.square} ${styles.gmail}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className={styles.content}>
                        <h2>Gmail</h2>
                        <p>Send me an email</p>
                        {/* Agregamos el evento onClick para llamar a la función copiarTexto */}
                        <a href="#" onClick={copiarTexto}>Copy to clipboard</a>
                    </div>
                </div>
            </div>
        </>
    )
}
