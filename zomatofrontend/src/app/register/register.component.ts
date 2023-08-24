import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { User } from '../user.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formregister!: FormGroup
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.formcall()
  }
  formcall() {
    this.formregister = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  ngOnInit(): void {

  }

  HandleSubmit() {
    if (this.formregister.valid) {
      console.log("hi")
      let data: User = this.formregister.value
      console.log(data)
      this.authService.register(data).subscribe((res) => {
        this.formregister.reset()
        if (res.msg == "Registration succesful") {
          console.log(res.msg)
          alert(res.msg)
          this.router.navigate(['/login'])
        }else{
          alert(res.msg)
        }
      })

    }
  }


}
