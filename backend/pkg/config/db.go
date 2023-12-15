package config

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DBS = "postgres://postgres:C6HrFw2NlYqQbvx@backend-db-1.flycast:5432"
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
