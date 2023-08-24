import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formlogin!: FormGroup
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.formcall()
  }
  formcall() {
    this.formlogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  ngOnInit(): void {

  }

  HandleSubmit() {
    if (this.formlogin.valid) {
      console.log("hi")
      let data: User = this.formlogin.value
      console.log(data)
      this.authService.login(data).subscribe((res) => {
        this.formlogin.reset()
        if (res.msg == "Login succesful") {
          console.log(res)
          alert(res.msg)
          this.router.navigate(['/home'])
        }else{
          alert(res.msg)
        }
      })

    }
  }

}
