import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/welcome'>Welcome</Link>
        </li>
        <li>
          <Link href='/usagedetail'>Usage Detail</Link>
        </li>
        <li>
          <Link href='/highbill'>High Bill Alert</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
