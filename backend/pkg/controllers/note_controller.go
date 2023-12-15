package controllers

import (
	"fmt"
	"net/http"

	"github.com/devosher01/backend/pkg/middleware"
	"github.com/devosher01/backend/pkg/models"
	"github.com/devosher01/backend/pkg/services"
	"github.com/gin-gonic/gin"
)

func GetAllNotes(c *gin.Context) {
	// Extraer el ID del usuario del contexto.
	userID, exists := middleware.UserIDFromContext(c)
	fmt.Println("This is the current User", userID)
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "User not authenticated"})
		return
	}

	notes, err := services.GetAllNotes(userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, notes)
}

func GetNote(c *gin.Context) {
	id := c.Param("id")
	note, err := services.GetNote(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, note)
}

func CreateNote(c *gin.Context) {
	var note models.Note
	if err := c.ShouldBindJSON(&note); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	createdNote, err := services.CreateNote(note)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, createdNote)
}

func UpdateNote(c *gin.Context) {
	id := c.Param("id")
	var note models.Note
	if err := c.ShouldBindJSON(&note); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	updatedNote, err := services.UpdateNote(id, note)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, updatedNote)
}

func DeleteNote(c *gin.Context) {
	id := c.Param("id")
	if err := services.DeleteNote(id); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{})
}
