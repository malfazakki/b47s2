package authdto

type LoginResponse struct {
	Email    string `gorm:"type: varchar(255)" json:"email"`
	Username string `gorm:"type: varchar(255)" json:"username"`
	Token    string `gorm:"type: varchar(255)" json:"token"`
	Role     string `json:"role"`
}
