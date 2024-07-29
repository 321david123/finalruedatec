'use client'
import Script from "next/script"
import Link from 'next/link'
export default function component() {
    return (
    <>
    <meta charSet="utf-8" />
      <title>RuedaTec</title>
      <meta
        name="description"
        content="Haciendo realidad la independencia a través de la innovacion - RuedaTec"
      />
      <meta name="keywords" content="Ruedatec,rueda,tec,roedatec,ruedaotec" />
      <meta
        property="og:description"
        content="Somos RuedaTec y estamos brindando el mejor feedback a las personas que mas lo necesitan"
      />
      <meta property="og:title" content="RuedaTec" />
      <link rel="icon" type="image/jpg" href="/favicon.ico"/>
      <meta property="og:site_name" content="RuedaTec" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link
        href="https://ruedatec.com/css/stylss.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://321david123.github.io/RuedaTec/css/newone3.webflow.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://321david123.github.io/RuedaTec/css/normalize.css"
        rel="stylesheet"
        type="text/css"
      />
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link
        href="https://fonts.gstatic.com"
        rel="preconnect"
        crossOrigin="anonymous"
      />
      <link rel="shortcut icon" type="image/x-icon" />
      {/* Google tag (gtag.js) */}
      <link
        href="https://321david123.github.io/images/favicon.ico"
        rel="icon"
        type="image/x-icon"
      />
      <link
        href="https://321david123.github.io/images/favicon.ico"
        rel="apple-touch-icon"
      />
      {/* the changes are : copy all the header and change it for the one that we have right now using, you have to change the links from 
    the logo thats all the way down in this code so in the footer theres is thi logo from instagram and you have to delete it. Then the images that change their resolution when a pixel screen change
  so you have to delete them and its basically all for now, keep this text for other people to underestand the standards */}
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
      >
        <div className="nav-container">
          <a href="./otros.html" className="w-nav-brand">
            <h1>
              <span className="text-span nav-link">RuedaTec</span>
            </h1>
          </a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <Link href="/" className="nav-link w-nav-link">
              <div className='nav-link w-nav-link' style={{padding: '0', opacity:'0.6'}} >ChatBot</div>
            </Link>
            <Link href="/models" className="nav-link w-nav-link">
              <button className='nav-link w-nav-link' style={{padding: '0'}} >Modelos</button>
            </Link>
            <Link href="./conocenos" className="nav-link w-nav-link">
              Conócenos
            </Link>
            <a href="./otros.html" className="nav-link w-nav-link">
              Prototipo
            </a>
            <a href="./otros.html" className="nav-link w-nav-link">
              Contáctanos
            </a>
          </nav>
            {/* <Router>
              <Link to="/components/modelos.js" className="nav-link w-nav-link">
                <button
                  className="nav-link w-nav-link"
                  style={{ padding: "0" }}
                >
                  Modelos
                </button>
              </Link>
              <Link to="./otros.html" className="nav-link w-nav-link">
                Conócenos
              </Link>
              <Link to="./otros.html" className="nav-link w-nav-link">
                Prototipo
              </Link>
              <Link to="./otros.html" className="nav-link w-nav-link">
                Contáctanos
              </Link>

              <Routes>
                <Route
                  path="/components/modelos.js"
                  element={<Modelos />}
                ></Route>
              </Routes>
            </Router> */}
          <div className="menu-button w-nav-button">
            <div className="w-icon-nav-menu" />
          </div>
        </div>
      </div>
      <section className="hero-section">
        <div className="container">
          <div
            id="w-node-f5554f2b-3c94-20f3-9c18-509064ad2564-b7a0dbc7"
            className="w-layout-layout hero-layout wf-layout-layout"
          >
            <div
              id="w-node-bebb4308-ec37-fc22-920b-0b26a2e63bb0-b7a0dbc7"
              className="w-layout-cell"
            >
              <div className="cell-content link">
                <div className="w-layout-vflex">
                  <h1>We are trying something</h1>
                  <h3 className="heading-4">
                    Haciendo realidad la independencia a través de la innovacion
                  </h3>
                </div>
                <h3 className="bottom-heading" />
                <img
                //   src={head1}
                //   loading="lazy"
                //   sizes="(max-width: 479px) 94vw, 90vw"
                  // width={480}
                  // height={4}
                    src="https://ruedatec.com/images/Cell-Background-1_1-p-3200.jpg"
                  alt=""
                  className="background-image"
                />
                <h3 className="heading-4">
                  RuedaTec, una nueva perspectiva de movilidad. Con energía
                  solar y diseño ergonómico, llevamos la comodidad y eficiencia
                  a otro nivel.
                </h3>
              </div>
            </div>
            <div
              id="w-node-c0f84a9c-8ad0-8cfd-bd8c-8c60b5c0ac2e-b7a0dbc7"
              className="w-layout-cell cell-2"
            >
              <a href="#" className="cell-content link w-inline-block">
                <img
                //   src={head2}
                  loading="lazy"
                  sizes="(max-width: 479px) 94vw, 90vw"
                  srcSet="https://ruedatec.com/images/Cell-Background-2_1-p-500.jpg 500w, https://ruedatec.com/images/Cell-Background-2_1-p-800.jpg 800w, https://ruedatec.com/images/Cell-Background-2_1-p-1080.jpg 1080w, https://ruedatec.com/images/Cell-Background-2_1-p-1600.jpg 1600w, https://ruedatec.com/images/Cell-Background-2_1-p-2000.jpg 2000w, https://ruedatec.com/images/Cell-Background-2_1-p-2600.jpg 2600w"
                  alt=""
                  className="background-image"
                />
                <div className="text-small">Apoyanos</div>
                <h3 className="bottom-heading">Aporta la causa</h3>
                <p className="paragraph">
                  Siempre estamos al tanto de una aportación/punto de vista, ya
                  que este dispositivo esta 100% orientado a la experiencia del
                  usuario
                </p>
                <div className="w-layout-hflex flex-block">
                  <div className="div-block">
                    <div className="arrow-button w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 56 56"
                        fill="none"
                        preserveAspectRatio="xMidYMid meet"
                        aria-hidden="true"
                        role="img"
                      >
                        <circle
                          cx={28}
                          cy={28}
                          r={28}
                          fill="currentColor"
                          fillOpacity="0.14"
                        />
                        <path
                          d="M20 20H36.5M36.5 20V36.5M36.5 20L20 36.5"
                          stroke="currentColor"
                          strokeOpacity="0.6"
                          strokeWidth={2}
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div
              id="w-node-bbd27371-9bb1-6706-c64c-75d4e25fa3f6-b7a0dbc7"
              className="w-layout-cell cell"
            >
              <a href="#" className="cell-content link w-inline-block">
                <div className="text-small">Conoce</div>
                <div className="w-layout-hflex bottom-content-wrapper">
                  <h3 className="bottom-heading">Explora lo que creamos</h3>
                  <div className="arrow-button w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 56 56"
                      fill="none"
                      preserveAspectRatio="xMidYMid meet"
                      aria-hidden="true"
                      role="img"
                    >
                      <circle
                        cx={28}
                        cy={28}
                        r={28}
                        fill="currentColor"
                        fillOpacity="0.14"
                      />
                      <path
                        d="M20 20H36.5M36.5 20V36.5M36.5 20L20 36.5"
                        stroke="currentColor"
                        strokeOpacity="0.6"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                </div>
                <img
                //   src={head3}
                  loading="lazy"
                  sizes="(max-width: 479px) 94vw, 90vw"
                  srcSet="https://ruedatec.com/images/Cell-Background-3_1-p-500.jpg 500w, https://ruedatec.com/images/Cell-Background-3_1-p-800.jpg 800w, https://ruedatec.com/images/Cell-Background-3_1-p-1080.jpg 1080w,https://ruedatec.com/images/Cell-Background-3_1-p-1600.jpg 1600w, https://ruedatec.com/images/Cell-Background-3_1-p-2000.jpg 2000w"
                  alt="head image"
                  className="background-image"
                />
              </a>
            </div>
            <div
              id="w-node-_3224759f-9ebf-818d-22dc-08c24f109a9e-b7a0dbc7"
              className="w-layout-cell"
            >
              <a href="#" className="cell-content link w-inline-block">
                <div className="text-small">Historia</div>
                <div className="w-layout-hflex bottom-content-wrapper">
                  <h3 className="bottom-heading">Revisa lo que hacemos</h3>
                  <div className="arrow-button w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 56 56"
                      fill="none"
                      preserveAspectRatio="xMidYMid meet"
                      aria-hidden="true"
                      role="img"
                    >
                      <circle
                        cx={28}
                        cy={28}
                        r={28}
                        fill="currentColor"
                        fillOpacity="0.14"
                      />
                      <path
                        d="M20 20H36.5M36.5 20V36.5M36.5 20L20 36.5"
                        stroke="currentColor"
                        strokeOpacity="0.6"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                </div>
                <img
                  src="https://ruedatec.com/images/Cell-Background-4_1Cell-Background-4.webp"
                  loading="lazy"
                  sizes="(max-width: 479px) 94vw, 90vw"
                  srcSet="https://ruedatec.com/images/Cell-Background-4_1-p-500.jpg 500w, https://ruedatec.com/images/Cell-Background-4_1-p-800.jpg 800w, https://ruedatec.com/images/Cell-Background-4_1-p-1080.jpg 1080w, https://ruedatec.com/images/Cell-Background-4_1-p-1600.jpg 1600w,https://ruedatec.com/images/Cell-Background-4_1-p-2000.jpg 2000w, https://ruedatec.com/images/Cell-Background-4_1-p-2600.jpg 2600w"
                  alt=""
                  className="background-image"
                />
              </a>
            </div>
            <div
              id="w-node-_44980477-7cdf-1efd-e4ea-de46a6e57e68-b7a0dbc7"
              className="w-layout-cell"
            >
              <div className="cell-content link">
                <div className="text-small">Contactános</div>
                <div className="w-layout-hflex bottom-content-wrapper">
                  <h3 className="bottom-heading">Hablános</h3>
                  <div className="text-small align-right">
                    Nos darás y te darás la oportunidad de poder subir de nivel
                  </div>
                </div>
                <img
                  src="https://ruedatec.com/images/Cell-Background-5_1Cell-Background-5.webp"
                  loading="lazy"
                  sizes="(max-width: 479px) 94vw, 90vw"
                  srcSet="https://ruedatec.com/images/Cell-Background-5_1-p-500.jpg 500w, https://ruedatec.com/images/Cell-Background-5_1-p-800.jpg 800w, https://ruedatec.com/images/Cell-Background-5_1-p-1080.jpg 1080w, https://ruedatec.com/images/Cell-Background-5_1-p-1600.jpg 1600w, https://ruedatec.com/images/Cell-Background-5_1-p-2000.jpg 2000w, https://ruedatec.com/images/Cell-Background-5_1-p-2600.jpg 2600w, https://ruedatec.com/images/Cell-Background-5_1-p-3200.jpg 3200w"
                  alt=""
                  className="background-image"
                />
              </div>
            </div>
            <div
              id="w-node-_50da1f94-70e8-0fbf-e7c9-5b19968f27fc-b7a0dbc7"
              className="w-layout-cell"
            >
              <div className="cell-content link">
                <div className="text-small">Mejoras</div>
                <div className="w-layout-hflex bottom-content-wrapper">
                  <h3 className="bottom-heading">Puedes aportar algo?</h3>
                  <div className="text-small align-right">
                    Contáctanos y ayudanos a poder ser mejores
                  </div>
                </div>
                <img
                  src="https://ruedatec.com/images/Cell-Background-6_1Cell-Background-6.webp"
                  loading="lazy"
                  sizes="(max-width: 479px) 94vw, 90vw"
                  srcSet="https://ruedatec.com/images/Cell-Background-6_1-p-500.jpg 500w, https://ruedatec.com/images/Cell-Background-6_1-p-800.jpg 800w, https://ruedatec.com/images//Cell-Background-6_1-p-1080.jpg 1080w, https://ruedatec.com/images/Cell-Background-6_1-p-1600.jpg 1600w, https://ruedatec.com/images/Cell-Background-6_1-p-2000.jpg 2000w, https://ruedatec.com/images/Cell-Background-6_1-p-2600.jpg 2600w, https://ruedatec.com/images/Cell-Background-6_1-p-3200.jpg 3200w"
                  alt=""
                  className="background-image"
                />
              </div>
            </div>
            <div
              id="w-node-_261f42b0-2a38-5143-0038-3c8264976b34-b7a0dbc7"
              className="w-layout-cell"
            >
              <div className="cell-content link">
                <div className="text-small">Visualiza</div>
                <div className="w-layout-hflex bottom-content-wrapper">
                  <h3 className="bottom-heading">
                    Mantente al tanto del avance
                  </h3>
                </div>
                <img
                  src="https://ruedatec.com/images/Cell-Background-7_1Cell-Background-7.webp"
                  loading="lazy"
                  sizes="(max-width: 479px) 94vw, 90vw"
                  srcSet="https://ruedatec.com/images/Cell-Background-7_1-p-500.jpg 500w, https://ruedatec.com/images/Cell-Background-7_1-p-800.jpg 800w,https://ruedatec.com/images/Cell-Background-7_1-p-1080.jpg 1080w, https://ruedatec.com/images/Cell-Background-7_1-p-1600.jpg 1600w, https://ruedatec.com/images/Cell-Background-7_1-p-2000.jpg 2000w, https://ruedatec.com/images/Cell-Background-7_1-p-2600.jpg 2600w, https://ruedatec.com/images/Cell-Background-7_1-p-3200.jpg 3200w"
                  alt=""
                  className="background-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-testimonial">
        <div className="container">
          <div className="w-layout-vflex">
            <h2 className="text-small margin-bottom-24px">Testimonio</h2>
            <p className="testimonial-text">
              &quot;RuedaTec, la solución que cambia vidas. Convierte sillas de
              ruedas manuales en eléctricas y sostenibles mediante su sistema
              modular. Libertad, independencia y tecnología al alcance de todos.
              Descubre una nueva forma de moverte con RuedaTec&quot;
            </p>
            <div className="heading-3">- Miguel</div>
          </div>
        </div>
      </section>
      <section className="section-gallery">
        <div className="container">
          <h2 className="text-small margin-bottom-24px">Galeria</h2>
          <h2 className="section-heading">Realmente nos importan</h2>
          <div
            id="w-node-_1e591282-db20-5282-d0cc-51b429cfd9fa-b7a0dbc7"
            className="w-layout-layout gallery-layout wf-layout-layout"
          >
            <div
              id="w-node-_1e591282-db20-5282-d0cc-51b429cfd9fb-b7a0dbc7"
              className="w-layout-cell"
            >
              <img
                src="https://ruedatec.com/images/WhatsApp-Image-2023-07-31-at-7.06.47-PM.jpeg"
                loading="lazy"
                width={929}
                sizes="90vw"
                srcSet="https://ruedatec.com/images/WhatsApp-Image-2023-07-31-at-7.06.47-PM-p-500.jpeg 500w, https://ruedatec.com/images/WhatsApp-Image-2023-07-31-at-7.06.47-PM-p-800.jpeg 800w, https://ruedatec.com/images/WhatsApp-Image-2023-07-31-at-7.06.47-PM.jpeg 1024w"
                alt=""
                className="image"
              />
            </div>
            <div
              id="w-node-_33227e8a-f9f2-4220-632e-b0756f5df79d-b7a0dbc7"
              className="w-layout-cell"
            >
              <img
                src="https://ruedatec.com/images/WhatsApp-Image-2023-07-31-at-7.06.47-PM-5.jpeg"
                loading="lazy"
                sizes="90vw"
                srcSet="https://ruedatec.com/images/WhatsApp-Image-2023-07-31-at-7.06.47-PM-5-p-500.jpeg 500w, https://ruedatec.com/images/WhatsApp-Image-2023-07-31-at-7.06.47-PM-5-p-800.jpeg 800w, https://ruedatec.com/images/WhatsApp-Image-2023-07-31-at-7.06.47-PM-5.jpeg 981w"
                alt=""
              />
              <h3>Antes de todo...</h3>
              <div className="text-small max-width-35ch">
                Realizamos un diseño 3D antes que nada en la aplicacion de
                blender para poder darnos una idea sobre lo que podiamos lograr
                y tener un buen inicio para la construccion
              </div>
            </div>
            <div
              id="w-node-_7809e0aa-9b61-91c8-de0f-af5f0ef6f7ac-b7a0dbc7"
              className="w-layout-cell"
            >
              <img
                src="https://ruedatec.com/images/WhatsApp-Image-2023-07-31-at-7.06.47-PM-4.jpeg"
                loading="lazy"
                sizes="90vw"
                srcSet="https://ruedatec.com/images/WhatsApp-Image-2023-07-31-at-7.06.47-PM-4-p-500.jpeg 500w, https://ruedatec.com/images/WhatsApp-Image-2023-07-31-at-7.06.47-PM-4-p-800.jpeg 800w, https://ruedatec.com/images/WhatsApp-Image-2023-07-31-at-7.06.47-PM-4.jpeg 940w"
                alt=""
              />
              <h3>Pensamos en todo.</h3>
            </div>
            <div
              id="w-node-d80f2d0c-008a-9eb7-3b4a-710e3fa5ebf3-b7a0dbc7"
              className="w-layout-cell"
            >
              <img
                // src={image1}
                src="https://ruedatec.com/images/WhatsApp-Image-2023-07-31-at-7.19.18-PM.jpeg"
                loading="lazy"
                sizes="(max-width: 1422px) 90vw, 1280px"
                srcSet="https://ruedatec.com/images/WhatsApp-Image-2023-07-31-at-7.19.18-PM-p-500.jpeg 500w, https://ruedatec.com/images/WhatsApp-Image-2023-07-31-at-7.19.18-PM-p-800.jpeg 800w, https://ruedatec.com/images/WhatsApp-Image-2023-07-31-at-7.19.18-PM-p-1080.jpeg 1080w, https://ruedatec.com/images/WhatsApp-Image-2023-07-31-at-7.19.18-PM.jpeg 1280w"
                alt=""
                className="image-2"
              />
              <h3>La app.</h3>
              <div className="text-small max-width-35ch">
                La aplicación de RuedaTec, esta siendo creada con la tecnología
                de Flutter, es la clave para interactuar con tu silla de ruedas
                de manera inteligente. Controla la velocidad, dirección y
                funciones especiales con tan solo deslizar tu dedo. Diseñada
                para brindar una experiencia intuitiva y personalizable, la
                aplicación Flutter te permitirá vivir la movilidad en su máxima
                expresión. Descubre el futuro de la movilidad con la app de
                &nbsp;RuedaTec en tus manos.
              </div>
            </div>
          </div>
        </div>
        <h3 className="heading-2">
          &quot;¡Cambiemos juntos el rumbo hacia la inclusión! RuedaTec, el
          aliado que promueve la igualdad y la autonomía en cada
          movimiento.&quot; - The team
        </h3>
        <h3 className="heading-2">
          &quot;Movilidad sostenible, inclusión imparable. Descubre ruedaTec y
          haz que cada recorrido sea una experiencia llena de libertad.&quot; -
          Jesús
        </h3>
      </section>
      {/* <div className="section-footer">n
      <div className="container">
        <div className="footer-content-wrapper">
          <a href="#" className="brand w-nav-brand" />
          <div className="footer-content-right">
            <div className="footer-column last">
              <ul role="list" className="footer-list w-list-unstyled" />
            </div>
            <div className="footer-column last">
              <h5 className="footer-header">Organización</h5>
              <ul role="list" className="footer-list w-list-unstyled">
                <li className="footer-list-item">
                  <a href="#" className="footer-link">
                    Informacion
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-link">
                    Ayudanos
                    <br />
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-link">
                    Contactanos
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column last">
              <h5 className="footer-header">Social</h5>
              <ul role="list" className="footer-list w-list-unstyled">
                <li className="footer-list-icon">
                  <a
                    aria-label="Webflow's Instagram page"
                    rel="noopener"
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="footer-link w-inline-block"
                  >
                    <div aria-label="hidden" className="w-embed">
                      <svg
                        width={18}
                        height={19}
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.28999 0.991399C6.24999 0.941406 6.55999 0.941406 8.99999 0.941406C11.44 0.941406 11.75 0.941406 12.72 0.991399C13.4651 1.00749 14.2022 1.14947 14.9 1.41134C16.1042 1.8878 17.0518 2.84977 17.51 4.06096C17.7719 4.75865 17.9139 5.49561 17.93 6.24065C17.98 7.20051 17.98 7.51047 17.98 9.95012C17.98 11.4375 17.9614 12.1185 17.9469 12.65C17.9376 12.9903 17.93 13.2693 17.93 13.6596C17.9139 14.4046 17.7719 15.1416 17.51 15.8393C17.0426 17.0469 16.0878 18.0016 14.88 18.4689C14.1822 18.7308 13.4451 18.8728 12.7 18.8889C11.74 18.9388 11.43 18.9388 8.99027 18.9388H8.98999C7.50235 18.9388 6.82135 18.9203 6.28974 18.9058C5.94941 18.8965 5.67031 18.8889 5.27999 18.8889C4.53485 18.8728 3.79779 18.7308 3.1 18.4689C1.89018 17.9994 0.935014 17.0407 0.469999 15.8293C0.208096 15.1316 0.0660938 14.3946 0.0499999 13.6496C0 12.6897 0 12.3798 0 9.94012C0 7.50047 0 7.19052 0.0499999 6.22065C0.0660938 5.47561 0.208096 4.73866 0.469999 4.04096C0.939608 2.83132 1.8984 1.87629 3.11 1.41134C3.80779 1.14947 4.54485 1.00749 5.28999 0.991399ZM12.6406 2.61249C11.6906 2.5625 11.4006 2.5625 9.00061 2.5625V2.5825C7.52013 2.5825 6.84346 2.60136 6.32148 2.61592C5.99376 2.62505 5.72702 2.63249 5.36062 2.63249C4.79035 2.63982 4.22553 2.74465 3.69062 2.94245C2.91752 3.24733 2.30556 3.85921 2.00062 4.6322C1.8028 5.16704 1.69796 5.73177 1.69062 6.30196C1.64062 7.25183 1.64062 7.53179 1.64062 9.94144C1.64062 11.4217 1.65949 12.0983 1.67405 12.6202C1.68319 12.9479 1.69062 13.2146 1.69062 13.5809C1.69796 14.1511 1.8028 14.7158 2.00062 15.2507C2.30556 16.0237 2.91752 16.6355 3.69062 16.9404C4.22553 17.1382 4.79035 17.2431 5.36062 17.2504C6.31062 17.3004 6.59061 17.3004 9.00061 17.3004C10.4811 17.3004 11.1578 17.2815 11.6797 17.267C12.0075 17.2578 12.2742 17.2504 12.6406 17.2504C13.2109 17.2431 13.7757 17.1382 14.3106 16.9404C15.0837 16.6355 15.6957 16.0237 16.0006 15.2507C16.1984 14.7158 16.3033 14.1511 16.3106 13.5809C16.3606 12.6311 16.3606 12.3511 16.3606 9.94144C16.3606 8.46117 16.3417 7.78459 16.3272 7.26269C16.318 6.93502 16.3106 6.66832 16.3106 6.30196C16.3033 5.73177 16.1984 5.16704 16.0006 4.6322C15.6957 3.85921 15.0837 3.24733 14.3106 2.94245C13.7769 2.73783 13.212 2.62622 12.6406 2.61249Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.37891 9.93965C4.37891 7.38846 6.44735 5.32031 8.9989 5.32031C10.2242 5.32031 11.3993 5.80699 12.2657 6.67329C13.1321 7.53958 13.6189 8.71453 13.6189 9.93965C13.6189 12.4908 11.5505 14.559 8.9989 14.559C6.44735 14.559 4.37891 12.4908 4.37891 9.93965ZM6 9.94043C6 11.5973 7.34315 12.9404 9 12.9404C9.79565 12.9404 10.5587 12.6244 11.1213 12.0617C11.6839 11.4991 12 10.7361 12 9.94043C12 8.28358 10.6569 6.94043 9 6.94043C7.34315 6.94043 6 8.28358 6 9.94043Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.7988 6.2225C14.3952 6.2225 14.8788 5.73897 14.8788 5.1425C14.8788 4.54603 14.3952 4.0625 13.7988 4.0625C13.2023 4.0625 12.7188 4.54603 12.7188 5.1425C12.7188 5.73897 13.2023 6.2225 13.7988 6.2225Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="horizontal-divider" />
        <div className="footer-lower-wrapper">
          <div className="terms-container">
            <div className="copyright-wrapper">
              <div>© 2023 RuedaTec</div>
            </div>
            <div className="terms-links">
              <a href="#" className="footer-link terms last">
                Politica de privacidad
              </a>
              <a href="#" className="footer-link terms">
                Terminos de uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> */}
      <div className="section-footer">
        <div className="container">
          <div className="footer-content-wrapper">
            <a href="#" className="brand w-nav-brand" />
            <div className="footer-content-right">
              <div className="footer-column last">
                <ul role="list" className="footer-list w-list-unstyled" />
              </div>
              <div className="footer-column last">
                <h5 className="footer-header">Organización</h5>
                <ul role="list" className="footer-list w-list-unstyled">
                  <li className="footer-list-item">
                    <a href="#" className="footer-link">
                      Informacion
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-link">
                      Ayudanos
                      <br />
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-link">
                      Contactanos
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-column last">
                <h5 className="footer-header">Social</h5>
                <ul role="list" className="footer-list w-list-unstyled">
                  <li className="footer-list-icon">
                    <a
                      aria-label="Webflow's Instagram page"
                      rel="noopener"
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="footer-link w-inline-block"
                    >
                      <div aria-label="hidden" className="w-embed">
                        <svg
                          width={18}
                          height={19}
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.28999 0.991399C6.24999 0.941406 6.55999 0.941406 8.99999 0.941406C11.44 0.941406 11.75 0.941406 12.72 0.991399C13.4651 1.00749 14.2022 1.14947 14.9 1.41134C16.1042 1.8878 17.0518 2.84977 17.51 4.06096C17.7719 4.75865 17.9139 5.49561 17.93 6.24065C17.98 7.20051 17.98 7.51047 17.98 9.95012C17.98 11.4375 17.9614 12.1185 17.9469 12.65C17.9376 12.9903 17.93 13.2693 17.93 13.6596C17.9139 14.4046 17.7719 15.1416 17.51 15.8393C17.0426 17.0469 16.0878 18.0016 14.88 18.4689C14.1822 18.7308 13.4451 18.8728 12.7 18.8889C11.74 18.9388 11.43 18.9388 8.99027 18.9388H8.98999C7.50235 18.9388 6.82135 18.9203 6.28974 18.9058C5.94941 18.8965 5.67031 18.8889 5.27999 18.8889C4.53485 18.8728 3.79779 18.7308 3.1 18.4689C1.89018 17.9994 0.935014 17.0407 0.469999 15.8293C0.208096 15.1316 0.0660938 14.3946 0.0499999 13.6496C0 12.6897 0 12.3798 0 9.94012C0 7.50047 0 7.19052 0.0499999 6.22065C0.0660938 5.47561 0.208096 4.73866 0.469999 4.04096C0.939608 2.83132 1.8984 1.87629 3.11 1.41134C3.80779 1.14947 4.54485 1.00749 5.28999 0.991399ZM12.6406 2.61249C11.6906 2.5625 11.4006 2.5625 9.00061 2.5625V2.5825C7.52013 2.5825 6.84346 2.60136 6.32148 2.61592C5.99376 2.62505 5.72702 2.63249 5.36062 2.63249C4.79035 2.63982 4.22553 2.74465 3.69062 2.94245C2.91752 3.24733 2.30556 3.85921 2.00062 4.6322C1.8028 5.16704 1.69796 5.73177 1.69062 6.30196C1.64062 7.25183 1.64062 7.53179 1.64062 9.94144C1.64062 11.4217 1.65949 12.0983 1.67405 12.6202C1.68319 12.9479 1.69062 13.2146 1.69062 13.5809C1.69796 14.1511 1.8028 14.7158 2.00062 15.2507C2.30556 16.0237 2.91752 16.6355 3.69062 16.9404C4.22553 17.1382 4.79035 17.2431 5.36062 17.2504C6.31062 17.3004 6.59061 17.3004 9.00061 17.3004C10.4811 17.3004 11.1578 17.2815 11.6797 17.267C12.0075 17.2578 12.2742 17.2504 12.6406 17.2504C13.2109 17.2431 13.7757 17.1382 14.3106 16.9404C15.0837 16.6355 15.6957 16.0237 16.0006 15.2507C16.1984 14.7158 16.3033 14.1511 16.3106 13.5809C16.3606 12.6311 16.3606 12.3511 16.3606 9.94144C16.3606 8.46117 16.3417 7.78459 16.3272 7.26269C16.318 6.93502 16.3106 6.66832 16.3106 6.30196C16.3033 5.73177 16.1984 5.16704 16.0006 4.6322C15.6957 3.85921 15.0837 3.24733 14.3106 2.94245C13.7769 2.73783 13.212 2.62622 12.6406 2.61249Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.37891 9.93965C4.37891 7.38846 6.44735 5.32031 8.9989 5.32031C10.2242 5.32031 11.3993 5.80699 12.2657 6.67329C13.1321 7.53958 13.6189 8.71453 13.6189 9.93965C13.6189 12.4908 11.5505 14.559 8.9989 14.559C6.44735 14.559 4.37891 12.4908 4.37891 9.93965ZM6 9.94043C6 11.5973 7.34315 12.9404 9 12.9404C9.79565 12.9404 10.5587 12.6244 11.1213 12.0617C11.6839 11.4991 12 10.7361 12 9.94043C12 8.28358 10.6569 6.94043 9 6.94043C7.34315 6.94043 6 8.28358 6 9.94043Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.7988 6.2225C14.3952 6.2225 14.8788 5.73897 14.8788 5.1425C14.8788 4.54603 14.3952 4.0625 13.7988 4.0625C13.2023 4.0625 12.7188 4.54603 12.7188 5.1425C12.7188 5.73897 13.2023 6.2225 13.7988 6.2225Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="horizontal-divider" />
          <div className="footer-lower-wrapper">
            <div className="terms-container">
              <div className="copyright-wrapper">
                <div>© 2023 RuedaTec</div>
              </div>
              <div className="terms-links">
                <a href="#" className="footer-link terms last">
                  Politica de privacidad
                </a>
                <a href="#" className="footer-link terms">
                  Terminos de uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script
        async
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64a6075f43011bbeb7a0db92"
        type="text/javascript"
      ></Script>
      <Script async src="https://ruedatec.com/js/newjs.js"></Script>
      {/* <script src='https://ruedatec.com/js/webflow.js'></script> */}
    </>
    );
  }