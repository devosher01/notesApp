package models

import (
	"github.com/jinzhu/gorm"
	"github.com/lib/pq"
)

type Note struct {
	gorm.Model
	Title       string        `gorm:"size:100"`
	Description string        `gorm:"size:100"`
	Categories  pq.Int64Array `gorm:"type:integer[]"`
	IsArchived  bool          `gorm:"default:false"`
}
