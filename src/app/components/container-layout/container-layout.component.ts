import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-container-layout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './container-layout.component.html',
  styleUrls: ['./container-layout.component.scss']
})
export class ContainerLayoutComponent {

}
