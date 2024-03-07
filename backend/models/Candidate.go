package models

import "gorm.io/gorm"

type Candidate struct {
	ID            uint `gorm:"primaryKey"`
	User          User
	UserID        string
	Name          string
	CreationDate  string
	DOB           string
	Address       string
	Email         string
	Phone         string
	TypeCandidate string
	Status        string
	Comments      string
	Deleted       gorm.DeletedAt
}
