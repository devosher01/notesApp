package services

import (
    "github.com/golang-jwt/jwt"
    "time"
)

func GenerateToken(username string, userID uint) (string, error) {
    token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
        "username": username,
        "userID":   userID,
        "exp":      time.Now().Add(time.Hour * 72).Unix(),
    })

    return token.SignedString([]byte("mySuperSecretKey123!"))
}