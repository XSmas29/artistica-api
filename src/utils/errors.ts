export class DuplicateEntryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DuplicateEntry';
  }
}

export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DuplicateEntry';
  }
}

export class GmailTokenError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GmailToken';
  }
}