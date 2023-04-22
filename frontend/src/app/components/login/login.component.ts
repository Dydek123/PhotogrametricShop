import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  @Output() modeChange: EventEmitter<void> = new EventEmitter<void>();
  @Output() loginSuccess: EventEmitter<void> = new EventEmitter<void>();


  constructor(private formBuilder: FormBuilder,
              private service: AuthService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onClick($event: MouseEvent) {
    this.modeChange.emit();
    $event.preventDefault();
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.login(this.form.value).subscribe(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.loginSuccess.emit();
      });
    }
  }
}
