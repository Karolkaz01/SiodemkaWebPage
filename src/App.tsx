import './styles.css';

const highlights = [
  {
    title: 'Banery i wydruki wielkoformatowe',
    text: 'Projekt, dobór materiału, druk i montaż banerów, siatek mesh, kasetonów oraz billboardów.',
  },
  {
    title: 'Oklejanie aut i witryn',
    text: 'Kompleksowe oklejanie flot i witryn – cięte ploterowo lub full wrap, z montażem w Twojej lokalizacji.',
  },
  {
    title: 'Studio graficzne',
    text: 'Identyfikacja wizualna, księga znaku, projekty reklam i materiałów POS gotowe do druku.',
  },
];

const steps = [
  'Brief i wskazanie formatu',
  'Projekt z poprawkami bez limitu',
  'Druk na wytrzymałych materiałach',
  'Montaż i serwis ekspozycji',
];

function App() {
  return (
    <div className="page">
      <header className="shell hero">
        <nav className="topbar">
          <div className="wordmark">Siódemka</div>
          <div className="nav">Oferta · Studio · Kontakt</div>
        </nav>

        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Pracownia reklamy i druku</p>
            <h1>
              Jeden akcent. <span>Silna identyfikacja.</span>
            </h1>
            <p className="lede">
              Banery, oklejanie, projekty graficzne i montaż. Łączymy drukarnię i studio kreatywne, by
              Twoja reklama była spójna i zapadała w pamięć.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="#kontakt">
                Zapytaj o wycenę
              </a>
              <a className="btn btn--ghost" href="#oferta">
                Zobacz ofertę
              </a>
            </div>
            <div className="hero__stats">
              <div>
                <strong>02 dni</strong>
                <span>na projekt startowy</span>
              </div>
              <div>
                <strong>15+ lat</strong>
                <span>druk + branding</span>
              </div>
              <div>
                <strong>1 kolor</strong>
                <span>akcent prowadzący całą identyfikację</span>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__circle hero__circle--main" />
            <div className="hero__circle hero__circle--outline" />
            <div className="hero__panel">
              <h2>Two-color ready</h2>
              <p>Stawiamy na jeden mocny akcent – Twój kolor marki. Resztę utrzymujemy w eleganckiej, ciemnej palecie.</p>
              <ul>
                <li>Banery odporne na warunki zewnętrzne</li>
                <li>Folie premium do oklejania pojazdów</li>
                <li>Projekty do kampanii outdoor i digital</li>
              </ul>
              <a className="panel__cta" href="#kontakt">
                Umów konsultację →
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="oferta" className="shell section">
          <div className="section__header">
            <p className="eyebrow">Oferta</p>
            <h2>Projekt + produkcja + montaż</h2>
            <p className="muted">
              Konsekwentnie budujemy rozpoznawalność na jednym akcencie kolorystycznym. Czy to baner,
              oklejenie auta czy witryny – wszystko mówi jednym językiem wizualnym.
            </p>
          </div>
          <div className="grid">
            {highlights.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button className="link">Sprawdź szczegóły</button>
              </article>
            ))}
          </div>
        </section>

        <section className="band">
          <div className="shell band__content">
            <div>
              <p className="eyebrow">Proces</p>
              <h2>Przejrzyste kroki</h2>
              <p className="muted">Od briefu po montaż – każda faza ma swój termin i opiekuna.</p>
            </div>
            <div className="steps">
              {steps.map((step, index) => (
                <div key={step} className="step">
                  <div className="step__index">0{index + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="shell section contact">
          <div className="contact__card">
            <div>
              <p className="eyebrow">Kontakt</p>
              <h2>Porozmawiajmy o Twojej ekspozycji</h2>
              <p className="muted">
                Napisz kilka słów o projekcie, preferowanym terminie i materiale. Odpowiemy tego samego dnia.
              </p>
              <div className="contact__meta">
                <span>+48 123 456 789</span>
                <span>biuro@siodemka.pl</span>
                <span>Łódź · montaż w terenie</span>
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
                Temat
                <input name="topic" placeholder="Baner, oklejenie, projekt" />
              </label>
              <label>
                Opis projektu
                <textarea name="message" rows={4} placeholder="Format, ilość, termin, lokalizacja" />
              </label>
              <button className="btn btn--primary" type="button">
                Wyślij zapytanie
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="shell footer">
        <div>
          <h3>Siódemka Reklama</h3>
          <p className="muted">Banery, oklejanie, identyfikacja wizualna.</p>
        </div>
        <div>
          <h4>Studio</h4>
          <ul>
            <li>Projekt logo i materiałów</li>
            <li>Brand book</li>
            <li>Przygotowanie do druku</li>
          </ul>
        </div>
        <div>
          <h4>Produkcja</h4>
          <ul>
            <li>Banery i siatki mesh</li>
            <li>Oklejanie aut i witryn</li>
            <li>Roll-upy, kasetony, neony</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
