import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-dev-intro',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
  ],
  templateUrl: './dev-intro.component.html',
  styleUrls: ['./dev-intro.component.scss']
})
export class DevIntroComponent {

}
