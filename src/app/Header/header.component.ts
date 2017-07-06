import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent {
  // @Output decorator will make enable this even to listen outside of this component
  // aap.component is the parent component
  @Output( ) featureSelected = new EventEmitter<String>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
