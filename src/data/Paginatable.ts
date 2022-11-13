export interface IPaginatable<TItem extends {}> {
    items: TItem[];
    page: number;
    totalPages: number;
}