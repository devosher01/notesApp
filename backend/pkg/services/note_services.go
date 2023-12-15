package services

import (
	"github.com/devosher01/backend/pkg/models"
	"github.com/devosher01/backend/pkg/repositories"
)

func GetAllNotes(userID uint) ([]models.Note, error) {
    return repositories.GetAllNotes(userID)
}

func GetNote(id string) (models.Note, error) {
	return repositories.GetNote(id)
}

func CreateNote(note models.Note) (models.Note, error) {
	return repositories.CreateNote(note)
}

func UpdateNote(id string, note models.Note) (models.Note, error) {
	return repositories.UpdateNote(id, note)
}

func DeleteNote(id string) error {
	return repositories.DeleteNote(id)
}