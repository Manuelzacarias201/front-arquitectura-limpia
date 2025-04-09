import { Component } from '@angular/core';
import { AlumnHeader } from '../../../components/header/header.component';
import { FooterComponent } from '../../../../../../core/navigation/shared/components/footer/footer.component';


@Component({
  selector: 'student-home',
  standalone: true,
  imports: [
    AlumnHeader,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class AlumnHome {

}
