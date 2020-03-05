#!/bin/bash

function get_ui_token() {
  local host=$1
  local username=$2
  local password=$3

  echo $(curl --header "Content-Type: application/x-www-form-urlencoded" \
              --request POST \
              --data "grant_type=password&username=$username&password=$password" \
              --user "ui:uiman" \
              ${host}/uat/sso/oauth/token | \
              jq '.access_token' --raw-output)
}

function get_api_token() {
  local host=$1
  local ui_token=$2

  local api_token="$(curl --header "Authorization: Bearer $ui_token" \
                          --request GET \
                          ${host}/uat/sso/me/apitoken | \
                          jq '.access_token' --raw-output)"

  if [[ "$api_token"="null" ]]
  then
    echo $(curl --header "Authorization: Bearer $ui_token" \
                --request POST \
                ${host}/uat/sso/me/apitoken | \
                jq '.access_token' --raw-output)
  else
    echo ${api_token}
  fi
}

