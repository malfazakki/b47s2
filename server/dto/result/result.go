package dto

type SuccessResult struct {
	Message string      `json:"status"`
	Data    interface{} `json:"data"`
}

type SuccessMidtransResult struct {
	Code int         `json:"code"`
	Data interface{} `json:"data"`
}

type ErrorResult struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
}
