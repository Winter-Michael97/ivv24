'use server';

import { sql } from '@vercel/postgres';

const connectionString = process.env.POSTGRES_URL;

if (!connectionString) {
    throw new Error('No connection string provided.');
}

// Erstellt einen neuen User mit einer ausgewogenen Gruppenverteilung
export async function CreateUserID() {
    try {
        const result = await sql`
            INSERT INTO users (gruppe)
            VALUES (
                       CASE
                           WHEN (SELECT COUNT(*) FROM users WHERE gruppe = 0) <=
                                LEAST((SELECT COUNT(*) FROM users WHERE gruppe = 1), (SELECT COUNT(*) FROM users WHERE gruppe = 2)) THEN 0
                           WHEN (SELECT COUNT(*) FROM users WHERE gruppe = 1) <=
                                (SELECT COUNT(*) FROM users WHERE gruppe = 2) THEN 1
                           ELSE 2
                           END
                   )
                RETURNING id, gruppe;
        `;
        return result.rows[0]; // { id: number, gruppe: number }
    } catch (error) {
        console.error("Error creating user ID:", error);
        throw error;
    }
}

// Speichert eine Antwort in der Datenbank
export async function saveAnswer(user_id: number, group_id: number, textauschnitt: string, bias: boolean) {
    try {
        const result = await sql`
            INSERT INTO answers (user_id, group_id, textauschnitt, bias)
            VALUES (${user_id}, ${group_id}, ${textauschnitt}, ${bias})
                RETURNING *;
        `;
        return result.rows[0];
    } catch (error) {
        console.error('Fehler beim Speichern der Antwort:', error);
        throw error;
    }
}



// Speichert demografische Daten für einen User
export async function saveDemographics(
    userId: number,
    vorname: string,
    nachname: string,
    age: string,
    geschlecht: string,
    abschluss: string,
    beruf: string
) {
    try {
        const result = await sql`
            UPDATE users
            SET vorname = ${vorname},
                nachname = ${nachname},
                age = ${age},
                geschlecht = ${geschlecht},
                abschluss = ${abschluss},
                beruf = ${beruf}
            WHERE id = ${userId}
                RETURNING *;
        `;
        return result.rows[0]; // Gibt den aktualisierten User zurück
    } catch (error) {
        console.error("Error saving demographics:", error);
        throw error;
    }
}
