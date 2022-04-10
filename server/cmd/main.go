package main

import (
	"net/http"
	"react_admin/src/interfaces"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowMethods: []string{http.MethodGet, http.MethodPut, http.MethodPost, http.MethodDelete},
	}))
	e.GET("/users/:page", interfaces.GetUsers)
	e.POST("/user", interfaces.CreateUsers)
	e.DELETE("/user/:id", interfaces.DeleteUsers)
	e.Logger.Fatal(e.Start(":1323"))
}
