import Link from "next/link"
import Headroom from 'react-headroom'

function Header(props) {
    return (
        <Headroom>
            <Link href='/'><a>Mavon.ie</a></Link>
            <Link href='/blog'><a>Blog</a></Link>
        </Headroom>
    );
}

export default Header;