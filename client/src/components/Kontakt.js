import "./Kontakt.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Kontakt() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const disabled = name === "" || email === "" || message === "";
  const [inputDisabled, setInputDisabled] = useState(false);
  const [onBlurName, setOnBlurName] = useState(false);
  const [onBlurEmail, setOnBlurEmail] = useState(false);
  const [onBlurMessage, setOnBlurMessage] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const fetchURL =
    process.env.NODE_ENV === "production"
      ? "/api/sendEmail"
      : " http://localhost:5050/api/sendEmail";

  const handleSubmit = function (e) {
    e.preventDefault();
    const emailData = { name, email, message };

    setIsLoading(true);
    setInputDisabled(true);

    const sendEmail = async function () {
      try {
        const status = await fetch(fetchURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        });
        const answer = await status.json();
        await reset();
        if (answer.status === "YES") {
          setPopupMessage(
            "Deine Nachricht wurde gesendet. Ich melde mich schnellst möglich zurück."
          );
        } else {
          setPopupMessage(
            "Es gab Probleme beim versenden. Bitte versuche es noch ein Mal. Du erreichst mich auch unter der Nummer +491794839729"
          );
          console.log(answer.error);
        }
        setPopupVisible(!popupVisible);
      } catch (err) {
        console.log(err);
      }
    };

    const reset = function () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          setIsLoading(false);
          setName("");
          setEmail("");
          setMessage("");
          setOnBlurName(false);
          setOnBlurEmail(false);
          setOnBlurMessage(false);
          resolve();
        }, 2000);
      });
    };

    sendEmail();
  };

  return (
    <>
      <Helmet>
        <title>Kontakt Valeria Gerol | Psychotherapeut Düsseldorf</title>
        <meta
          name="description"
          content="Kontaktieren Sie mich heute, um Ihre Hochzeit in ein Kunstwerk aus wundershönen Erinerungen zu verwandeln.  "
        />
        <link rel="canonical" href="https://liebevollbelichtet.de/Kontakt" />
      </Helmet>
      <AnimatePresence>
        {popupVisible && (
          <motion.div
            className={"popupMessage"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>{popupMessage}</p>
            <button
              className="popupButton"
              onClick={() => {
                setPopupVisible(!popupVisible);
                setInputDisabled(false);
              }}
            >
              OK
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="kontaktElement">
        <div className="kontaktText">
          <img
            className="gleichgewicht"
            alt="Finde Gleichgewicht im Leben"
            src="images/Logo_001.png"
          />
          <p>
            Ich weiß, dass es im Leben manchmal schwere Zeiten gibt, in denen
            man sich allein und überfordert fühlt. Es ist in Ordnung, sich in
            solchen Momenten unsicher und verwirrt zu fühlen. Aber es ist auch
            wichtig, Unterstützung und Hilfe zu suchen, um aus dieser
            schwierigen Situation herauszukommen.
          </p>
          <p>
            Sie können mich kontaktieren. Zusammen werden wir eine Lösung
            finden, damit Sie wieder Zuversicht und Freude in Ihr Leben
            zurückbringen.
          </p>
          <h4 className="telefon">Tel: +491776779081</h4>
        </div>
        <div className="kontaktFormWrapper">
          <form className="kontaktForm" onSubmit={handleSubmit}>
            <span className={onBlurName && name === "" ? "label-rot" : "label"}>
              DEIN NAME:
            </span>
            <input
              onBlur={() => setOnBlurName(true)}
              disabled={inputDisabled}
              className="name"
              name="name"
              value={name}
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <span
              className={onBlurEmail && email === "" ? "label-rot" : "label"}
            >
              E-MAIL:
            </span>
            <input
              onBlur={() => setOnBlurEmail(true)}
              disabled={inputDisabled}
              className="email"
              name="email"
              value={email}
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <span
              className={
                onBlurMessage && message === "" ? "label-rot" : "label"
              }
            >
              DEINE NACHRICHT:
            </span>
            <textarea
              onBlur={() => setOnBlurMessage(true)}
              disabled={inputDisabled}
              className="message"
              name="message"
              value={message}
              type="textarea"
              rows={4}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              className={
                disabled ? "sendButton sendButton-disabled" : "sendButton"
              }
              disabled={disabled}
            >
              <div
                className={
                  isLoading ? "spinnerDiv spinnerDiv-drehen" : "spinnerDiv"
                }
              >
                <span className={isLoading ? "icon-spinner6 spinner" : ""}>
                  {isLoading ? "" : "ABSENDEN"}
                </span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
