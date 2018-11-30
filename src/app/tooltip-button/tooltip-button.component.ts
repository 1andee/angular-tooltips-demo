import { Component, Input } from '@angular/core';

@Component({
  selector: 'tooltip-button',
  styles: [``],
  templateUrl: './tooltip-button.component.html'
})
export class TooltipButtonComponent {
  @Input('btnLabel') btnLabel: string;
  @Input('tooltipContent') tooltipContent: string;
}
