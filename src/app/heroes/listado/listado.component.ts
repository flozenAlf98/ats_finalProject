import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes : string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  deleted: string = '';

  get isDeleted(): boolean {
    return this.deleted.length > 0;
  }

  borrarHeroe() {
    this.deleted = this.heroes.pop() || '';
  }
}
