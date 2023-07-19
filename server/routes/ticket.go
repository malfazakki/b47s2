package routes

import (
	"landtick/handlers"
	"landtick/pkg/middleware"
	"landtick/pkg/mysql"
	"landtick/repositories"

	"github.com/labstack/echo/v4"
)

func TicketRoutes(e *echo.Group) {
	ticketRepository := repositories.RepositoryTicket(mysql.DB)
	h := handlers.HandlerTicket(ticketRepository)

	e.GET("/tickets", (h.FindTickets))
	e.GET("/user-tickets", middleware.Auth(h.UserTickets))
	e.GET("/ticket/:id", middleware.Auth(h.GetTicket))
	e.POST("/ticket", middleware.Auth(h.CreateTicket))
	e.GET("/ticket", (h.SearchTicket))
}
