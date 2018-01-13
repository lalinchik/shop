export enum Class {
  D = 'D', E = 'E', S = 'S', SCC = 'SCC'
}

export class Product {
  constructor(public name: string,
              public price: number,
              public description?: string,
              public isAvailable?: boolean,
              public image?: string,
              public carClass?: Class,
              public equivalents?: string[]) {
  }
}
