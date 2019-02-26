#!/bin/bash
if [ $BUILD_ENV == "test" ]; then
    npm run build:test
elif [ $BUILD_ENV == "staging" ]; then
    npm run build:staging
elif [ $BUILD_ENV == "production" ]; then
    npm run build:prod
else
    npm run build:dev
fi
