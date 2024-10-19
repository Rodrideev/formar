import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


export interface PeriodicElement {
  name: string;
  position: number;
  mail: string;
  courses: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Rodrigo', mail: 'user@gmail.com', courses: 'Desarrollo Frontend'},
  {position: 2, name: 'Ezequiel', mail: 'user@gmail.com', courses: 'Backend'},
  {position: 3, name: 'Armando', mail: 'user@gmail.com', courses: 'Diseño ux/ui'},
  {position: 4, name: 'Nicolas', mail: 'user@gmail.com', courses: 'Desarrollo Frontend'},
  {position: 5, name: 'Sergio', mail: 'user@gmail.com', courses: 'Diseño ux/ui'},
  {position: 6, name: 'Lautaro', mail: 'user@gmail.com', courses: 'Desarrollo Frontend'},
  {position: 7, name: 'Alejandro', mail: 'user@gmail.com', courses: 'Backend'},
  {position: 8, name: 'Omar', mail: 'user@gmail.com', courses: 'Desarrollo Frontend'},
  {position: 9, name: 'Vicente', mail: 'user@gmail.com', courses: 'Diseño ux/ui'},
  {position: 10, name: 'Julio', mail: 'user@gmail.com', courses: 'Backend'},
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['position', 'name', 'mail', 'courses'];
  dataSource = ELEMENT_DATA;
  constructor(private matDialog: MatDialog){}
}
