class User < ApplicationRecord
    has_secure_password
    has_many :purchases, dependent: :destroy

    validates :username, :email, :age, presence: true
    validates :username, uniqueness: true
    validates :age, numericality: {greater_than_or_equal_to: 18}
    validates :admin, inclusion: { in: [false], message: "Not allowed to make more admins (must not be true)." }, unless: :admin_user?

    def admin_user?
        self.username == "admin"
    end
end
