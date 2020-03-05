#!/bin/bash

function save_logs_with_attachments() {
    local host=$1
    local project=$2
    local api_token=$3
    local launch_uuid=$4
    local item_uuid=$5
    local body_path=$6

    tmp=$(mktemp)
    jq ".[].launchUuid = \"$launch_uuid\" | .[].itemUuid = \"$item_uuid"\" "$body_path" > "$tmp" && mv "$tmp" "$body_path"

    echo $(curl --header "Content-Type: multipart/form-data" \
        --header "Authorization: Bearer $api_token" \
        --request POST \
        --form "json_request_part=@$body_path;type=application/json" \
        --form "file=@./file/file.txt" \
        --form "file=@./file/file.png" \
        ${host}/api/v1/${project}/log)
}