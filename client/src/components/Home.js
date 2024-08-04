import "./Home.css";
import Diashow01 from "./Diashow01";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Valeria Gerol | Psychologische Beratung | Düsseldorf</title>
        <meta
          name="description"
          content="Qualifizierte Psychologische Beratung und Personal Coaching in Düsseldorf"
        />
        <link rel="canonical" href="https://liebevollbelichtet.de/Kontakt" />
      </Helmet>
      <div className="Element01">
        <div className="text01">
          <h1>Psychologische Beratung bei Valeria Gerol</h1>
          <p>
            Herzlich willkommen in meiner Welt der transformierenden
            persönlichen Entwicklung, inneren Heilung und emotionalen Balance in
            verschiedenen Lebensbereichen! Als einfühlsame Begleiterin stehe ich
            Ihnen zur Seite, um Ihnen dabei zu helfen, Ihre innere Stärke zu
            entfalten und Ihr authentisches Selbst zu entdecken. Ich biete auch
            wertvolle Unterstützung für Angehörige von psychisch erkrankten
            Menschen, um Ihnen in schwierigen Zeiten Halt und Rat zu geben.
          </p>
          <div className="gleichgewichtDiv">
            <img
              className="logo-001"
              src="images/Logo_001.png"
              alt="gleichgewicht"
            />
          </div>
          <h1>Gemeinsam auf Entdeckungsreise</h1>
          <p>
            In einer Welt, die oft von Hektik und Stress geprägt ist, ist es
            manchmal schwer, sich selbst zu finden und das innere Gleichgewicht
            zu bewahren. Doch das ist genau der Weg, den wir gemeinsam erkunden
            werden. Mein Ansatz in der Gesprächstherapie ist geprägt von
            Empathie, Kreativität und vorurteilsfreiem Denken. Ich glaube fest
            daran, dass jeder Mensch einzigartig ist und individuelle
            Bedürfnisse hat. Daher gestalte ich jede Beratung ganz auf Ihre
            persönlichen Anliegen zugeschnitten.
          </p>
        </div>
        <div className="imageDiv01">
          <img
            className="imageValeria01"
            src="images/Lera-001.jpg"
            alt="Valeria Gerol"
          />
        </div>
      </div>
      <div className="element02">
        <Diashow01 />
        <div className="text02">
          <h1>Themen, die uns bewegen</h1>
          <p>
            Meine Erfahrung erstreckt sich über eine breite Palette
            psychologischer Themen:
            <br />
            <br />
          </p>
          <ul className="list">
            <li>Suche nach Ihrem inneren Selbst</li>
            <li>Gleichgewicht zwischen den verschiedenen Rollen</li>
            <li>Unterstützung in schwierigen Beziehungskrisen</li>
            <li>Erziehungsberatung</li>
            <li>Unerfüllter Kinderwunsch</li>
            <li>
              Einfühlsame Hilfestellung für Angehörige psychisch erkrankter
              Menschen
            </li>
          </ul>
          <h1>Lassen Sie uns sprechen</h1>
          <p>
            Ihre Reise zu innerem Wachstum und emotionaler Stabilität beginnt
            hier. Bei mir finden Sie einen geschützten Raum, in dem Sie frei
            über Ihre Gedanken und Gefühle sprechen können, ohne Angst vor
            Verurteilung. Gemeinsam werden wir Wege finden, um Ihr inneres
            Gleichgewicht wiederzuerlangen und Ihre Ziele zu erreichen.
          </p>
        </div>
      </div>
      <h1>Vereinbaren Sie Ihre erste Sitzung</h1>
      <p>
        Wir können gemeinsam die ersten Schritte unternehmen, um Ihr Leben in
        eine positive Richtung zu lenken. Ihr Weg zu innerer Stärke beginnt
        jetzt.
      </p>
      <button className="kontaktBtn">
        <Link to="/Kontakt">Kontakt</Link>
      </button>
    </>
  );
}
