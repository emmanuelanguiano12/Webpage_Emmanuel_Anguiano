import styles from '../../../styles/styles.module.css';
import 'animate.css';

export const metadata = {
 title: 'Projects Page',
 description: 'Pagina de proyectos',
};

export default function PricingPage() {
    return (
        <>
        <h2 className="text-7xl py-4 text-white animate__animated animate__backInDown">Projects</h2>
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Blog and Book Store
                </h3>
                <p className="my-4">
                This project is a comprehensive platform offering users a complete experience related to the field of programming and technology education.
                You can see the latest blogs and buy books.
                </p>
                </blockquote>
                <a href="https://github.com/emmanuelanguiano12/Nex13-Strapi-Back-Front">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Code
                    </span>
                </button>
                </a>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    URL Shortener App
                </h3>
                <p className="my-4">
                    This project use React and Vite.You can input your URL, and this app will generate a shorter URL with the apps domain.
                </p>
                </blockquote>
                <a href="https://github.com/emmanuelanguiano12/react-firebase9-router6-vite">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Code
                    </span>
                </button>
                </a>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Todo App
                </h3>
                <p className="my-4">
                    This is a Todo  app where you can add tasks and or delete them. It uses Next, Prisma, MongoDB, Clerk for the authentication and Flowbite for the Front
                </p>
                </blockquote>
                <a href="https://github.com/emmanuelanguiano12/clerk-prisma-zod-next">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Code
                    </span>
                </button>
                </a>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Realtime Chat
                </h3>
                <p className="my-4">
                This project is a real-time chat application, it uses Firebase for real-time database, and React as the framework.
                </p>
                </blockquote>
                <a href="https://github.com/emmanuelanguiano12/RealTimeChat-Firebase">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Code
                    </span>
                </button>
                </a>
            </figure>
        </div>
            <div className={`${styles.square} ${styles.github}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                <div className={styles.content}>
                    <h2>
                        Github
                    </h2>
                    <p>This is where I upload all my codes</p>
                    <a href="https://github.com/emmanuelanguiano12" target="_blank">@emmanuelanguiano12</a>
                </div>
            </div>
        </>
    )
}