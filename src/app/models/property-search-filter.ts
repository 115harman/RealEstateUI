export class PropertySearchFilter {
    constructor(
        public keywords: string,
        public bedCount: number,
        public bathCount: number,
        public minPrice: number,
        public maxPrice: number
    ) { }
}
