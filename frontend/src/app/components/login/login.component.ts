import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() modeChange: EventEmitter<void> = new EventEmitter<void>();

  onClick($event: MouseEvent) {
    this.modeChange.emit();
    $event.preventDefault();
  }
}
