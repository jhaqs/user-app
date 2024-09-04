import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [UserComponent, UserFormComponent],
  templateUrl: './user-app.component.html'
})
export class UserAppComponent implements OnInit{
  titulo: string='Listado de usuarios';

  users: User[]=[];

  constructor(private service: UserService){
    
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(us => this.users=us);
  }

  addUser(user: User){
    this.users = [...this.users, {...user, id: new Date().getTime()}];//... construye lista de users y {...user} agrega otro user a la lista
  }

}
