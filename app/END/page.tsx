'use client';

import React from 'react';

export default function ThankYouPage () {
    return (
        <div style={containerStyle}>
            <h1 style={headStyle}>Danke für Ihre Teilnahme!</h1>
            <p style={messageStyle}>Wir schätzen Ihre Zeit und Ihren Beitrag. Vielen Dank!</p>
        </div>
    );
};

// 🔹 Styles
const containerStyle = {
    backgroundColor: '#708090',
    color: '#ffffff',
    padding: '50px',
    textAlign: 'center' as const,
    height: '100vh'
};

const headStyle = {
    fontSize: '36px',
    fontWeight: 'bold' as const,
    marginBottom: '20px',
};

const messageStyle = {
    fontSize: '20px',
    fontWeight: 'normal' as const,
};

