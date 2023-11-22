export class DuplicateEntryError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'DuplicateEntry'
  }
}

export class InvalidInputError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'InvalidInput'
  }
}

export class UnauthorizedError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'Unauthorized'
  }
}

export class NotFoundError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'NotFound'
  }
}

export class GmailTokenError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'GmailToken'
  }
}