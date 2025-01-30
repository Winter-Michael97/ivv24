'use client'

export default function Q1() {

    const headstyle = {
        fontSize: '28px',
        color: '#4CAF50', // Akzentfarbe für die Überschrift
        marginBottom: '20px',
    }

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
            <h1 style={headstyle}>Gruppe 1</h1>
        </div>
    );
}
