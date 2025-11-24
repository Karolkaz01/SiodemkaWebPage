import "./styles.css";
import logo from "./images/logoSiodemka.png";

const highlights = [
  {
    title: "Profesjonalna jakość druku, która robi wrażenie",
    body: "Zamów materiały, które wyróżnią Twoją firmę. Od wizytówek po wielkoformatowe banery – drukujemy z pasją i precyzją.",
  },
  {
    title: "Druk, który trafia w sedno",
    body: "Niech Twoje projekty przemówią głośno i wyraźnie. Oferujemy ekspresowy druk, atrakcyjne ceny i doradztwo na każdym etapie.",
  },
  {
    title: "Kolory, które żyją – jakość, która trwa",
    body: "Nasze technologie druku zapewniają intensywne barwy i trwałość na lata. Sprawdź ofertę i przekonaj się sam!",
  },
  {
    title: "Druk ekspresowy – gotowe nawet w 24h!",
    body: "Potrzebujesz materiałów na już? Zrealizujemy Twoje zamówienie błyskawicznie, bez kompromisów w jakości.",
  },
];

const services = [
  "Banery i wydruki wielkoformatowe",
  "Oklejanie witryn i samochodów",
  "Wizytówki, ulotki, katalogi",
  "Proste projekty graficzne do druku",
  "Doradztwo materiałowe i kolorystyczne",
];

const contacts = [
  {
    label: "Telefon",
    href: "tel:+48783609661",
    detail: "+48 783 609 661",
  },
  {
    label: "E-mail",
    href: "mailto:biuro@siodemka-reklamy.pl",
    detail: "biuro@siodemka-reklamy.pl",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61583830106500",
    detail: "Aktualności i szybki czat",
  },
  {
    label: "Adres",
    href: "https://maps.google.com/?q=Zawiercie+ul.+Górnośląska+37",
    detail: "Zawiercie, ul. Górnośląska 37",
  },
];

function App() {
  return (
    <div className="page">
      <header className="shell topbar">
        <div className="brand">
          <img src={logo} alt="Logo Siódemka s.c." />
          <div className="brand__meta">
            <span className="brand__eyebrow">Siódemka s.c.</span>
            <span className="brand__title">Druk | Reklama | Projektowanie</span>
          </div>
        </div>
        <nav className="nav">
          <a href="#o-nas">O nas</a>
          <a href="#oferta">Oferta</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="nav__cta" href="tel:+48783609661">
          Zamów druk
        </a>
      </header>

      <main className="shell main">
        <section className="hero" id="o-nas">
          <div className="panel hero__copy">
            <p className="eyebrow">Profesjonalna jakość druku</p>
            <h1>Siódemka s.c.</h1>
            <p className="lede">
              Zamów materiały, które wyróżnią Twoją firmę. Od wizytówek po
              wielkoformatowe banery – drukujemy z pasją i precyzją.
            </p>
            <p className="lede">
              Twoja wizja, nasz druk. Kreatywne podejście, indywidualne projekty
              i pełne wsparcie od A do Z.
            </p>
            <div className="actions">
              <a className="btn" href="tel:+48783609661">
                Zadzwoń teraz
              </a>
              <a
                className="btn btn--ghost"
                href="mailto:biuro@siodemka-reklamy.pl"
              >
                Napisz do nas
              </a>
              <a className="btn btn--ghost" href="#oferta">
                Zobacz ofertę
              </a>
            </div>
            <div className="chip-list">
              {services.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="hero__badge hero__badge--solo">
            Pierwszy projekt Gratis
          </div>
        </section>

        <section className="section" id="oferta">
          <div className="section__header">
            <p className="eyebrow">Oferta</p>
            <h2>Druk, który mówi za Ciebie</h2>
            <p className="lede">
              Oferujemy ekspresowy druk, atrakcyjne ceny i doradztwo na każdym
              etapie. Wybierz pakiet idealny dla Twojej marki.
            </p>
          </div>
          <div className="card-grid">
            {highlights.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="kontakt">
          <div className="section__header">
            <p className="eyebrow">Kontakt</p>
            <h2>Bądźmy w kontakcie</h2>
            <p className="lede">
              Kolory, które żyją – jakość, która trwa. Napisz, zadzwoń lub
              zajrzyj do nas, a my przygotujemy druk, który robi wrażenie.
            </p>
          </div>
          <div className="contact__grid">
            {contacts.map((item) => (
              <a
                key={item.label}
                className="contact__item"
                href={item.href}
                target={item.label === "Facebook" ? "_blank" : undefined}
                rel={item.label === "Facebook" ? "noreferrer" : undefined}
              >
                <span className="contact__label">{item.label}</span>
                <span className="contact__detail">{item.detail}</span>
              </a>
            ))}
          </div>
          <div className="contact__cta">
            <div>
              <span className="contact__tag">Działa 24/7</span>
              <strong>Pierwszy projekt Gratis – sprawdź nas bez ryzyka</strong>
              <p>
                Masz pomysł? My go wydrukujemy. Pomożemy dobrać format, papier i
                wykończenie, a pierwszy projekt przygotujemy gratis.
              </p>
            </div>
            <div className="contact__actions">
              <a className="btn" href="tel:+48783609661">
                Zadzwoń
              </a>
              <a
                className="btn btn--ghost"
                href="mailto:biuro@siodemka-reklamy.pl"
              >
                Wyślij zapytanie
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell footer">
        <div>© 2024 Siódemka s.c. Wszystkie prawa zastrzeżone.</div>
        <div className="footer__links">
          <a href="#o-nas">O nas</a>
          <a href="#oferta">Oferta</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
