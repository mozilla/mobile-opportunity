Mobile Opportunity Project
============

This Github repo is used to track assets and tasks related to the [mobile opportunity research project](https://mozilla.github.io/mobile-opportunity/).

The website content is published by Github Pages, after processing by the Harp static site generator. 
If you want to edit the copy, we recommend using prose.io to submit changes.  Changes made to the master
branch will get picked up by Travis CI and automatically published to Github Pages.

To run the dev server for local editing, do:
  
  install the free harpjs static site builder (http://harpjs.com/):
  ```
  npm install -g harp
  ```
  
  run the server in development mode:
  ```
  NODE_ENV=development harp server _website
  ```

(this mode disables loading of remote resources, so it can be run on a plane.  There won't be tabzilla, disqus comments, or google fonts)