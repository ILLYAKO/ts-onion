export class Product {
    constructor(
        readonly id: number,
        readonly title: string,
        readonly imageId: string,
        readonly productPrice: number,
        readonly vendor: string,
        readonly segment: string,
        readonly description: string,
        readonly createdAt: Date,
        readonly updatedAt: Date,
        readonly weight: number
    ) {}
}
