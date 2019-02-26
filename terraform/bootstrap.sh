#!/bin/bash

terraform -version
terraform init
terraform apply -var-file="secrets.tfvars"