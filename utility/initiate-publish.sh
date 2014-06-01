#!/bin/bash

if [ "$TRAVIS_REPO_SLUG" == "mozilla/mobile-opportunity" ] && [ "$TRAVIS_BRANCH" == "master" ]; then

echo -e "Publishing website...\n"

  cp -R _harp $HOME/site-latest

  cd $HOME
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "travis-ci"
  git clone --quiet --branch=gh-pages https://${GH_TOKEN}@github.com/mozilla/mobile-opportunity gh-pages > /dev/null

  cd gh-pages
  git rm -rf .
  cp -Rf $HOME/site-latest .
  git add -f .
  git commit -m "Lastest harp compiled site on successful travis build $TRAVIS_BUILD_NUMBER auto-pushed to gh-pages"
  git push -fq origin gh-pages > /dev/null

  echo -e "Published website to gh-pages.\n"
  
fi
