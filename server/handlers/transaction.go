package handlers

import (
	dto "landtick/dto/result"
	transactiondto "landtick/dto/transaction"
	"landtick/models"
	"landtick/repositories"
	"net/http"
	"strconv"

	"github.com/go-playground/validator"
	"github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
)

type handlerTransaction struct {
	TransactionRepository repositories.TransactionRepository
}

func HandlerTransaction(TransactionRepository repositories.TransactionRepository) *handlerTransaction {
	return &handlerTransaction{TransactionRepository}
}

func (h *handlerTransaction) FindTransactions(c echo.Context) error {
	transactions, err := h.TransactionRepository.FindTransactions()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Message: "success", Data: transactions})
}

func (h *handlerTransaction) UserTransactions(c echo.Context) error {
	userID := int(c.Get("userLogin").(jwt.MapClaims)["id"].(float64))

	transactions, err := h.TransactionRepository.UserTransactions(userID)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Message: "success", Data: transactions})
}

func (h *handlerTransaction) GetTransaction(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	ticket, err := h.TransactionRepository.GetTransaction(int(id))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Message: "success", Data: convertResponseTransaction(ticket)})
}

func convertResponseTransaction(u models.Transaction) transactiondto.TransactionResponse {
	return transactiondto.TransactionResponse{
		UserID:   u.UserID,
		User:     u.User,
		TicketID: u.TicketID,
		Ticket:   u.Ticket,
		Status:   u.Status,
	}
}

func (h *handlerTransaction) CreateTransaction(c echo.Context) error {
	request := new(transactiondto.TransactionRequest)

	err := c.Bind(request)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	validation := validator.New()
	error := validation.Struct(request)
	if error != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	userId := c.Get("userLogin").(jwt.MapClaims)["id"].(float64)

	transaction := models.Transaction{
		UserID:   int(userId),
		TicketID: request.TicketID,
		Status:   request.Status,
	}

	transaction, err = h.TransactionRepository.CreateTransaction(transaction)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}
	transaction, _ = h.TransactionRepository.GetTransaction(transaction.ID)

	return c.JSON(http.StatusOK, dto.SuccessResult{Message: "success", Data: convertResponseTransaction(transaction)})
}

func (h *handlerTransaction) DeleteTransaction(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	transaction, err := h.TransactionRepository.GetTransaction(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	data, err := h.TransactionRepository.DeleteTransaction(transaction, id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Message: "success", Data: data})
}
