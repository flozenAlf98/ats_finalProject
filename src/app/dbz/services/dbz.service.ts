import { Injectable } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000,
        },
        {
          nombre: 'Vegeta',
          poder: 15600,
        },
        {
          nombre: 'Trunks',
          poder: 7000,
        },
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {}

    agregarPersonaje( personaje: Personaje): void {
        this._personajes.push( personaje );
    }

}