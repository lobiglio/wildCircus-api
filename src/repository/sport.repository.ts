import { DbHandler } from './../core/db.handler';
import { Sport } from '../models/sport';
/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requete sql)
 */
export class SportRepository {
    private db: DbHandler;

    private GET_ALL = 'SELECT * FROM document;';

    constructor() {
        this.db =  DbHandler.getInstance();
    }

    async findAll(): Promise<Sport[]> {
        return this.db.query(this.GET_ALL) as Promise<Sport[]>;
    }

}
