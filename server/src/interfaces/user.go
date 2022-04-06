package interfaces

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
)

type User struct {
	Id    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

var users = []User{
	{Id: 1, Name: "Tanaka", Email: "tanaka@example.com"},
	{Id: 2, Name: "Kana", Email: "kana@example.com"},
	{Id: 3, Name: "Murata", Email: "murata@example.com"},
	{Id: 4, Name: "Daiki", Email: "daiki@example.com"},
	{Id: 5, Name: "Jon", Email: "jon@example.com"},
}

func GetUsers(c echo.Context) error {
	return c.JSON(http.StatusOK, users)
}

func CreateUsers(c echo.Context) error {
	user := User{}
	if err := c.Bind(&user); err != nil {
		return err
	}
	users = append(users, user)
	return c.NoContent(http.StatusNoContent)
}

func DeleteUsers(c echo.Context) error {
	fmt.Println("delete users")
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return err
	}
	fmt.Println(id)

	for i, v := range users {
		if v.Id == id {
			users = append(users[:i], users[i+1:]...)
		}
	}
	return c.NoContent(http.StatusNoContent)
}
