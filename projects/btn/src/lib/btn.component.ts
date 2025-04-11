import { Component } from '@angular/core';

@Component({
  selector: 'button[lib-botao]',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
  host: {
    class: 'custom-button',
  },
})
export class BtnComponent {}
