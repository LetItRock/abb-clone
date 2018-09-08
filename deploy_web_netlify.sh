#! /bin/bash

yarn build-web

# Deploy to netlify
netlifyctl deploy -P ./packages/web/build