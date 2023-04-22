import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent {
  form: FormGroup;
  @Output() modeChange: EventEmitter<void> = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder,
              private service: AuthService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      fullName: ['', Validators.required],
      address: ['', Validators.required],
    })
  }


  onSubmit() {
    if (this.form.valid) {
      this.service.signup(this.form.value).subscribe(user => {
        localStorage.setItem('user', JSON.stringify(user))
      });
    }
  }
}
