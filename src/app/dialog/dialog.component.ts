import { Component } from '@angular/core';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { LinkService } from '../shared/services/link.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [PrivacyPolicyComponent, CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})

/**
 * Represents a dialog component.
 */
export class DialogComponent {
  /**
   * Creates a dialog component.
   * @param linkData - The linkData to apply.
   */
  constructor(private linkData: LinkService) {}

  /**
   * Shows the privacy policy.
   * @returns - The class to apply.
   */
  show() {
    let opened = this.linkData.dialogOpened;
    return opened ? 'visible' : '';
  }

  /**
   * Stops an event.
   * @param event - The event to stop.
   */
  stop(event: Event) {
    event.stopPropagation();
  }
}
