import { Component } from '@angular/core';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [PrivacyPolicyComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})

/**
 * Represents a dialog component.
 */
export class DialogComponent {
  /**
   * Stops an event.
   * @param event - The event to stop.
   */
  stop(event: Event) {
    event.stopPropagation();
  }
}
