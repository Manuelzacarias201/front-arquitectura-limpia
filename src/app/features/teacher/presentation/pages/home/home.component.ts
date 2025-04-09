import { Component } from '@angular/core';
import { TeacherHeader } from '../../../components/header/header.component';
import { FooterComponent } from '../../../../../../core/navigation/shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TeacherHeader,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class TeacherHome {

}
