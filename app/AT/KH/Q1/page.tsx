'use client'; // Client-Komponente

import { CSSProperties, useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveAnswer } from "@/app/lib/data";
import BiasSelector from "@/app/Hilfe/biasselector";

export default function Q1() {
    const router = useRouter();

    // Link: https://www.tagesschau.de/inland/bundestagswahl/parteien/musk-afd-wahlkampfshow-100.html?
    // 🔹 Artikeltexte definieren
    const articleTexts: { [key: string]: string } = {
        article1: "1. Auf Elon Musk kann sich die AfD verlassen: Nach seinem Gespräch mit Parteichefin Weidel auf seiner Plattform X hat sich der Tech-Milliardär nun auch live zum Wahlkampfauftakt der Partei dazugeschaltet.Wenige Wochen vor der Bundestagswahl mischt Tech-Milliardär Elon Musk erneut im deutschen Wahlkampf mit. Bei einem Gastauftritt auf einer Wahlkampfveranstaltung der AfD bekräftigte Musk seine Unterstützung für die Partei. Zu Beginn der Rede von AfD-Chefin Alice Weidel wurde der Trump-Berater und Tesla-Chef live aus den USA zugeschaltet.",
        // false
        article2: "2. Die AfD sei die beste Hoffnung für Deutschland, sagte er. \"Kämpft für eine großartige Zukunft für Deutschland\", sagte Musk unter dem Jubel der nach Parteiangaben etwa 4.500 AfD-Anhänger in der Messe in Halle (Saale).",
        // True, Politischer-Bias: 0.8
        // Dieser Satz zeigt einen politischen Bias, da er die AfD einseitig positiv darstellt und als die beste Hoffnung für Deutschland bezeichnet, ohne gegensätzliche Standpunkte zu berücksichtigen.
        article3: "3. AfD hat Musks volle Unterstützung - Der Unternehmer beklagte zudem, es gebe \"zu viel Fokus auf vergangener Schuld\", man müsse das hinter sich lassen. Kinder sollten nicht schuldig für die Sünden ihrer Urgroßeltern sein, sagte er und rief zu Optimismus auf. \"Es ist sehr wichtig, dass die Menschen in Deutschland stolz darauf sind, Deutsche zu sein\", so Musk.",
        // false
        article4: "4. Die AfD habe seine volle Unterstützung und - so glaube er - auch die Unterstützung der Trump-Regierung.",
        // (Spekulations-Bias: 0.6)
        // Hier wird spekuliert, dass die AfD die Unterstützung der Trump-Regierung habe, ohne konkrete Beweise oder Aussagen zu präsentieren.
        article5: "5. Weidel bedankte sich mit besten Wünschen für die US-Regierung unter Präsident Donald Trump und dessen Wahlspruch \"Make America great again\". Sie fügte später ein \"Make Germany great again\" hinzu. Es ist nicht das erste Mal, dass Musk seine Unterstützung für die AfD öffentlich bekundet. Im Dezember hatte er mit Weidel ein Live-Gespräch auf seiner Plattform X geführt. Kritiker werfen ihm vor, mit Hilfe seiner enormen Reichweite den Ausgang der Bundestagswahl beeinflussen zu wollen.",
        // false
        article6: "6. Weidel: Wähler wollen Blau-SchwarzWeidel kritisierte in ihrer Rede die aktuelle Migrations-, Wirtschafts- und Energiepolitik. Mit Blick auf die aktuelle Debatte nach dem Angriff in Aschaffenburg, sagte die AfD-Parteichefin: \"Liebe CDU, reißt die undemokratischen Brandmauern ein. Der Wähler will eine blau-schwarze Koalition in der Bundesrepublik Deutschland.\".",
        //(Politischer-Bias: 0.5)
        // Dieser Satz zeigt politischen Bias, indem er die CDU und ihre Politik als undemokratisch kritisiert und eine bestimmte Koalition als den Willen der Wähler darstellt, ohne dies zu belegen.
        article7: "7. Außerdem machte sie großzügige Ankündigungen: Man werde im Falle eines Wahlsiegs unter anderem die Unternehmenssteuer, die Einkommens-, die Konsum-, Strom- und Energiekosten senken.",
        // false
        article8: "8. Die Berechnungen des Deutschen Instituts für Wirtschaftsforschung (DIW), dass dadurch Haushaltslöcher in Höhe von 181 Milliarden Euro entstehen würden, nannte Weidel im Interview mit den tagesthemen \"hochgradig unseriös\". Eine aus ihrer Sicht seriöse Summe nannte sie nicht.",
        // true, Unbewiesene-Behauptungs-Bias: 0.6
        // Hier werden Behauptungen über die Seriosität von Berechnungen aufgestellt, ohne konkrete Belege oder eine alternative seriöse Einschätzung zu präsentieren.
        article9: "9. Weiter sagte Weidel, die jetzige Regierung könne nicht mit Geld umgehen und schlug drastische Sparmaßnahmen vor: \"Sie können nicht millionenfach an ausländische Staatsbürger Sozialsystemleistungen plus Krankenversicherung ausschütten.\" Die von ihrer Partei geplanten Steuersenkungen würden durch Ausgabensenkungen möglich. Die Ausgaben müssten gekürzt werden - \"und zwar drastisch\". Unter anderem nannte sie dabei \"von Geldleistungen auf Sachleistungen umzustellen.\" \"Wir müssen mit den Ausgaben runter, wir geben viel zu viel aus.\"",
        // true, (Politischer-Bias: 0.5)
        // Dieser Abschnitt zeigt politischen Bias, indem er die aktuelle Regierung einseitig kritisiert und drastische Sparmaßnahmen als notwendig darstellt, ohne alternative Sichtweisen zu berücksichtigen.
        // Die gewählte Formulierung, die die Klassifizierung der AfD durch den Verfassungsschutz als 'gesichert rechtsextremistisch' und 'rechtsextremistischen Verdachtsfall' erwähnt, trägt zur negativen Konnotation bei und impliziert eine einseitige Sichtweise.
        article10: "10. Auch Herbert Kickl, der wahrscheinliche nächste Bundeskanzler Österreichs, meldete sich per Video zu Wort. \"Wir fiebern in diesem Wahlkampf mit euch mit\", sagte der Politiker der rechtspopulistischen FPÖ und nannte seine Partei und die AfD Partner. Die AfD sei die einzige Partei, die auf das Volk höre. Weidel bezeichnete er als Kämpfernatur. \"Du bist in jeder Hinsicht allen Deinen Gegenspielern haushoch überlegen\", so Kickl."
        // true, (Intergruppen-Bias: 0.6)
        // Dieser Satz zeigt Intergruppen-Bias, indem er die AfD einseitig positiv darstellt und als einzige Partei, die auf das Volk hört, bezeichnet, während gegnerische Parteien abgewertet werden.
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
        article10: null
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
        const userGroup = 2;

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