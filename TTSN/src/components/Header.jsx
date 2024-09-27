import Logo from '/Logo.webp'
import './Header.css'

export default function Header() {
  return (
    <header>
      <nav>
        <img
          src={Logo} 
          alt='Logo representativo de ingenieria de software'
          width='50'
          height='50'
        />
        <ul>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        <section>
          <button>Login</button>
          <button>Register</button>
        </section>
      </nav>
    </header>
  )
}