# Configure the Heroku provider
provider "heroku" {
  email   = "${var.heroku_email}"
  api_key = "${var.heroku_api_key}"
}

# Create a test environment
resource "heroku_app" "test" {
    name   = "randi-frontend-test"
    region = "eu"

    config_vars {
        BUILD_ENV = "test"             
    }    

    buildpacks = [
        "heroku/nodejs"
    ]
}

# staging environment
resource "heroku_app" "staging" {
    name   = "randi-frontend-staging"
    region = "eu"

    config_vars {
        BUILD_ENV = "staging"             
    }

    buildpacks = [
        "heroku/nodejs"
    ]
}

#production environment
resource "heroku_app" "prod" {
    name   = "randi-frontend-prod"
    region = "eu"

    config_vars {
        BUILD_ENV = "production"             
    }

    buildpacks = [
        "heroku/nodejs"
    ]
}
