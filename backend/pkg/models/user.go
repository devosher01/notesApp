package models

import (
	"github.com/golang-jwt/jwt"
	"gorm.io/gorm"
)

// User represents a user in the system.
type User struct {
	gorm.Model
	Username string `gorm:"size:100"`
	Password string `gorm:"size:100"`
	Email    string `gorm:"size:100"`
}

type Claims struct {
    UserID uint `json:"userID"`
    jwt.StandardClaims
}
