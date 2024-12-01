import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}
  getProducts() {
    return this.productRepository.findAll();
  }

  getProductById(id: number) {
    return this.productRepository.findById(id);
  }

  createProduct(product) {
    return this.productRepository.createOne(product);
  }
}
