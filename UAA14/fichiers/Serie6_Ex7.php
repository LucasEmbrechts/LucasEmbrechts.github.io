<?php
// UAA14 - Série 6, exercice 7 : corrige le programme
// Ce programme contient quatre défauts liés aux exceptions. À toi de les trouver !

class Membre {
    private $Pseudo;
    private $Email;
    private $Points;
    private $Admin;
    private $Id;

    function __construct($pseudo, $email, $points = 0, $admin = false, $id = null) {
        $this->Pseudo = $pseudo;
        $this->Email = $email;
        $this->Points = $points;
        $this->Admin = $admin;
        $this->Id = $id;
    }

    function __get($propriete) {
        return $this->$propriete;
    }
}

$lignes = array(
    array("Id" => 1, "Pseudo" => "zoe",   "Email" => "zoe@mail.be",   "Points" => 42, "Admin" => false),
    array("Id" => 2, "Pseudo" => "malik", "Email" => "malik@mail.be", "Points" => 17, "Admin" => false),
    array("Id" => 3, "Pseudo" => "sam",   "Email" => "sam@mail.be",   "Points" => 63, "Admin" => true)
);

class MembreIntrouvableException extends Exception {}
class PseudoDejaPrisException extends Exception {}
class DonneesIndisponiblesException extends Exception {}

class AccesMembres {
    private $lignes;
    private $connectee;

    function __construct($lignes) {
        $this->lignes = $lignes;
        $this->connectee = true;
    }

    function deconnecter() {
        $this->connectee = false;
    }

    function obtenirMembre($pseudo) {
        if (!$this->connectee) throw new DonneesIndisponiblesException("connexion perdue");
        foreach ($this->lignes as $ligne) {
            if ($ligne["Pseudo"] == $pseudo) {
                return new Membre($ligne["Pseudo"], $ligne["Email"], $ligne["Points"], $ligne["Admin"], $ligne["Id"]);
            }
        }
        throw new MembreIntrouvableException("Aucun membre nommé $pseudo");
    }

    function obtenirMembreParEmail($email) {
        foreach ($this->lignes as $ligne) {
            if ($ligne["Email"] == $email) {
                return new Membre($ligne["Pseudo"], $ligne["Email"], $ligne["Points"], $ligne["Admin"], $ligne["Id"]);
            }
        }
        return false;
    }

    function enregistrerMembre($membre) {
        if (!$this->connectee) throw new DonneesIndisponiblesException("connexion perdue");
        array_push($this->lignes, array("Id" => count($this->lignes) + 1, "Pseudo" => $membre->Pseudo,
            "Email" => $membre->Email, "Points" => $membre->Points, "Admin" => $membre->Admin));
    }

    function listePseudos() {
        $pseudos = array();
        foreach ($this->lignes as $ligne) {
            array_push($pseudos, $ligne["Pseudo"]);
        }
        return $pseudos;
    }
}

class Logique {
    private $acces;

    function __construct($acces) {
        $this->acces = $acces;
    }

    function inscrire($pseudo, $email) {
        try {
            $this->acces->obtenirMembre($pseudo);
            throw new PseudoDejaPrisException("Le pseudo $pseudo est déjà pris");
        } catch (Exception $e) {
            $this->acces->enregistrerMembre(new Membre($pseudo, $email));
        }
    }

    function retrouverPseudo($email) {
        $membre = $this->acces->obtenirMembreParEmail($email);
        return $membre->Pseudo;
    }

    function listePseudos() {
        return $this->acces->listePseudos();
    }
}

// ----- script d'affichage -----
$acces = new AccesMembres($lignes);
$logique = new Logique($acces);

try {
    $logique->inscrire("lea", "lea@mail.be");
    echo "lea : inscription réussie\n";
} catch (PseudoDejaPrisExeption $e) {
    echo "lea : inscription refusée — " . $e->getMessage() . "\n";
}

try {
    $logique->inscrire("zoe", "zoe2@mail.be");
    echo "zoe : inscription réussie\n";
} catch (PseudoDejaPrisExeption $e) {
    echo "zoe : inscription refusée — " . $e->getMessage() . "\n";
}

foreach (array("zoe@mail.be", "inconnu@mail.be") as $email) {
    try {
        echo "$email : compte de " . $logique->retrouverPseudo($email) . "\n";
    } catch (MembreIntrouvableException $e) {
        echo "$email : " . $e->getMessage() . "\n";
    }
}

echo "Membres : " . implode(", ", $logique->listePseudos()) . "\n";

$acces->deconnecter();
try {
    $logique->inscrire("tom", "tom@mail.be");
    echo "tom : inscription réussie\n";
} catch (DonneesIndisponiblesException $e) {
    echo "tom : " . $e . "\n";
}
