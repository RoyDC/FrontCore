import { LogOut, Home, CreditCard, PiggyBank, MoreHorizontal } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.js'
import Logo from '../ui/Logo.jsx'

const NAV_LINKS = [
  { to: '/dashboard', label: 'Dashboard', Icon: Home },
  { to: '/solicitudes', label: 'Créditos', Icon: CreditCard },
  { to: '/cartera', label: 'Cartera', Icon: MoreHorizontal },
  { to: '/ahorros', label: 'Ahorros', Icon: PiggyBank },
]

export default function Navbar() {
  const { user, cerrarSesion } = useAuth()
  const location = useLocation()

  return (
    <header className="navbar">
      <div className="navbar__brand">
        <Logo size={38} variant="light" />
      </div>

      <nav className="navbar__nav">
        {NAV_LINKS.map(({ to, label, Icon }) => (
          <Link
            key={to}
            to={to}
            className={'navbar__link' + (location.pathname === to ? ' active' : '')}
          >
            <Icon size={16} strokeWidth={2.2} />
            {label}
          </Link>
        ))}
      </nav>

      <div className="navbar__user">
        {user && (
          <span className="navbar__user-info">
            <span className="navbar__user-name">{user.nombre}</span>
            <span className="navbar__user-role">{user.rol}</span>
          </span>
        )}
        <button className="navbar__logout" onClick={cerrarSesion}>
          <LogOut size={15} strokeWidth={2.4} /> Salir
        </button>
      </div>
    </header>
  )
}
