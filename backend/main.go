package main

import (
	"github.com/devosher01/backend/pkg/config"
	"github.com/devosher01/backend/pkg/controllers"
	"github.com/devosher01/backend/pkg/models"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	config.DBConnection()
	err := config.DB.AutoMigrate(&models.Note{})
	if err != nil {
		panic(err)
	}

	r := gin.Default()

	r.Use(cors.Default())

	//// User routes
	//r.GET("/users", controllers.GetUsersHandler)
	//r.GET("/users/:id", controllers.GetUserHandler)
	//r.POST("/users", controllers.CreateUserHandler)
	//r.PUT("/users/:id", controllers.UpdateUserHandler)
	//r.DELETE("/users/:id", controllers.DeleteUserHandler)

	// Note routes
	r.GET("/notes", controllers.GetAllNotes)
	r.GET("/notes/:id", controllers.GetNote)
	r.POST("/notes", controllers.CreateNote)
	r.PUT("/notes/:id", controllers.UpdateNote)
	r.DELETE("/notes/:id", controllers.DeleteNote)

	r.Run(":3000") // listen and serve on :3000
}
