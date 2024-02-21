import styles from '../../../styles/styles.module.css';
import 'animate.css';

export const metadata = {
 title: 'About page',
 description: 'Pagina sobre mi',
};

export default function AboutFunction() {
    return (
        <>
            <div className={styles.content}>
            <h2 className="text-7xl text-center animate__animated animate__backInDown">About me</h2>
                <p className="mt-4 text-lg animate__animated animate__bounceInRight">
                    Im a frontend developer who recently graduated from the University of Colima with a degree in Internet Technologies. I have a passion for building user-friendly and visually appealing web applications using modern technologies like HTML, CSS, and JavaScript.
                </p>
                <p className="mt-4 text-lg animate__animated animate__bounceInLeft">
                    I know how to use frameworks like React and Next.js to create dynamic and efficient web applications. These frameworks allow me to build interactive user interfaces and optimize performance for a seamless user experience.
                </p>
            </div>
        </>
        
    )
}