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
            text: "1. Im vergangenen Jahr tötete ein 39-Jähriger eine vierköpfige Familie bei einem Brandanschlag in Solingen. Laut Ermittler*innen sei die Tat unpolitisch. Doch der Täter besaß rechtsextremes NS-Propaganda-Material und zündelte am selben Haus bereits am 9. November 2022. Wie unpolitisch kann diese Tat sein?",
            comment: "Unklarer-Zuschreibungs-Bias: 0.8 - Dieser Satz weist einen unklaren Zuschreibungs-Bias auf, da er die Aussage der Ermittler*innen in Frage stellt, indem er auf konkrete Handlungen des Täters verweist, die auf ein politisches Motiv hindeuten."
        },
        article2: {
            text: "2. Vor einem Jahr, am 25. März 2024, setze ein mittlerweile 40-Jähriger ein Wohnhaus in Solingen in Brand. In dem Feuer starb ein türkisch-bulgarisch stämmige Ehepaar, Kancho Emilov Zhilov, sowie Katya Todorovo Zhilova und ihre beiden Töchter, Galia Kancheva Zhilova (3 Jahre) und Emily Kancheva Zhilova (1 Jahr). Dutzende weitere Bewohner*innen mit Migrationsgeschichte erlitten Verletzungen.",
            comment: ""
        },
        article3: {
            text: "3. Viele Menschen erinnerte diese Tat an den Brandanschlag von 1993, bei dem vier Rechtsextreme fünf Mitglieder der Familie Genç ermordeten. Dennoch schlossen die zuständigen Wuppertaler Behörden rasch ein rechtsextremes Motiv aus, es gäbe keine Hinweise darauf, hieß es.",
            comment: "Unklarer-Zuschreibungs-Bias: 0.8 - Auch dieser Satz zeigt einen unklaren Zuschreibungs-Bias, da er die schnelle Ablehnung eines rechtsextremen Motivs durch die Behörden in Frage stellt, obwohl es offensichtliche Parallelen zu einem früheren rechtsextremen Angriff gibt."
        },
        article4: {
            text: "4. Im Januar 2025 begann dann der Prozess gegen den Tatverdächtigen vor dem Wuppertaler Landgericht. Im Februar gestand er über seinen Anwalt, für den Brandanschlag verantwortlich zu sein. Er habe vor der Tat Drogen konsumiert. 14 Tage nach dem Brandanschlag griff der Angeklagte einen Mann mit einer Machete an. Ein Zeuge berichtete hier von einem „Sieg Heil“-Ruf des Täters. Ein politisches Motiv spielte im Brand-Prozess lange keine Rolle – bis zu diesem Montag, dem 10. März.",
            comment: ""
        },
        article5: {
            text: "5. 166 Bilder, die auf dem Rechner des Angeklagten gefunden und an jenem Tag im Prozess präsentiert wurden, zeichnen nun ein Bild, das an einem unpolitischen Motiv zweifeln lässt. Die Bilder zeigen Nazi-Propaganda und grausame, entmenschlichende Witzbilder.",
            comment: "Kausaler-Missverständnis-Bias: 0.7 - Hier liegt ein Kausaler-Missverständnis-Bias vor, da die Präsentation von Nazi-Propaganda und entmenschlichenden Witzbildern als Beweis für ein politisches Motiv interpretiert wird, ohne dass eine direkte Verbindung zur Tat selbst hergestellt wird." // Kein Bias-Kommentar für diesen Artikel
        },
        article6: {
            text: "6. Das Solinger Tagblatt berichtet: Gasflaschen mit dem Konterfei Adolf Hitlers, mit dem Zusatz: „Dafür stehe ich mit meinem Namen\“. Ein Foto von Hitler mit der Bildunterschrift: \„Ohne dich ist alles doof\“. Eine Aufnahme von Gefangenen in einem Konzentrationslager: „Bitte konzentriert euch“. Oder auch: ein Schlauchboot mit Geflüchteten. Bildunterschrift: „Mein Humor ist wie ein afrikanischer Flüchtling. Er kommt manchmal nicht gut an.“",
            comment: ""
        },
        article7: {
            text: "7. Diese Bilder sind grausam, rassistisch, menschenverachtend und rechtsextrem. Dass diese beschlagnahmten Dateien ausgewertet wurden und Gegenstand der Verhandlung sind, geht auf einen Antrag der engagierten Nebenklageanwältin Seda Başay-Yıldız zurück, nicht etwa auf die Ermittler*innen selbst.",
            comment: ""
        },
        article8: {
            text: "8. Das Material stammt vom Rechner des Angeklagten, den er gemeinsam mit seiner Lebensgefährtin nutzt. Daher sind die Bilder offenbar nicht zweifelsfrei dem Täter zuzuordnen. Die Lebensgefährtin sagte in einer früheren Aussage, dass der Angeklagte nicht rassistisch sei und sie die Beziehung beendet hätte, wäre ihr Rassismus aufgefallen, berichtet nd.",
            comment: "Unbewiesene-Behauptungs-Bias: 0.6 - Hier werden Behauptungen über die Seriosität von Berechnungen aufgestellt, ohne konkrete Belege oder eine alternative seriöse Einschätzung zu präsentieren."
        },
        article9: {
            text: "9. Am Montag wurde im Prozess zudem ein Chat zwischen dem Paar thematisiert. In der Silvesternacht beklagte der Angeklagte, wegen der „Kanaken“ keinen Parkplatz zu bekommen und hoffte, dass ein „Polen-Böller“ unter ihnen „etwas mehr Schaden anrichtet“. Die Nebenklage wird nun eine erneute Vernehmung der Lebensgefährtin beantragen.",
            comment: ""
        },
        article10: {
            text: "10. Es sei nicht verständlich, dass ein rechtes Motiv von Seiten der Behörden „gleich ausgeschlossen wurde und man sich überhaupt keine Gedanken beziehungsweise Mühe gemacht hat, um dem auf den Grund zu gehen“, kritisiert Nebenklageanwältin Seda Başay-Yıldız gegenüber Belltower.News. Gerade weil die Motivlage des Angeklagten unklar war und gerade weil in diesem Haus überwiegend Personen mit Migrationshintergrund gelebt haben, hätte man Datenträger, die bei dem Angeklagten aufgefunden wurden, auswerten müssen. „Dies hat man nicht getan. Das kann in keiner Weise nachvollzogen werden“, so die Nebenklageanwältin.",
            comment: "Unklarer-Zuschreibungs-Bias: 0.8 - Dieser Satz ist ein Beispiel für einen unklaren Zuschreibungs-Bias, da er die Behörden kritisiert, ein rechtes Motiv zu schnell ausgeschlossen zu haben, und darauf hinweist, dass die Auswertung der Datenträger hätte erfolgen müssen, um die Motivlage zu klären."
        },
        article11: {
            text: "11. Die Staatsanwaltschaft legt dem Angeklagten zwei weitere Brandstiftungen zur Last: Am 16. Februar 2024 in einem anderen Mehrfamilienhaus im Solinger Stadtgebiet und am 9. November 2022 im selben Mehrfamilienhaus, in dem 2024 vier Menschen starben. Der 9. November ist der Gedenktag an die Novemberpogrome.",
            comment: ""        },
        article12: {
            text: "12. An jenem Tag 1938 plünderten, zerstörten und verbrannten Nazis jüdische Geschäfte und das Eigentum jüdischer Menschen. Es war der Start der Eskalation der antisemitischen Agenda der Nationalsozialisten. Das Ziel war die Vernichtung der europäischen Jüdinnen und Juden. Alleine dieses geschichtsträchtige Datum hätte doch Ermittler*innen aufhorchen lassen müssen. Hellhörig wurden jedoch nur Aktivist*innen und Betroffene aus der Zivilgesellschaft. Zugehört hat man ihnen jedoch nicht.",
            comment: ""
        },
        article13: {
            text: "13. Der NSU-Komplex, Mannheim, Magdeburg und nun auch wieder Solingen: Paradebeispiele dafür, wie rechtsextreme Gewalt, ja sogar Mord, in Deutschland strukturell und institutionell bagatellisiert, sogar ignoriert wird.",
            comment: " Diskriminierungs-Bias: 0.9 - In diesem Satz wird ein Diskriminierungs-Bias deutlich, da behauptet wird, dass rechtsextreme Gewalt in Deutschland strukturell und institutionell bagatellisiert oder ignoriert wird, was eine generalisierende und negative Darstellung der deutschen Gesellschaft impliziert."},
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
            <h1 style={headStyle}>Artikel 1</h1>
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
