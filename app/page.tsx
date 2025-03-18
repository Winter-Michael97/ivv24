'use client';
import {useState} from 'react';
import {useRouter} from 'next/navigation'

export default function DD() {
    const router = useRouter();
    const [isChecked, setIsChecked] = useState(false); // State für das Kontrollkästchen

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        router.push('EUI'); //
    };
    // Funktion zum Toggle des Kontrollkästchens
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div
            style={{
                backgroundColor: '#708090', // Grauer Hintergrund
                color: '#ffffff', // Textfarbe weiß
                padding: '30px',
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1.6',
            }}
        >
            <h1
                style={{
                    fontSize: '28px',
                    color: '#ffffff', // Textfarbe weiß
                    marginBottom: '20px',
                    textDecoration: 'underline', // Unterstrichen
                }}
            >
                Einverständniserklärung zur Studienteilnahme
            </h1>

            <p style={{marginBottom: '20px'}}>
                Sie sind eingeladen, an der Onlinestudie &#34;Bias-Erkennung: Eine Experimentelle
                Studie&#34; teilzunehmen. Die Studie wird
                von Michael Winter und Mark Zänglein durchgeführt und von PD Dr. David
                Elsweiler an der Universität Regensburg geleitet.
                Die Studie mit voraussichtlich 66 Teilnehmer findet im Zeitraum vom 15.02.2025 bis 30.03.2025
                statt.
            </p>

            <p style={{marginBottom: '10px', fontSize: '18px'}}>Bitte beachten Sie:</p>

            <ul style={{marginBottom: '20px', paddingLeft: '20px'}}>
                <li>• Ihre Teilnahme ist vollkommen freiwillig und kann jederzeit abgebrochen oder widerrufen werden
                </li>
                <li>
                    • Sie haben keinen direkten Nutzen durch die Studienteilnahme, unterstützen aber unsere Arbeit und
                    helfen die Forschung in diesem Bereich voranzubringen
                </li>
                <li>• Eine Untersuchung der Online-Studie dauert ungefähr 30 Minuten</li>
                <li>
                    • Wir erfassen zur Analyse einige persönliche Daten (z. B. Alter, Gender, usw.)
                </li>
                <li>
                    • Während der Sitzung werden Ihre Eingaben registriert und Notizen angefertigt
                </li>

                <li> • Aufzeichnungen und personenbezogene Daten unterliegen den Richtlinien der
                    Datenschutzgrundverordnung
                    (DSGVO) und werden pseudoanonymisiert gespeichert
                </li>
            </ul>
            <p style={{marginBottom: '20px'}}>
                Die Alternative zur Studienteilnahme ist die Nichtteilnahme. Wenn Sie Fragen, Bedenken oder Beschwerden
                zur Einwilligungserklärung dieser Forschungsstudie oder zu Ihren Rechten als Versuchsperson haben,
                wenden Sie sich bitte an PD Dr. David Elsweiler. Bitte lesen Sie die folgenden Informationen sorgfältig
                durch.
            </p>

            <h2
                style={{
                    fontSize: '24px',
                    color: '#ffffff', // Textfarbe weiß
                    marginBottom: '15px',
                    textDecoration: 'underline', // Unterstrichen
                }}
            >
                1. Zweck und Ziel dieser Forschung
            </h2>

            <p style={{marginBottom: '20px'}}>
                Ziel dieser Forschung ist es, zu untersuchen, wie die Wahrnehmung und Erkennung von Bias in
                unterschiedlichen Nachrichtenartikeln durch die
                Nutzung von unterschiedlichen Methoden beeinflusst wird. Ihre Teilnahme hilft uns, dieses Forschungsziel
                zu erreichen.
                Die Ergebnisse dieser Forschung können auf wissenschaftlichen oder Fachspezifischen Veranstaltungen
                präsentiert oder veröffentlicht werden.
            </p>

            <h2
                style={{
                    fontSize: '24px',
                    color: '#ffffff', // Textfarbe weiß
                    marginBottom: '15px',
                    textDecoration: 'underline', // Unterstrichen
                }}
            >
                2. Studienteilnahme
            </h2>

            <p style={{marginBottom: '20px'}}>
                Ihre Teilnahme an dieser Onlinestudie ist vollkommen freiwillig und kann jederzeit abgebrochen oder
                widerrufen werden. Sie können die Beantwortung von Fragen oder die weitere Durchführung der Studie
                jederzeit verweigern, wenn Sie sich in irgendeiner Weise unwohl fühlen.
            </p>
            <h2
                style={{
                    fontSize: '24px',
                    color: '#ffffff', // Textfarbe weiß
                    marginBottom: '15px',
                    textDecoration: 'underline', // Unterstrichen
                }}
            >
                3. Risiken und Nutzen
            </h2>

            <p style={{marginBottom: '30px'}}>
                In der Onlinestudie werden Sie keinen unmittelbaren Risiken oder Gefahren ausgesetzt sein. Wie bei allen
                Computersystemen besteht ein geringes Risiko eines Datenlecks. Sie haben keinen direkten Nutzen durch
                die Studienteilnahme, unterstützen aber die Forschung in diesem Bereich.
            </p>

            <h2
                style={{
                    fontSize: '24px',
                    color: '#ffffff', // Textfarbe weiß
                    marginBottom: '15px',
                    textDecoration: 'underline', // Unterstrichen
                }}
            >
                4. Datenschutz und Vertraulichkeit
            </h2>

            <p style={{marginBottom: '30px'}}>
                In dieser Studie werden für unsere Forschung persönliche und personenbezogene Daten erhoben. Die
                Verwendung von persönlichen oder personenbezogenen Daten unterliegt der Datenschutz-Grundverordnung
                (DSGVO) der Europäischen Union (EU) und werden in Übereinstimmung mit der DSGVO behandelt. Das bedeutet,
                dass Sie die Daten, die in dieser Studie erhoben wurden, einsehen, berichtigen, in der Verarbeitung
                einschränken und löschen lassen können. Nur mit Ihrer Einwilligung werden in der Studie Ihre Eingaben
                registriert und Notizen angefertigt. Wir planen die Ergebnisse dieser und anderer Forschungsstudien in
                wissenschaftlichen Artikeln oder anderen Medien zu veröffentlichen. Ihre Daten werden von den Forschern
                nicht länger als 2 Jahre aufbewahrt oder bis Sie die Forscher kontaktieren, um Ihre Daten zu vernichten
                oder zu löschen lassen. Der Zugriff auf die Rohdaten, Interviewtranskripte und Beobachtungsprotokolle
                der Studie erfolgt verschlüsselt, passwortgeschützt und nur für die Autoren, Kollegen und Forscher, die
                im Rahmen dieser Forschung zusammenarbeiten. Andere Mitglieder und Administratoren unserer Institution
                haben keinen Zugriff auf Ihre Daten. Die Daten werden durch codierte Kennziffern anonymisiert und
                ausschließlich in aggregierter Form (zusammenfassend) veröffentlicht, sodass ohne die Informationen der
                Forschenden keine Rückschlüsse auf einzelne Personen möglich sind. Jegliche Interviewinhalte oder
                direkte Zitate aus dem Interview, die über wissenschaftliche Veröffentlichungen oder andere
                wissenschaftliche Medien einsehbar sind, werden ebenfalls durch codierte Kennziffern anonymisiert. Da
                keine Kontaktdaten (z.B. E-Mails) erhoben werden, können die Forschenden die Teilnehmenden nicht über
                weitere Details der Studie oder über eine mögliche Verletzung vertraulicher Daten informieren.
            </p>

            <h2
                style={{
                    fontSize: '24px',
                    color: '#ffffff', // Textfarbe weiß
                    marginBottom: '15px',
                    textDecoration: 'underline', // Unterstrichen
                    textAlign: 'center'
                }}
            >
                5. Nennung der Untersuchenden
            </h2>

            <div
                style={{
                    display: 'flex', // Flexbox verwenden, um die Spalten nebeneinander zu stellen
                    justifyContent: 'space-between', // Versucht, die beiden Blöcke zu trennen
                    maxWidth: '800px',
                    margin: '0 auto 20px auto',
                    padding: '0 20px',
                }}
            >
                {/* Versuchsdurchführende */}
                <div style={{marginRight: '20px'}}>

                    <h3 style={{
                        color: '#ffffff',
                        marginBottom: '10px',
                        textDecoration: 'underline'
                    }}>Versuchsdurchführende:</h3>

                    <div style={{marginBottom: '20px'}}>

                        <h4 style={{color: '#ffffff', textDecoration: 'underline'}}>Michael Winter</h4>

                        <ul style={{listStyleType: 'none', padding: 0, textAlign: 'left'}}>

                            <li>E-Mail: Michael1.Winter@stud.uni-regensburg.de</li>
                            <li>Universität Regensburg</li>
                        </ul>
                    </div>

                    <div>

                        <h4 style={{color: '#ffffff', textDecoration: 'underline'}}>Mark Zänglein</h4>

                        <ul style={{listStyleType: 'none', padding: 0, textAlign: 'left'}}>

                            <li>E-Mail: Mark.Zaenglein@stud.uni-regensburg.de</li>
                            <li>Universität Regensburg</li>
                        </ul>
                    </div>
                </div>

                {/* Versuchsleitung */}
                <div>
                    <h3 style={{
                        color: '#ffffff',
                        marginBottom: '10px',
                        textDecoration: 'underline'
                    }}>Versuchsleitung:</h3>

                    <ul style={{listStyleType: 'none', padding: 0, textAlign: 'left'}}>
                        <li>PD Dr. David Elsweiler</li>
                        <li>Telefonnummer: 0941 943-4195</li>
                        <li>Raum: PT 3.0.57</li>
                        <li>Universitätsstraße 31</li>
                        <li>93053 Regensburg, Germany</li>
                    </ul>
                </div>
            </div>


            <form onSubmit={handleSubmit}
                  style={{
                      display: 'flex',
                      justifyContent: 'center', // Horizontal zentrieren
                      alignItems: 'center', // Vertikal zentrieren
                      flexDirection: 'column', // Um sicherzustellen, dass alles vertikal ausgerichtet wird
                      marginTop: '10px',
                  }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        style={{
                            marginRight: '10px',
                        }}
                    />
                    <span style={{color: '#ffffff'}}>Ich stimme zu</span>
                </div>

                <button
                    type="submit"
                    style={{
                        padding: '12px 24px',
                        backgroundColor: isChecked ? '#4CAF50' : '#aaa', // Button wird nur grün, wenn Checkbox abgehakt ist
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
                        cursor: isChecked ? 'pointer' : 'not-allowed', // Cursor ändert sich, wenn Checkbox nicht abgehakt ist
                        transition: 'background-color 0.3s',
                    }}
                    disabled={!isChecked} // Button ist deaktiviert, wenn Checkbox nicht abgehakt ist
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = isChecked ? '#45A049' : '#aaa')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = isChecked ? '#4CAF50' : '#aaa')}
                >
                    Nächste Seite
                </button>
            </form>
        </div>
    );
}