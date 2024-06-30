import "./Leistungen.css";
import Diashow01 from "./Diashow01";
import { Helmet } from "react-helmet-async";

export default function Leistungen() {
  return (
    <>
      <Helmet>
        <title>Valeria Gerol | Psychologische Beratung | Düsseldorf</title>
        <meta
          name="description"
          content="Effizient, Wirkungsvoll und Langanhaltend - Investieren Sie in sich selbs und Ihre harmonische Zukunft."
        />
        <link rel="canonical" href="https://liebevollbelichtet.de/Kontakt" />
      </Helmet>
      <div className="element03">
        <Diashow01 />
        <div className="text03">
          <h1>
            Honorarübersicht
            <br />
            <br />
          </h1>
          <p>
            Alle angebotenen Dienstleistungen sind Selbstzahlerleistungen.
            <br />
            <br />
          </p>
          <h2>Erstgespräch</h2>
          <p>
            Kostenlos <br />
            20 Minuten <br />
            telefonisch oder virtuell
            <br />
            <br />
          </p>
          <h2>Einzelgespräch</h2>
          <p>
            80 Euro <br /> 50 Minuten <br /> persönlich oder virtuell
            <br />
            <br />
          </p>
          <h2>Für Schüler & Studenten</h2>
          <p>
            49 Euro <br />
            50 Minuten <br /> persönlich oder virtuell
            <br />
            <br />
            <br />
            <br />
          </p>
          <p>Diese Leistungen sind umsatzsteuerfrei gemäß § 4 Nr. 14 UStG.</p>
        </div>
      </div>
      <div className="element04">
        <div className="text04">
          <p className="pbold">
            Als Selbstzahler haben Sie folgende VORTEILE:
            <br />
            <br />
          </p>
          <ul className="list">
            <li>Sie bekommen kurzfristig einen Termin für ein Erstgespräch</li>
            <li>Abendtermine und Samstagstermine sind möglich</li>
            <li>Folgetermine werden zeitnah vergeben – ohne lange Wartezeit</li>
            <li>Sie sind frei in der Wahl der Therapieverfahren</li>
            <br />
          </ul>
          <p className="pbold">
            Schweigepflicht
            <br />
            <br />
          </p>
          <p>
            Das in der Beratung Besprochene und Erarbeitete unterliegt der
            Schweigepflicht
          </p>
        </div>
        <div className="logodiv">
          <img
            className="gleichgewicht"
            src="images/Logo_001.png"
            alt="gleichgewicht"
          />
        </div>
      </div>
    </>
  );
}
