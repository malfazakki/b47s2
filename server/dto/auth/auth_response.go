package authdto

type LoginResponse struct {
	ID       int    `json:"id"`
	Email    string `gorm:"type: varchar(255)" json:"email"`
	Username string `gorm:"type: varchar(255)" json:"username"`
	Token    string `gorm:"type: varchar(255)" json:"token"`
	Role     string `json:"role"`
}
