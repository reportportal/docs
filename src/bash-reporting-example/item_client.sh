#!/bin/bash

function start_root_item(){
  local host=$1
  local project=$2
  local api_token=$3
  local launch_uuid=$4
  local body_path=$5

  tmp=$(mktemp)
  jq ".launchUuid = \"$launch_uuid\"" "$body_path" > "$tmp" && mv "$tmp" "$body_path"

  echo $(curl --header "Content-Type: application/json" \
              --header "Authorization: Bearer $api_token" \
              --request POST \
              --data @${body_path} \
              ${host}/api/v1/${project}/item | \
              jq '.id' --raw-output)
}

function start_child_item() {
  local host=$1
  local project=$2
  local api_token=$3
  local launch_uuid=$4
  local paren_item_uuid=$5
  local body_path=$6

  tmp=$(mktemp)
  jq ".launchUuid = \"$launch_uuid\"" "$body_path" > "$tmp" && mv "$tmp" "$body_path"

  echo $(curl --header "Content-Type: application/json" \
              --header "Authorization: Bearer $api_token" \
              --request POST \
              --data @${body_path} \
              ${host}/api/v1/${project}/item/${paren_item_uuid} | \
              jq '.id' --raw-output)
}

function finish_item() {
  local host=$1
  local project=$2
  local api_token=$3
  local item_uuid=$4
  local body_path=$5

  echo $(curl --header "Content-Type: application/json" \
              --header "Authorization: Bearer $api_token" \
              --request PUT \
              --data @${body_path} \
              ${host}/api/v1/${project}/item/${item_uuid})
}
