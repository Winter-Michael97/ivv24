'use client'; // Client-Komponente

import { CSSProperties, useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveAnswer } from "@/app/lib/data";
import BiasSelector from "@/app/Hilfe/biasselector";

export default function Q1() {
    const router = useRouter();

    // Link: https://www.welt.de/politik/deutschland/article255643158/Reaktionen-auf-Sondierungspapier-Gift-fuer-unser-Land-kritisieren-die-Gruenen.html?, nur den halben Artikel
    const articleTexts: { [key: string]: string } = {
        article1: "1. Das Sondierungspapier der möglichen neuen Großen Koalition stößt bei den Grünen auf scharfe Kritik.",
        // false
        article2: "2. Das könnte für Union und SPD heikel werden, weil es auch an den Grünen hängt, ob sie ihre Investitionsvorhaben noch durch den alten Bundestag bekommen.",
        // true, Spekulations-Bias: 0.6
        // - Die Aussage spekuliert über die möglichen Auswirkungen auf Union und SPD, basierend darauf, ob die Grünen ihre Investitionsvorhaben durch den alten Bundestag bekommen, ohne konkrete Beweise oder Fakten.
        article3: "3. Die Grünen haben die Ergebnisse der Sondierungsgespräche von CDU, CSU und SPD harsch kritisiert. Statt strukturelle Probleme zu lösen, wollten die Parteien schon wie in früheren schwarz-roten Regierungen alles mit Geld zuschütten, erklärte Parteichefin Franziska Brantner in Berlin. „Das ist Gift für unser Land“, führte sie weiter aus.",
        // true, Emotionaler-Sensationalismus-Bias: 0.9
        // - Die Verwendung von Ausdrücken wie 'alles mit Geld zuschütten' und 'Das ist Gift für unser Land' zielt darauf ab, starke Emotionen zu erzeugen, vernachlässigt jedoch eine nüchterne Betrachtung der Politik
        article4: "4. Union und SPD dürften bei der Verabschiedung ihres bereits vor einigen Tagen vereinbarten Sicherheitspakets auf die Stimmen der Grünen angewiesen sein. Sie hatten vereinbart, die Schuldenbremse für höhere Verteidigungsausgaben zu lockern und ein schuldenfinanziertes Sondervermögen von 500 Milliarden Euro für die Infrastruktur zu schaffen. Die Änderungen, für die eine Zwei-Drittel-Mehrheit nötig ist, sollen noch vom bestehenden Bundestag beschlossen werden – im nächsten Bundestag wird es wegen neuer Mehrheiten deutlich schwieriger.",
        // false
        article5: "5. Konkret werfen die Grünen Union und SPD vor, ihre Wahlversprechen durch diese neuen Finanzmittel finanzieren zu wollen, statt das Geld für tatsächliche Verbesserungen einzusetzen. „Wir sehen, dass es offensichtlich 500 Milliarden Euro nicht für zusätzliche Infrastrukturprojekte geben soll, sondern für Wahlversprechen, Mütterrente, Pendlerpauschale“, sagte Brantner. Banaszak sagte, Schwarz-Rot nutze die schwierige Lage mit Blick auf Russland und die USA, „um am Ende einfach nur die Gastronomie von der Mehrwertsteuer zu befreien oder eine weitere Stufe der Mütterrente einzuführen“.",
        // false
        article6: "6. Es sei bedrückend, dass Klimaschutz keine Rolle spiele, sagte Banaszak. „Die ökologischen Krisen unserer Zeit, ihre Tiefe, ihre Brutalität und die Notwendigkeit der Bewältigung dieser Krisen ist offensichtlich kein Thema für die sich bildende Koalition.“",
        // true, Emotionaler-Sensationalismus-Bias: 0.6
        // - Die Formulierung 'Es sei bedrückend' und die dramatische Beschreibung der ökologischen Krisen zielen darauf ab, den Leser emotional zu beeinflussen und eine bestimmte Sichtweise zu verstärken.
        article7: "7. Die Aussagen zur Sozialpolitik seien enttäuschend. Die Union habe einen „Frontalangriff aufs Bürgergeld“ durchgesetzt. Zudem fehlten Aussagen zur inneren Sicherheit.",
        // false
        article8: "8. Die Grünen-Chefs bemängelten, dass Union und SPD ihre Pläne nicht mit den Grünen abgestimmt hätten, obwohl deren Zustimmung nötig sei für das Finanzpaket. „Stil ist in der Politik nicht zu unterschätzen. Friedrich Merz hat da noch sehr viel Luft nach oben“, sagte Banaszak.",
        // true, Ad-Hominem-Bias: 0.6
        // - Die Kritik an Friedrich Merz' 'Stil' in der Politik ist ein Beispiel für Ad-Hominem-Bias, da hier nicht seine politischen Entscheidungen, sondern seine persönliche Art kritisiert wird.
        article9: "9. Zum Fortgang der Gespräche mit den Grünen sagte er: „Wer die Zustimmung der Grünen zu seinen Vorschlägen möchte, kann die Verhandlungen gerne fortsetzen.“ Brantner ergänzte: „Wo ein Wille ist, ist auch ein Weg. Aber bis jetzt sehen wir noch keinen Willen.“",
        // true, Diskriminierungs-Bias: 0.6
        // - Die Aussage impliziert, dass die Grünen nicht kooperativ sind, ohne konkrete Beweise zu liefern, und könnte so dazu beitragen, ein negatives Bild der Grünen zu verstärken.
        article10: "10. Aus den Reihen der möglichen zukünftigen Koalitionspartner hingegen klingen die Reaktionen erwartungsgemäß anders. Die Sondierungsgespräche haben laut Sachsens Ministerpräsident Michael Kretschmer die Weichen für einen Politikwechsel gestellt. „Vom ersten Tag der neuen Regierung an wird man die Veränderungen in der Migrationspolitik an den Grenzen und auch bei den Asylentscheidungen spüren“, erklärte der CDU-Politiker.",
        // false
        article11: "11. Ziel sei zudem, die Wettbewerbsfähigkeit Deutschlands zu erhöhen. Dazu sollen die Strompreise sinken. Auch werde es umfangreiche Änderungen beim Bürgergeld geben und die Verkehrswege sollen zwischen Deutschland und den östlichen Nachbarn Polen und Tschechien ausgebaut werden."
        // false
        // Zusammenfassung:
        // Der Artikel zeigt Anzeichen von Nachrichtenbias, insbesondere in Bezug auf die Darstellung der Grünen und ihrer Reaktionen auf die Sondierungsgespräche. Die identifizierten Arten von Bias umfassen Spekulations-Bias, Emotionaler-Sensationalismus-Bias, Ad-Hominem-Bias und Diskriminierungs-Bias.
        // Percentage of biased sentences: 33
        // Most frequent bias: Emotionaler-Sensationalismus-Bias (2 Most frequent bias)
        // Average bias strength:: 0.66
        // Overall rating: 0.495
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
        article11: null
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
        const userGroup = 1;

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
            router.push('./Q4'); // 🔹 Weiterleitung nach Speicherung
        } catch (error) {
            console.error('Fehler beim Speichern:', error);
        }
    };

    return (
        <>
            <div style={containerStyle}>
                <h1 style={headStyle}>Artikel 3</h1>
                <h2 style={headstyle_zwei}>Bitte geben Sie an, ob die folgenden Textausschnitte voreingenommen (Bias) sind
                    oder nicht.</h2>
                <h2 style={headstyle_zwei}>Auf der rechten Seite befindet sich mittig ein Knopf mit einem Pfeil. Wenn Sie ihn drücken, öffnet sich eine Liste mit verschiedenen Bias-Definitionen, die sie scrollen können und die Ihnen bei der Bewertung helfen könnten.</h2>

                {/* 🔹 Bias-Selektoren für alle Artikel */}
                {Object.entries(articleTexts).map(([articleId, text]) => (
                    <div key={articleId} style={rowStyle}>
                        <p style={paragraphStyle}>{text}</p>
                        <BiasSelector onChange={(bias) => handleBiasChange(articleId, bias)}/>
                    </div>
                ))}

                <button onClick={handleSubmit} style={buttonStyle}>Weiter</button>
                <p style={{fontSize: '14px', color: '#FFD700', textAlign: 'left', marginTop: '5px'}}>
                    * Das Laden der nächsten Seite kann einige Sekunden in Anspruch nehmen.
                </p>
            </div>
            <BiasInfoBox/>
        </>
    );


    function BiasInfoBox() {
        const [isOpen, setIsOpen] = useState(false);

        const biasDefinitionen = [
            {
                name: "1.Wortwahl-Bias",
                definition: "Eine bestimmte Wortwahl, die eine positive oder negative Wertung suggeriert, ohne dies explizit auszusprechen."
            },
            {
                name: "2.Meinungsstarker-Bias",
                definition: "Eine Darstellung, die durch subjektive Meinungen oder Wertungen anstelle von Fakten geprägt ist."
            },
            {
                name: "3.Unklarer-Zuschreibungs-Bias",
                definition: "Aussagen, die Behauptungen aufstellen, ohne eine klare Quelle oder Beweise zu nennen."
            },
            {
                name: "4.Spekulations-Bias",
                definition: "Eine Aussage, die eine Vermutung oder Spekulation als wahrscheinliche Wahrheit darstellt, ohne Beweise zu liefern."
            },
            {
                name: "5.Ad-Hominem-Bias",
                definition: "Ein Angriff auf die Person anstelle ihrer Argumente oder Positionen."
            },
            {
                name: "6.Emotionaler-Sensationalsismus-Bias",
                definition: "Eine übertrieben emotionale oder dramatische Darstellung, um eine bestimmte Reaktion hervorzurufen."
            },
            {
                name: "7.Intergruppen-Bias",
                definition: "Eine Darstellung, die die eigene Gruppe bevorzugt und andere Gruppen abwertet."
            },
            {
                name: "8.Diskriminierungs-Bias",
                definition: "Eine Darstellung, die eine Gruppe aufgrund von Merkmalen wie Herkunft, Geschlecht oder Religion benachteiligt oder herabwürdigt."
            },
            {
                name: "9.Politischer-Bias",
                definition: "Eine einseitige Darstellung zugunsten oder gegen eine bestimmte politische Richtung."
            },
            {
                name: "10.Kausaler-Missverständnis-Bias",
                definition: "Eine falsche Schlussfolgerung, die Kausalität (Ursache und Wirkung) suggeriert, obwohl nur eine Korrelation (wechselseitige Beziehung) besteht."
            },
            {
                name: "11.Falsche-Dichtomie-Bias",
                definition: "Eine künstliche Reduzierung einer Diskussion auf nur zwei Möglichkeiten, obwohl es mehrere Alternativen gibt."
            },
            {
                name: "12.Unbegründete-Behauptungen-Bias:",
                definition: "Aufstellung von Behauptungen ohne Beweise."
            }
        ];

        return (
            <div style={{ position: 'fixed', right: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 1000 }}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        backgroundColor: '#FFD700',
                        color: '#000',
                        border: 'none',
                        padding: '10px 15px',
                        cursor: 'pointer',
                        position: 'absolute',
                        left: '-50px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        borderRadius: '10px 0 0 10px',
                        zIndex: 2000,
                        fontSize: '16px',
                        fontWeight: 'bold',
                        transition: 'background-color 0.3s ease, transform 0.2s ease',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#FFA500')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#FFD700')}
                >
                    {isOpen ? '⮜' : '⮞'}
                </button>

                {isOpen && (
                    <div style={{
                        width: '300px',
                        height: '95vh',
                        backgroundColor: '#2c3e50',
                        color: '#ecf0f1',
                        padding: '10px',
                        borderRadius: '10px 0 0 10px',
                        overflowY: 'auto',
                        position: 'relative',
                        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 8px'
                    }}>
                        <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Bias-Definitionen</h3>
                        {biasDefinitionen.map((bias, index) => (
                            <div key={index} style={{ marginBottom: '10px' }}>
                                <strong>{bias.name}:</strong>
                                <p style={{ fontSize: '14px', marginTop: '5px' }}>{bias.definition}</p>
                            </div>
                        ))}
                        <p style={{
                            fontSize: '14px',
                            color: '#FFD700',
                            textAlign: 'center',
                            marginTop: '10px',
                            fontWeight: 'bold',
                        }}>
                            🔹 Diese Liste enthält Definitionen der verschiedenen Bias-Arten, um Ihnen bei der Bewertung zu helfen.
                        </p>
                    </div>
                )}
            </div>
        );
    }
}

// Styles
const containerStyle = { backgroundColor: '#708090', color: '#ffffff', padding: '30px' };
const headStyle: CSSProperties = { fontSize: '24px', textAlign: 'left', marginBottom: '10px' };
const headstyle_zwei: CSSProperties = { fontSize: '20px', textAlign: 'left', marginBottom: '5px' };
const rowStyle: CSSProperties = { display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' };
const paragraphStyle: CSSProperties = { marginBottom: '10px', marginTop: '10px', textAlign: 'left' };
const buttonStyle: CSSProperties = { backgroundColor: '#32CD32', padding: '10px', border: 'none', cursor: 'pointer' };