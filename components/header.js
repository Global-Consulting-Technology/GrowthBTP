export default function Header() {
  return (
    <>
    
    <header className="header-area">
		<a href="home.html" className="logo-area">
			<img src="/img/logo.png" alt=""/>
		</a>
		<div className="nav-switch">
			<i className="fa fa-bars"></i>
		</div>
		<div className="phone-number">+221 33 821 14 55</div>
		<nav className="nav-menu">
			<ul>
				<li className="active"><a href="/">Accueil</a></li>
				<li><a href="#about">A Propos</a></li>
				<li><a href="#services">Nos Services</a></li>
				<li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	</header>

    </>
  )
}
