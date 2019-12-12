import { SportRepository } from '../repository/sport.repository';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class SportService {

    private repository: SportRepository;
    constructor() {
        this.repository = new SportRepository();
    }

    // Business logic
    getAll() {
        return this.repository.findAll();
    }

}
