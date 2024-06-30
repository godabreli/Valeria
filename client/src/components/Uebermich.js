import "./Uebermich.css";
import Diashow02 from "./Diashow02";
import { Helmet } from "react-helmet-async";

export default function Uebermich() {
  return (
    <>
      <Helmet>
        <title>Valeria Gerol | Psychologische Beratung | Düsseldorf</title>
        <meta
          name="description"
          content="Profitieren Sie aus meiner ganzheitlichen Herangehensweise und innovatieven Psychologischen Methoden."
        />
        <link rel="canonical" href="https://liebevollbelichtet.de/Kontakt" />
      </Helmet>
      <div className="element05">
        <div className="text05">
          <ul className="list">
            <li>
              <span className="bold">
                2023 – Weiterbildung zur Psychotherapeutin.
              </span>
              <br />
              (Abschlusszertifizierung mit Vorbereitung auf amtliche Prüfung HP
              – Psychotherapie 2024)
            </li>
            <li>
              <span className="bold">
                2022 – Certified Coach in New Coaching Code
              </span>
              bei SYNERGIY University IPS
            </li>
            <li>
              <span className="bold">
                2021 – Personal Coach bei Impulse e.V{" "}
              </span>
              – Schule für freie Gesundheitsberufe
            </li>
            <li>
              <span className="bold">
                {" "}
                2021 – Zertifizierte Psychologische Beraterin:
              </span>{" "}
              (ZFU) zugelassen bei Impulse e.V – Schule für freie
              Gesundheitsberufe: Abschlussarbeit: „Besonderheiten der
              psychologischen Beratung von Angehörigen und Pflegepersonal der
              Chorea Huntington Patienten“
            </li>
            <li>
              <span className="bold">
                2010 -2016 – Studium der „Psychologie der integralen
                Gesellschaft“
              </span>
              bei Bnai Baruch Deutschland, Bildungs und Forschungsinstitut
            </li>
            <li>
              <span className="bold">
                2007 – Diplom Betriebswirtschafterin Fachhochschule Düsseldorf
                (FHD):
              </span>{" "}
              Schwerpunkt Marketing & Kommunikation. Diplomarbeit: „Corporate
              Social Responsibility als Konzept für die gesellschaftspolitische
              Verantwortung von Unternehmen: Konzept sowie
              Umsetzungsmöglichkeiten im Marketing“
            </li>
            <li>
              <span className="bold">
                2000 – Abitur an der Comenius-Gymnasium Düsseldorf
              </span>
            </li>
          </ul>
        </div>
        <img
          className="valeria02"
          alt="Valerya Gerol Psychoterapeutin"
          src="images/Lera-003.jpg"
        />
      </div>
      <div className="element06">
        <Diashow02 />
        <div className="text06">
          <p>
            <span className="bold">Privates</span>
          </p>
          <br />
          <ul className="list">
            <li>Seit 2011 – glückliche Mutter</li>
            <li>Seit 2001 – verheiratet</li>
            <li>1980 – Geboren in Kiev</li>
          </ul>
          <p>
            <span className="bold">Sprachen</span>
          </p>
          <p>
            Deutsch & Russisch <br />
            <br />
          </p>

          <p>
            <span className="bold">Besonderheiten</span>
          </p>

          <p>
            Ich bin eine große Liebhaberin von Büchern, Kunst und Musik und
            finde stets Zeit für diese Leidenschaften in meinem Leben. Eines
            meiner größten Wünsche war es immer, Mutter zu werden, aber nach 10
            Jahren unerfülltem Kinderwunsch hatte ich die Hoffnung fast
            aufgegeben. Heute bin ich mehr als glücklich, dass mein Wunsch 2011
            in Erfüllung ging. Allerdings begleitete mich 15 Jahre lang die
            schwere Krankheit meiner Mutter namens Chorea Huntington. Das hat
            mein Leben stark geprägt und mich gelehrt, mit schwierigen
            Situationen umzugehen und starke Nerven zu bewahren. Ich hoffe, dass
            ich mit meiner Erfahrung anderen Mut machen und inspirieren kann.
          </p>
        </div>
      </div>
    </>
  );
}
