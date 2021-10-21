import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Vercel</span> Demo
      </h1>
      <p className={headerStyles.description}>

      </p>
    </div>
  )
}

export default Header
