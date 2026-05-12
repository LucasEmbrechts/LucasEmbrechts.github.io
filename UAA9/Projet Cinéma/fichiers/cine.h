#pragma once

/*
* Gestion d'un cinéma
* Ce fichier contient les définitions de structures et de fonctions
* pour gérer les films, les salles et les séances d'un cinéma.
* Il inclut des fonctions pour ouvrir des fichiers, obtenir des données,
* insérer, supprimer et modifier des films, salles et séances,
* ainsi que des fonctions utilitaires pour manipuler des dates.
* @author Lucas Embrechts
* @date 2025-12-26
* @note Les fichiers utilisés sont : films.txt, salles.txt, seances.txt et reservations.txt.
* @note Le fichier films.txt est structuré de la manière suivante :
*       titre|genre|duree|ageMinimum
* @note Le fichier salles.txt est structuré de la manière suivante :
*       numSalle | capacite
* @note Le fichier seances.txt est structuré de la manière suivante :
*       titre|dateSeance|heureDebut|numSalle|version
* @note Le fichier reservations.txt est structuré de la manière suivante :
*       numSalle|date|heure|nbAdultes|nbEnfants|nbSeniors|nom|prenom|gold
* @warning Les fichiers doivent être encodés au format UTF-8 sans BOM.
* @warning Les fichiers doivent terminer par une nouvelle ligne.
*/

#include <stdbool.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>
#include <stdio.h>
#include <time.h>
#include <stdint.h>


#define NOM_FICHIER_FILMS "films.txt"
#define NOM_FICHIER_SALLES "salles.txt"
#define NOM_FICHIER_SEANCES "seances.txt"
#define NOM_FICHIER_RESERVATIONS "reservations.txt"


#define TAILLE_TITRE 100
#define TAILLE_GENRE 100
#define TAILLE_VERSION 10
#define TAILLE_NOM 100
#define TAILLE_PRENOM 100


struct film {
    char titre[TAILLE_TITRE];
    char genre[TAILLE_GENRE];
    int duree;
    int ageMinimum;
};

typedef struct film Film;

struct salle {
    int numSalle;
    int capacite;
};

typedef struct salle Salle;

struct seance {
    char titre[TAILLE_TITRE];
    int dateSeance;
    int heureDebut;
    int numSalle;
    char version[TAILLE_VERSION];
};

typedef struct seance Seance;

struct reservation {
    int numSalle;
    int date;
    int heure;
    int nbAdultes;
    int nbEnfants;
    int nbSeniors;
    char nom[TAILLE_NOM];
    char prenom[TAILLE_PRENOM];
    bool gold;
};

typedef struct reservation Reservation;


bool ouvertureFichiersCinema(void);
int obtenirListeFilms(Film films[]);
int obtenirListeSalles(Salle salles[]);
int obtenirListeSeances(Seance seances[]);
Film obtenirFilm(char titre[]);
bool insererFilm(Film filmAjout);
bool supprimerFilm(char titre[]);
bool modifierFilm(Film film);
Salle obtenirSalle(int numSalle);
bool insererSalle(Salle salleAjout);
bool supprimerSalle(int numSalle);
bool modifierSalle(Salle salle);
Seance obtenirSeance(char titre[], int dateSeance, int heureDebut);
bool insererSeance(Seance seanceAjout);
bool supprimerSeance(char titre[], int dateSeance, int heureDebut);
bool modifierSeance(Seance seance);
Seance obtenirSeanceParSalle(int dateSeance, int heureDebut, int numSalle);
bool supprimerSeanceParSalle(int dateSeance, int heureDebut, int numSalle);
bool modifierSeanceParSalle(Seance seance);
int obtenirListeReservations(Reservation reservations[]);
Reservation obtenirReservation(int numSalle, int date, int heure, char nom[], char prenom[]);
bool insererReservation(Reservation reservationAjout);
bool supprimerReservation(int numSalle, int date, int heure, char nom[], char prenom[]);
bool modifierReservation(Reservation reservation);

int extraireAnneeYYYYDepuisDateYYYYMMDD(int date);
int obtenirDateYYYYMMDDDuSysteme(void) ;
int extraireMoisMMDepuisDateYYYYMMDD(int date);
int extraireJourDDDepuisDateYYYYMMDD(int date);
int calculerNbJours(int dateStartYYYYMMDD, int dateEndYYYYMMDD);

/**
 * Vérifie l'existence et crée si nécessaire les fichiers du cinéma
 * @return false si des fichiers obligatoires n'existent pas, true sinon
 */
bool ouvertureFichiersCinema(void) {
    FILE* pTabFilms = fopen(NOM_FICHIER_FILMS, "r+");
    if (pTabFilms == NULL) {
        pTabFilms = fopen(NOM_FICHIER_FILMS, "a+");
        fclose(pTabFilms);
        pTabFilms = fopen(NOM_FICHIER_FILMS, "r+");
    }
    fclose(pTabFilms);

    FILE* pTabSalles = fopen(NOM_FICHIER_SALLES, "r+");
    if (pTabSalles == NULL) {
        return false;
    }
    fclose(pTabSalles);

    FILE* pTabSeances = fopen(NOM_FICHIER_SEANCES, "r+");
    if (pTabSeances == NULL) {
        pTabSeances = fopen(NOM_FICHIER_SEANCES, "a+");
        fclose(pTabSeances);
        pTabSeances = fopen(NOM_FICHIER_SEANCES, "r+");
    }
    fclose(pTabSeances);

    FILE* pTabReservations = fopen(NOM_FICHIER_RESERVATIONS, "r+");
    if (pTabReservations == NULL) {
        pTabReservations = fopen(NOM_FICHIER_RESERVATIONS, "a+");
        fclose(pTabReservations);
        pTabReservations = fopen(NOM_FICHIER_RESERVATIONS, "r+");
    }
    fclose(pTabReservations);

    return true;
}

/**
 * Rempli un tableau de films à partir du fichier des films
 * @param films un tableau de films vide
 * @return Le nombre de films dans le tableau
 */
int obtenirListeFilms(Film films[]) {
    FILE* pTabFilms;
    int nbFilms = 0;
    Film filmBD;
    char ligne[256];
    char* token;
    char* pLigne;
    int iFilm = 0;

    pTabFilms = fopen(NOM_FICHIER_FILMS, "r");
    if (pTabFilms != NULL) {

    fgets(ligne, sizeof(ligne), pTabFilms);
    pLigne = ligne;
    while (!feof(pTabFilms)) {

        token = strtok(pLigne, "|");
        if (token != NULL) {
            strcpy(filmBD.titre, token);

            token = strtok(NULL, "|");
            if (token != NULL) {
                strcpy(filmBD.genre, token);

                token = strtok(NULL, "|");
                if (token != NULL) {
                    filmBD.duree = atoi(token);

                    token = strtok(NULL, "|");
                    if (token != NULL) {
                        filmBD.ageMinimum = atoi(token);

                        films[iFilm] = filmBD;
                        iFilm++;
                        nbFilms++;
                    }
                }
            }
        }

        fgets(ligne, sizeof(ligne), pTabFilms);
        pLigne = ligne;
    }
}
    fclose(pTabFilms);
    return nbFilms;
}

/**
 * Rempli un tableau de salles à partir du fichier des salles
 * @param salles un tableau de salles vide
 * @return Le nombre de salles dans le tableau
 */
int obtenirListeSalles(Salle salles[]) {
    FILE* pTabSalles;
    int nbSalles = 0;
    Salle salleBD;
    char ligne[256];
    char* token;
    char* pLigne;
    int iSalle = 0;

    pTabSalles = fopen(NOM_FICHIER_SALLES, "r");
    if (pTabSalles != NULL) {

    fgets(ligne, sizeof(ligne), pTabSalles);
    pLigne = ligne;
    while (!feof(pTabSalles)) {

        token = strtok(pLigne, " |");
        if (token != NULL) {
            salleBD.numSalle = atoi(token);

            token = strtok(NULL, " |");
            if (token != NULL) {
                salleBD.capacite = atoi(token);

                salles[iSalle] = salleBD;
                iSalle++;
                nbSalles++;
            }
        }

        fgets(ligne, sizeof(ligne), pTabSalles);
        pLigne = ligne;
    }
}
    fclose(pTabSalles);
    return nbSalles;
}

/**
 * Rempli un tableau de séances à partir du fichier des séances
 * @param seances un tableau de séances vide
 * @return Le nombre de séances dans le tableau
 */
int obtenirListeSeances(Seance seances[]) {
    FILE* pTabSeances;
    int nbSeances = 0;
    Seance seanceBD;
    char ligne[256];
    char* token;
    char* pLigne;
    int iSeance = 0;

    pTabSeances = fopen(NOM_FICHIER_SEANCES, "r");
    if (pTabSeances != NULL) {

    fgets(ligne, sizeof(ligne), pTabSeances);
    pLigne = ligne;
    while (!feof(pTabSeances)) {

        token = strtok(pLigne, "|");
        if (token != NULL) {
            strcpy(seanceBD.titre, token);

            token = strtok(NULL, "|");
            if (token != NULL) {
                seanceBD.dateSeance = atoi(token);

                token = strtok(NULL, "|");
                if (token != NULL) {
                    seanceBD.heureDebut = atoi(token);

                    token = strtok(NULL, "|");
                    if (token != NULL) {
                        seanceBD.numSalle = atoi(token);

                        token = strtok(NULL, "|");
                        if (token != NULL) {
                            token[strcspn(token, "\n")] = '\0';
                            strcpy(seanceBD.version, token);

                            seances[iSeance] = seanceBD;
                            iSeance++;
                            nbSeances++;
                        }
                    }
                }
            }
        }

        fgets(ligne, sizeof(ligne), pTabSeances);
        pLigne = ligne;
    }
}
    fclose(pTabSeances);
    return nbSeances;
}

/**
 * Obtient un film à partir de son titre
 * @param titreRecherche Le titre du film recherché
 * @return Le film recherché ou un film "invalide" si non trouvé (titre vide)
 */
Film obtenirFilm(char titreRecherche[]) {
    FILE* pTabFilms;
    Film filmBD;
    char ligne[256];
    char* token;
    char* pLigne;

    memset(&filmBD, 0, sizeof(Film));
    strcpy(filmBD.titre, "");
    pTabFilms = fopen(NOM_FICHIER_FILMS, "r");
    if (pTabFilms == NULL) {
        return filmBD;
    }
    fgets(ligne, sizeof(ligne), pTabFilms);
    pLigne = ligne;
    while (!feof(pTabFilms)) {

        token = strtok(pLigne, "|");
        if (token != NULL) {
            strcpy(filmBD.titre, token);

            token = strtok(NULL, "|");
            if (token != NULL) {
                strcpy(filmBD.genre, token);

                token = strtok(NULL, "|");
                if (token != NULL) {
                    filmBD.duree = atoi(token);

                    token = strtok(NULL, "|");
                    if (token != NULL) {
                        filmBD.ageMinimum = atoi(token);

                        if (strcmp(filmBD.titre, titreRecherche) == 0) {
                            fclose(pTabFilms);
                            return filmBD;
                        }
                    }
                }
            }
        }

        fgets(ligne, sizeof(ligne), pTabFilms);
        pLigne = ligne;
    }

    fclose(pTabFilms);

    memset(&filmBD, 0, sizeof(Film));
    strcpy(filmBD.titre, "");
    return filmBD;
}

/**
 * Insère un nouveau film dans le fichier des films
 * @param filmAjout Le film à ajouter
 * @return true si l'insertion a réussi, false sinon
 */
bool insererFilm(Film filmAjout) {
    FILE* pTabFilms = fopen(NOM_FICHIER_FILMS, "a+");

    if (pTabFilms == NULL) {
        return false;
    }
    fprintf(pTabFilms, "%s|%s|%d|%d\n",
        filmAjout.titre,
        filmAjout.genre,
        filmAjout.duree,
        filmAjout.ageMinimum);
    fclose(pTabFilms);
    return true;
}

/**
 * Supprime un film du fichier des films
 * @param titre Le titre du film à supprimer
 * @return true si la suppression a réussi, false sinon
 */
bool supprimerFilm(char titre[]) {
    FILE* pTabFilms = fopen(NOM_FICHIER_FILMS, "r+");
    FILE* pTemp = fopen("temp.txt", "w");
    char ligne[256];
    bool filmSupprime = false;

    if (pTabFilms == NULL || pTemp == NULL) {
        if (pTabFilms) fclose(pTabFilms);
        if (pTemp) fclose(pTemp);
        return false;
    }

    while (fgets(ligne, sizeof(ligne), pTabFilms)) {
        char titreLigne[TAILLE_TITRE];
        sscanf(ligne, "%[^|]", titreLigne);

        if (strcmp(titreLigne, titre) != 0) {
            fputs(ligne, pTemp);
        } else {
            filmSupprime = true;
        }
    }

    fclose(pTabFilms);
    fclose(pTemp);

    if (filmSupprime) {
        if (remove(NOM_FICHIER_FILMS) != 0 || rename("temp.txt", NOM_FICHIER_FILMS) != 0) {
            return false;
        }
    } else {
        remove("temp.txt");
    }

    return filmSupprime;
}

/**
 * Modifie un film dans le fichier des films
 * @param film le film modifié
 * @return true si la modification a réussi, false sinon
 */
bool modifierFilm(Film film) {
    FILE* pTabFilms = fopen(NOM_FICHIER_FILMS, "r+");
    FILE* pTemp = fopen("temp.txt", "w");
    char ligne[256];
    bool filmModifie = false;

    if (pTabFilms == NULL || pTemp == NULL) {
        if (pTabFilms) fclose(pTabFilms);
        if (pTemp) fclose(pTemp);
        return false;
    }

    while (fgets(ligne, sizeof(ligne), pTabFilms)) {
        char titreLigne[TAILLE_TITRE];
        sscanf(ligne, "%[^|]", titreLigne);

        if (strcmp(titreLigne, film.titre) == 0) {
            fprintf(pTemp, "%s|%s|%d|%d\n",
                    film.titre,
                    film.genre,
                    film.duree,
                    film.ageMinimum);
            filmModifie = true;
        } else {
            fputs(ligne, pTemp);
        }
    }

    fclose(pTabFilms);
    fclose(pTemp);

    if (filmModifie) {
        if (remove(NOM_FICHIER_FILMS) != 0 || rename("temp.txt", NOM_FICHIER_FILMS) != 0) {
            return false;
        }
    } else {
        remove("temp.txt");
    }

    return filmModifie;
}

/**
 * Obtient une salle à partir de son numéro
 * @param numSalleRecherche Le numéro de la salle recherchée
 * @return La salle trouvée ou une salle "invalide" si non trouvée (numSalle = -1)
 */
Salle obtenirSalle(int numSalleRecherche) {
    FILE* pTabSalles;
    Salle salleBD;
    char ligne[256];
    char* token;
    char* pLigne;

    memset(&salleBD, 0, sizeof(Salle));
    salleBD.numSalle = -1;
    pTabSalles = fopen(NOM_FICHIER_SALLES, "r");
    if (pTabSalles == NULL) {
        return salleBD;
    }

    fgets(ligne, sizeof(ligne), pTabSalles);
    pLigne = ligne;
    while (!feof(pTabSalles)) {
        token = strtok(pLigne, " |");
        if (token != NULL) {
            salleBD.numSalle = atoi(token);

            token = strtok(NULL, " |");
            if (token != NULL) {
                salleBD.capacite = atoi(token);

                if (salleBD.numSalle == numSalleRecherche) {
                    fclose(pTabSalles);
                    return salleBD;
                }
            }
        }

        fgets(ligne, sizeof(ligne), pTabSalles);
        pLigne = ligne;
    }

    fclose(pTabSalles);

    memset(&salleBD, 0, sizeof(Salle));
    salleBD.numSalle = -1;
    return salleBD;
}

/**
 * Insère une nouvelle salle dans le fichier des salles
 * @param salleAjout La salle à ajouter
 * @return true si l'insertion a réussi, false sinon
 */
bool insererSalle(Salle salleAjout) {
    FILE* pTabSalles = fopen(NOM_FICHIER_SALLES, "a+");

    if (pTabSalles == NULL) {
        return false;
    }

    fprintf(pTabSalles, "%d | %d\n",
            salleAjout.numSalle,
            salleAjout.capacite);

    fclose(pTabSalles);
    return true;
}

/**
 * Supprime une salle du fichier des salles
 * @param numSalle Le numéro de la salle à supprimer
 * @return true si la suppression a réussi, false sinon
 */
bool supprimerSalle(int numSalle) {
    FILE* pTabSalles = fopen(NOM_FICHIER_SALLES, "r");
    FILE* pTemp = fopen("temp.txt", "w");
    char ligne[256];
    bool salleSupprime = false;

    if (pTabSalles == NULL || pTemp == NULL) {
        if (pTabSalles) fclose(pTabSalles);
        if (pTemp) fclose(pTemp);
        return false;
    }

    while (fgets(ligne, sizeof(ligne), pTabSalles)) {
        int numSalleLigne;
        sscanf(ligne, "%d |", &numSalleLigne);

        if (numSalleLigne != numSalle) {
            fputs(ligne, pTemp);
        } else {
            salleSupprime = true;
        }
    }

    fclose(pTabSalles);
    fclose(pTemp);

    if (salleSupprime) {
        if (remove(NOM_FICHIER_SALLES) != 0 || rename("temp.txt", NOM_FICHIER_SALLES) != 0) {
            return false;
        }
    } else {
        remove("temp.txt");
    }

    return salleSupprime;
}

/**
 * Modifie une salle dans le fichier des salles
 * @param salle La salle modifiée (identifiée par numSalle)
 * @return true si la modification a réussi, false sinon
 */
bool modifierSalle(Salle salle) {
    FILE* pTabSalles = fopen(NOM_FICHIER_SALLES, "r");
    FILE* pTemp = fopen("temp.txt", "w");
    char ligne[256];
    bool salleModifie = false;

    if (pTabSalles == NULL || pTemp == NULL) {
        if (pTabSalles) fclose(pTabSalles);
        if (pTemp) fclose(pTemp);
        return false;
    }

    while (fgets(ligne, sizeof(ligne), pTabSalles)) {
        int numSalleLigne;
        sscanf(ligne, "%d |", &numSalleLigne);

        if (numSalleLigne == salle.numSalle) {
            fprintf(pTemp, "%d | %d\n",
                    salle.numSalle,
                    salle.capacite);
            salleModifie = true;
        } else {
            fputs(ligne, pTemp);
        }
    }

    fclose(pTabSalles);
    fclose(pTemp);

    if (salleModifie) {
        if (remove(NOM_FICHIER_SALLES) != 0 || rename("temp.txt", NOM_FICHIER_SALLES) != 0) {
            return false;
        }
    } else {
        remove("temp.txt");
    }

    return salleModifie;
}

/**
 * Obtient une séance à partir de son titre, date et heure
 * @param titreRecherche Le titre du film de la séance
 * @param dateSeanceRecherche La date de la séance au format YYYYMMDD
 * @param heureDebutRecherche L'heure de début au format HHMM
 * @return La séance trouvée ou une séance "invalide" si non trouvée (titre vide, dateSeance = -1)
 */
Seance obtenirSeance(char titreRecherche[], int dateSeanceRecherche, int heureDebutRecherche) {
    FILE* pTabSeances;
    Seance seanceBD;
    char ligne[256];
    char* token;
    char* pLigne;

    memset(&seanceBD, 0, sizeof(Seance));
    strcpy(seanceBD.titre, "");
    seanceBD.dateSeance = -1;

    pTabSeances = fopen(NOM_FICHIER_SEANCES, "r");
    if (pTabSeances == NULL) {
        return seanceBD;
    }

    fgets(ligne, sizeof(ligne), pTabSeances);
    pLigne = ligne;
    while (!feof(pTabSeances)) {
        token = strtok(pLigne, "|");
        if (token != NULL) {
            strcpy(seanceBD.titre, token);

            token = strtok(NULL, "|");
            if (token != NULL) {
                seanceBD.dateSeance = atoi(token);

                token = strtok(NULL, "|");
                if (token != NULL) {
                    seanceBD.heureDebut = atoi(token);

                    token = strtok(NULL, "|");
                    if (token != NULL) {
                        seanceBD.numSalle = atoi(token);

                        token = strtok(NULL, "|");
                        if (token != NULL) {
                            token[strcspn(token, "\n")] = '\0';
                            strcpy(seanceBD.version, token);

                            if (strcmp(seanceBD.titre, titreRecherche) == 0 &&
                                seanceBD.dateSeance == dateSeanceRecherche &&
                                seanceBD.heureDebut == heureDebutRecherche) {
                                fclose(pTabSeances);
                                return seanceBD;
                            }
                        }
                    }
                }
            }
        }

        fgets(ligne, sizeof(ligne), pTabSeances);
        pLigne = ligne;
    }

    fclose(pTabSeances);

    memset(&seanceBD, 0, sizeof(Seance));
    strcpy(seanceBD.titre, "");
    seanceBD.dateSeance = -1;
    return seanceBD;
}

/**
 * Insère une nouvelle séance dans le fichier des séances
 * @param seanceAjout La séance à ajouter
 * @return true si l'insertion a réussi, false sinon
 */
bool insererSeance(Seance seanceAjout) {
    FILE* pTabSeances = fopen(NOM_FICHIER_SEANCES, "a");

    if (pTabSeances == NULL) {
        return false;
    }

    fprintf(pTabSeances, "%s|%d|%d|%d|%s\n",
            seanceAjout.titre,
            seanceAjout.dateSeance,
            seanceAjout.heureDebut,
            seanceAjout.numSalle,
            seanceAjout.version);

    fclose(pTabSeances);
    return true;
}

/**
 * Supprime une séance du fichier des séances
 * @param titre Le titre du film de la séance
 * @param dateSeance La date de la séance au format YYYYMMDD
 * @param heureDebut L'heure de début au format HHMM
 * @return true si la suppression a réussi, false sinon
 */
bool supprimerSeance(char titre[], int dateSeance, int heureDebut) {
    FILE* pTabSeances = fopen(NOM_FICHIER_SEANCES, "r");
    FILE* pTemp = fopen("temp.txt", "w");
    char ligne[256];
    bool seanceSupprime = false;

    if (pTabSeances == NULL || pTemp == NULL) {
        if (pTabSeances) fclose(pTabSeances);
        if (pTemp) fclose(pTemp);
        return false;
    }

    while (fgets(ligne, sizeof(ligne), pTabSeances)) {
        char titreLigne[TAILLE_TITRE];
        int dateSeanceLigne;
        int heureDebutLigne;
        sscanf(ligne, "%[^|]|%d|%d|", titreLigne, &dateSeanceLigne, &heureDebutLigne);

        if (strcmp(titreLigne, titre) != 0 || dateSeanceLigne != dateSeance || heureDebutLigne != heureDebut) {
            fputs(ligne, pTemp);
        } else {
            seanceSupprime = true;
        }
    }

    fclose(pTabSeances);
    fclose(pTemp);

    if (seanceSupprime) {
        if (remove(NOM_FICHIER_SEANCES) != 0 || rename("temp.txt", NOM_FICHIER_SEANCES) != 0) {
            return false;
        }
    } else {
        remove("temp.txt");
    }

    return seanceSupprime;
}

/**
 * Modifie une séance dans le fichier des séances
 * @param seance La séance modifiée
 * @return true si la modification a réussi, false sinon
 */
bool modifierSeance(Seance seance) {
    FILE* pTabSeances = fopen(NOM_FICHIER_SEANCES, "r");
    FILE* pTemp = fopen("temp.txt", "w");
    char ligne[256];
    bool seanceModifie = false;

    if (pTabSeances == NULL || pTemp == NULL) {
        if (pTabSeances) fclose(pTabSeances);
        if (pTemp) fclose(pTemp);
        return false;
    }

    while (fgets(ligne, sizeof(ligne), pTabSeances)) {
        char titreLigne[TAILLE_TITRE];
        int dateSeanceLigne;
        int heureDebutLigne;
        sscanf(ligne, "%[^|]|%d|%d|", titreLigne, &dateSeanceLigne, &heureDebutLigne);

        if (strcmp(titreLigne, seance.titre) == 0 &&
            dateSeanceLigne == seance.dateSeance &&
            heureDebutLigne == seance.heureDebut) {
            fprintf(pTemp, "%s|%d|%d|%d|%s\n",
                    seance.titre,
                    seance.dateSeance,
                    seance.heureDebut,
                    seance.numSalle,
                    seance.version);
            seanceModifie = true;
        } else {
            fputs(ligne, pTemp);
        }
    }

    fclose(pTabSeances);
    fclose(pTemp);

    if (seanceModifie) {
        if (remove(NOM_FICHIER_SEANCES) != 0 || rename("temp.txt", NOM_FICHIER_SEANCES) != 0) {
            return false;
        }
    } else {
        remove("temp.txt");
    }

    return seanceModifie;
}

/**
 * Obtient une séance à partir de sa date, heure et numéro de salle
 * @param dateSeanceRecherche La date de la séance au format YYYYMMDD
 * @param heureDebutRecherche L'heure de début au format HHMM
 * @param numSalleRecherche Le numéro de la salle
 * @return La séance trouvée ou une séance "invalide" si non trouvée (titre vide, dateSeance = -1)
 */
Seance obtenirSeanceParSalle(int dateSeanceRecherche, int heureDebutRecherche, int numSalleRecherche) {
    FILE* pTabSeances;
    Seance seanceBD;
    char ligne[256];
    char* token;
    char* pLigne;

    memset(&seanceBD, 0, sizeof(Seance));
    strcpy(seanceBD.titre, "");
    seanceBD.dateSeance = -1;

    pTabSeances = fopen(NOM_FICHIER_SEANCES, "r");
    if (pTabSeances == NULL) {
        return seanceBD;
    }

    fgets(ligne, sizeof(ligne), pTabSeances);
    pLigne = ligne;
    while (!feof(pTabSeances)) {
        token = strtok(pLigne, "|");
        if (token != NULL) {
            strcpy(seanceBD.titre, token);

            token = strtok(NULL, "|");
            if (token != NULL) {
                seanceBD.dateSeance = atoi(token);

                token = strtok(NULL, "|");
                if (token != NULL) {
                    seanceBD.heureDebut = atoi(token);

                    token = strtok(NULL, "|");
                    if (token != NULL) {
                        seanceBD.numSalle = atoi(token);

                        token = strtok(NULL, "|");
                        if (token != NULL) {
                            token[strcspn(token, "\n")] = '\0';
                            strcpy(seanceBD.version, token);

                            if (seanceBD.dateSeance == dateSeanceRecherche &&
                                seanceBD.heureDebut == heureDebutRecherche &&
                                seanceBD.numSalle == numSalleRecherche) {
                                fclose(pTabSeances);
                                return seanceBD;
                            }
                        }
                    }
                }
            }
        }

        fgets(ligne, sizeof(ligne), pTabSeances);
        pLigne = ligne;
    }

    fclose(pTabSeances);

    memset(&seanceBD, 0, sizeof(Seance));
    strcpy(seanceBD.titre, "");
    seanceBD.dateSeance = -1;
    return seanceBD;
}

/**
 * Supprime une séance du fichier des séances via sa date, heure et numéro de salle
 * @param dateSeance La date de la séance au format YYYYMMDD
 * @param heureDebut L'heure de début au format HHMM
 * @param numSalle Le numéro de la salle
 * @return true si la suppression a réussi, false sinon
 */
bool supprimerSeanceParSalle(int dateSeance, int heureDebut, int numSalle) {
    FILE* pTabSeances = fopen(NOM_FICHIER_SEANCES, "r");
    FILE* pTemp = fopen("temp.txt", "w");
    char ligne[256];
    bool seanceSupprime = false;

    if (pTabSeances == NULL || pTemp == NULL) {
        if (pTabSeances) fclose(pTabSeances);
        if (pTemp) fclose(pTemp);
        return false;
    }

    while (fgets(ligne, sizeof(ligne), pTabSeances)) {
        int dateSeanceLigne, heureDebutLigne, numSalleLigne;
        sscanf(ligne, "%*[^|]|%d|%d|%d|", &dateSeanceLigne, &heureDebutLigne, &numSalleLigne);

        if (dateSeanceLigne != dateSeance || heureDebutLigne != heureDebut || numSalleLigne != numSalle) {
            fputs(ligne, pTemp);
        } else {
            seanceSupprime = true;
        }
    }

    fclose(pTabSeances);
    fclose(pTemp);

    if (seanceSupprime) {
        if (remove(NOM_FICHIER_SEANCES) != 0 || rename("temp.txt", NOM_FICHIER_SEANCES) != 0) {
            return false;
        }
    } else {
        remove("temp.txt");
    }

    return seanceSupprime;
}

/**
 * Modifie une séance dans le fichier des séances, identifiée par sa date, heure et numéro de salle
 * @param seance La séance modifiée (identifiée par dateSeance, heureDebut et numSalle)
 * @return true si la modification a réussi, false sinon
 */
bool modifierSeanceParSalle(Seance seance) {
    FILE* pTabSeances = fopen(NOM_FICHIER_SEANCES, "r");
    FILE* pTemp = fopen("temp.txt", "w");
    char ligne[256];
    bool seanceModifie = false;

    if (pTabSeances == NULL || pTemp == NULL) {
        if (pTabSeances) fclose(pTabSeances);
        if (pTemp) fclose(pTemp);
        return false;
    }

    while (fgets(ligne, sizeof(ligne), pTabSeances)) {
        int dateSeanceLigne, heureDebutLigne, numSalleLigne;
        sscanf(ligne, "%*[^|]|%d|%d|%d|", &dateSeanceLigne, &heureDebutLigne, &numSalleLigne);

        if (dateSeanceLigne == seance.dateSeance &&
            heureDebutLigne == seance.heureDebut &&
            numSalleLigne == seance.numSalle) {
            fprintf(pTemp, "%s|%d|%d|%d|%s\n",
                    seance.titre,
                    seance.dateSeance,
                    seance.heureDebut,
                    seance.numSalle,
                    seance.version);
            seanceModifie = true;
        } else {
            fputs(ligne, pTemp);
        }
    }

    fclose(pTabSeances);
    fclose(pTemp);

    if (seanceModifie) {
        if (remove(NOM_FICHIER_SEANCES) != 0 || rename("temp.txt", NOM_FICHIER_SEANCES) != 0) {
            return false;
        }
    } else {
        remove("temp.txt");
    }

    return seanceModifie;
}

/**
 * Rempli un tableau de réservations à partir du fichier des réservations
 * @param reservations un tableau de réservations vide
 * @return Le nombre de réservations dans le tableau
 */
int obtenirListeReservations(Reservation reservations[]) {
    FILE* pTabReservations;
    int nbReservations = 0;
    Reservation reservationBD;
    char ligne[512];
    char* token;
    char* pLigne;
    int iReservation = 0;

    pTabReservations = fopen(NOM_FICHIER_RESERVATIONS, "r");
    if (pTabReservations != NULL) {

    fgets(ligne, sizeof(ligne), pTabReservations);
    pLigne = ligne;
    while (!feof(pTabReservations)) {

        token = strtok(pLigne, "|");
        if (token != NULL) {
            reservationBD.numSalle = atoi(token);

            token = strtok(NULL, "|");
            if (token != NULL) {
                reservationBD.date = atoi(token);

                token = strtok(NULL, "|");
                if (token != NULL) {
                    reservationBD.heure = atoi(token);

                    token = strtok(NULL, "|");
                    if (token != NULL) {
                        reservationBD.nbAdultes = atoi(token);

                        token = strtok(NULL, "|");
                        if (token != NULL) {
                            reservationBD.nbEnfants = atoi(token);

                            token = strtok(NULL, "|");
                            if (token != NULL) {
                                reservationBD.nbSeniors = atoi(token);

                                token = strtok(NULL, "|");
                                if (token != NULL) {
                                    strcpy(reservationBD.nom, token);

                                    token = strtok(NULL, "|");
                                    if (token != NULL) {
                                        strcpy(reservationBD.prenom, token);

                                        token = strtok(NULL, "|");
                                        if (token != NULL) {
                                            token[strcspn(token, "\n")] = '\0';
                                            reservationBD.gold = atoi(token) != 0;

                                            reservations[iReservation] = reservationBD;
                                            iReservation++;
                                            nbReservations++;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        fgets(ligne, sizeof(ligne), pTabReservations);
        pLigne = ligne;
    }
}
    fclose(pTabReservations);
    return nbReservations;
}

/**
 * Obtient une réservation à partir de son numéro de salle, date, heure, nom et prénom
 * @param numSalleRecherche Le numéro de la salle
 * @param dateRecherche La date au format YYYYMMDD
 * @param heureRecherche L'heure au format HHMM
 * @param nomRecherche Le nom du client
 * @param prenomRecherche Le prénom du client
 * @return La réservation trouvée ou une réservation "invalide" si non trouvée (numSalle = -1)
 */
Reservation obtenirReservation(int numSalleRecherche, int dateRecherche, int heureRecherche, char nomRecherche[], char prenomRecherche[]) {
    FILE* pTabReservations;
    Reservation reservationBD;
    char ligne[512];
    char* token;
    char* pLigne;

    memset(&reservationBD, 0, sizeof(Reservation));
    reservationBD.numSalle = -1;

    pTabReservations = fopen(NOM_FICHIER_RESERVATIONS, "r");
    if (pTabReservations == NULL) {
        return reservationBD;
    }

    fgets(ligne, sizeof(ligne), pTabReservations);
    pLigne = ligne;
    while (!feof(pTabReservations)) {
        token = strtok(pLigne, "|");
        if (token != NULL) {
            reservationBD.numSalle = atoi(token);

            token = strtok(NULL, "|");
            if (token != NULL) {
                reservationBD.date = atoi(token);

                token = strtok(NULL, "|");
                if (token != NULL) {
                    reservationBD.heure = atoi(token);

                    token = strtok(NULL, "|");
                    if (token != NULL) {
                        reservationBD.nbAdultes = atoi(token);

                        token = strtok(NULL, "|");
                        if (token != NULL) {
                            reservationBD.nbEnfants = atoi(token);

                            token = strtok(NULL, "|");
                            if (token != NULL) {
                                reservationBD.nbSeniors = atoi(token);

                                token = strtok(NULL, "|");
                                if (token != NULL) {
                                    strcpy(reservationBD.nom, token);

                                    token = strtok(NULL, "|");
                                    if (token != NULL) {
                                        strcpy(reservationBD.prenom, token);

                                        token = strtok(NULL, "|");
                                        if (token != NULL) {
                                            token[strcspn(token, "\n")] = '\0';
                                            reservationBD.gold = atoi(token) != 0;

                                            if (reservationBD.numSalle == numSalleRecherche &&
                                                reservationBD.date == dateRecherche &&
                                                reservationBD.heure == heureRecherche &&
                                                strcmp(reservationBD.nom, nomRecherche) == 0 &&
                                                strcmp(reservationBD.prenom, prenomRecherche) == 0) {
                                                fclose(pTabReservations);
                                                return reservationBD;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        fgets(ligne, sizeof(ligne), pTabReservations);
        pLigne = ligne;
    }

    fclose(pTabReservations);

    memset(&reservationBD, 0, sizeof(Reservation));
    reservationBD.numSalle = -1;
    return reservationBD;
}

/**
 * Insère une nouvelle réservation dans le fichier des réservations
 * @param reservationAjout La réservation à ajouter
 * @return true si l'insertion a réussi, false sinon
 */
bool insererReservation(Reservation reservationAjout) {
    FILE* pTabReservations = fopen(NOM_FICHIER_RESERVATIONS, "a");

    if (pTabReservations == NULL) {
        return false;
    }

    fprintf(pTabReservations, "%d|%d|%d|%d|%d|%d|%s|%s|%d\n",
            reservationAjout.numSalle,
            reservationAjout.date,
            reservationAjout.heure,
            reservationAjout.nbAdultes,
            reservationAjout.nbEnfants,
            reservationAjout.nbSeniors,
            reservationAjout.nom,
            reservationAjout.prenom,
            reservationAjout.gold ? 1 : 0);

    fclose(pTabReservations);
    return true;
}

/**
 * Supprime une réservation du fichier des réservations
 * @param numSalle Le numéro de la salle
 * @param date La date au format YYYYMMDD
 * @param heure L'heure au format HHMM
 * @param nom Le nom du client
 * @param prenom Le prénom du client
 * @return true si la suppression a réussi, false sinon
 */
bool supprimerReservation(int numSalle, int date, int heure, char nom[], char prenom[]) {
    FILE* pTabReservations = fopen(NOM_FICHIER_RESERVATIONS, "r");
    FILE* pTemp = fopen("temp.txt", "w");
    char ligne[512];
    bool reservationSupprime = false;

    if (pTabReservations == NULL || pTemp == NULL) {
        if (pTabReservations) fclose(pTabReservations);
        if (pTemp) fclose(pTemp);
        return false;
    }

    while (fgets(ligne, sizeof(ligne), pTabReservations)) {
        int numSalleLigne, dateLigne, heureLigne;
        char nomLigne[TAILLE_NOM], prenomLigne[TAILLE_PRENOM];
        sscanf(ligne, "%d|%d|%d|%*d|%*d|%*d|%[^|]|%[^|]|", &numSalleLigne, &dateLigne, &heureLigne, nomLigne, prenomLigne);

        if (numSalleLigne != numSalle || dateLigne != date || heureLigne != heure ||
            strcmp(nomLigne, nom) != 0 || strcmp(prenomLigne, prenom) != 0) {
            fputs(ligne, pTemp);
        } else {
            reservationSupprime = true;
        }
    }

    fclose(pTabReservations);
    fclose(pTemp);

    if (reservationSupprime) {
        if (remove(NOM_FICHIER_RESERVATIONS) != 0 || rename("temp.txt", NOM_FICHIER_RESERVATIONS) != 0) {
            return false;
        }
    } else {
        remove("temp.txt");
    }

    return reservationSupprime;
}

/**
 * Modifie une réservation dans le fichier des réservations
 * @param reservation La réservation modifiée (identifiée par numSalle, date, heure, nom et prenom)
 * @return true si la modification a réussi, false sinon
 */
bool modifierReservation(Reservation reservation) {
    FILE* pTabReservations = fopen(NOM_FICHIER_RESERVATIONS, "r");
    FILE* pTemp = fopen("temp.txt", "w");
    char ligne[512];
    bool reservationModifie = false;

    if (pTabReservations == NULL || pTemp == NULL) {
        if (pTabReservations) fclose(pTabReservations);
        if (pTemp) fclose(pTemp);
        return false;
    }

    while (fgets(ligne, sizeof(ligne), pTabReservations)) {
        int numSalleLigne, dateLigne, heureLigne;
        char nomLigne[TAILLE_NOM], prenomLigne[TAILLE_PRENOM];
        sscanf(ligne, "%d|%d|%d|%*d|%*d|%*d|%[^|]|%[^|]|", &numSalleLigne, &dateLigne, &heureLigne, nomLigne, prenomLigne);

        if (numSalleLigne == reservation.numSalle && dateLigne == reservation.date &&
            heureLigne == reservation.heure && strcmp(nomLigne, reservation.nom) == 0 &&
            strcmp(prenomLigne, reservation.prenom) == 0) {
            fprintf(pTemp, "%d|%d|%d|%d|%d|%d|%s|%s|%d\n",
                    reservation.numSalle,
                    reservation.date,
                    reservation.heure,
                    reservation.nbAdultes,
                    reservation.nbEnfants,
                    reservation.nbSeniors,
                    reservation.nom,
                    reservation.prenom,
                    reservation.gold ? 1 : 0);
            reservationModifie = true;
        } else {
            fputs(ligne, pTemp);
        }
    }

    fclose(pTabReservations);
    fclose(pTemp);

    if (reservationModifie) {
        if (remove(NOM_FICHIER_RESERVATIONS) != 0 || rename("temp.txt", NOM_FICHIER_RESERVATIONS) != 0) {
            return false;
        }
    } else {
        remove("temp.txt");
    }

    return reservationModifie;
}

/**
 * Donne la date actuelle du système au format YYYYMMDD
 * @return La date actuelle au format YYYYMMDD
 */
int obtenirDateYYYYMMDDDuSysteme(void) {
	time_t now;
	struct tm *current_date;
	char buffer[9];
	int dateYYYYMMDD;

	time(&now);
	current_date = localtime(&now);
	strftime(buffer, 9, "%Y%m%d", current_date);
	dateYYYYMMDD = atoi(buffer);
	return dateYYYYMMDD;
}

/**
 * Extrait l'année d'une date au format YYYYMMDD
 * @param date La date au format YYYYMMDD
 * @return L'année extraite
 */
int extraireAnneeYYYYDepuisDateYYYYMMDD(int date) {
	return date / 10000;
}


/**
 * Extrait le mois d'une date au format YYYYMMDD
 * @param date La date au format YYYYMMDD
 * @return Le mois extrait
 */
int extraireMoisMMDepuisDateYYYYMMDD(int date) {
	int year = date / 10000;
	return (date - (year * 10000)) / 100;

}

/**
 * Extrait le jour d'une date au format YYYYMMDD
 * @param date La date au format YYYYMMDD
 * @return Le jour extrait
 */
int extraireJourDDDepuisDateYYYYMMDD(int date) {
	int year = date / 10000;
	int month = (date - (year * 10000)) / 100;
	return (date - (year * 10000) - month * 100);
}


/**
 * Calcule le nombre de jours entre deux dates au format YYYYMMDD
 * @param dateStartYYYYMMDD La date de début au format YYYYMMDD
 * @param dateEndYYYYMMDD La date de fin au format YYYYMMDD
 * @return Le nombre de jours entre les deux dates
 */
int calculerNbJours(int dateStartYYYYMMDD, int dateEndYYYYMMDD) {
	time_t now;
	struct tm date1;
	struct tm date2;
	double seconds;
	int extractedDay;
	int extractedMonth;
	int extractedYear;

	time(&now);

	date1 = *localtime(&now);
	date2 = *localtime(&now);


    extractedYear = extraireAnneeYYYYDepuisDateYYYYMMDD(dateStartYYYYMMDD);
    extractedMonth = extraireMoisMMDepuisDateYYYYMMDD(dateStartYYYYMMDD);
    extractedDay = extraireJourDDDepuisDateYYYYMMDD(dateStartYYYYMMDD);
	date1.tm_hour = 0;
	date1.tm_min = 0;
	date1.tm_sec = 0;
	date1.tm_mon = extractedMonth - 1;
	date1.tm_mday = extractedDay;
	date1.tm_year = extractedYear - 1900;


    extractedYear = extraireAnneeYYYYDepuisDateYYYYMMDD(dateEndYYYYMMDD);
    extractedMonth = extraireMoisMMDepuisDateYYYYMMDD(dateEndYYYYMMDD);
    extractedDay = extraireJourDDDepuisDateYYYYMMDD(dateEndYYYYMMDD);
	date2.tm_hour = 0;
	date2.tm_min = 0;
	date2.tm_sec = 0;
	date2.tm_mon = extractedMonth - 1;
	date2.tm_mday = extractedDay;
	date2.tm_year = extractedYear - 1900;

	seconds = difftime(mktime(&date2), mktime(&date1));

	return seconds / 86400;
}