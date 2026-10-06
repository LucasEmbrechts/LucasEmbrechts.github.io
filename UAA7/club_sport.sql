-- UAA7 – Bases de données : SQL DML – Exercices supplémentaires
-- Base de données du club de sport : création des tables et données de départ.
-- Relance ce script pour repartir des données initiales.

-- Supprime les tables si elles existent (pour repartir de zéro)
DROP TABLE IF EXISTS CASIER, SEANCE, MEMBRE, SPORT;

CREATE TABLE SPORT (
    code        CHAR(3)      PRIMARY KEY,
    nom         VARCHAR(30)  NOT NULL UNIQUE,
    cotisation  DECIMAL(6,2) NOT NULL,
    CONSTRAINT chk_sport_cotisation CHECK (cotisation >= 0)
);

CREATE TABLE MEMBRE (
    id               INT          PRIMARY KEY,
    nom              VARCHAR(40)  NOT NULL,
    prenom           VARCHAR(40)  NOT NULL,
    email            VARCHAR(80)  UNIQUE,
    dateNaissance    DATE         NOT NULL,
    dateInscription  DATE         NOT NULL DEFAULT CURRENT_DATE,
    sport            CHAR(3),
    CONSTRAINT fk_membre_sport FOREIGN KEY (sport)
        REFERENCES SPORT (code) ON DELETE RESTRICT,
    CONSTRAINT chk_membre_email CHECK (email LIKE '%@%'),
    CONSTRAINT chk_membre_dates CHECK (dateInscription > dateNaissance)
);
CREATE TABLE SEANCE (
    id      INT         PRIMARY KEY,
    sport   CHAR(3)     NOT NULL,
    jour    VARCHAR(10) NOT NULL,
    heure   TIME        NOT NULL,
    places  SMALLINT    NOT NULL,
    CONSTRAINT fk_seance_sport FOREIGN KEY (sport)
        REFERENCES SPORT (code) ON DELETE CASCADE,
    CONSTRAINT chk_seance_jour CHECK (jour IN ('lundi', 'mardi', 'mercredi',
        'jeudi', 'vendredi', 'samedi', 'dimanche')),
    CONSTRAINT chk_seance_places CHECK (places BETWEEN 1 AND 30)
);

CREATE TABLE CASIER (
    numero  INT PRIMARY KEY,
    membre  INT UNIQUE,
    CONSTRAINT fk_casier_membre FOREIGN KEY (membre)
        REFERENCES MEMBRE (id) ON DELETE SET NULL
);

INSERT INTO SPORT VALUES ('NAT', 'Natation', 180.00);
INSERT INTO SPORT VALUES ('TEN', 'Tennis', 250.00);
INSERT INTO SPORT VALUES ('BAD', 'Badminton', 120.00);
INSERT INTO SPORT VALUES ('ESC', 'Escalade', 300.00);

INSERT INTO MEMBRE VALUES (1, 'Dubois', 'Léa', 'lea.dubois@mail.be',
    '2008-04-12', '2024-09-02', 'NAT');
INSERT INTO MEMBRE VALUES (2, 'Martin', 'Hugo', 'hugo.martin@mail.be',
    '2007-11-30', '2023-09-05', 'TEN');
INSERT INTO MEMBRE VALUES (3, 'Lambert', 'Inès', NULL,
    '2009-02-03', '2025-01-15', 'NAT');
INSERT INTO MEMBRE VALUES (4, 'Renard', 'Tom', 'tom.renard@mail.be',
    '2008-07-21', '2024-09-02', 'ESC');
INSERT INTO MEMBRE VALUES (5, 'Petit', 'Sarah', 'sarah.petit@mail.be',
    '2006-12-08', '2022-10-10', NULL);
INSERT INTO MEMBRE VALUES (6, 'Rousseau', 'Noah', 'noah.rousseau@mail.be',
    '2009-05-17', '2025-03-01', 'BAD');

INSERT INTO SEANCE VALUES (1, 'NAT', 'lundi', '17:00', 20);
INSERT INTO SEANCE VALUES (2, 'NAT', 'jeudi', '18:00', 20);
INSERT INTO SEANCE VALUES (3, 'TEN', 'mercredi', '14:00', 8);
INSERT INTO SEANCE VALUES (4, 'ESC', 'samedi', '10:00', 12);
INSERT INTO SEANCE VALUES (5, 'BAD', 'mardi', '16:30', 16);

INSERT INTO CASIER VALUES (101, 1);
INSERT INTO CASIER VALUES (102, 2);
INSERT INTO CASIER VALUES (103, NULL);
INSERT INTO CASIER VALUES (104, 4);
