package repositories

import (
	"github.com/devosher01/backend/pkg/config"
	"github.com/devosher01/backend/pkg/models"
)

func GetAllNotes() ([]models.Note, error) {
	var notes []models.Note
	result := config.DB.Find(&notes)
	return notes, result.Error
}

func GetNote(id string) (models.Note, error) {
	var note models.Note
	result := config.DB.First(&note, id)
	return note, result.Error
}

func CreateNote(note models.Note) (models.Note, error) {
	result := config.DB.Create(&note)
	return note, result.Error
}

func UpdateNote(id string, note models.Note) (models.Note, error) {
	var oldNote models.Note
	result := config.DB.First(&oldNote, id)
	if result.Error != nil {
		return oldNote, result.Error
	}
	result = config.DB.Model(&oldNote).Updates(map[string]interface{}{
		"Title":       note.Title,
		"Description": note.Description,
		"Categories":  note.Categories,
		"IsArchived":  note.IsArchived,
	})
	return oldNote, result.Error
}

func DeleteNote(id string) error {
	var note models.Note
	result := config.DB.Delete(&note, id)
	return result.Error
}
