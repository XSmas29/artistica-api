"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailTokenError = exports.NotFoundError = exports.UnauthorizedError = exports.InvalidInputError = exports.DuplicateEntryError = void 0;
class DuplicateEntryError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DuplicateEntry';
    }
}
exports.DuplicateEntryError = DuplicateEntryError;
class InvalidInputError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidInput';
    }
}
exports.InvalidInputError = InvalidInputError;
class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Unauthorized';
    }
}
exports.UnauthorizedError = UnauthorizedError;
class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotFound';
    }
}
exports.NotFoundError = NotFoundError;
class GmailTokenError extends Error {
    constructor(message) {
        super(message);
        this.name = 'GmailToken';
    }
}
exports.GmailTokenError = GmailTokenError;
