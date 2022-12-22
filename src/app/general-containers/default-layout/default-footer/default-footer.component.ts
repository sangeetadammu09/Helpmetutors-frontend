import { Component } from '@angular/core';
import { FooterComponent } from '@coreui/angular';

@Component({
  selector: 'app-general-footer',
  templateUrl: './default-footer.component.html',
  styleUrls: ['./default-footer.component.scss'],
})
export class GeneralFooterComponent extends FooterComponent {
  constructor() {
    super();
  }
}
