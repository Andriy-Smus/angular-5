import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  public loginRegExp = /^[A-Za-z]{4,16}$/;
  public passwordRegExp = /^[\w-_.]{4,16}$/;
  public emailRegExp1 = /^[A-Za-z1-9.-_]{1,}@{1}[a-z]{1,}\.com$/;
  public emailRegExp2 = /^[A-Za-z1-9.-_]{1,}@{1}[a-z]{1,}\.net$/;
  public emailRegExp3 = /^[A-Za-z1-9.-_]{1,}@{1}[a-z]{1,}\.ua$/;
  public emailRegExp4 = /^[A-Za-z1-9.-_]{1,}@{1}[a-z]{1,}\.mail$/;

  public userLogin = '';
  public userPassword = '';
  public userEmail = '';
  
  public userData: any = [];
  public user: any = {};

  public editStatus = false;
  public editIndex!: number;

  addUser(): void{
    if(this.loginRegExp.test(this.userLogin) && this.passwordRegExp.test(this.userPassword)){
      if(this.emailRegExp1.test(this.userEmail) || this.emailRegExp2.test(this.userEmail) || this.emailRegExp3.test(this.userEmail) || this.emailRegExp4.test(this.userEmail)) {
        this.user = {
          login: this.userLogin,
          password: this.userPassword,
          email: this.userEmail
        }
        this.userData.push(this.user);
        console.log(this.userData);
        this.userLogin = '';
        this.userPassword = '';
        this.userEmail = '';
      }
    }
  }

  deleteUser(index: number): void{
    this.userData.splice(index, 1);
  }

  editUser(index: number): void {
    this.userLogin = this.userData[index].login;
    this.userPassword = this.userData[index].password;
    this.userEmail = this.userData[index].email;
    this.editIndex = index;
    this.editStatus = true;
  }
  saveEditUser(): void{
    this.userData[this.editIndex].login = this.userLogin;
    this.userData[this.editIndex].password = this.userPassword;
    this.userData[this.editIndex].email = this.userEmail;
    this.userLogin = '';
    this.userPassword = '';
    this.userEmail = '';
    this.editStatus = false;
  }

}
