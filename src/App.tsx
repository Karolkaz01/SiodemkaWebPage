import './styles.css';

const services = [
  {
    title: 'Banery i wydruki wielkoformatowe',
    description:
      'Projektujemy i produkujemy trwałe banery, siatki mesh oraz kasetony. Doradzamy w wyborze materiałów i wykończeń.',
  },
  {
    title: 'Oklejanie pojazdów i witryn',
    description:
      'Kompleksowa realizacja – od pomysłu po montaż. Oklejamy auta osobowe, floty, witryny sklepowe i stoiska targowe.',
  },
  {
    title: 'Identyfikacja wizualna',
    description:
      'Logo, księga znaku, materiały biurowe oraz projekty do druku. Ujednolicamy komunikację Twojej marki.',
  },
  {
    title: 'Materiały POS i gadżety',
    description:
      'Roll-upy, potykacze, naklejki, plakaty i drobne gadżety reklamowe przygotowane pod Twoje kampanie.',
  },
];

const steps = [
  {
    title: 'Brief i konsultacja',
    text: 'Zbieramy potrzeby, doradzamy formaty i materiały dopasowane do ekspozycji.',
  },
  {
    title: 'Projekt graficzny',
    text: 'Tworzymy propozycje wizualne, poprawki realizujemy aż do pełnej satysfakcji.',
  },
  {
    title: 'Produkcja i montaż',
    text: 'Drukujemy na sprawdzonych materiałach i zapewniamy fachowy montaż w terenie.',
  },
];

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__content">
          <span className="eyebrow">Siódemka Reklama</span>
          <h1>Druk, oklejanie i projekty – wszystko w jednym miejscu</h1>
          <p>
            Tworzymy skuteczne materiały reklamowe: od koncepcji graficznej, przez druk i
            wykończenie, aż po montaż. Wspieramy marki, które potrzebują solidnego partnera w
            promocji.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#kontakt">
              Zapytaj o wycenę
            </a>
            <a className="btn btn--ghost" href="#oferta">
              Poznaj ofertę
            </a>
          </div>
          <div className="hero__meta">
            <div>
              <strong>48h</strong>
              <span>na przygotowanie projektu</span>
            </div>
            <div>
              <strong>15+</strong>
              <span>lat doświadczenia</span>
            </div>
            <div>
              <strong>1000+</strong>
              <span>zrealizowanych realizacji</span>
            </div>
          </div>
        </div>
        <div className="hero__panel">
          <div className="hero__badge">Drukarnia & Studio projektowe</div>
          <div className="hero__panel-content">
            <h2>Banery na wymiar</h2>
            <p>Projekt + wydruk + montaż na terenie regionu.</p>
            <ul>
              <li>Banery frontlit i blockout</li>
              <li>Oklejanie samochodów i witryn</li>
              <li>Roll-upy, kasetony, potykacze</li>
            </ul>
            <a className="panel__cta" href="#kontakt">
              Zamów bez zobowiązań →
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="oferta" className="section">
          <div className="section__header">
            <span className="eyebrow">Oferta</span>
            <h2>Spójne materiały reklamowe od A do Z</h2>
            <p>
              Łączymy kreatywne studio graficzne z zapleczem produkcyjnym. Dbamy o kolory, trwałość
              i spójny wizerunek Twojej marki.
            </p>
          </div>
          <div className="cards">
            {services.map((service) => (
              <article key={service.title} className="card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="text-link">Dowiedz się więcej</button>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--muted">
          <div className="section__header">
            <span className="eyebrow">Proces</span>
            <h2>Przejrzysta współpraca krok po kroku</h2>
            <p>Od pierwszej rozmowy do montażu – informujemy, doradzamy i dowozimy w terminie.</p>
          </div>
          <div className="steps">
            {steps.map((step, index) => (
              <div key={step.title} className="step">
                <div className="step__index">0{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="cta">
            <div>
              <span className="eyebrow">Wsparcie</span>
              <h2>Masz pliki lub potrzebujesz projektu?</h2>
              <p>
                Prześlij specyfikację, a my doradzimy najlepsze rozwiązanie. Jeśli nie masz projektu –
                przygotujemy go szybko i w Twoim stylu.
              </p>
              <div className="hero__actions">
                <a className="btn btn--primary" href="#kontakt">
                  Zamów druk
                </a>
                <a className="btn btn--ghost" href="#kontakt">
                  Zleć projekt graficzny
                </a>
              </div>
            </div>
            <div className="cta__stats">
              <div className="stat">
                <strong>3 lata</strong>
                <span>gwarancji na banery</span>
              </div>
              <div className="stat">
                <strong>600 dpi</strong>
                <span>druk fotorealistyczny</span>
              </div>
              <div className="stat">
                <strong>Montujemy</strong>
                <span>również w weekendy</span>
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="section section--muted contact">
          <div className="section__header">
            <span className="eyebrow">Kontakt</span>
            <h2>Porozmawiajmy o Twojej reklamie</h2>
            <p>Zostaw wiadomość – odpowiemy z propozycją i orientacyjną wyceną.</p>
          </div>
          <form className="contact__form">
            <div className="form__grid">
              <label>
                Imię i nazwisko
                <input name="name" placeholder="Jan Kowalski" />
              </label>
              <label>
                E-mail
                <input name="email" type="email" placeholder="kontakt@firma.pl" />
              </label>
              <label>
                Telefon
                <input name="phone" type="tel" placeholder="123 456 789" />
              </label>
              <label>
                Temat
                <input name="topic" placeholder="Baner 5×2 m, oklejenie auta" />
              </label>
            </div>
            <label>
              Opis projektu
              <textarea
                name="message"
                rows={4}
                placeholder="Napisz czego potrzebujesz – format, materiał, termin"
              />
            </label>
            <button className="btn btn--primary" type="button">
              Wyślij zapytanie
            </button>
            <p className="form__note">Odpowiadamy w ciągu jednego dnia roboczego.</p>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div>
          <h3>Siódemka Reklama</h3>
          <p>Drukarnia i agencja reklamowa – Łódź i okolice.</p>
        </div>
        <div>
          <h4>Kontakt</h4>
          <ul>
            <li>tel. +48 123 456 789</li>
            <li>biuro@siodemka.pl</li>
            <li>ul. Reklamowa 7, Łódź</li>
          </ul>
        </div>
        <div>
          <h4>Social</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
