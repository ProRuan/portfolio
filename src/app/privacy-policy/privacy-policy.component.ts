import { Component } from '@angular/core';
import { LinkService } from '../shared/services/link.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})

/**
 * Represents a privacy policy component.
 */
export class PrivacyPolicyComponent {
  /**
   * Creates a privacy policy component.
   * @param linkData - The link data to apply.
   */
  constructor(private linkData: LinkService) {}

  /**
   * Closes the dialog.
   */
  close() {
    this.linkData.dialogOpened = false;
  }
}
