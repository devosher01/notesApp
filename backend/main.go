package main

import (
	"github.com/devosher01/backend/pkg/config"
	"github.com/devosher01/backend/pkg/controllers"
	"github.com/devosher01/backend/pkg/middleware"
	"github.com/devosher01/backend/pkg/models"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	config.DBConnection()
	err := config.DB.AutoMigrate(&models.User{}, &models.Note{})
	if err != nil {
		panic(err)
	}

	r := gin.Default()

	// CORS
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowHeaders = append(config.AllowHeaders, "Authorization")
	r.Use(cors.New(config))

	// User routes
	r.POST("/login", controllers.Login)
	r.POST("/register", controllers.Register)

	// Note routes
	r.GET("/notes", middleware.AuthMiddleware(), controllers.GetAllNotes)
	r.GET("/notes/:id", middleware.AuthMiddleware(), controllers.GetNote)
	r.POST("/notes", middleware.AuthMiddleware(), controllers.CreateNote)
	r.PUT("/notes/:id", middleware.AuthMiddleware(), controllers.UpdateNote)
	r.DELETE("/notes/:id", middleware.AuthMiddleware(), controllers.DeleteNote)
	r.Run(":3000") // listen and serve on :3000
}