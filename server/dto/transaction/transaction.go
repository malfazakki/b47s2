package transactiondto

import "landtick/models"

type TransactionRequest struct {
	ID       int    `json:"id" gorm:"primary_key"`
	TicketID int    `json:"ticket_id" form:"ticket_id" gorm:"type: int" validate:"required"`
	Status   string `json:"status" form:"status" gorm:"type: varchar(255)" validate:"required"`
}

type TransactionRequestMidtrans struct {
	ID       string `json:"id" gorm:"primary_key"`
	FullName string `json:"full_name" form:"full_name"`
	Email    string `json:"email" form:"email" `
	Price    int    `json:"price" form:"price"`
}

type TransactionResponse struct {
	ID       int                       `json:"id"`
	UserID   int                       `json:"user_id"`
	User     models.UserTicketResponse `json:"user"`
	TicketID int                       `json:"ticket_id"`
	Ticket   models.TicketResponse     `json:"ticket"`
	Status   string                    `json:"status"`
}
