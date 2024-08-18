/**
 * Interface for objects that represent a contact.
 */
export interface Contact {
  [id: string]: string;
  name: string;
  email: string;
  message: string;
}
