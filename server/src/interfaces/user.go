package interfaces

import (
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
)

type User struct {
	Id    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

type GetUsersResponse struct {
	Users     []User `json:"users"`
	TotalPage int    `json:"totalPage"`
}

const parPage = 2

var usersMaster = []User{
	{Id: 1, Name: "Tanaka", Email: "tanaka@example.com"},
	{Id: 2, Name: "Kana", Email: "kana@example.com"},
	{Id: 3, Name: "Murata", Email: "murata@example.com"},
	{Id: 4, Name: "Daiki", Email: "daiki@example.com"},
	{Id: 5, Name: "Jon", Email: "jon@example.com"},
}

func GetUsers(c echo.Context) error {
	page, err := strconv.Atoi(c.Param("page"))
	if err != nil {
		return err
	}

	totalPage := len(usersMaster) / parPage
	if len(usersMaster)%parPage >= 0 {
		totalPage += 1
	}
	startIndex := (page - 1) * parPage
	endIndex := page * parPage
	if page >= totalPage {
		endIndex = len(usersMaster)
	}
	users := usersMaster[startIndex:endIndex]

	res := GetUsersResponse{
		Users:     users,
		TotalPage: totalPage,
	}
	return c.JSON(http.StatusOK, res)
}

func CreateUsers(c echo.Context) error {
	user := User{}
	if err := c.Bind(&user); err != nil {
		return err
	}
	usersMaster = append(usersMaster, user)
	return c.NoContent(http.StatusNoContent)
}

func DeleteUsers(c echo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return err
	}

	for i, v := range usersMaster {
		if v.Id == id {
			usersMaster = append(usersMaster[:i], usersMaster[i+1:]...)
		}
	}
	return c.NoContent(http.StatusNoContent)
}
