#!/bin/bash
APP_NAME=touchTest
WWW_FOLDER=var/www/my_domain
sudo rm -r /$WWW_FOLDER/$APP_NAME/*
sudo cp *.html /$WWW_FOLDER/$APP_NAME
sudo cp *.js /$WWW_FOLDER/$APP_NAME
sudo cp *.json /$WWW_FOLDER/$APP_NAME
sudo cp *.png /$WWW_FOLDER/$APP_NAME
sudo cp *.svg /$WWW_FOLDER/$APP_NAME
