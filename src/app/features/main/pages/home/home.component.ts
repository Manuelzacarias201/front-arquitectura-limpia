import { Component } from '@angular/core';
import { MainHeader } from '../../components/header/header.component';
import { FooterComponent } from '../../../../../core/navigation/shared/components/footer/footer.component';

@Component({
  selector: 'main-home',
  standalone: true,
  imports: [
    MainHeader,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class MainHome {

}
