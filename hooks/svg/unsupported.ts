/** The SVG uses something this code does not handle. */
export class Unsupported extends Error {
  constructor(what: string) {
    super(`unsupported SVG: ${what}`)
  }
}
