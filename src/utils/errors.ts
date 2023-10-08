export class DuplicateEntryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DuplicateEntry';
  }
}
