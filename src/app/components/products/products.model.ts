enum Category {
  Supercar, Minivan, Microcar
}

export class Product {
  constructor(public name: string,
              public price: number,
              public description?: string,
              public isAvailable?: boolean,
              // category?: Category,
              // equivalents?: string[],
  ) {
  }
}
