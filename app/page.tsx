'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

export default function DD() {
    const router = useRouter();
    const [isChecked, setIsChecked] = useState(false); // State für das Kontrollkästchen


    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        router.push('EUI'); // Ersetze dies mit dem tatsächlichen Pfad der nächsten Seite
    };

    // Funktion zum Toggle des Kontrollkästchens
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div
            style={{
                textAlign: 'center',
                backgroundColor: '#121212', // Dunkler Hintergrund für ein modernes Design
                color: '#e0e0e0', // Helle Schriftfarbe für guten Kontrast
                padding: '30px',
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1.6',
            }}
        >
            <h1
                style={{
                    fontSize: '28px',
                    color: '#4CAF50', // Akzentfarbe für die Überschrift
                    marginBottom: '20px',
                }}
            >
                Einverständniserklärung zur Studienteilnahme
            </h1>

            <p style={{marginBottom: '20px'}}>
                Sie sind eingeladen, an der Onlinestudie &#34;Effektivität von
                Bias-Erkennungsstrategien:&#34; teilzunehmen. Die Studie wird von Michael
                Winter und
                Mark Zänglein durchgeführt und von <br/>PD Dr. David Elsweiler an der Universität Regensburg geleitet.
                Die Studie
                mit
                voraussichtlich TEILNEHMER AUSRECHNEN findet im Zeitraum vom 15.02.2025 bis 30.03.2025 statt.
            </p>

            <p style={{marginBottom: '10px', fontSize: '18px'}}>Bitte beachten Sie:</p>

            <ul
                style={{
                    textAlign: 'left',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto',
                    padding: '0 20px',
                    listStyleType: 'disc',
                }}
            >
                <li>Ihre Teilnahme ist vollkommen freiwillig und kann jederzeit abgebrochen oder widerrufen werden.</li>
                <li>
                    Sie haben keinen direkten Nutzen durch die Studienteilnahme, unterstützen aber unsere Arbeit und
                    helfen die
                    Forschung in diesem Bereich voranzubringen.
                </li>
                <li>Wir erfassen zur Analyse einige persönliche Daten (z. B. Alter, Gender, usw.).</li>
                <li>Während der Sitzung werden Ihre Eingaben registriert und Notizen angefertigt.</li>
                <li>
                    Aufzeichnungen und personenbezogene Daten unterliegen den Richtlinien der Datenschutzgrundverordnung
                    (DSGVO)
                    und werden pseudoanonymisiert gespeichert.
                </li>
            </ul>

            <p style={{marginBottom: '30px'}}>
                Die Alternative zur Studienteilnahme ist die Nichtteilnahme. Wenn Sie Fragen, Bedenken oder Beschwerden
                zur
                Einwilligungserklärung dieser Forschungsstudie oder zu Ihren Rechten als Versuchsperson haben, wenden
                Sie sich
                bitte an PD Dr. David Elsweiler. Bitte lesen Sie die folgenden Informationen sorgfältig durch.
            </p>

            <h2
                style={{
                    fontSize: '24px',
                    color: '#4CAF50',
                    marginBottom: '15px',
                }}
            >
                1. Zweck und Ziel dieser Forschung
            </h2>

            <p style={{marginBottom: '20px'}}>
                Ziel dieser Forschung ist es, zu untersuchen, wie verschiedene Ansätze bei der Analyse von
                Nachrichtenartikeln
                helfen, mögliche Verzerrungen oder
                Tendenzen (Bias) in den Texten zu erkennen. Ihre Teilnahme hilft uns,
                dieses Forschungsziel zu erreichen. Die Ergebnisse dieser Forschung können auf wissenschaftlichen oder
                Fachtagungen präsentiert oder veröffentlicht werden.
            </p>
            <h2
                style={{
                    fontSize: '24px',
                    color: '#4CAF50',
                    marginBottom: '15px',
                }}
            >
                2. Studienteilnahme
            </h2>

            <p style={{marginBottom: '20px'}}>
                Ihre Teilnahme an dieser Onlinestudie ist vollkommen freiwillig und kann jederzeit abgebrochen oder
                widerrufen
                werden. Sie können die Beantwortung von Fragen oder die weitere Durchführung der Studie jederzeit
                verweigern,
                wenn
                Sie sich in irgendeiner Weise unwohl fühlen.
            </p>

            <h2
                style={{
                    fontSize: '24px',
                    color: '#4CAF50',
                    marginBottom: '15px',
                }}
            >
                3. Studienablauf
            </h2>

            <ol
                style={{
                    textAlign: 'center',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto',
                    padding: '0 20px',
                }}
            >
                <li>1. Einführung und Information</li>
                <li>2. Zuweisung zu einer Gruppe</li>
                <li>3. Analyse ausgewählter Texte</li>
                <li>4. Auswertung der Ergebnisse</li>
                <li>5. Abschluss und Feedback</li>
            </ol>

            <p style={{marginBottom: '30px'}}>
                Die Bestätigung zur Teilnahme an dieser Studie kann direkt im Anschluss bei den Forschenden eingeholt
                werden.
            </p>

            <h2
                style={{
                    fontSize: '24px',
                    color: '#4CAF50',
                    marginBottom: '15px',
                }}
            >
                4. Risiken und Nutzen
            </h2>

            <p style={{marginBottom: '30px'}}>
                In der Onlinestudie werden Sie keinen unmittelbaren Risiken oder Gefahren ausgesetzt sein. Wie bei allen
                Computersystemen besteht ein geringes Risiko eines Datenlecks. Sie haben keinen direkten Nutzen durch
                die
                Studienteilnahme, unterstützen aber die Forschung in diesem Bereich.
            </p>

            <h2
                style={{
                    fontSize: '24px',
                    color: '#4CAF50',
                    marginBottom: '15px',
                }}
            >
                5. Datenschutz und Vertraulichkeit
            </h2>

            <p style={{marginBottom: '30px'}}>
                In dieser Studie werden für unsere Forschung persönliche und personenbezogene
                Daten erhoben. Die Verwendung von persönlichen oder personenbezogenen Daten
                unterliegt der Datenschutz-Grundverordnung (DSGVO) der Europäischen Union (EU)
                und werden in Übereinstimmung mit der DSGVO behandelt. Das bedeutet, dass Sie die
                Daten, die in dieser Studie erhoben wurden, einsehen, berichtigen, in der
                Verarbeitung einschränken und löschen lassen können. Nur mit Ihrer Einwilligung
                werden in der Studie Ihre Eingaben registriert und Notizen angefertigt.
                Wir planen die Ergebnisse dieser und anderer Forschungsstudien in
                wissenschaftlichen Artikeln oder anderen Medien zu veröffentlichen.
                Ihre Daten werden von den Forschern nicht länger als 2 Jahre aufbewahrt oder
                bis Sie die Forscher kontaktieren, um Ihre Daten zu vernichten oder zu löschen
                lassen. Der Zugriff auf die Rohdaten, Interviewtranskripte und
                Beobachtungsprotokolle der Studie erfolgt verschlüsselt, passwortgeschützt
                und nur für die Autoren, Kollegen und Forscher, die im Rahmen dieser Forschung
                zusammenarbeiten. Andere Mitglieder und Administratoren unserer Institution
                haben keinen Zugriff auf Ihre Daten. Die Daten werden durch codierte Kennziffern
                anonymisiert und ausschließlich in aggregierter Form (zusammenfassend)
                veröffentlicht, sodass ohne die Informationen der Forschenden keine Rückschlüsse
                auf einzelne Personen möglich sind. Jegliche Interviewinhalte oder direkte
                Zitate aus dem Interview, die über wissenschaftliche Veröffentlichungen
                oder andere wissenschaftliche Medien einsehbar sind, werden ebenfalls
                durch codierte Kennziffern anonymisiert. Da keine Kontaktdaten
                (z.B. E-Mails) erhoben werden, können die Forschenden die Teilnehmenden
                nicht über weitere Details der Studie oder über eine mögliche Verletzung
                vertraulicher Daten informieren.
            </p>
            <h2
                style={{
                    fontSize: '24px',
                    color: '#4CAF50',
                    marginBottom: '15px',
                }}
            >
                6. Nennung der Untersuchenden
            </h2>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto',
                    padding: '0 20px',
                    textAlign: 'left',
                }}
            >
                {/* Versuchsdurchführende */}
                <div>
                    <h3 style={{color: '#4CAF50', marginBottom: '10px'}}>Versuchsdurchführende:</h3>

                    {/* Michael Winter */}
                    <div style={{marginBottom: '20px'}}>
                        <h4 style={{color: '#4CAF50'}}>Michael Winter</h4>
                        <ul style={{listStyleType: 'none', padding: 0}}>
                            <li>E-Mail: Michael1.Winter@stud.uni-regensburg.de</li>
                            <li>Universität Regensburg</li>
                        </ul>
                    </div>

                    {/* Mark Zänglein */}
                    <div>
                        <h4 style={{color: '#4CAF50'}}>Mark Zänglein</h4>
                        <ul style={{listStyleType: 'none', padding: 0}}>
                            <li>E-Mail: Mark.Zaenglein@stud.uni-regensburg.de</li>
                            <li>Universität Regensburg</li>
                        </ul>
                    </div>
                </div>

                {/* Versuchsleitung */}
                <div>
                    <h3 style={{color: '#4CAF50', marginBottom: '10px'}}>Versuchsleitung:</h3>
                    <ul style={{listStyleType: 'none', padding: 0}}>
                        <li>PD Dr. David Elsweiler</li>
                        <li>Telefonnummer: 0941 943-4195</li>
                        <li>Raum: PT 3.0.57</li>
                        <li>Universitätsstraße 31</li>
                        <li>93053 Regensburg, Germany</li>
                    </ul>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                    }}
                >
                    {/* Kontrollkästchen links vom Button */}
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        style={{
                            marginRight: '10px',
                        }}
                    />
                    <span>Ich stimme zu</span>
                </div>

                <button
                    type="submit"
                    style={{
                        marginTop: '20px',
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
