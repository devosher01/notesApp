package services

import (
	"github.com/devosher01/backend/pkg/models"
	"github.com/devosher01/backend/pkg/repositories"
)

func FindUserByUsernameAndPassword(username, password string) (models.User, error) {
	return repositories.FindByUsernameAndPassword(username, password)
}

func SaveUser(user models.User) error {
	return repositories.SaveUser(user)
}