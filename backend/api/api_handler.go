package api

import (
	"net/http"
	"strings"
)

func APIHandler(w http.ResponseWriter, r *http.Request) {
	r.URL.Path = strings.TrimPrefix(r.URL.Path, "/api/")
	r.URL.Path = strings.TrimPrefix(r.URL.Path, "/")

	if strings.HasPrefix(r.URL.Path, "user") {
		AddUser(w, r)
		return
	}

	if strings.HasPrefix(r.URL.Path, "get_user") {
		GetUser(w, r)
		return
	}

	if strings.HasPrefix(r.URL.Path, "change_pass") {
		ChangePassword(w, r)
		return
	}

	if strings.HasPrefix(r.URL.Path, "edit_user") {
		EditUser(w, r)
		return
	}
	if strings.HasPrefix(r.URL.Path, "delete_user") {
		DeleteUser(w, r)
		return
	}
	if strings.HasPrefix(r.URL.Path, "login") {
		Login(w, r)
		return
	}

	if strings.HasPrefix(r.URL.Path, "candidate") {
		AddCandidate(w, r)
		return
	}

	if strings.HasPrefix(r.URL.Path, "get_candidate") {
		GetCandidate(w, r)
		return
	}

	if strings.HasPrefix(r.URL.Path, "edit_candidate") {
		EditCandidate(w, r)
		return
	}

	if strings.HasPrefix(r.URL.Path, "delete_candidate") {
		DeleteCandidate(w, r)
		return
	}

}
