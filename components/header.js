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
				<li><a href="#">A Propos</a></li>
				<li><a href="#">Nos Services</a></li>
				<li><a href="#">Portfolio</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</nav>
	</header>

    </>
  )
}
