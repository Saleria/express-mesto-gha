class FoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'FoundError';
    this.statusCode = 400;
  }
}

module.exports = FoundError;
