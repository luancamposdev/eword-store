package database

import (
	"database/sql"

	"github.com/luancamposdev/eword-store/go-api/internal/entity"
)

type ProductDB struct {
	db *sql.DB
}

func (pd *ProductDB) GetProducts() ([]*entity.Product, error) {
	rows, err := pd.db.Query("SELECT id, name, description, price, image_url, category_id FROM products")
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var products []*entity.Product
	for rows.Next() {
		var product entity.Product
		if err := rows.Scan(&product.ID, &product.Name, &product.Description, &product.Price, &product.ImageURL, &product.CategoryID); err != nil {
			return nil, err
		}
		products = append(products, &product)
	}

	return products, nil
}

func (pd *ProductDB) GetProduct(id string) (*entity.Product, error) {
	var product entity.Product
	err := pd.db.QueryRow("SELECT id, name, description, price, image_url, category_id FROM product WHERE id = ?", id).
		Scan(&product.ID, &product.Name, &product.Description, &product.Price, &product.ImageURL, &product.CategoryID)

	if err != nil {
		return nil, err
	}

	return &product, nil
}

func (pd *ProductDB) GetProductByCategoryID(categoryID string) ([]*entity.Product, error) {
	rows, err := pd.db.Query("SELECT id, name, description, price, image_url, category_id FROM products WHERE category_id = ?", categoryID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var products []*entity.Product
	for rows.Next() {
		var product entity.Product
		if err := rows.Scan(&product.ID, &product.Name, &product.Description, &product.Price, &product.ImageURL, &product.CategoryID); err != nil {
			return nil, err
		}
		products = append(products, &product)
	}

	return products, nil
}

func (pd *ProductDB) CreateProduct(product *entity.Product) (*entity.Product, error) {
	_, err := pd.db.Exec("INSERT INTO products (id, name, description, price, image_url, category_id) VALUES (?, ?, ?, ?, ?, ?)",
		product.ID, product.Name, product.Description, product.Price, product.ImageURL, product.CategoryID)

	if err != nil {
		return nil, err
	}

	return product, nil
}