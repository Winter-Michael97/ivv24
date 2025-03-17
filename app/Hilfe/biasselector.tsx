import React, { useState } from 'react';
import { CSSProperties } from 'react';

interface BiasSelectorProps {
    onChange: (bias: boolean | null) => void; // Funktion zum Übermitteln des Bias-Werts
}

export default function BiasSelector({ onChange }: BiasSelectorProps) {
    const [isBias, setIsBias] = useState<boolean | null>(null);

    // Handler für das Wechseln der Auswahl
    const handleBiasChange = (value: boolean | null) => {
        setIsBias(value);
        onChange(value); // Übermittelt den Wert an die übergeordnete Komponente
    };

    return (
        <div style={styles.container}>
            <div style={styles.checkboxContainer}>
                <label style={styles.label}>
                    <input
                        type="radio"
                        checked={isBias === true}
                        onChange={() => handleBiasChange(true)}
                        style={styles.checkbox}
                    />
                    Bias
                </label>
                <label style={styles.label}>
                    <input
                        type="radio"
                        checked={isBias === false}
                        onChange={() => handleBiasChange(false)}
                        style={styles.checkbox}
                    />
                    Kein Bias
                </label>
            </div>
        </div>
    );
}

// Styles für die Komponente mit linksbündiger Ausrichtung
const styles: { [key: string]: CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',  // Elemente untereinander
        alignItems: 'flex-start', // Linksbündige Ausrichtung
        paddingLeft: '10px',      // Abstand zur linken Seite
    },
    checkboxContainer: {
        display: 'flex',
        flexDirection: 'column', // Checkboxen untereinander statt nebeneinander
        gap: '10px',             // Mehr Abstand zwischen Checkboxen
    },
    label: {
        fontSize: '16px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: '8px',
    },
};
