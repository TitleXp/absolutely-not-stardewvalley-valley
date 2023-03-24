# Stripe.api_key = Rails.application.credentials[:stripe][:secret]

Stripe.api_key = Rails.application.credentials.stripe[:stripe_secret_key]
# Stripe.api_key = Rails.application.credentials.stripe[:stripe_public_key]


# Stripe.api_secret_key = Rails.application.credentials.stripe[:stripe_secret_key]
# Stripe.api_public_key = Rails.application.credentials.stripe[:stripe_publishable_key]

# Rails.configuration.stripe = {
# :publishable_key => ENV['STRIPE_PUBLISHABLE_KEY'] ||=  Rails.application.secrets.stripe_publishable_key,
# :secret_key => ENV['STRIPE_SECRET_KEY'] ||= Rails.application.secrets.stripe_secret_key,
# }

# Stripe.api_key = Rails.configuration.stripe[:secret_key]


# Rails.configuration.stripe = {

# :publishable_key => ENV[‘PUBLISHABLE_KEY’],

# :secret_key => ENV[‘SECRET_KEY’]

# }

# Stripe.api_key = Rails.configuration.stripe[:secret_key]