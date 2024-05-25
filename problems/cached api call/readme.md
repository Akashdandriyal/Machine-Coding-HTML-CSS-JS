# Cached API Call

Implement a function in JavaScript that caches the API response for the given amount of time. If a new call is made between that time, the response from the cache will be returned, else a fresh API call will be made.

## Example

const call = cachedApiCall(1500);

// first call

// an API call will be made and its response will be cached
call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));

//"making new api call"
/\*

{
"userId": 1,
"id": 1,
"title": "delectus aut autem",
"completed": false
}
\*/

// cached response will be returned

// it will be quick

setTimeout(() => {
call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
}, 700);
/\*

{
"userId": 1,
"id": 1,
"title": "delectus aut autem",
"completed": false
}
\*/

// a fresh API call is made

// as time for cached entry is expired

setTimeout(() => {
call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
}, 2000);

//"making new api call"

/_
{
"userId": 1,
"id": 1,
"title": "delectus aut autem",
"completed": false
}
_/
