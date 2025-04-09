import { Component } from '@angular/core';
import { FooterComponent } from '../../../../../../core/navigation/shared/components/footer/footer.component';
import { AlumnHeader } from '../../../components/header/header.component';
import { AlumnListComponent } from '../../../components/list-alumns/list-alumns.component';

@Component({
  selector: 'app-view-students',
  standalone: true,
  imports: [
    FooterComponent,
    AlumnHeader,
    AlumnListComponent
  ],
  templateUrl: './view-alumns.component.html',
  styleUrl: './view-alumns.component.scss'
})
export class ViewAlumns {

}
