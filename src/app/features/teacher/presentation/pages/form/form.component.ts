import { Component } from '@angular/core';
import { FormTeacher } from '../../../components/form-teachers/form-teachers.component';
import { TeacherHeader } from '../../../components/header/header.component';
import { FooterComponent } from '../../../../../../core/navigation/shared/components/footer/footer.component';

@Component({
  selector: 'teacher-form',
  standalone: true,
  imports: [
    FormTeacher,
    TeacherHeader,
    FooterComponent
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class TeacherFormPage {

}
