import './styles.css';

const highlights = [
  {
    title: 'Banery i wielkoformat',
    text: 'Precyzyjny druk na trwałych materiałach, przygotowany do ekspozycji zewnętrznej i wewnętrznej.',
  },
  {
    title: 'Oklejanie pojazdów i witryn',
    text: 'Projekt, produkcja i montaż. Floty, auta osobowe, witryny sklepowe oraz stoiska targowe.',
  },
  {
    title: 'Studio graficzne',
    text: 'Jedna spójna linia wizualna: logo, materiały reklamowe, pliki do druku i wersje cyfrowe.',
  },
];

const steps = [
  { label: '01', title: 'Koncepcja', body: 'Krótki brief i doradztwo w wyborze formatu oraz materiałów.' },
  { label: '02', title: 'Projekt', body: 'Przygotowujemy makiety, poprawiamy aż efekt będzie idealny.' },
  { label: '03', title: 'Produkcja', body: 'Druk, wykończenie, montaż. Na czas i z gwarancją jakości.' },
];

function App() {
  return (
    <div className="shell">
      <div className="noise" aria-hidden />

      <header className="topbar">
        <div className="brand">
          <div className="brand__mark" aria-hidden />
          <span>Siódemka — reklama i druk</span>
        </div>
        <nav className="nav">
          <a href="#oferta">Oferta</a>
          <a href="#proces">Proces</a>
          <a href="#kontakt">Kontakt</a>
          <a className="nav__cta" href="#kontakt">
            Zamów wycenę
          </a>
        </nav>
      </header>

      <main className="layout">
        <section className="hero">
          <div className="hero__text">
            <p className="eyebrow">Jedna mocna paleta. Jeden partner.</p>
            <h1>
              Druk, oklejanie i projekty graficzne dla marek, które chcą wyraźnie się wyróżnić.
            </h1>
            <p className="lede">
              Tworzymy materiały, które pracują na Twój wizerunek – od koncepcji po montaż. Bez zbędnych
              ozdobników, z czytelnym akcentem kolorystycznym.
            </p>
            <div className="hero__actions">
              <a className="btn btn--accent" href="#kontakt">
                Zapytaj o projekt
              </a>
              <a className="btn btn--ghost" href="#oferta">
                Zobacz ofertę
              </a>
            </div>
            <div className="stats">
              <div>
                <span className="stat__label">banery</span>
                <strong>od 24 h</strong>
              </div>
              <div>
                <span className="stat__label">oklejanie</span>
                <strong>auta, floty, witryny</strong>
              </div>
              <div>
                <span className="stat__label">projekty</span>
                <strong>spójne z Twoim brandem</strong>
              </div>
            </div>
          </div>

          <div className="hero__visual" aria-hidden>
            <div className="orb orb--large" />
            <div className="orb orb--small" />
            <div className="panel">
              <p className="panel__label">Two-color focus</p>
              <h2>Minimalizm z jednym akcentem</h2>
              <p>
                Ciemne tło #3c4649 i akcent #ee573a. Czytelne kontrasty, nowoczesna typografia, projekty
                gotowe do druku i wdrożenia na pojazdach.
              </p>
              <div className="panel__list">
                <span>Banery</span>
                <span>Oklejanie</span>
                <span>Kasetony</span>
                <span>Roll-upy</span>
              </div>
            </div>
          </div>
        </section>

        <section id="oferta" className="section">
          <div className="section__header">
            <p className="eyebrow">Oferta</p>
            <h2>Reklama widoczna w dzień i w nocy</h2>
            <p className="lede">
              Proste, skuteczne formaty. Każdy projekt dopasowany do miejsca ekspozycji i wymogów Twojej marki.
            </p>
          </div>
          <div className="cards">
            {highlights.map((item) => (
              <article key={item.title} className="card">
                <div className="card__accent" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button className="link">Zapytaj o wycenę</button>
              </article>
            ))}
          </div>
        </section>

        <section id="proces" className="section steps">
          <div className="section__header">
            <p className="eyebrow">Proces</p>
            <h2>Krótko, konkretnie, na czas</h2>
          </div>
          <div className="steps__grid">
            {steps.map((step) => (
              <div key={step.label} className="step">
                <span className="step__index">{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="kontakt" className="section contact">
          <div className="contact__copy">
            <p className="eyebrow">Kontakt</p>
            <h2>Potrzebujesz baneru lub oklejenia?</h2>
            <p className="lede">
              Napisz kilka zdań o projekcie. Dobierzemy materiał, przygotujemy pliki, zajmiemy się produkcją i
              montażem. Jedna odpowiedzialna ekipa.
            </p>
            <div className="contact__meta">
              <span>biuro@siodemka.pl</span>
              <span>+48 123 456 789</span>
            </div>
          </div>
          <form className="contact__form">
            <label>
              Imię i nazwisko
              <input name="name" placeholder="Jan Kowalski" />
            </label>
            <label>
              E-mail
              <input name="email" type="email" placeholder="kontakt@firma.pl" />
            </label>
            <label>
              Opis projektu
              <textarea name="message" rows={4} placeholder="Baner 6×3 m, oklejenie dwóch aut" />
            </label>
            <button type="button" className="btn btn--accent">
              Wyślij zapytanie
            </button>
            <p className="form__note">Odpowiedź w ciągu jednego dnia roboczego.</p>
          </form>
        </section>
      </main>

      <footer className="footer">
        <span>Siódemka — reklama i druk</span>
        <span>Jedna paleta, spójny wizerunek.</span>
        <span>Łódź i okolice</span>
      </footer>
    </div>
  );
}

export default App;
