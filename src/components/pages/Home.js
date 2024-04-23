import React, { useEffect } from "react";


function Home(){
    
    useEffect(() => {

        const mobileNavToogle = document.querySelector('.mobile-nav-toggle');
        if (mobileNavToogle) {
            mobileNavToogle.addEventListener('click', function(event) {
            event.preventDefault();

            document.querySelector('body').classList.toggle('mobile-nav-active');

            this.classList.toggle('bi-x');
            this.classList.toggle('bi-list');
            
            });
        }
        const handlePreloader = () => {
          const preloader = document.querySelector('#preloader');
          if (preloader) {
            preloader.remove();
          }
        };
    
        const handleScroll = () => {
          const selectHeader = document.querySelector('#header');
          if (selectHeader) {
            window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
          }
        };
    
        window.addEventListener('load', handlePreloader);
        document.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('load', handlePreloader);
          document.removeEventListener('scroll', handleScroll);
        };
        
      }, []);

    return (
    <>
    <header id="header" class="header fixed-top" data-scrollto-offset="0">
        <div class="container-fluid d-flex align-items-center justify-content-between">

        <a href="#" class="logo d-flex align-items-center scrollto me-auto me-lg-0">
          
            <img src="assets/img/vecteur.PNG" alt="" /> 
            {/* <h1>HeroBiz<span>.</span></h1> */}
        </a>

        <nav id="navbar" class="navbar">
            <ul>

            {/* <li class="dropdown"><a href="#"><span>Home</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                <li><a href="index.html">Home 1 - index.html</a></li>
                <li><a href="index-2.html">Home 2 - index-2.html</a></li>
                <li><a href="index-3.html" class="active">Home 3 - index-3.html</a></li>
                <li><a href="index-4.html">Home 4 - index-4.html</a></li>
                </ul>
            </li> */}
            <li><a class="nav-link scrollto" href="#"><strong>Accueil</strong></a></li>
            <li><a class="nav-link scrollto" href="#about"><strong>About</strong></a></li>
            <li><a class="nav-link scrollto" href="#services"><strong>Services</strong></a></li>
            <li><a class="nav-link scrollto" href="#recent-blog-posts"><strong>Nos Projets en cours</strong></a></li>
            <li><a class="nav-link scrollto" href="#contact"><strong>Contact</strong></a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle d-none"></i>
        </nav>

        <a class="btn-getstarted scrollto" href="#about"><strong>Commencer</strong></a>

        </div>
    </header>

    <section id="hero-fullscreen" class="hero-fullscreen d-flex align-items-center">
        <div class="container d-flex flex-column align-items-center position-relative" data-aos="zoom-out">
        <h2><strong>Sabour Global</strong><span><strong> Business</strong></span></h2>
        <p> "Votre Partenaire de Confiance pour des Infrastructures Durables et Innovantes" </p>
        <div class="d-flex">
            <a href="#about" class="btn-get-started scrollto"><strong>Commencer ici</strong></a>
            {/* <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> */}
        </div>
        </div>
    </section>

    <main id="main">

        <section id="about" class="about">
        <div class="container" data-aos="fade-up">

            <div class="section-header">
            <h2>A Propos de Nous</h2>
            <p>
                Nous sommes une entreprise dédiée à l'excellence dans le domaine du BTP (Bâtiment et Travaux Publics). 
            </p>
            </div>

            <div class="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">

            <div class="col-lg-5">
                <div class="about-img">
                <img src="assets/img/description.jpg" class="img-fluid" alt="" />
                </div>
            </div>

            <div class="col-lg-7">        
                
                <ul class="nav nav-pills mb-3">
                <li><a class="nav-link active" data-bs-toggle="pill" href="#tab1">Description</a></li>
                </ul>

                <div class="tab-content">

                <div class="tab-pane fade show active" id="tab1">

                    <p class="fst-italic">
                   
                        Chez Sabour Global Business, nous croyons en la qualité, l'intégrité et
                        la sécurité dans tout ce que nous entreprenons. Nous nous efforçons constamment
                        de surpasser les attentes en matière de qualité de construction, de gestion de 
                        projet et de service à la clientèle. Notre équipe dévouée de professionnels qualifiés
                        travaille avec un engagement inébranlable pour garantir la réussite de chaque projet, 
                        qu'il s'agisse de petites rénovations ou de grands projets de construction.
                        Nous nous engageons également à adopter des pratiques durables et respectueuses de l'environnement dans tous 
                        nos projets, contribuant ainsi à un avenir plus vert et plus durable pour les générations futures.
                        Que vous ayez besoin de services de construction, de gestion de projet ou de conseils experts, Sabour Global 
                        Business est votre partenaire de confiance dans le domaine du BTP. Nous sommes impatients de collaborer avec vous 
                        pour transformer vos idées en réalité et construire un avenir meilleur, ensemble.

                    </p>

                </div>

                </div>

            </div>

            </div>

        </div>
        </section>
        
        <section id="cta" class="cta">
        <div class="container" data-aos="zoom-out">

            <div class="row g-5">

            <div class="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
                <h3><em>NOTRE MISSION</em></h3>
                <p> 
                    Notre mission est d'exceller dans tous les aspects de notre métier, 
                    en mettant l'accent sur la qualité, l'intégrité et la sécurité.
                    Nous nous engageons à être à la pointe de l'innovation dans le secteur du BTP, 
                    en utilisant les dernières technologies et les meilleures pratiques de l'industrie 
                    pour réaliser des projets exceptionnels.
                </p>
                <a class="cta-btn align-self-start" href="#onfocus">Continuer</a>
            </div>

            <div class="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
                <div class="img">
                <img src="assets/img/mission.jpg" alt="" class="img-fluid" />
                </div>
            </div>

            </div>

        </div>
        </section>

        
        <section id="onfocus" class="onfocus">
        <div class="container-fluid p-0" data-aos="fade-up">

            <div class="row g-0">
            <div class="col-lg-6 video-play position-relative">
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox "></a>
            </div>
            <div class="col-lg-6">
                <div class="content d-flex flex-column justify-content-center h-100">
                <h3>Notre Vision</h3>
                <ul>
                    <li><i class="bi bi-check-circle"></i>Nous aspirons à devenir un leader reconnu dans le secteur du BTP en offrant des solutions innovantes et durables qui façonnent un avenir bâti sur l'excellence.</li>
                    <li><i class="bi bi-check-circle"></i>Notre vision est d'être le partenaire privilégié de nos clients, en leur offrant des services de construction de qualité supérieure qui dépassent constamment leurs attentes.</li>
                    <li><i class="bi bi-check-circle"></i>Notre ambition est de contribuer à la construction d'un monde meilleur en adoptant des pratiques éthiques, durables et respectueuses de l'environnement dans tous nos projets.</li>
                </ul>
                </div>
            </div>
            </div>

        </div>
        </section>

        <section id="services" class="services">
        <div class="container" data-aos="fade-up">

            <div class="section-header">
            <h2>Nos Services</h2>
            <p>Découvrez notre palette diversifiée de services, conçus sur mesure pour répondre à vos besoins et dépasser vos attentes.</p>
            </div>

            <div class="row gy-5">

            <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                <div class="service-item">
                <div class="img">
                    <img src="assets/img/residence-R+3.JPG" class="img-fluid" alt="" />
                </div>
                <div class="details position-relative">
                    <div class="icon">
                    <i class="bi bi-buildings"></i>
                    </div>
                    <a class="stretched-link">
                    <h3>Construction résidentielle</h3>
                    </a>
                    <p>
                        Cette activité implique la construction de maisons individuelles, d'appartements, 
                        de condominiums et d'autres structures résidentielles.
                    </p>
                </div>
                </div>
            </div>

            <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                <div class="service-item">
                <div class="img">
                    <img src="assets/img/hydraulique2.jpg" class="img-fluid" alt="" />
                </div>
                <div class="details position-relative">
                    <div class="icon">
                    <i class="bi bi-water"></i>
                    </div>
                    <a class="stretched-link">
                    <h3>Hydraulique et Assainissement</h3>
                    </a>
                    <p>
                        Ces activités incluent la conception et la construction de 
                        réseaux d'approvisionnement en eau potable, de systèmes de drainage des eaux pluviales, 
                        de stations d'épuration des eaux usées, de réseaux d'égouts, et d'autres infrastructures 
                        liées à la gestion de l'eau et à l'assainissement.
                    </p>
                </div>
                </div>
            </div>

            <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                <div class="service-item">
                <div class="img">
                    <img src="assets/img/genie_civil.jpg" class="img-fluid" alt="" />
                </div>
                <div class="details position-relative">
                    <div class="icon">
                    <i class="bi bi-cone-striped"></i>
                    </div>
                    <a class="stretched-link">
                    <h3>Génie civil</h3>
                    </a>
                    <p>
                        Cette activité englobe la construction d'infrastructures publiques telles que 
                        les routes, les ponts, les tunnels, les barrages, les ports, les aéroports, les canalisations, etc.
                    </p>
                </div>
                </div>
            </div>

            <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="500">
                <div class="service-item">
                <div class="img">
                    <img src="assets/img/travaux-renovation-maison.jpeg" class="img-fluid" alt="" />
                </div>
                <div class="details position-relative">
                    <div class="icon">
                    <i class="bi bi-paint-bucket"></i>
                    </div>
                    <a class="stretched-link">
                    <h3>Rénovation et réhabilitation</h3>
                    </a>
                    <p>
                    Il s'agit de la restauration, de la rénovation ou de la modernisation des bâtiments existants pour 
                    les rendre plus fonctionnels, esthétiques ou conformes aux normes actuelles.
                    </p>
                    <a class="stretched-link"></a>
                </div>
                </div>
            </div>

            <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="600">
                <div class="service-item">
                <div class="img">
                    <img src="assets/img/hangar-projet.jpeg" class="img-fluid" alt="" />
                </div>
                <div class="details position-relative">
                    <div class="icon">
                    <i class="bi bi-building"></i>
                    </div>
                    <a class="stretched-link">
                    <h3>Construction industrielle</h3>
                    </a>
                    <p>
                        Cette activité concerne la construction d'installations industrielles telles que des usines, 
                        des entrepôts, des complexes industriels, des installations de traitement, etc.
                    </p>
                    <a class="stretched-link"></a>
                </div>
                </div>
            </div>

            <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="700">
                <div class="service-item">
                <div class="img">
                    <img src="assets/img/terrassement-2.jpg" class="img-fluid" alt="" />
                </div>
                <div class="details position-relative">
                    <div class="icon">
                    <i class="bi bi-cone"></i>
                    </div>
                    <a class="stretched-link">
                    <h3>Travaux de terrassement et de fondation</h3>
                    </a>
                    <p>
                        Ces activités comprennent l'excavation, le nivellement du terrain, la préparation du sol et la 
                        construction des fondations nécessaires pour soutenir les structures bâties dessus.
                    </p>
                    <a class="stretched-link"></a>
                </div>
                </div>
            </div>

            </div>

        </div>
        </section>

        <section id="recent-blog-posts" class="recent-blog-posts">

        <div class="container" data-aos="fade-up">

            <div class="section-header">
            <h2>Nos Projets en Cours</h2>
            {/* <p>Recent posts form our Blog</p> */}
            </div>

            <div class="row">

            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div class="post-box">
                <div class="post-img"><img src="assets/img/tawfekh.jpg" class="img-fluid" alt="" /></div>
                <div class="meta">
                    {/* <span class="post-date">Tue, December 12</span>
                    <span class="post-author"> / Julia Parker</span> */}
                </div>
                <h3 class="post-title">Projet de construction résidence tawfekh à Touba</h3>
                </div>
            </div>

            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="400">
                <div class="post-box">
                <div class="post-img"><img src="assets/img/residence-R+3.JPG" class="img-fluid" alt="" /></div>
                <div class="meta">
                    {/* <span class="post-date">Fri, September 05</span>
                    <span class="post-author"> / Mario Douglas</span> */}
                </div>
                <h3 class="post-title">Immeuble R+3 Moustapha et Ibrahima à OUAKAM</h3>
                </div>
            </div>

            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="600">
                <div class="post-box">
                <div class="post-img"><img src="assets/img/PHOTO-2024-04-18-10-57-00.jpg" class="img-fluid" alt="" /></div>
                <div class="meta">
                    {/* <span class="post-date">Tue, July 27</span>
                    <span class="post-author"> / Lisa Hunter</span> */}
                </div>
                <h3 class="post-title">Usine Savon Mbao</h3>
                </div>
            </div>

            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div class="post-box">
                <div class="post-img"><img src="assets/img/hangar-projet.jpeg" class="img-fluid" alt="" /></div>
                <div class="meta">
                    {/* <span class="post-date">Tue, December 12</span>
                    <span class="post-author"> / Julia Parker</span> */}
                </div>
                <h3 class="post-title">Projet réhabilitation hangar et aménagement pharmaceutique socafi pharma 2</h3>
                </div>
            </div>

            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="400">
                <div class="post-box">
                <div class="post-img"><img src="assets/img/Daar-noor.jpg" class="img-fluid" alt="" /></div>
                <div class="meta">
                    {/* <span class="post-date">Fri, September 05</span>
                    <span class="post-author"> / Mario Douglas</span> */}
                </div>
                <h3 class="post-title">Projet de construction résidence Darr Nouhr à Touba</h3>
                </div>
            </div>

            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="600">
                <div class="post-box">
                <div class="post-img"><img src="assets/img/taysir.jpg" class="img-fluid" alt="" /></div>
                <div class="meta">
                    {/* <span class="post-date">Tue, July 27</span>
                    <span class="post-author"> / Lisa Hunter</span> */}
                </div>
                <h3 class="post-title">Projet de construction résidence Taysir</h3>
                </div>
            </div>

            </div>

        </div>

        </section>

       
        <section id="contact" class="contact">
        <div class="container">

            <div class="section-header">
            <h2>Contact</h2>
            {/* <p>Ea vitae aspernatur deserunt voluptatem impedit deserunt magnam occaecati dssumenda quas ut ad dolores adipisci aliquam.</p> */}
            </div>

        </div>

        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d241.13354910244544!2d-17.46556815652199!3d14.76132263699987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2ssn!4v1713792527872!5m2!1sfr!2ssn" frameborder="0" allowfullscreen></iframe>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d241.13354910244544!2d-17.46556815652199!3d14.76132263699987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2ssn!4v1713792527872!5m2!1sfr!2ssn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>

        <div class="container">

            <div class="row gy-5 gx-lg-5">

            <div class="col-lg-4">

                <div class="info">
                <h3>Nous Contacter</h3>
                <p>Pour prendre Contact avec nous :</p>

                <div class="info-item d-flex">
                    <i class="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                    <h4>Adresse :</h4>
                    <p>Yoff Apecsy 1, Villa Nº141</p>
                    </div>
                </div>

                <div class="info-item d-flex">
                    <i class="bi bi-envelope flex-shrink-0"></i>
                    <div>
                    <h4>Email :</h4>
                    <p>contact@Sabour-global-business.com</p>
                    </div>
                </div>

                <div class="info-item d-flex">
                    <i class="bi bi-phone flex-shrink-0"></i>
                    <div>
                    <h4>Telephone :</h4>
                    <p>+221 77 156 69 55 / +221 33 868 00 80</p>
                    </div>
                </div>

                </div>

            </div>

            <div class="col-lg-8">
                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                <div class="row">
                    <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Votre Nom" required />
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Votre Adresse Email" required />
                    </div>
                </div>
                <div class="form-group mt-3">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Objet" required />
                </div>
                <div class="form-group mt-3">
                    <textarea class="form-control" name="message" placeholder="Message" required></textarea>
                </div>
                <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Envoyer le Message</button></div>
                </form>
            </div>

            </div>

        </div>
        </section>

      

    </main>
    </>
    );
}

export default Home;