import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/"><a className="navbar-brand">Pictures App</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active"> <Link href="/"><a className="nav-link">Home</a></Link></li>
                <li className="nav-item active"> <Link href="/about"><a className="nav-link">About</a></Link></li>
           
            </ul>
            
        </div>
    </nav>

)

export default Navbar;