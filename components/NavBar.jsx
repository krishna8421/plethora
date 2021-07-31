import styles from '../styles/NavBar.module.scss'


function NavBar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <h3>Plethora</h3>
            </div>
            <div className={styles.links}>
                <ul>
                    <li>Service</li>
                    <li>Roadmap</li>
                    <li>Blog</li>
                    <li>Login</li>
                </ul>

                <button className={styles.signup}>
                    Create Account
                </button>
            </div>
        </div>
    )
}

export default NavBar
