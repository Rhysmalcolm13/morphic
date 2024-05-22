declare module 'exa-node' {
  export default class Exa {
    constructor(apiKey: string)
    search(
      query: string,
      options: { numResults: number; highlights: boolean }
    ): Promise<any>
  }
}
