import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from './models';


const ELEMENT_DATA: User[] = [
  {id: 1, firstName: 'Rodrigo', lastName: 'Riveros' , email: 'user@gmail.com', courses: 'Desarrollo Frontend', createdAt: new Date()},
  {id: 2, firstName: 'Ezequiel', lastName: 'Altamirano' , email: 'user@gmail.com', courses: 'Backend', createdAt: new Date()},
  {id: 3, firstName: 'Armando', lastName: 'Gongoso' , email: 'user@gmail.com', courses: 'Diseño ux/ui', createdAt: new Date()},
  {id: 4, firstName: 'Nicolas', lastName: 'Serrudo' , email: 'user@gmail.com', courses: 'Desarrollo Frontend', createdAt: new Date()},
  {id: 5, firstName: 'Sergio', lastName: 'Prieto' , email: 'user@gmail.com', courses: 'Diseño ux/ui', createdAt: new Date()},
  {id: 6, firstName: 'Lautaro', lastName: 'Martinez' , email: 'user@gmail.com', courses: 'Desarrollo Frontend', createdAt: new Date()},
  {id: 7, firstName: 'Alejandro', lastName: 'Garnacho' , email: 'user@gmail.com', courses: 'Backend', createdAt: new Date()},
  {id: 8, firstName: 'Omar', lastName: 'Don' , email: 'user@gmail.com', courses: 'Desarrollo Frontend', createdAt: new Date()},
  {id: 9, firstName: 'Vicente', lastName: 'Viloni' , email: 'user@gmail.com', courses: 'Diseño ux/ui', createdAt: new Date()},
  {id: 10, firstName: 'Julio', lastName: 'Cesar' , email: 'user@gmail.com', courses: 'Backend', createdAt: new Date()},
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'firstName', 'email', 'courses', 'createdAt'];
  dataSource = ELEMENT_DATA;
  constructor(private matDialog: MatDialog){}
}
