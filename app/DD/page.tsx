'use client'
import {useEffect, useState} from 'react';
import { saveDemographics } from '../lib/data';


export default function Home() {
    useEffect(() => {
        // Scrollen vollständig deaktivieren
        document.documentElement.style.overflow = 'hidden'; // Für das <html>-Element
        document.documentElement.style.height = '100%';
        document.body.style.overflow = 'hidden'; // Für das <body>-Element
        document.body.style.height = '100%';
        document.body.style.margin = '0';

        return () => {
            // Zurücksetzen der Änderungen
            document.documentElement.style.overflow = '';
            document.documentElement.style.height = '';
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.style.margin = '';
        };
    }, []);

    const [vorname, setVorname] = useState('');
    const [nachname, setNachname] = useState('');
    const [age, setAge] = useState('');
    const [geschlecht, setGeschlecht] = useState('');
    const [abschluss, setAbschluss] = useState('');
    const [beruf, setBeruf] = useState('');

    // Erstmal zu Question_ohnequellen, brauche noch random gruppeneinteilung
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (vorname && nachname && age && geschlecht && abschluss && beruf) {
            const userId = parseInt(localStorage.getItem('userId') || '0');

            saveDemographics(userId, vorname, nachname, age, geschlecht, abschluss, beruf)
                .then(() => {
                    localStorage.clear();
                    alert('Vielen Dank für Ihre Teilnahme!');
                })
                .catch((error) => {
                    console.error('Fehler beim Speichern:', error);
                    alert('Fehler beim Speichern der Daten.');
                });
        } else {
            alert('Bitte füllen Sie die benötigten Daten aus.');
        }
    };

    return (
        <div style={{
            position: 'fixed',       // Verhindert Scrollen
            top: 0,                  // Fixiert den Inhalt oben
            left: 0,                 // Fixiert den Inhalt links
            width: '100vw',          // Volle Breite des Viewports
            height: '100vh',         // Volle Höhe des Viewports
            overflow: 'hidden',      // Kein Scrollen innerhalb des Containers
            textAlign: 'center',
            marginTop: '0',          // Kein zusätzliches Margin
            backgroundColor: '#708090', // Grauer Hintergrund
            color: '#000',           // Weißer Text
            padding: '20px'}}>
            <h1 style={{ marginBottom: '20px', color: '#fff', fontSize: '20px'}}>Bitte tragen Sie die benötigten Daten ein:</h1>
            <div className='form flex-direction-column'>
                <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <input
                        type="text"
                        placeholder="Vorname"
                        value={vorname}
                        onChange={(e) => setVorname(e.target.value)}
                        style={{padding: '10px', fontSize: '16px', marginBottom: '10px'}}
                    />
                    <input
                        type="text"
                        placeholder="Nachname"
                        value={nachname}
                        onChange={(e) => setNachname(e.target.value)}
                        style={{padding: '10px', fontSize: '16px', marginBottom: '10px'}}
                    />
                    <input
                        type="number"
                        placeholder="Alter"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        style={{padding: '10px', fontSize: '16px', marginBottom: '10px'}}
                    />
                    <select
                        value={geschlecht}
                        onChange={(e) => setGeschlecht(e.target.value)}
                        style={{padding: '10px', fontSize: '16px', marginBottom: '10px', width: '215px', borderRadius: '4px'}}
                    >
                        <option value="" disabled>Wähle dein Geschlecht</option>
                        <option value="männlich">Männlich</option>
                        <option value="weiblich">Weiblich</option>
                        <option value="divers">Divers</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Abschluss"
                        value={abschluss}
                        onChange={(e) => setAbschluss(e.target.value)}
                        style={{padding: '10px', fontSize: '16px', marginBottom: '10px'}}
                    />
                    <input
                        type="text"
                        placeholder="Beruf"
                        value={beruf}
                        onChange={(e) => setBeruf(e.target.value)}
                        style={{padding: '10px', fontSize: '16px', marginBottom: '10px'}}
                    />

                    <button type="submit" style={{
                        margin: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#4CAF50', // Grüner Button
                        color: '#fff',              // Weißer Text
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                    }}>
                        Abschicken

                    </button>
                </form>
            </div>
        </div>
    );
}
