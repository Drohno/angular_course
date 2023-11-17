import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  template: `<input [(ngModel)]="username" />
    <p>{{ username }}</p>
    <button
      type="button"
      class="btn"
      [disabled]="!username"
      [ngClass]="{
        'btn-success': isUsernNameEmpty(),
        'btn-danger': !isUsernNameEmpty()
      }"
      (click)="removeUsername()"
    >
      Empty username
    </button>`,
})
export class UsernameComponent {
  username = '';

  removeUsername(): void {
    this.username = '';
  }

  isUsernNameEmpty(): boolean {
    return this.username !== null && this.username !== '';
  }
}
