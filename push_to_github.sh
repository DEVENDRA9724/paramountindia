#!/bin/bash
# Script to push codebase to https://github.com/DEVENDRA9724/paramountindia

set -e

if [ -z "$1" ]; then
  echo "Usage: ./push_to_github.sh <YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>"
  echo "Or set GITHUB_TOKEN environment variable."
  exit 1
fi

TOKEN="$1"
REPO_URL="https://${TOKEN}@github.com/DEVENDRA9724/paramountindia.git"

echo "Configuring remote origin with credentials..."
git remote set-url origin "$REPO_URL"

echo "Pushing main branch to GitHub..."
git push -u origin main --force

echo "Successfully pushed to https://github.com/DEVENDRA9724/paramountindia"
