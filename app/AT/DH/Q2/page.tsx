'use client'; // Client-Komponente

import { CSSProperties, useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveAnswer } from "@/app/lib/data";
import BiasSelector from "@/app/Hilfe/biasselector";

export default function Q1() {
    const router = useRouter();

    // Link: https://www.belltower.news/solingen-toedlicher-brandanschlag-von-2024-doch-rechtsextrem-motiviert-159099/
    const articleTexts: { [key: string]: string } = {
        article1: "1. Im vergangenen Jahr tötete ein 39-Jähriger eine vierköpfige Familie bei einem Brandanschlag in Solingen. Laut Ermittler*innen sei die Tat unpolitisch. Doch der Täter besaß rechtsextremes NS-Propaganda-Material und zündelte am selben Haus bereits am 9. November 2022. Wie unpolitisch kann diese Tat sein?",
        // true, Unklarer-Zuschreibungs-Bias: 0.8
        // Dieser Satz weist einen unklaren Zuschreibungs-Bias auf, da er die Aussage der Ermittler*innen in Frage stellt, indem er auf konkrete Handlungen des Täters verweist, die auf ein politisches Motiv hindeuten.
        article2: "2. Vor einem Jahr, am 25. März 2024, setze ein mittlerweile 40-Jähriger ein Wohnhaus in Solingen in Brand. In dem Feuer starb ein türkisch-bulgarisch stämmige Ehepaar, Kancho Emilov Zhilov, sowie Katya Todorovo Zhilova und ihre beiden Töchter, Galia Kancheva Zhilova (3 Jahre) und Emily Kancheva Zhilova (1 Jahr). Dutzende weitere Bewohner*innen mit Migrationsgeschichte erlitten Verletzungen.",
        // false
        article3: "3. Viele Menschen erinnerte diese Tat an den Brandanschlag von 1993, bei dem vier Rechtsextreme fünf Mitglieder der Familie Genç ermordeten. Dennoch schlossen die zuständigen Wuppertaler Behörden rasch ein rechtsextremes Motiv aus, es gäbe keine Hinweise darauf, hieß es.",
        // true, Unklarer-Zuschreibungs-Bias: 0.8
        // Auch dieser Satz zeigt einen unklaren Zuschreibungs-Bias, da er die schnelle Ablehnung eines rechtsextremen Motivs durch die Behörden in Frage stellt, obwohl es offensichtliche Parallelen zu einem früheren rechtsextremen Angriff gibt.
        article4: "4. Im Januar 2025 begann dann der Prozess gegen den Tatverdächtigen vor dem Wuppertaler Landgericht. Im Februar gestand er über seinen Anwalt, für den Brandanschlag verantwortlich zu sein. Er habe vor der Tat Drogen konsumiert. 14 Tage nach dem Brandanschlag griff der Angeklagte einen Mann mit einer Machete an. Ein Zeuge berichtete hier von einem „Sieg Heil“-Ruf des Täters. Ein politisches Motiv spielte im Brand-Prozess lange keine Rolle – bis zu diesem Montag, dem 10. März.",
        // false
        article5: "5. 166 Bilder, die auf dem Rechner des Angeklagten gefunden und an jenem Tag im Prozess präsentiert wurden, zeichnen nun ein Bild, das an einem unpolitischen Motiv zweifeln lässt. Die Bilder zeigen Nazi-Propaganda und grausame, entmenschlichende Witzbilder.",
        // true, Kausaler-Missverständnis-Bias: 0.7
        // - Hier liegt ein Kausaler-Missverständnis-Bias vor, da die Präsentation von Nazi-Propaganda und entmenschlichenden Witzbildern als Beweis für ein politisches Motiv interpretiert wird, ohne dass eine direkte Verbindung zur Tat selbst hergestellt wird.
        article6: "6. Das Solinger Tagblatt berichtet: Gasflaschen mit dem Konterfei Adolf Hitlers, mit dem Zusatz: „Dafür stehe ich mit meinem Namen\“. Ein Foto von Hitler mit der Bildunterschrift: \„Ohne dich ist alles doof\“. Eine Aufnahme von Gefangenen in einem Konzentrationslager: „Bitte konzentriert euch“. Oder auch: ein Schlauchboot mit Geflüchteten. Bildunterschrift: „Mein Humor ist wie ein afrikanischer Flüchtling. Er kommt manchmal nicht gut an.“",
        // false
        article7: "7. Diese Bilder sind grausam, rassistisch, menschenverachtend und rechtsextrem. Dass diese beschlagnahmten Dateien ausgewertet wurden und Gegenstand der Verhandlung sind, geht auf einen Antrag der engagierten Nebenklageanwältin Seda Başay-Yıldız zurück, nicht etwa auf die Ermittler*innen selbst.",
        // false
        article8: "8. Das Material stammt vom Rechner des Angeklagten, den er gemeinsam mit seiner Lebensgefährtin nutzt. Daher sind die Bilder offenbar nicht zweifelsfrei dem Täter zuzuordnen. Die Lebensgefährtin sagte in einer früheren Aussage, dass der Angeklagte nicht rassistisch sei und sie die Beziehung beendet hätte, wäre ihr Rassismus aufgefallen, berichtet nd.",
        // true, Unklarer-Zuschreibungs-Bias: 0.6
        // Dieser Satz zeigt erneut einen unklaren Zuschreibungs-Bias, da er die Möglichkeit in Betracht zieht, dass das gefundene Material nicht eindeutig dem Angeklagten zuzuordnen ist, und auf die Aussage der Lebensgefährtin hinweist, die seine Nicht-Rassistischkeit betont.
        article9: "9. Am Montag wurde im Prozess zudem ein Chat zwischen dem Paar thematisiert. In der Silvesternacht beklagte der Angeklagte, wegen der „Kanaken“ keinen Parkplatz zu bekommen und hoffte, dass ein „Polen-Böller“ unter ihnen „etwas mehr Schaden anrichtet“. Die Nebenklage wird nun eine erneute Vernehmung der Lebensgefährtin beantragen.",
        // false
        article10: "10. Es sei nicht verständlich, dass ein rechtes Motiv von Seiten der Behörden „gleich ausgeschlossen wurde und man sich überhaupt keine Gedanken beziehungsweise Mühe gemacht hat, um dem auf den Grund zu gehen“, kritisiert Nebenklageanwältin Seda Başay-Yıldız gegenüber Belltower.News. Gerade weil die Motivlage des Angeklagten unklar war und gerade weil in diesem Haus überwiegend Personen mit Migrationshintergrund gelebt haben, hätte man Datenträger, die bei dem Angeklagten aufgefunden wurden, auswerten müssen. „Dies hat man nicht getan. Das kann in keiner Weise nachvollzogen werden“, so die Nebenklageanwältin.",
        // true, Unklarer-Zuschreibungs-Bias: 0.8
        // Dieser Satz ist ein Beispiel für einen unklaren Zuschreibungs-Bias, da er die Behörden kritisiert, ein rechtes Motiv zu schnell ausgeschlossen zu haben, und darauf hinweist, dass die Auswertung der Datenträger hätte erfolgen müssen, um die Motivlage zu klären.
        article11: "11. Die Staatsanwaltschaft legt dem Angeklagten zwei weitere Brandstiftungen zur Last: Am 16. Februar 2024 in einem anderen Mehrfamilienhaus im Solinger Stadtgebiet und am 9. November 2022 im selben Mehrfamilienhaus, in dem 2024 vier Menschen starben. Der 9. November ist der Gedenktag an die Novemberpogrome.",
        // false
        article12: "12. An jenem Tag 1938 plünderten, zerstörten und verbrannten Nazis jüdische Geschäfte und das Eigentum jüdischer Menschen. Es war der Start der Eskalation der antisemitischen Agenda der Nationalsozialisten. Das Ziel war die Vernichtung der europäischen Jüdinnen und Juden. Alleine dieses geschichtsträchtige Datum hätte doch Ermittler*innen aufhorchen lassen müssen. Hellhörig wurden jedoch nur Aktivist*innen und Betroffene aus der Zivilgesellschaft. Zugehört hat man ihnen jedoch nicht.",
        // false
        article13: "13. Der NSU-Komplex, Mannheim, Magdeburg und nun auch wieder Solingen: Paradebeispiele dafür, wie rechtsextreme Gewalt, ja sogar Mord, in Deutschland strukturell und institutionell bagatellisiert, sogar ignoriert wird."
        //true, Diskriminierungs-Bias: 0.9
        // Zusammenfassung:
        // In diesem Satz wird ein Diskriminierungs-Bias deutlich, da behauptet wird, dass rechtsextreme Gewalt in Deutschland strukturell und institutionell bagatellisiert oder ignoriert wird, was eine generalisierende und negative Darstellung der deutschen Gesellschaft impliziert.
        // Der Artikel weist mehrere Formen von Nachrichtenbias auf, darunter Unklarer-Zuschreibungs-Bias, Kausaler-Missverständnis-Bias und Diskriminierungs-Bias, insbesondere im Zusammenhang mit der Untersuchung eines Brandanschlags in Solingen. Die Berichterstattung neigt dazu, politische Motive und strukturelle Probleme in der Behandlung rechtsextremer Gewalt zu betonen, was zu einer voreingenommenen Darstellung führt.
        //
        // Percentage of biased sentences: 31
        //
        // Most frequent bias: Unklarer-Zuschreibungs-Bias (4 Most frequent bias)
        // Average bias strength:: 0.77
        // Overall rating: 0.54
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
        article13: null
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
            router.push('./Q3'); // 🔹 Weiterleitung nach Speicherung
        } catch (error) {
            console.error('Fehler beim Speichern:', error);
        }
    };

    return (
        <>
            <div style={containerStyle}>
                <h1 style={headStyle}>Artikel 2</h1>
                <h2 style={headstyle_zwei}>Bitte geben Sie an, ob die folgenden Textausschnitte voreingenommen (Bias) sind
                    oder nicht.</h2>
                <h2 style={headstyle_zwei}>Auf der rechten Seite befindet sich mittig ein Knopf mit einem Pfeil. Wenn Sie ihn drücken, öffnet sich eine Liste mit verschiedenen Bias-Definitionen, die Sie scrollen können und die Ihnen bei der Bewertung helfen könnten.</h2>

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