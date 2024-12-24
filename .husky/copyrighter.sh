#!/bin/sh

IBM_COPYRIGHTS='/*********************************************************************
* © Copyright IBM Corp. 2024
*********************************************************************/'

IBM_COPYRIGHTS_YAML='######################################################################
# © Copyright IBM Corp. 2024
######################################################################'

new_files=$(git diff --cached --name-status | grep 'A')

for file in $new_files; do
  file_path=$(readlink -f $file)

  if [[ ! ($file_path == *"helm"*) ]];then
    if [ -f "$file" ]; then
      case "$file" in
        *.css|*.js|*.cs|*.java|*.sql|*.ts|*.tsx|*.c|*.cpp|*.h)
          if ! grep -Fq "$IBM_COPYRIGHTS" "$file"; then
            echo -e "$IBM_COPYRIGHTS\n$(cat "$file")" > "$file"
            git add "$file"
          fi
          ;;
        *.yml|*.yaml)
          if ! grep -Fq "$IBM_COPYRIGHTS_YAML" "$file"; then
            echo -e "$IBM_COPYRIGHTS_YAML\n$(cat "$file")" > "$file"
            git add "$file"
          fi
          ;;
        *)
          echo "Skipping non-relevant file: $file"
          ;;
      esac
    else
      echo "Skipping non-regular file: $file"
    fi
  else
    echo "Skipping excluded paths"
  fi
done