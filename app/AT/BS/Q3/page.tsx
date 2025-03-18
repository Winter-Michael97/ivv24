'use client'; // Client-Komponente

import { CSSProperties, useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveAnswer } from "@/app/lib/data";
import BiasSelector from "@/app/Hilfe/biasselector";

export default function Q1() {
    const router = useRouter();

    // Link: https://www.tagesschau.de/inland/bundestagswahl/parteien/musk-afd-wahlkampfshow-100.html?
    // 🔹 Artikeltexte und Kommentare definieren
    const articleTexts: { [key: string]: { text: string, comment: string } } = {
        article1: {
            text: "1. Das Sondierungspapier der möglichen neuen Großen Koalition stößt bei den Grünen auf scharfe Kritik.",
            comment: ""
        },
        article2: {
            text: "2. Das könnte für Union und SPD heikel werden, weil es auch an den Grünen hängt, ob sie ihre Investitionsvorhaben noch durch den alten Bundestag bekommen.",
            comment: "Spekulations-Bias: 0.6 - Die Aussage spekuliert über die möglichen Auswirkungen auf Union und SPD, basierend darauf, ob die Grünen ihre Investitionsvorhaben durch den alten Bundestag bekommen, ohne konkrete Beweise oder Fakten."
        },
        article3: {
            text: "3. Die Grünen haben die Ergebnisse der Sondierungsgespräche von CDU, CSU und SPD harsch kritisiert. Statt strukturelle Probleme zu lösen, wollten die Parteien schon wie in früheren schwarz-roten Regierungen alles mit Geld zuschütten, erklärte Parteichefin Franziska Brantner in Berlin. „Das ist Gift für unser Land“, führte sie weiter aus.",
            comment: "Emotionaler-Sensationalismus-Bias: 0.9 - Die Verwendung von Ausdrücken wie 'alles mit Geld zuschütten' und 'Das ist Gift für unser Land' zielt darauf ab, starke Emotionen zu erzeugen, vernachlässigt jedoch eine nüchterne Betrachtung der Politik"
        },
        article4: {
            text: "4. Union und SPD dürften bei der Verabschiedung ihres bereits vor einigen Tagen vereinbarten Sicherheitspakets auf die Stimmen der Grünen angewiesen sein. Sie hatten vereinbart, die Schuldenbremse für höhere Verteidigungsausgaben zu lockern und ein schuldenfinanziertes Sondervermögen von 500 Milliarden Euro für die Infrastruktur zu schaffen. Die Änderungen, für die eine Zwei-Drittel-Mehrheit nötig ist, sollen noch vom bestehenden Bundestag beschlossen werden – im nächsten Bundestag wird es wegen neuer Mehrheiten deutlich schwieriger.",
            comment: ""
        },
        article5: {
            text: "5. Konkret werfen die Grünen Union und SPD vor, ihre Wahlversprechen durch diese neuen Finanzmittel finanzieren zu wollen, statt das Geld für tatsächliche Verbesserungen einzusetzen. „Wir sehen, dass es offensichtlich 500 Milliarden Euro nicht für zusätzliche Infrastrukturprojekte geben soll, sondern für Wahlversprechen, Mütterrente, Pendlerpauschale“, sagte Brantner. Banaszak sagte, Schwarz-Rot nutze die schwierige Lage mit Blick auf Russland und die USA, „um am Ende einfach nur die Gastronomie von der Mehrwertsteuer zu befreien oder eine weitere Stufe der Mütterrente einzuführen“.",
            comment: ""
        },
        article6: {
            text: "6. Es sei bedrückend, dass Klimaschutz keine Rolle spiele, sagte Banaszak. „Die ökologischen Krisen unserer Zeit, ihre Tiefe, ihre Brutalität und die Notwendigkeit der Bewältigung dieser Krisen ist offensichtlich kein Thema für die sich bildende Koalition.“",
            comment: "Emotionaler-Sensationalismus-Bias: 0.6 - Die Formulierung 'Es sei bedrückend' und die dramatische Beschreibung der ökologischen Krisen zielen darauf ab, den Leser emotional zu beeinflussen und eine bestimmte Sichtweise zu verstärken."
        },
        article7: {
            text: "7. Die Aussagen zur Sozialpolitik seien enttäuschend. Die Union habe einen „Frontalangriff aufs Bürgergeld“ durchgesetzt. Zudem fehlten Aussagen zur inneren Sicherheit.",
            comment: ""
        },
        article8: {
            text: "8. Die Grünen-Chefs bemängelten, dass Union und SPD ihre Pläne nicht mit den Grünen abgestimmt hätten, obwohl deren Zustimmung nötig sei für das Finanzpaket. „Stil ist in der Politik nicht zu unterschätzen. Friedrich Merz hat da noch sehr viel Luft nach oben“, sagte Banaszak.",
            comment: "Ad-Hominem-Bias: 0.6 - Die Kritik an Friedrich Merz' 'Stil' in der Politik ist ein Beispiel für Ad-Hominem-Bias, da hier nicht seine politischen Entscheidungen, sondern seine persönliche Art kritisiert wird."
        },
        article9: {
            text: "9. Zum Fortgang der Gespräche mit den Grünen sagte er: „Wer die Zustimmung der Grünen zu seinen Vorschlägen möchte, kann die Verhandlungen gerne fortsetzen.“ Brantner ergänzte: „Wo ein Wille ist, ist auch ein Weg. Aber bis jetzt sehen wir noch keinen Willen.“",
            comment: "Diskriminierungs-Bias: 0.6 - Die Aussage impliziert, dass die Grünen nicht kooperativ sind, ohne konkrete Beweise zu liefern, und könnte so dazu beitragen, ein negatives Bild der Grünen zu verstärken."
        },
        article10: {
            text: "10. Aus den Reihen der möglichen zukünftigen Koalitionspartner hingegen klingen die Reaktionen erwartungsgemäß anders. Die Sondierungsgespräche haben laut Sachsens Ministerpräsident Michael Kretschmer die Weichen für einen Politikwechsel gestellt. „Vom ersten Tag der neuen Regierung an wird man die Veränderungen in der Migrationspolitik an den Grenzen und auch bei den Asylentscheidungen spüren“, erklärte der CDU-Politiker.",
            comment: ""
        },
        article11: {
            text: "11. Ziel sei zudem, die Wettbewerbsfähigkeit Deutschlands zu erhöhen. Dazu sollen die Strompreise sinken. Auch werde es umfangreiche Änderungen beim Bürgergeld geben und die Verkehrswege sollen zwischen Deutschland und den östlichen Nachbarn Polen und Tschechien ausgebaut werden.",
            comment: ""
        }
    }


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
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { text, comment } = articleTexts[articleId]; // 🔹 Den Artikeltext und Kommentar holen
                    await saveAnswer(userId, userGroup, text, biasValue);
                }
            }
            router.push('./Q2'); // 🔹 Weiterleitung nach Speicherung
        } catch (error) {
            console.error('Fehler beim Speichern:', error);
        }
    };

    return (
        <div style={containerStyle}>
            <h1 style={headStyle}>Artikel 3</h1>
            <h2 style={headstyle_zwei}>Bitte geben Sie an, ob die folgenden Textausschnitte voreingenommen (Bias) sind
                oder nicht.</h2>
            <h2 style={headstyle_zwei}>Unter den Artikeln finden sie Hilfestellung von der Webseite Biasscanner.org, das mithilfe von maschinellem Lernen Sätze in Nachrichtenartikeln identifiziert und hervorhebt, die potenziell voreingenommen sind. </h2>

            {/* 🔹 Bias-Selektoren für alle Artikel */}
            {Object.entries(articleTexts).map(([articleId, { text, comment }]) => (
                <div key={articleId} style={rowStyle}>
                    <p style={paragraphStyle}>{text}</p>
                    <p style={{ fontSize: '14px', color: '#FFD700' }}>{comment}</p> {/* Kommentar unter dem Artikeltext */}
                    <BiasSelector onChange={(bias) => handleBiasChange(articleId, bias)} />
                </div>
            ))}

            <button onClick={handleSubmit} style={buttonStyle}>Weiter</button>
            <p style={{fontSize: '14px', color: '#FFD700', textAlign: 'left', marginTop: '5px'}}>
                * Das Laden der nächsten Seite kann einige Sekunden in Anspruch nehmen.
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
