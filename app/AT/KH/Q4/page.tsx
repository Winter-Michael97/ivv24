'use client'; // Client-Komponente

import { CSSProperties, useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveAnswer } from "@/app/lib/data";
import BiasSelector from "@/app/Hilfe/biasselector";

export default function Q1() {
    const router = useRouter();

    // 🔹 Artikeltexte definieren
    // Link: https://www.express.de/politik-und-wirtschaft/scholz-will-vertrauensfrage-stellen-was-das-bedeutet-893834
    const articleTexts: { [key: string]: string } = {
        article1: "1. Der Weg zur Neuwahl bei einem Auseinanderbrechen der Ampel ist im Grundgesetz genau festgeschrieben. Theoretisch könnten zwar die verbliebenen Teile der Koalition bis zum regulären Wahltermin am 28. September kommenden Jahres eine Minderheitsregierung bilden.",
        // false
        article2: "2. Wahrscheinlich ist dies jedoch nicht. Ein solches Bündnis müsste sich für jedes Gesetzesvorhaben mit Stimmen aus der Opposition eine Mehrheit suchen. Das dürfte schon bei der wichtigen Frage des Bundeshaushalts 2025 nicht gelingen.",
        // true, Kausaler-Missverständnis-Bias: 0.7
        // In diesem Satz wird angenommen, dass es bei einem Minderheitsbündnis automatisch zu Schwierigkeiten bei der Gesetzgebung kommen würde, ohne konkrete Beweise oder Berücksichtigung anderer Faktoren.
        article3: "3. Nach Artikel 67 Grundgesetz kann der Bundestag dem Kanzler das Misstrauen aussprechen – allerdings nur, indem er mit Mehrheit einen Nachfolger oder eine Nachfolgerin wählt. Er würde dann den Bundespräsidenten ersuchen, den bisherigen Kanzler zu entlassen. Dazu wäre der Bundespräsident verpflichtet. Er müsste den neu Gewählten ernennen.",
        // false
        article4: "4. Hierfür gibt es in der Bundesrepublik bislang nur ein Beispiel: 1982 wechselte die FDP vom bisherigen Koalitionspartner SPD und ihrem Kanzler Helmut Schmidt zur CDU/CSU und wählte zusammen mit der Union Helmut Kohl (CDU) zum neuen Kanzler. Der Unterschied zu heute: Damals hatten CDU/CSU und FDP zusammen eine Mehrheit im Bundestag, heute hätten sie diese nicht.",
        // false
        article5: "5. Diese Möglichkeit nach Artikel 68 Grundgesetz wäre die wahrscheinliche Variante. Der Bundeskanzler würde im Bundestag beantragen, ihm das Vertrauen auszusprechen – in der Erwartung, dass das Parlament dies gerade nicht tut, er also keine Mehrheit bekommt. Der Kanzler kann dies – muss es allerdings nicht – mit einem konkreten Gesetzgebungsvorhaben verknüpfen, also aktuell etwa mit dem Tariftreuegesetz, das die FDP ablehnt. Erhält der Kanzler keine Mehrheit, kann er den Bundespräsidenten bitten, den Bundestag aufzulösen.",
        // true, Spekulations-Bias: 0.6
        // Hier wird spekuliert, wie der Bundeskanzler in einer bestimmten Situation handeln könnte, ohne dass konkrete Beweise oder frühere Ereignisse als Referenz herangezogen werden.
        article6: "6. Zuletzt verfuhr Gerhard Schröder (SPD) im Jahr 2005 so. Dieses Vorgehen ist jedoch umstritten, weil es nicht – wie im Grundgesetz intendiert – darauf abzielt, das Vertrauen ausgesprochen zu bekommen, sondern gerade im Gegenteil, die dafür nötige Mehrheit zu verfehlen.",
        // true, Meinungsstarker-Bias: 0.6
        // Die Formulierung 'dieses Vorgehen ist jedoch umstritten' drückt eine subjektive Meinung aus, die als objektive Tatsache präsentiert wird.
        article7: "7. Bei einem Misstrauensvotum wären der neu gewählte Kanzler und sein Kabinett nach der Ernennung durch den Bundespräsidenten und der Eidesleistung im Bundestag sofort im Amt. Ginge der Kanzler den Weg über die Vertrauensfrage, dann hätte der Bundespräsident nach Artikel 68 maximal 21 Tage Zeit, um den Bundestag aufzulösen.",
        // false
        article8: "8. 2005 verlor Schröder am 1. Juli wie gewünscht die Vertrauensfrage im Bundestag. Am 13. Juli schlug er Bundespräsident Horst Köhler die Auflösung des Bundestages vor, was dieser am 21. Juli tat. Zugleich setzte Köhler eine Neuwahl für den 18. September an. Die Neuwahl muss gemäß Artikel 39 Grundgesetz innerhalb von 60 Tagen nach der Auflösung des Bundestages stattfinden.",
        // false
        article9: "9. Auch wenn der Bundestag aufgelöst würde, wäre Deutschland nicht politisch führungslos. Der Kanzler und sein Kabinett blieben im Amt. Außerdem sieht Artikel 69 Grundgesetz vor, dass der Kanzler auf Ersuchen des Bundespräsidenten verpflichtet ist, die Amtsgeschäfte bis zur Ernennung eines Nachfolgers weiterzuführen. Gleiches gilt für Bundesministerinnen oder -minister, wenn sie der Bundespräsident oder der Bundeskanzler darum ersuchen. Diese Regelung wird regelmäßig nach Bundestagswahlen wirksam, wenn der Bundestag zwar schon zu seiner konstituierenden Sitzung zusammengetreten ist, die neue Regierung aber noch nicht steht.",
        // true, Falsche-Dichotomie-Bias: 0.6
        // Es wird suggeriert, dass die einzige Alternative zur politischen Führungslosigkeit die strikte Befolgung des Grundgesetzes ist, obwohl es möglicherweise andere Lösungen oder Szenarien gibt.
        article10: "10. Zerbräche die Ampel an der FDP, dann würde der Kanzler den Bundespräsidenten bitten, deren Minister (Finanzen, Justiz, Verkehr, Bildung) zu entlassen. Ihre Aufgaben könnten von anderen Ressortchefs mit übernommen werden. Der Kanzler könnte aber auch Nachfolger vorschlagen und vom Bundespräsidenten ernennen lassen.",
        // false
        article11: "11. Würde der Bundestag aufgelöst und eine Neuwahl angesetzt, käme das politische Handeln aber trotzdem mit einem Schlag zum Erliegen. Die Parteien würden umgehend in den Wahlkampfmodus umschalten, die Vorbereitungszeit für die Wahl wäre extrem kurz. Relevant wäre dies vor allem für den Bundeshaushalt 2025, der dann nicht mehr in diesem Jahr verabschiedet werden könnte.",
        // false
        article12: "12. Dies wäre allerdings kein Problem. Es träte dann die sogenannte vorläufige Haushaltsführung ein. Ab Januar dürften im Wesentlichen nur noch Ausgaben getätigt werden, für die eine gesetzliche Verpflichtung vorliegt. Dieses Verfahren ist erprobt.",
        // false
        article13: "13. Es wird immer nach Bundestagswahlen wirksam, weil der Haushaltsentwurf der alten Regierung verfällt und die neue Regierung regelmäßig erst im neuen Jahr ihren eigenen Etatentwurf vorlegt."
        // false
        // Zusammenfassung:
        // Der Artikel weist mehrere Formen von Nachrichtenbias auf, darunter Kausaler-Missverständnis-Bias, Emotionaler-Sensationalismus-Bias, Spekulations-Bias, Meinungsstarker-Bias und Falsche-Dichotomie-Bias, was darauf hindeutet, dass er in Bezug auf die diskutierten Themen tendenziös ist.
        // Percentage of biased sentences: 30
        // Most frequent bias: Kausaler-Missverständnis-Bias (1 Most frequent bias)
        // Average bias strength:: 0.62
        // Overall rating: 0.45999999999999996
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
            router.push('./Q5'); // 🔹 Weiterleitung nach Speicherung
        } catch (error) {
            console.error('Fehler beim Speichern:', error);
        }
    };

    return (
        <div style={containerStyle}>
            <h1 style={headStyle}>Artikel 4</h1>
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