import { UserRepository } from '../repository/user.repository';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class UserService {

    private repository: UserRepository;
    constructor() {
        this.repository = new UserRepository();
    }

    // Business logic
    getAll() {
        return this.repository.findAll();
    }

}
