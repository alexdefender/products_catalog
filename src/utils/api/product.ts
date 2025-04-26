import { ProductDto, ProductsDto } from '@models/api/product';
import { Product, Products } from '@models/product';

export const prepareProduct = (dto: ProductDto): Product => ({
  ...dto,
  id: String(dto.id),
});

export const prepareProducts = (dto: ProductsDto): Products => dto.map(prepareProduct);
