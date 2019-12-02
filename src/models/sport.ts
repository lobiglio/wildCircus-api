/**
 * Cette classe est un modèle
 * Elle représente la forme de l'objet réel
 */
export class Sport {
    public id!: number;
    public name!: string;

    constructor(input: Sport) {
        Object.assign(this, input);
    }
}
