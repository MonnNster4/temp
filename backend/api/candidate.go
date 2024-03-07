package api

import (
	"net/http"
	"strconv"

	"github.com/dafalo/temp/backend/models"
)

func AddCandidate(w http.ResponseWriter, r *http.Request) {

	db := GormDB()

	contact := models.Candidate{}
	Name := r.FormValue("Name")
	CreationDate := r.FormValue("CreationDate")
	DOB := r.FormValue("DOB")
	Address := r.FormValue("Address")
	Email := r.FormValue("Email")
	Phone := r.FormValue("Phone")
	Type := r.FormValue("Type")
	Comment := r.FormValue("Comment")

	contact.Name = Name
	contact.CreationDate = CreationDate
	contact.DOB = DOB
	contact.Address = Address
	contact.Email = Email
	contact.Phone = Phone
	contact.TypeCandidate = Type
	contact.Comments = Comment
	contact.Status = "Active"
	contact.UserID = "1"

	db.Save(&contact)

	sqlDB, _ := db.DB()
	sqlDB.Close()

}

func GetCandidate(w http.ResponseWriter, r *http.Request) {

	db := GormDB()

	contact := []models.Candidate{}
	db.Preload("User").Preload("Profile").Preload("Position").Order("id desc").Find(&contact)

	data := map[string]interface{}{
		"status": "ok",
		"item":   contact,
	}
	ReturnJSON(w, r, data)

	sqlDB, _ := db.DB()
	sqlDB.Close()

}

func EditCandidate(w http.ResponseWriter, r *http.Request) {

	db := GormDB()
	id, _ := strconv.Atoi(r.FormValue("id"))
	contact := models.Candidate{}
	Name := r.FormValue("Name")
	CreationDate := r.FormValue("CreationDate")
	DOB := r.FormValue("DOB")
	Address := r.FormValue("Address")
	Email := r.FormValue("Email")
	Phone := r.FormValue("Phone")
	Type := r.FormValue("Type")
	Comment := r.FormValue("Comment")

	db.Where("id", id).Find(&contact)
	contact.Name = Name
	contact.CreationDate = CreationDate
	contact.DOB = DOB
	contact.Address = Address
	contact.Email = Email
	contact.Phone = Phone
	contact.TypeCandidate = Type
	contact.Comments = Comment
	contact.Status = "Active"
	contact.UserID = "1"
	db.Save(&contact)

}

func DeleteCandidate(w http.ResponseWriter, r *http.Request) {

	db := GormDB()
	item := models.Candidate{}
	id, _ := strconv.Atoi(r.FormValue("id"))
	db.Where("id", id).Statement.Delete(&item)
	sqlDB, _ := db.DB()
	sqlDB.Close()
}
