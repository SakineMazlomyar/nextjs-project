import Link from 'next/link';
import css from './style.navbar.module.scss'
const Navbar = () => (
    <nav className={css.navbar}>
        <Link href="/"><a>Posts App</a></Link>
    </nav>

)

export default Navbar;  