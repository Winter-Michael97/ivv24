'use client'; // Client-Komponente

import { CSSProperties, useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveAnswer } from "@/app/lib/data";
import BiasSelector from "@/app/Hilfe/biasselector";

export default function Q1() {
    const router = useRouter();

    // 🔹 Artikeltexte definieren
    // Link: https://www.bild.de/politik/ausland-und-internationales/trump-putin-verhandeln-europas-angst-vor-ukraine-deal-67d834cc123e8265b2c606f4
    const articleTexts: { [key: string]: string } = {
        article1: "1. Am Dienstag zwischen 14 und 16 Uhr (dt. Zeit) wollen die Präsidenten Trump und Putin über die Zukunft der Ukraine und womöglich auch über die Zukunft Europas verhandeln - Mit potenziell verheerenden Auswirkungen für die Sicherheit unseres Kontinents.",
        // true, Emotionaler-Sensationalismus-Bias: 0.6
        // Die Verwendung des Ausdrucks 'potenziell verheerende Auswirkungen' zielt darauf ab, starke Emotionen hervorzurufen, um die Bedeutung der Verhandlungen zu dramatisieren, was die Wahrnehmung beeinflussen kann.
        article2: "2. Darum herrscht in Europas Hauptstädten Alarmstimmung. Aber auch Aufbruchstimmung!",
        // true, Wortwahl-Bias: 0.6
        // Die Gegenüberstellung von 'Alarmstimmung' und 'Aufbruchstimmung' durch die Wortwahl suggeriert eine stark polarisierte Reaktion auf die Verhandlungen, was die Leser in eine bestimmte Richtung lenken könnte.
        article3: "3. In Kiew befürchtet man, dass Trump Putin Gebiete zuschreibt, die bislang nicht einmal unter russischer Kontrolle sind.",
        // true, Spekulations-Bias: 0.6
        // Diese Aussage spekuliert über die möglichen Handlungen von Trump und Putin, ohne konkrete Beweise oder Ankündigungen zu zitieren, was die Befürchtungen in den Vordergrund stellt.
        article4: "4. Darum arbeitet die ukrainische Armee daran, unabhängig von den USA zu werden; sie will im laufenden Jahr mit 4,5 Millionen Kampfdrohnen dreimal so viele wie 2024 herstellen. So könnte man ein Ausbleiben amerikanischer Artilleriemunition kompensieren.",
        // false
        article5: "5. Doch auch in Russlands Nachbarländern Finnland, Estland, Lettland, Litauen und Polen geht die Angst um.",
        // true, Emotionaler-Sensationalismus-Bias: 0.6
        // Die Formulierung 'geht die Angst um' ist darauf ausgerichtet, eine Atmosphäre der Angst und Unsicherheit zu beschwören, was die Leser emotional beeinflussen kann.
        article6: "6. Ein Deal zwischen Trump und Putin, so die Befürchtung, könnte einen Abzug von US-Truppen und einen Angriff der russischen Armee binnen weniger Jahre bedeuten.",
        // false
        article7: "7. Darum gaben alle fünf Länder bereits in der vergangenen Woche bekannt, aus der Ottawa-Konvention zum Verbot von Antipersonenminen austreten zu wollen.",
        // true, Spekulations-Bias: 0.6
        // Die Behauptung, dass alle fünf Länder aus der Konvention austreten wollen, impliziert eine direkte Reaktion auf die Verhandlungen, ohne konkrete Beweise für diese Verbindung zu liefern
        article8: "8. Der Grund: Müsste man Russlands zahlenmäßig überlegene Armee aufhalten, bräuchte man – ähnlich wie die Ukraine jetzt – Millionen Minen entlang der eigenen Grenzen.",
        // false
        article9: "9. Noch weiter geht das kleine Litauen, das befürchtet, nach einem Deal der mächtigen Präsidenten selbst im Kriegsfall keine Unterstützung vom Nato-Partner USA mehr zu bekommen.",
        // true, Spekulations-Bias: 0.6
        // Die Darstellung der Befürchtungen Litauens als direkte Konsequenz eines möglichen Deals zwischen Trump und Putin spekuliert über zukünftige Entwicklungen, ohne klare Beweise für diese Annahmen zu liefern
        article10: "10. Vilnius will jetzt seine Verfassung ändern, um (französische) Atomwaffen auf seinem Territorium stationieren zu können.",
        // false
        article11: "11. „Wir glauben, dass wir die Möglichkeit prüfen müssen, Artikel 137 der Verfassung der Republik Litauen anzupassen, wenn unsere Verbündeten realistische Pläne für die Stationierung von Atomwaffen in Litauen vorschlagen“, sagte Verteidigungsministerin Dovile Sakaliene.",
        // false
        article12: "12. Auch Paris und London bereiten sich auf den schlimmstmöglichen Trump-Putin-Pakt vor.",
        // true Emotionaler-Sensationalismus-Bias: 0.6
        // Die Verwendung des Ausdrucks 'schlimmstmöglichen Trump-Putin-Pakt' zielt darauf ab, die Leser auf das Schlimmste vorzubereiten und suggeriert eine extrem negative Zukunft, was auf eine dramatische Weise die Wahrnehmung beeinflussen kann.
        article13: "13. Darum nehmen Pläne zur Entsendung bewaffneter Friedenstruppen in die Ukraine – auch gegen den Willen Russlands – immer mehr Form an.",
        // false
        article14: "14. Sollte Trump die Ukraine unter den Zug werfen, könnten so mächtige EU-Staaten einspringen, was zu einem Showdown mit Moskau UND Washington führen könnte ..."
        // false
        // Zusammenfassung:
        //Der Artikel ist tendenziös in Bezug auf die Verhandlungen zwischen Trump und Putin, da er durch die Verwendung von Emotionaler-Sensationalismus-Bias und Spekulations-Bias eine dramatische und negative Zukunft suggeriert, ohne klare Beweise oder Ankündigungen für die vorgestellten Szenarien zu liefern.
        // Percentage of biased sentences: 42
        // Most frequent bias: Emotionaler-Sensationalismus-Bias (3 Most frequent bias)
        // Average bias strength:: 0.6
        // Overall rating: 0.51
    };

    // 🔹 State für Bias-Antworten
    const [biasAnswers, setBiasAnswers] = useState<{ [key: string]: boolean | null }>({
        article1: null,
        article2: null,
        article3: null,
        article4: null,
        article5: null,
        article6: null,
        article7: null,
        article8: null,
        article9: null,
        article10: null,
        article11: null,
        article12: null,
        article13: null,
        article14: null,
    });

    // 🔹 Bias-Änderung erfassen
    const handleBiasChange = (articleId: string, biasValue: boolean | null): void => {
        setBiasAnswers(prevState => ({
            ...prevState,
            [articleId]: biasValue,
        }));
    };

    // 🔹 Handle Submit
    const handleSubmit = async () => {
        // 🔸 Check, ob alle Antworten gegeben wurden
        const allAnswered = Object.values(biasAnswers).every(answer => answer !== null);

        if (!allAnswered) {
            alert("Bitte beantworten Sie alle Fragen, bevor Sie fortfahren.");
            return;
        }

        const userIdStr = localStorage.getItem("userId");
        const userId = userIdStr ? parseInt(userIdStr, 10) : null;
        const userGroup = 0;

        if (!userId) {
            console.error("Kein User gefunden.");
            return;
        }

        try {
            for (const [articleId, biasValue] of Object.entries(biasAnswers)) {
                if (biasValue !== null) {
                    const text = articleTexts[articleId]; // 🔹 Den Artikeltext holen
                    await saveAnswer(userId, userGroup, text, biasValue);
                }
            }
            router.push('../../DD/'); // 🔹 Weiterleitung nach Speicherung
        } catch (error) {
            console.error('Fehler beim Speichern:', error);
        }
    };

    return (
        <div style={containerStyle}>
            <h1 style={headStyle}>Artikel 5</h1>
            <h2 style={headstyle_zwei}>Bitte geben Sie an, ob die folgenden Textausschnitte voreingenommen (Bias) sind
                oder nicht.</h2>
            <h2 style={headstyle_zwei}>Jedoch wird die Hilfestellung durch die Software Biasscanner in den letzten 2
                Durchgängen nicht bereit gestellt</h2>

            {/* 🔹 Bias-Selektoren für alle Artikel */}
            {Object.entries(articleTexts).map(([articleId, text]) => (
                <div key={articleId} style={rowStyle}>
                    <p style={paragraphStyle}>{text}</p>
                    <BiasSelector onChange={(bias) => handleBiasChange(articleId, bias)}/>
                </div>
            ))}

            <button onClick={handleSubmit} style={buttonStyle}>Weiter</button>
            <p style={{fontSize: '14px', color: '#FFD700', textAlign: 'left', marginTop: '5px'}}>
                * Bitte drücken Sie nur 1x auf &#34;Weiter&#34;, das Laden der nächsten Seite kann einige Sekunden in Anspruch nehmen.
            </p>
        </div>

    );
}

// 🔹 Styles
const containerStyle = {backgroundColor: '#708090', color: '#ffffff', padding: '30px'};
const headStyle = {fontSize: '24px', textAlign: 'left' as const, marginBottom: '10px' };
const headstyle_zwei = {fontSize: '20px', textAlign: 'left' as const, marginBottom: '5px'};
const rowStyle: CSSProperties = { display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' };
const paragraphStyle: CSSProperties = { marginBottom: '10px', marginTop: '10px', textAlign: 'left' as const };
const buttonStyle: CSSProperties = { backgroundColor: '#32CD32', padding: '10px', border: 'none', cursor: 'pointer' };