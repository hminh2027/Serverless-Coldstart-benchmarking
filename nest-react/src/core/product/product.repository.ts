const mockProducts = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Product 1 description',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Product 2 description',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Product 3 description',
    price: 300,
  },
];

export class ProductRepository {
  findAll() {
    return mockProducts;
  }

  findById(id: number) {
    return mockProducts.find((prod) => prod.id === id);
  }

  createOne(product) {
    mockProducts.push(product);
    return product;
  }
}
