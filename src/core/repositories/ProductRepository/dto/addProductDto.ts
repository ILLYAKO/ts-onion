export class AddProductDto {
    constructor(
        readonly cost: number,
        readonly weight: number,
        readonly name: string
    ) {}
}
