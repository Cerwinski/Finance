export interface ISpending{
  id?: number,
 name?: string,
  category?: string,
  price?: number,
  date?: Date
}
export class Spending implements ISpending{
  constructor(
    id?: number,
    name?: string,
    category?: string,
    price?: number,
    date?: Date
  ) {
  }
}
