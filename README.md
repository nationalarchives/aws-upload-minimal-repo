# AWS Support minimal repo

## How to use
```
npm install
npm run build
npm run serve
```

Go to http://localhost:8080/

There is a handler for fetch which intercepts the request and displays the method used on the page. The original fetch function isn't called so a network request is not made.

Select a file which is less than 5Mb and click submit.
You will see PUT on the page

Select a file which is more than 10Mb and click submit.
You will see POST on the page.
