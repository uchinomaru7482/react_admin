package main

import (
	"react_admin/src/interfaces"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	e.GET("/user", interfaces.GetUsers)
	e.POST("/user", interfaces.CreateUsers)
	e.DELETE("/user/:id", interfaces.DeleteUsers)
	e.Logger.Fatal(e.Start(":1323"))
}
