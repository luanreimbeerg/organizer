import { Component } from '@angular/core';
// import { BtnModule } from '../../projects/btn/src/public-api';

import { BtnModule } from '@design_front/btn';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BtnModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'organize';
}
