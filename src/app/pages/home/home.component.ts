import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevIntroComponent } from 'src/app/components/dev-intro/dev-intro.component';
import { ProjectShowcaseComponent } from 'src/app/components/project-showcase/project-showcase.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ProjectShowcaseComponent,
    DevIntroComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
