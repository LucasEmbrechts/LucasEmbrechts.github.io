#include "cine.h"
#include "colors.h"
#include <stdio.h>
#include <stdlib.h>

void afficherMenu(void);
void testerFilms(void);
void testerSalles(void);
void testerSeances(void);
void testerReservations(void);
void testerUtilitairesDates(void);

int main(void){
    int choix;

    if (!ouvertureFichiersCinema()) {
        printf("Erreur lors de l'ouverture des fichiers du cinema.\n");
        return 1;
    }

    cyan();
    printf("=== PROGRAMME DE TEST - GESTION CINEMA ===\n");
    reset();

    do {
        afficherMenu();
        printf("\nVotre choix: ");
        scanf("%d", &choix);
        while(getchar() != '\n');

        switch(choix) {
            case 1:
                testerFilms();
                break;
            case 2:
                testerSalles();
                break;
            case 3:
                testerSeances();
                break;
            case 4:
                testerReservations();
                break;
            case 5:
                testerUtilitairesDates();
                break;
            case 0:
                green();
                printf("\nAu revoir!\n");
                reset();
                break;
            default:
                red();
                printf("\nChoix invalide!\n");
                reset();
        }
    } while(choix != 0);

    return 0;
}

void afficherMenu(void) {
    printf("\n========================================\n");
    printf("           MENU PRINCIPAL\n");
    printf("========================================\n");
    printf("1. Tester les fonctions FILMS\n");
    printf("2. Tester les fonctions SALLES\n");
    printf("3. Tester les fonctions SEANCES\n");
    printf("4. Tester les fonctions RESERVATIONS\n");
    printf("5. Tester les utilitaires de DATES\n");
    printf("0. Quitter\n");
    printf("========================================\n");
}

void testerFilms(void) {
    cyan();
    printf("\n=== TEST DES FONCTIONS FILMS ===\n");
    reset();

    // 1. Lister tous les films
    printf("\n1. Liste de tous les films:\n");
    Film films[100];
    int nbFilms = obtenirListeFilms(films);
    printf("Nombre de films: %d\n", nbFilms);
    for (int i = 0; i < nbFilms; i++) {
        printf("  - %s | %s | %d min | %d+\n",
               films[i].titre, films[i].genre, films[i].duree, films[i].ageMinimum);
    }

    // 2. Rechercher un film existant
    printf("\n2. Recherche d'un film (Wonka):\n");
    Film filmRecherche = obtenirFilm("Wonka");
    if (strcmp(filmRecherche.titre, "") != 0) {
        green();
        printf("  Film trouve: %s | %s | %d min | %d+\n",
               filmRecherche.titre, filmRecherche.genre, filmRecherche.duree, filmRecherche.ageMinimum);
        reset();
    } else {
        red();
        printf("  Film non trouve\n");
        reset();
    }

    // 3. Insérer un nouveau film
    printf("\n3. Insertion d'un nouveau film (Test Film):\n");
    Film nouveauFilm;
    strcpy(nouveauFilm.titre, "Test Film");
    strcpy(nouveauFilm.genre, "Test, Action");
    nouveauFilm.duree = 120;
    nouveauFilm.ageMinimum = 12;

    if (insererFilm(nouveauFilm)) {
        green();
        printf("  Film insere avec succes!\n");
        reset();

        // Vérifier l'insertion
        Film filmInsere = obtenirFilm("Test Film");
        if (strcmp(filmInsere.titre, "") != 0) {
            printf("  Verification: %s | %s | %d min | %d+\n",
                   filmInsere.titre, filmInsere.genre, filmInsere.duree, filmInsere.ageMinimum);
        }
    } else {
        red();
        printf("  Erreur lors de l'insertion\n");
        reset();
    }

    // 4. Modifier le film
    printf("\n4. Modification du film (Test Film):\n");
    strcpy(nouveauFilm.titre, "Test Film");
    strcpy(nouveauFilm.genre, "Test, Comedie");
    nouveauFilm.duree = 135;
    nouveauFilm.ageMinimum = 16;

    if (modifierFilm(nouveauFilm)) {
        green();
        printf("  Film modifie avec succes!\n");
        reset();

        // Vérifier la modification
        Film filmModifie = obtenirFilm("Test Film");
        if (strcmp(filmModifie.titre, "") != 0) {
            printf("  Verification: %s | %s | %d min | %d+\n",
                   filmModifie.titre, filmModifie.genre, filmModifie.duree, filmModifie.ageMinimum);
        }
    } else {
        red();
        printf("  Erreur lors de la modification\n");
        reset();
    }

    // 5. Supprimer le film
    printf("\n5. Suppression du film (Test Film):\n");
    if (supprimerFilm("Test Film")) {
        green();
        printf("  Film supprime avec succes!\n");
        reset();

        // Vérifier la suppression
        Film filmSupprime = obtenirFilm("Test Film");
        if (strcmp(filmSupprime.titre, "") == 0) {
            printf("  Verification: Film bien supprime\n");
        }
    } else {
        red();
        printf("  Erreur lors de la suppression\n");
        reset();
    }

    green();
    printf("\n=== FIN DES TESTS FILMS ===\n");
    reset();
}

void testerSalles(void) {
    cyan();
    printf("\n=== TEST DES FONCTIONS SALLES ===\n");
    reset();

    // 1. Lister toutes les salles
    printf("\n1. Liste de toutes les salles:\n");
    Salle salles[100];
    int nbSalles = obtenirListeSalles(salles);
    printf("Nombre de salles: %d\n", nbSalles);
    for (int i = 0; i < nbSalles; i++) {
        printf("  - Salle %d | Capacite: %d places\n",
               salles[i].numSalle, salles[i].capacite);
    }

    // 2. Rechercher une salle existante
    printf("\n2. Recherche d'une salle (Salle 1):\n");
    Salle salleRecherche = obtenirSalle(1);
    if (salleRecherche.numSalle != -1) {
        green();
        printf("  Salle trouvee: Salle %d | Capacite: %d places\n",
               salleRecherche.numSalle, salleRecherche.capacite);
        reset();
    } else {
        red();
        printf("  Salle non trouvee\n");
        reset();
    }

    // 3. Insérer une nouvelle salle
    printf("\n3. Insertion d'une nouvelle salle (Salle 99):\n");
    Salle nouvelleSalle;
    nouvelleSalle.numSalle = 99;
    nouvelleSalle.capacite = 300;

    if (insererSalle(nouvelleSalle)) {
        green();
        printf("  Salle inseree avec succes!\n");
        reset();

        // Vérifier l'insertion
        Salle salleInsere = obtenirSalle(99);
        if (salleInsere.numSalle != -1) {
            printf("  Verification: Salle %d | Capacite: %d places\n",
                   salleInsere.numSalle, salleInsere.capacite);
        }
    } else {
        red();
        printf("  Erreur lors de l'insertion\n");
        reset();
    }

    // 4. Modifier la salle
    printf("\n4. Modification de la salle (Salle 99):\n");
    nouvelleSalle.numSalle = 99;
    nouvelleSalle.capacite = 250;

    if (modifierSalle(nouvelleSalle)) {
        green();
        printf("  Salle modifiee avec succes!\n");
        reset();

        // Vérifier la modification
        Salle salleModifie = obtenirSalle(99);
        if (salleModifie.numSalle != -1) {
            printf("  Verification: Salle %d | Capacite: %d places\n",
                   salleModifie.numSalle, salleModifie.capacite);
        }
    } else {
        red();
        printf("  Erreur lors de la modification\n");
        reset();
    }

    // 5. Supprimer la salle
    printf("\n5. Suppression de la salle (Salle 99):\n");
    if (supprimerSalle(99)) {
        green();
        printf("  Salle supprimee avec succes!\n");
        reset();

        // Vérifier la suppression
        Salle salleSupprime = obtenirSalle(99);
        if (salleSupprime.numSalle == -1) {
            printf("  Verification: Salle bien supprimee\n");
        }
    } else {
        red();
        printf("  Erreur lors de la suppression\n");
        reset();
    }

    green();
    printf("\n=== FIN DES TESTS SALLES ===\n");
    reset();
}

void testerSeances(void) {
    cyan();
    printf("\n=== TEST DES FONCTIONS SEANCES ===\n");
    reset();

    // 1. Lister toutes les séances
    printf("\n1. Liste de toutes les seances:\n");
    Seance seances[100];
    int nbSeances = obtenirListeSeances(seances);
    printf("Nombre de seances: %d\n", nbSeances);
    for (int i = 0; i < nbSeances; i++) {
        printf("  - %s | Date: %d | Heure: %04d | Salle %d | %s\n",
               seances[i].titre, seances[i].dateSeance,
               seances[i].heureDebut, seances[i].numSalle, seances[i].version);
    }

    // 2. Rechercher une séance existante
    printf("\n2. Recherche d'une seance (Wonka, 20230803, 1400):\n");
    Seance seanceRecherche = obtenirSeance("Wonka", 20230803, 1400);
    if (strcmp(seanceRecherche.titre, "") != 0 && seanceRecherche.dateSeance != -1) {
        green();
        printf("  Seance trouvee: %s | Date: %d | Heure: %04d | Salle %d | %s\n",
               seanceRecherche.titre, seanceRecherche.dateSeance,
               seanceRecherche.heureDebut, seanceRecherche.numSalle, seanceRecherche.version);
        reset();
    } else {
        red();
        printf("  Seance non trouvee\n");
        reset();
    }

    // 3. Insérer une nouvelle séance
    printf("\n3. Insertion d'une nouvelle seance (Test Seance):\n");
    Seance nouvelleSeance;
    strcpy(nouvelleSeance.titre, "Test Seance");
    nouvelleSeance.dateSeance = 20231231;
    nouvelleSeance.heureDebut = 2000;
    nouvelleSeance.numSalle = 1;
    strcpy(nouvelleSeance.version, "VF");

    if (insererSeance(nouvelleSeance)) {
        green();
        printf("  Seance inseree avec succes!\n");
        reset();

        // Vérifier l'insertion
        Seance seanceInsere = obtenirSeance("Test Seance", 20231231, 2000);
        if (strcmp(seanceInsere.titre, "") != 0) {
            printf("  Verification: %s | Date: %d | Heure: %04d | Salle %d | %s\n",
                   seanceInsere.titre, seanceInsere.dateSeance,
                   seanceInsere.heureDebut, seanceInsere.numSalle, seanceInsere.version);
        }
    } else {
        red();
        printf("  Erreur lors de l'insertion\n");
        reset();
    }

    // 4. Modifier la séance
    printf("\n4. Modification de la seance (Test Seance):\n");
    strcpy(nouvelleSeance.titre, "Test Seance");
    nouvelleSeance.dateSeance = 20231231;
    nouvelleSeance.heureDebut = 2000;
    nouvelleSeance.numSalle = 2; // Changement de salle
    strcpy(nouvelleSeance.version, "VOST");

    if (modifierSeance(nouvelleSeance)) {
        green();
        printf("  Seance modifiee avec succes!\n");
        reset();

        // Vérifier la modification
        Seance seanceModifie = obtenirSeance("Test Seance", 20231231, 2000);
        if (strcmp(seanceModifie.titre, "") != 0) {
            printf("  Verification: %s | Date: %d | Heure: %04d | Salle %d | %s\n",
                   seanceModifie.titre, seanceModifie.dateSeance,
                   seanceModifie.heureDebut, seanceModifie.numSalle, seanceModifie.version);
        }
    } else {
        red();
        printf("  Erreur lors de la modification\n");
        reset();
    }

    // 5. Supprimer la séance
    printf("\n5. Suppression de la seance (Test Seance):\n");
    if (supprimerSeance("Test Seance", 20231231, 2000)) {
        green();
        printf("  Seance supprimee avec succes!\n");
        reset();

        // Vérifier la suppression
        Seance seanceSupprime = obtenirSeance("Test Seance", 20231231, 2000);
        if (strcmp(seanceSupprime.titre, "") == 0 && seanceSupprime.dateSeance == -1) {
            printf("  Verification: Seance bien supprimee\n");
        }
    } else {
        red();
        printf("  Erreur lors de la suppression\n");
        reset();
    }

    green();
    printf("\n=== FIN DES TESTS SEANCES ===\n");
    reset();
}

void testerReservations(void) {
    cyan();
    printf("\n=== TEST DES FONCTIONS RESERVATIONS ===\n");
    reset();

    // 1. Lister toutes les réservations
    printf("\n1. Liste de toutes les reservations:\n");
    Reservation reservations[100];
    int nbReservations = obtenirListeReservations(reservations);
    printf("Nombre de reservations: %d\n", nbReservations);
    for (int i = 0; i < nbReservations; i++) {
        printf("  - Salle %d | Date: %d | Heure: %04d | A:%d E:%d S:%d | %s %s | Gold: %s\n",
               reservations[i].numSalle, reservations[i].date, reservations[i].heure,
               reservations[i].nbAdultes, reservations[i].nbEnfants, reservations[i].nbSeniors,
               reservations[i].prenom, reservations[i].nom,
               reservations[i].gold ? "Oui" : "Non");
    }

    // 2. Insérer une nouvelle réservation
    printf("\n2. Insertion d'une nouvelle reservation (Dupont Jean):\n");
    Reservation nouvelleReservation;
    nouvelleReservation.numSalle = 1;
    nouvelleReservation.date = 20231215;
    nouvelleReservation.heure = 1400;
    nouvelleReservation.nbAdultes = 2;
    nouvelleReservation.nbEnfants = 1;
    nouvelleReservation.nbSeniors = 0;
    strcpy(nouvelleReservation.nom, "Dupont");
    strcpy(nouvelleReservation.prenom, "Jean");
    nouvelleReservation.gold = false;

    if (insererReservation(nouvelleReservation)) {
        green();
        printf("  Reservation inseree avec succes!\n");
        reset();

        // Vérifier l'insertion
        Reservation reservationInseree = obtenirReservation(1, 20231215, 1400, "Dupont", "Jean");
        if (reservationInseree.numSalle != -1) {
            printf("  Verification: Salle %d | Date: %d | Heure: %04d | A:%d E:%d S:%d | %s %s | Gold: %s\n",
                   reservationInseree.numSalle, reservationInseree.date, reservationInseree.heure,
                   reservationInseree.nbAdultes, reservationInseree.nbEnfants, reservationInseree.nbSeniors,
                   reservationInseree.prenom, reservationInseree.nom,
                   reservationInseree.gold ? "Oui" : "Non");
        }
    } else {
        red();
        printf("  Erreur lors de l'insertion\n");
        reset();
    }

    // 3. Modifier la réservation
    printf("\n3. Modification de la reservation (Dupont Jean -> gold, +1 adulte):\n");
    nouvelleReservation.nbAdultes = 3;
    nouvelleReservation.gold = true;

    if (modifierReservation(nouvelleReservation)) {
        green();
        printf("  Reservation modifiee avec succes!\n");
        reset();

        // Vérifier la modification
        Reservation reservationModifiee = obtenirReservation(1, 20231215, 1400, "Dupont", "Jean");
        if (reservationModifiee.numSalle != -1) {
            printf("  Verification: Salle %d | Date: %d | Heure: %04d | A:%d E:%d S:%d | %s %s | Gold: %s\n",
                   reservationModifiee.numSalle, reservationModifiee.date, reservationModifiee.heure,
                   reservationModifiee.nbAdultes, reservationModifiee.nbEnfants, reservationModifiee.nbSeniors,
                   reservationModifiee.prenom, reservationModifiee.nom,
                   reservationModifiee.gold ? "Oui" : "Non");
        }
    } else {
        red();
        printf("  Erreur lors de la modification\n");
        reset();
    }

    // 4. Supprimer la réservation
    printf("\n4. Suppression de la reservation (Dupont Jean):\n");
    if (supprimerReservation(1, 20231215, 1400, "Dupont", "Jean")) {
        green();
        printf("  Reservation supprimee avec succes!\n");
        reset();

        // Vérifier la suppression
        Reservation reservationSupprimee = obtenirReservation(1, 20231215, 1400, "Dupont", "Jean");
        if (reservationSupprimee.numSalle == -1) {
            printf("  Verification: Reservation bien supprimee\n");
        }
    } else {
        red();
        printf("  Erreur lors de la suppression\n");
        reset();
    }

    green();
    printf("\n=== FIN DES TESTS RESERVATIONS ===\n");
    reset();
}

void testerUtilitairesDates(void) {
    cyan();
    printf("\n=== TEST DES FONCTIONS UTILITAIRES DE DATES ===\n");
    reset();

    // 1. Obtenir la date du système
    printf("\n1. Date actuelle du systeme:\n");
    int dateActuelle = obtenirDateYYYYMMDDDuSysteme();
    printf("  Date: %d\n", dateActuelle);

    // 2. Extraire les composantes d'une date
    printf("\n2. Extraction des composantes de la date 20230815:\n");
    int dateTest = 20230815;
    int annee = extraireAnneeYYYYDepuisDateYYYYMMDD(dateTest);
    int mois = extraireMoisMMDepuisDateYYYYMMDD(dateTest);
    int jour = extraireJourDDDepuisDateYYYYMMDD(dateTest);
    printf("  Annee: %d\n", annee);
    printf("  Mois: %d\n", mois);
    printf("  Jour: %d\n", jour);

    // 3. Calculer le nombre de jours entre deux dates
    printf("\n3. Calcul du nombre de jours entre 20230801 et 20230815:\n");
    int nbJours = calculerNbJours(20230801, 20230815);
    printf("  Nombre de jours: %d\n", nbJours);

    printf("\n4. Calcul du nombre de jours entre 20230101 et 20231231:\n");
    nbJours = calculerNbJours(20230101, 20231231);
    printf("  Nombre de jours: %d\n", nbJours);

    green();
    printf("\n=== FIN DES TESTS UTILITAIRES DATES ===\n");
    reset();
}