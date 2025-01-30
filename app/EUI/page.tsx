'use client';
import { useRouter } from 'next/navigation'

export default function EUI(){
    const router = useRouter();


    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        router.push('NÄCHSTE SEITE'); // Ersetze dies mit dem tatsächlichen Pfad der nächsten Seite
    };

    const headstyle = {
        fontSize: '28px',
        color: '#4CAF50', // Akzentfarbe für die Überschrift
        marginBottom: '20px',
    }

    const headstyle_2 = {
        fontSize: '24px',
        color: '#4CAF50', // Akzentfarbe für die Überschrift
        marginBottom: '20px',
    }

    const paragraphstyle = {
        marginBottom: '20px'
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
            <h1 style={headstyle}>Willkommen zu unserer Studie: Die Erkennung von Bias in Nachrichtenquellen</h1>
            <h2 style={headstyle_2}>Ziel der Studie:</h2>
            <p style={paragraphstyle}>In dieser Studie möchten wir untersuchen, wie verschiedene
                Methoden der Bias-Erkennung die Fähigkeit von Menschen beeinflussen, Vorurteile in Nachrichtenquellen zu
                identifizieren.
                Du wirst gebeten, drei verschiedene Texte zu analysieren und dabei eine Methode zur Bias-Erkennung
                anzuwenden.</p>
            <h2 style={headstyle_2}>Was ist Bias?</h2>
            <p style={paragraphstyle}>Bias bedeutet Vorurteil oder Verzerrung in einer Quelle oder Darstellung von
                Informationen.
                Dies kann in der Art und Weise geschehen, wie Nachrichten präsentiert werden, um eine bestimmte Meinung
                oder ein bestimmtes
                Verhalten zu fördern. In dieser Studie wirst du verschiedene Nachrichtenartikel lesen und dabei
                erkennen,
                wie Bias in diesen Artikeln möglicherweise verwendet wird.</p>
            <h2 style={headstyle_2}>Was wirst du tun?</h2>
            <ul
                style={{
                    textAlign: 'left',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto',
                    padding: '0 20px',
                    listStyleType: 'disc',
                }}
            >
                <li>Du wirst drei verschiedene Texte lesen und sie auf Bias analysieren.</li>
                <li>Du wirst in einer von drei Gruppen zugewiesen</li>
                <li>Gruppe 1: Nutzt ein Tools namens BiasScanner, um Bias in Texten zu identifizieren</li>
                <li>Gruppe 2: Nutzt die eigene Fähigkeit, Bias in Texten zu erkennen</li>
                <li>Gruppe 3: Bekommt eine Reihe von Defintionen zur Bias-Erkennung, um den Text zu analysieren</li>
            </ul>
            <h2 style={headstyle_2}>Ablauf der Studie:</h2>
            <ul
                style={{
                    textAlign: 'left',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto',
                    padding: '0 20px',
                    listStyleType: 'disc',
                }}
            >
                <li>Durchgang 1: Alle Gruppen erhalten den selben Text</li>
                <li>Durchgang 2: Alle Gruppen erhalten einen neuen Text, den sie analysieren sollen</li>
                <li>Durchgang 3: Der Letzte Text wird von allen Gruppen analysiert, jedoch ohne zusätzliche Hilfsmittel
                    wie BiasScanner oder Definitionen
                </li>
            </ul>
            <h2 style={headstyle_2}>Dauer der Studie:</h2>
            <p style={paragraphstyle}>Die gesamte Studie wird etwa 15-20 Minuten in Anspruch nehmen. Es wird empfohlen,
                die Studie in einem ruhigen Umfeld ohne Ablenkungen durchzuführen.</p>
            <h2 style={headstyle_2}>Wenn du Fragen hast:</h2>
            <p style={paragraphstyle}>Falls du Fragen hast oder etwas unklar ist, kannst du dich jederzeit an unser Team
                wenden, indem du uns per E-Mail kontaktierst.</p>
            <button
                type="submit"
                style={{
                    marginTop: '20px',
                    padding: '12px 24px',
                    backgroundColor: '#4CAF50',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    transition: 'background-color 0.3s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#45A049')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')}
                onClick={handleSubmit}
            >
                Studie starten
            </button>
        </div>
    );
}