package repositories

import (
	"github.com/devosher01/backend/pkg/config"
	"github.com/devosher01/backend/pkg/models"
	"golang.org/x/crypto/bcrypt"
)

func FindByUsernameAndPassword(username, password string) (models.User, error) {
	var user models.User
	result := config.DB.Where("username = ?", username).First(&user)
	if result.Error != nil {
		return user, result.Error
	}

	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password))
	if err != nil {
		return user, err
	}

	return user, nil
}

func SaveUser(user models.User) error {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}

	user.Password = string(hashedPassword)
	result := config.DB.Create(&user)
	return result.Error
}