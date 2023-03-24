class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :admin, :bio, :age, :profile_pic_link

  has_many :purchases


end
