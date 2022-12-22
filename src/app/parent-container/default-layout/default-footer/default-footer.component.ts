import { Component } from '@angular/core';
import { FooterComponent } from '@coreui/angular';

@Component({
  selector: 'app-parent-footer',
  templateUrl: './default-footer.component.html',
  styleUrls: ['./default-footer.component.scss'],
})
export class ParentFooterComponent extends FooterComponent {
  constructor() {
    super();
  }
}
