import { Component } from '@angular/core';
import { FooterComponent } from '../../../../../core/navigation/shared/components/footer/footer.component'; 
import { AlumnHeader } from '../../components/header/header.component';
import { FormAlumn } from '../../components/form-alumns/form-alumns.component';

@Component({
  selector: 'alumn-form',
  standalone: true,
  imports: [
    FooterComponent,
    AlumnHeader,
    FormAlumn
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class AlumnFormPage {

}
