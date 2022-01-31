#!/bin/bash
set -e

cd lambda
npm install
npm run compile
cd ..
ask deploy
