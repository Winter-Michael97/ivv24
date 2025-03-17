'use client';
import { useRouter } from 'next/navigation';
import { CreateUserID } from '../lib/data';

export default function EUI() {
    const router = useRouter();

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            const result = await CreateUserID();
            const userId = result.id;
            const userGroup = result.gruppe;

            // Setze die User-Informationen in localStorage
            localStorage.setItem("userId", userId.toString());
            localStorage.setItem("UserGroup", userGroup.toString());

            // Weiterleitung zur richtigen Gruppe und Frage
            if (userGroup === 0) {
                router.push('/AT/BS/Q1'); // Weiterleitung zu BS
            } else if (userGroup === 1) {
                router.push('/AT/DH/Q1'); // Weiterleitung zu DH
            } else if (userGroup === 2) {
                router.push('/AT/KH/Q1'); // Weiterleitung zu KH
            }
        } catch (error) {
            console.error("Error creating USERID", error);
            throw error;
        }
    };


    const headstyle = {
        fontSize: '28px',
        color: '#ffffff',
        marginBottom: '20px',
    };

    const headstyle_2 = {
        fontSize: '24px',
        color: '#ffffff',
        marginBottom: '25px',
        marginTop: '30px',
    };

    const paragraphstyle = {
        marginBottom: '7px',
        color: '#ffffff',
    };

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
            <h1 style={headstyle}>Willkommen zu unserer Studie</h1>

            <h2 style={headstyle_2}>Ziel der Studie:</h2>
            <p style={paragraphstyle}>
                In dieser Studie möchten wir untersuchen, wie verschiedene Methoden der Bias-Erkennung die Fähigkeit von Menschen
                beeinflussen, Vorurteile in Nachrichtenquellen zu identifizieren. Sie werden gebeten, fünf verschiedene Texte zu analysieren
                und dabei die vorgegebene Methode zur Bias-Erkennung anzuwenden.
            </p>

            <h2 style={headstyle_2}>Was ist Bias?</h2>
            <p style={paragraphstyle}>
                Bias bedeutet Vorurteil oder Verzerrung in einer Quelle oder Darstellung von Informationen. Dies kann in der Art und Weise
                geschehen, wie Nachrichten präsentiert werden, um eine bestimmte Meinung oder ein bestimmtes Verhalten zu fördern. In dieser
                Studie werden Sie verschiedene Nachrichtenartikel lesen und dabei erkennen, wie Bias in diesen Artikeln möglicherweise
                verwendet wird.
            </p>

            <h2 style={headstyle_2}>Was werden Sie tun?</h2>
            <ul style={{marginBottom: '20px', paddingLeft: '20px'}}>
                <li style={paragraphstyle}>• Sie werden in einer von drei Gruppen zugewiesen.</li>
                <li style={paragraphstyle}>• Sie werden fünf verschiedene Texten lesen und diese auf Bias analysieren.
                </li>
                <li style={paragraphstyle}>• Gruppe 1: Bekommt Hinweise eines Onlinetools, um Bias in Texten zu
                    identifizieren.
                </li>
                <li style={paragraphstyle}>• Gruppe 2: Bekommt eine Reihe von Definitionen zur Bias-Erkennung, um den
                    Text zu analysieren.</li>
                <li style={paragraphstyle}>• Gruppe 3: Nutzt die eigene Fähigkeit, Bias in Texten zu erkennen.</li>

            </ul>

            <h2 style={headstyle_2}>Ablauf der Studie:</h2>
            <ul style={{marginBottom: '20px', paddingLeft: '20px' }}>
                <li style={paragraphstyle}>1. Zuteilung in eine Gruppe</li>
                <li style={paragraphstyle}>2. Lesen eines Nachrichtenartikels</li>
                <li style={paragraphstyle}>3. Identifizieren von Bias</li>
                <li style={paragraphstyle}>4. Abgabe und Evaluation der Ergebnisse</li>
                <li style={paragraphstyle}>5. Schritt 2-4 werden insgesamt 5 Mal wiederholt, wobei der Einsatz von unterstützenden Methoden in den letzten 2 Durchgängen nicht geboten wird</li>
            </ul>

            <h2 style={headstyle_2}>Wenn Sie Fragen haben:</h2>
            <p style={paragraphstyle}>
                Falls Sie Fragen haben oder etwas unklar ist, können Sie sich jederzeit an unser Team wenden, indem Sie uns per E-Mail kontaktieren.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button
                    type="submit"
                    style={{
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
        </div>
    );
}
