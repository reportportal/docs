#!/bin/bash

function start_launch() {
  local host=$1
  local project=$2
  local api_token=$3
  local body_path=$4

 echo $(curl --header "Content-Type: application/json" \
             --header "Authorization: Bearer $api_token" \
             --request POST \
             --data @${body_path} \
             ${host}/api/v1/${project}/launch | \
             jq '.id' --raw-output)
}

function finish_launch(){
  local host=$1
  local project=$2
  local api_token=$3
  local launch_uuid=$4
  local body_path=$5

  echo $(curl --header "Content-Type: application/json" \
             --header "Authorization: Bearer $api_token" \
             --request PUT \
             --data @${body_path} \
             ${host}/api/v1/${project}/launch/${launch_uuid}/finish)
}