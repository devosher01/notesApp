package config

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DBS = "host=localhost port=5432 user=postgres dbname=postgres password=qwertyuiop sslmode=disable"

var DB *gorm.DB

func DBConnection() {
	var err error
	DB, err = gorm.Open(postgres.Open(DBS), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	} else {
		println("DB connected successfully")
	}
}
