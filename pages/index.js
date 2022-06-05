import dynamic from 'next/dynamic'
import React from 'react'

const Header = dynamic(() => import('../components/header'))
export default function Home() {

  React.useEffect(()=>{
    var hero_s = $(".hero-slider");
  hero_s.owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      items: 1,
      dots: false,
      animateOut: 'fadeOutRight',
    animateIn: 'fadeInLeft',
      navText: ['<i className="fa fa-long-arrow-left"></i> PREV', 'NEXT<i className="fa fa-long-arrow-right"></i>'],
      smartSpeed: 1200,
      autoHeight: false,
      autoplay: true,
      mouseDrag: false,
      onInitialized: function() {
        var a = this.items().length;
        if(a < 10){
            $("#snh-1").html("<span>01" + " / </span>0" + a);
         } else{
           $("#snh-1").html("<span>01" + " / </span>" + a);
         }
      }
  }).on("changed.owl.carousel", function(a) {
      var b = --a.item.index, a = a.item.count;
      if(a < 10){
        $("#snh-1").html("<span>0" + ( 1 > b ? b + a : b > a ? b - a : b) + " / </span>0" + a);
    } else{
      $("#snh-1").html("<span> "+ (1 > b ? b + a : b > a ? b - a : b) + " / </span>" + a);
    }
  });

  var project = $('#projects-carousel').owlCarousel({
		nav: true,
		loop: true,
		margin:20,
		navText: ['<i className="fa fa-long-arrow-left"></i> PREV', 'NEXT<i className="fa fa-long-arrow-right"></i>'],
		responsive:{
			0:{
				items:1,
				margin: 0
			},
			600:{
				items:2
			},
			800:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			},
		}
	});

  /* animate filter */
	var owlAnimateFilter = function(even) {
		$(this)
		.addClass('__loading')
		.delay(70 * $(this).parent().index())
		.queue(function() {
			$(this).dequeue().removeClass('__loading')
		});
	}
	/* Projects filter */
	$('.projects-filter-nav li').on('click', function(e) {
		var filter_data = $(this).data('filter');

		/* return if current */
		if($(this).hasClass('btn-active')) return;

		/* active current */
		$(this).addClass('btn-active').siblings().removeClass('btn-active');

		/* Filter */
		project.owlFilter(filter_data, function(_owl) { 
			$(_owl).find('.single-project').each(owlAnimateFilter); 
		});
	});
  })

  return (
    <>
       <Header />
        
       <section className="hero-section">
          <div className="left-bar">
            <div className="left-bar-content">
              <div className="social-links">
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
              </div>
            </div>
          </div>

          <div className="hero-slider">
          <div className="hero-slide-item set-bg" data-setbg="img/hero4.webp">
              <div className="slide-inner">
                <div className="slide-content">
                  <h2 style={{textTransform: 'uppercase'}}>études <br/>matériaux <br/> construction</h2>
                </div>	
              </div>
            </div>
            <div className="hero-slide-item set-bg" data-setbg="img/hero5.webp">
              <div className="slide-inner">
                <div className="slide-content">
                <h2 style={{textTransform: 'uppercase'}}>immobilier <br/>assurance <br/> location/vente</h2>
                </div>	
              </div>
            </div>
          <div className="hero-slide-item set-bg" data-setbg="img/hero6.webp">
              <div className="slide-inner">
                <div className="slide-content">
                <h2 style={{textTransform: 'uppercase'}}>Formation <br/>Consulting</h2>
                </div>	
              </div>
            </div>
            	
            	
          </div>

          <div className="slide-num-holder" id="snh-1"></div>
		      <div className="hero-right-text">GROWTH BTP</div>
       </section>

       <section id="about" className="intro-section pt100 pb50">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 intro-text mb-5 mb-lg-0">
                <h2 className="sp-title">Nous bâtissons vos <span>idées</span></h2>
                <p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula. Curabitur finibus dolor vel lectus pretium interdum a eget ante. Morbi rhoncus feugiat imperdiet. Curabitur non maximus leo. Nulla in ipsum sed magna egestas bibendum. Integer in sem sagittis, commodo mi sit amet, commodo nibh. Suspendisse potenti. Aliquam erat volutpat. Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada, accumsan pellentesque ipsum.</p>
              </div>
              <div className="col-lg-5 pt-4">
                <img src="img/intro.png" alt=""/>
              </div>
            </div>
          </div>
        </section>

        <section id='services' className="service-section spad">
		<div className="container">
			<div className="section-title">
				<h2>Services</h2>
			</div>
			<div className="row">
				<div className="col-lg-4 col-md-6">
					<div className="service-box">
						<div className="sb-icon">
							<div className="sb-img-icon">
								<img src="deal.png" alt=""/>
							</div>
						</div>
						<h3>Immobilier</h3>
						<p>Location - Vente - Rénovation - Aménagement - Copropriété - Investissement</p>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="service-box">
						<div className="sb-icon">
							<div className="sb-img-icon">
								<img src="brickwall.png" alt=""/>
							</div>
						</div>
						<h3>construction</h3>
						<p>Matériaux - Pilotage - Suivi - Maitrîse d'ouvrage</p>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="service-box">
						<div className="sb-icon">
							<div className="sb-img-icon">
								<img src="blueprint.png" alt=""/>
							</div>
						</div>
						<h3>Architecture</h3>
						<p>Analyse de faisabilité - Elaboration de planning - Maitrîse d'oeuvre - Obtention de permis de construire - Elaboration de plans et maquettes</p>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="service-box">
						<div className="sb-icon">
							<div className="sb-img-icon">
								<img src="life-insurance.png" alt=""/>
							</div>
						</div>
						<h3>Assurance</h3>
						<p>Incendies - Inondations - Evenements climatiques - Vol et Vandalisme - Assistance</p>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="service-box">
						<div className="sb-icon">
							<div className="sb-img-icon">
								<img src="presentation.png" alt=""/>
							</div>
						</div>
						<h3>Formation</h3>
						<p>Technologie des bâtiments - Conception de projets - Géotechnique - Contrôle Technique Construction - Conduite de chantier</p>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="service-box">
						<div className="sb-icon">
							<div className="sb-img-icon">
								<img src="passport.png" alt=""/>
							</div>
						</div>
						<h3>Voyage</h3>
						<p>Promotion Touristique - Réservation / Annulation de vols - Location Véhicule - Visite Site Touristique - Installation GPS sur véhicules</p>
					</div>
				</div>
			</div>
		</div>
	</section>

  <div id='portfolio' className="projects-section pb50">
		<div className="container">
			<div className="row">
				<div className="col-lg-3">
					<div className="section-title">
						<h1>Portfolio</h1>
					</div>
				</div>
				<div className="col-lg-9">
					<ul className="projects-filter-nav">
						<li className="btn-filter" data-filter="*">All</li>
						<li className="btn-filter" data-filter=".rest">Restaurations</li>
						<li className="btn-filter" data-filter=".build">Buildings</li>
						<li className="btn-filter" data-filter=".apart">Apartments</li>
					</ul>
				</div>
			</div>
		</div>                      
		<div id="projects-carousel" className="projects-slider">
			<div className="single-project set-bg rest" data-setbg="img/projects/1.jpg">
				<div className="project-content">
					<h2>Biggest <br/> Restaurations</h2>
					<p>Jan 19, 2018</p>
					<a href="#" className="seemore">See Project </a>
				</div>
			</div>
			<div className="single-project set-bg build" data-setbg="img/projects/2.jpg">
				<div className="project-content">
					<h2>Office <br/> Building</h2>
					<p>Jan 19, 2018</p>
					<a href="#" className="seemore">See Project </a>
				</div>
			</div>
			<div className="single-project set-bg apart" data-setbg="img/projects/3.jpg">
				<div className="project-content">
					<h2>Nice <br/> Apartments</h2>
					<p>Jan 19, 2018</p>
					<a href="#" className="seemore">See Project </a>
				</div>
			</div>
			<div className="single-project set-bg rest" data-setbg="img/projects/4.jpg">
				<div className="project-content">
					<h2>Biggest <br/> Restaurations</h2>
					<p>Jan 19, 2018</p>
					<a href="#" className="seemore">See Project </a>
				</div>
			</div>
			<div className="single-project set-bg apart" data-setbg="img/projects/2.jpg">
				<div className="project-content">
					<h2>Office <br/> Building</h2>
					<p>Jan 19, 2018</p>
					<a href="#" className="seemore">See Project </a>
				</div>
			</div>
		</div>
	</div>

	<section id='contact' className="page-section pt100">
		<div className="container pb100">
			<div className="section-title pt-5">
				<h1>Contactez-Nous</h1>
			</div>
			<div className="row">
				<div className="col-lg-3 contact-info mb-5 mb-lg-0">
					<p>Adresse: 1481 Creekside Lane Avila Beach, CA 93424 </p>
					<p>Téléphone: +53 345 7953 32453</p>
					<p>Email: contact@growth-btp.com</p>
					<div className="cf-social">
						<a href="#"><i className="fa fa-instagram"></i></a>
						<a href="#"><i className="fa fa-facebook"></i></a>
						<a href="#"><i className="fa fa-linkedin"></i></a>
					</div>
				</div>
				<div className="col-lg-9">
					<form className="contact-form">
						<input type="text" placeholder="Entrer Votre Nom"/>
						<input type="text" placeholder="Entrer votre email"/>
						<textarea placeholder="Dîtes nous quelque chose..."></textarea>
						<button className="site-btn sb-dark" type='submit'>Envoyer</button>
					</form>
				</div>
			</div>
		</div>
		<div className="map-area" id="map-canvas"></div>
	</section>

	<footer class="footer-section">
		<div class="footer-social">
			<div class="social-links">
				<a href="#"><i class="fa fa-linkedin"></i></a>
				<a href="#"><i class="fa fa-instagram"></i></a>
				<a href="#"><i class="fa fa-facebook"></i></a>
			</div>
		</div>
	<div class="copyright">Copyright Growth BTP &copy; <script>document.write(new Date().getFullYear());</script> Tout droit réservé.</div>
    </footer>
    </>
  )
}
