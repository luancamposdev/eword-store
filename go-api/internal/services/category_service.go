package services

import (
	"github.com/luancamposdev/eword-store/go-api/internal/database"
	"github.com/luancamposdev/eword-store/go-api/internal/entity"
)

type CategoryService struct {
	CategoryDB database.CategoryDB
}

func NewCategoryService(categoryDB database.CategoryDB) *CategoryService {
	return &CategoryService{
		CategoryDB: categoryDB,
	}
}

func (cs *CategoryService) GetCategories() ([]*entity.Category, error) {
	categoies, err := cs.CategoryDB.GetCategories()
	if err != nil {
		return nil, err
	}

	return categoies, nil
}

func (cs *CategoryService) CreateCategory(name string) (*entity.Category, error) {
	category := entity.NewCategory(name)
	_, err := cs.CategoryDB.CreateCategory(category)
	if err != nil {
		return nil, err
	}

	return category, nil
}

func (cs *CategoryService) GetCategory(id string) (*entity.Category, error) {
	category, err := cs.CategoryDB.GetCategory(id)
	if err != nil {
		return nil, err
	}

	return category, nil
}
