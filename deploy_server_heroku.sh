#!/bin/bash

yarn build-server

# BEFORE RUNNING THIS COMMANDS YOU SHOULD BE LOGGED IN TO HEROKU AND CONTAINER
# heroku login
# heroku container:login

# Deploys docker server image to heroku
heroku container:push --app=abb-letitrock web
heroku container:release --app=abb-letitrock web
