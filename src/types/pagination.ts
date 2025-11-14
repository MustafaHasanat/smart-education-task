export type PaginatedProps = {
  page?: number;
};

export type PaginatedData<ItemType> = {
  products: ItemType[];
  total: number;
  page: number;
  totalPages: number;
  isEmpty: boolean;
};
