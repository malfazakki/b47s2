package ticketdto

type TicketRequest struct {
	NameTrain            string `json:"name_train" form:"train_name" gorm:"type: varchar(255)"`
	TypeTrain            string `json:"type_train" form:"type" gorm:"type: varchar(255)"`
	StartDate            string `json:"start_date" gorm:"type: varchar(255)"`
	StartStationID       string `json:"start_station_id" gorm:"type: int"`
	StartTime            string `json:"start_time" gorm:"type: varchar(255)"`
	DestinationStationID string `json:"destination_station_id" gorm:"type: int"`
	ArrivalTime          string `json:"arival_time" gorm:"type: varchar(255)"`
	Price                string `json:"price" form:"price" gorm:"type: int"`
	Qty                  string `json:"qty" form:"qty" gorm:"type: int"`
	UserID               int    `json:"user_id" form:"user_id" gorm:"type: int"`
}
