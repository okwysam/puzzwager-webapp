#!/bin/bash

echo "Staging changes..."
git add .

echo "Committing changes..."
git commit -m "Added Telegram WebApp integration"

echo "Pushing to GitHub..."
git push origin main

