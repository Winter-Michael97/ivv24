'use client'
import {useRouter} from "next/navigation";
import BiasSelector from "@/app/Hilfe/biasselector";

export default function Q1() {

    const paragraphStyle = {
        marginBottom: '10px',
        alignItems: 'center',
        marginTop: '10px'
    }

    const headStyle = {
        fontSize: '24px'
    }

    return (
        <div
            style={{
                backgroundColor: '#708090',
                color: '#ffffff',
                padding: '30px',
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1.6',
            }}
        >
            {/* Einfaches Layout mit einer Spalte */}
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>

                <h1 style={headStyle}>text 5</h1>
                <p style={paragraphStyle}>Bundesregierung gibt zu: Kiffer-Unfälle werden nicht erfasst</p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <BiasSelector/>
                </div>

                <p style={paragraphStyle}>Brisantes Geständnis der Bundesregierung zu Kiffer-Verkehrsunfällen!</p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <BiasSelector/>
                </div>

                <p style={paragraphStyle}>Die Regierung ist blank, wenn es um Verkehrsunfälle unter Cannabis-Einfluss
                    geht – sie weiß nach
                    eigenen Angaben nicht, ob und wie viele Unfälle es mehr gibt seit der Cannabis-Legalisierung im
                    April 2024. Das hat eine offizielle Anfrage des CDU-Verkehrspolitikers Florian Müller an das
                    Verkehrsministerium ergeben.</p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <BiasSelector/>
                </div>

                <p style={paragraphStyle}>Konkret heißt es: „Die Polizeien differenzieren bei der Aufnahme der
                    Unfallursachen bislang
                    nicht bundesweit nach der Art der berauschenden Mittel – mit Ausnahme von Alkohol. In der
                    amtlichen Straßenverkehrsunfallstatistik liegen daher aktuell noch keine Zahlen der
                    Straßenverkehrsunfälle mit Personenschaden unter dem Einfluss von Cannabis vor.“</p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <BiasSelector/>
                </div>

                <p style={paragraphStyle}>Heißt: Obwohl Cannabis seit April 2024 legal ist und seit August ein erhöhter
                    THC-Grenzwert hinterm Steuer gilt, weiß die Regierung nicht, ob es bundesweit mehr Kiffer-Unfälle
                    gab. Denn Unfälle unter Cannabis-Einfluss werden bislang bundesweit nicht gesondert erfasst.
                    Frühestens ab Juli 2025 soll sich das ändern.</p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <BiasSelector/>
                </div>

                <p style={paragraphStyle}>Bei CDU-Verkehrs-Politiker Florian Müller sorgt das für Unverständnis – er
                    kritisiert die Untätigkeit von Verkehrsminister Volker Wissing (54, parteilos). Müller zu BILD: „Der
                    amtierende Verkehrsminister hatte zugesagt, die Auswirkungen der Cannabis-Freigabe auf den
                    Straßenverkehr genau zu untersuchen. Es ist rätselhaft, warum er sich ein Jahr dafür Zeit
                    lässt.“</p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <BiasSelector/>
                </div>

                <p style={paragraphStyle}>Das Land Brandenburg erfasst die Zahl der Verkehrsunfälle unter
                    Cannabis-Einfluss seit der Legalisierung. Das Ergebnis: Im Jahr der Legalisierung stieg die Zahl der
                    Kiffer-Unfälle im Vorjahresvergleich um 25 Prozent (von 96 auf 120).</p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <BiasSelector/>
                </div>

                <p style={paragraphStyle}>Auch in Bayern stieg die Zahl der Kiffer-Unfälle – von 285 auf 331. Ein Plus
                    von 16 Prozent. Die Union hatte im Wahlkampf angekündigt, die Cannabis-Legalisierung nach der Wahl
                    zurückzunehmen.</p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <BiasSelector/>
                </div>

            </div>
        </div>
    );
}
