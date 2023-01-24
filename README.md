# Backend Session Storage Abstraction
For this starter code the goal was to store sessions in a database, as a way to store users, keep their ID through reconnects, and not require a username or password.


## How It's Made:

**Tech used:** Node and (NPM packages) connect-mongo, dotenv, express-session, express, mongoose, nodemon, uuid

I first began observing how sessions and cookies work in the browser and interect with the backend. From there I began storing them locally with session-files-store and uuid. After seeing consistent results by testing different browsers/http requests I moved the session storage to a remote solution by installing mongoose and connect-mongo, along with a model for future MVC structure.

## Optimizations

I optimized sessions storage moving them from a local storage to a mongoDB server for better abstraction and security. MVC structure considerations were made as this grows.

## Lessons Learned:

Breaking the big steps down into smaller more managable ones is the way to go when trying to get something with this many moving parts going, as small as it is. Organization is key and see bigger project utilizing more of the MVC structure.
