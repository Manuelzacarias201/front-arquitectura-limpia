import { Component } from '@angular/core';
import { FooterComponent } from '../../../../../../core/navigation/shared/components/footer/footer.component';
import { TeacherHeader } from '../../../components/header/header.component';
import { ListTeachersComponent } from '../../../components/list-teachers/list-teachers.component';


@Component({
  selector: 'app-view-teachers',
  standalone: true,
  imports: [
    TeacherHeader,
    ListTeachersComponent,
    FooterComponent
  ],
  templateUrl: './view-teachers.component.html',
  styleUrl: './view-teachers.component.scss'
})
export class ViewTeachersComponent {

}
