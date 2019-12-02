/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requete sql)
 */
export class SportRepository {

    private static instance: SportRepository;

    static getInstance() {
        if (!this.instance) {
            this.instance = new SportRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    findAll() {
        //
    }

    findById(id: number) {
        // votre code ici
    }

    save(sport: any) {
        // votre code ici
    }
}
