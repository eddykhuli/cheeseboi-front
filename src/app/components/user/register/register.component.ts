import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  users: User[] = [];
  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getAllUsers().subscribe((response: User[]) => {
      this.users = response;
      console.log(response)
    });
  }

  registerPerson() {
    console.log(this.user)

    for (var i = 0; i < this.users.length; i++) {
      if (this.user.email == this.users[i].email) {
       console.log("This account already exists...Choose another email/Username and open a new account");
      }
      else {

        this.service.registerUser(this.user).subscribe((response) => {
          console.log(response);
        });
      }
    }

  }

}
