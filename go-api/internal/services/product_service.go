package services

import (
	"github.com/luancamposdev/eword-store/go-api/internal/database"
	"github.com/luancamposdev/eword-store/go-api/internal/entity"
)

type ProductService struct {
	ProductDB database.ProductDB
}

func NewProductService(productDB database.ProductDB) *ProductService {
	return &ProductService{ProductDB: productDB}
}

func (ps *ProductService) GetProducts() ([]*entity.Product, error) {
	product, err := ps.ProductDB.GetProducts()

	if err != nil {
		return nil, err
	}

	return product, nil
}

func (ps *ProductService) GetProduct(id string) (*entity.Product, error) {
	product, err := ps.ProductDB.GetProduct(id)

	if err != nil {
		return nil, err
	}

	return product, nil
}

func (ps *ProductService) GetProductByCategory(categoryID string) ([]*entity.Product, error) {
	products, err := ps.ProductDB.GetProductByCategoryID(categoryID)

	if err != nil {
		return nil, err
	}

	return products, nil
}

func (ps *ProductService) CreateProduct(name, descrption, category_id, image_url string, price float64) (*entity.Product, error) {
	product := entity.NewProduct(name, descrption, category_id, image_url, price)
	_, err := ps.ProductDB.CreateProduct(product)

	if err != nil {
		return nil, err
	}

	return product, nil
}
