# goodreads-currently-reading

A Cloudflare Worker that scrape [Goodreads](https://www.goodreads.com/) for books a user is currently reading.

## Local Development

```
git clone git@github.com:tanerijun/goodreads-currently-reading.git
npm i
npm run dev
```

### Deploy

After setting up the project locally:

```
npm run deploy
```

Note that if you've never used wrangler before, you'll be prompted to login.

Or as an alternative:

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/tanerijun/goodreads-currently-reading)

### How To Use

The service has only 1 route: `/:id`. Simply replace `:id` with a valid Goodread's user id, and the Worker will return JSON data containing books the user is reading.

To get user's id, go to `goodreads.com`, access profile page, and the `id` should be there in the URL.

### Example

A request to `<deploy_url>/74091755` will return data that look like this:

```json
[
	{
		"title": "さくら荘のペットな彼女",
		"url": "https://goodreads.com/book/show/16088343"
	},
	{
		"title": "Thinking, Fast and Slow",
		"url": "https://goodreads.com/book/show/11468377-thinking-fast-and-slow"
	},
	{
		"title": "JavaScript Data Structures and Algorithms: An Introduction to Understanding and Implementing Core Data Structure and Algorithm Fundamentals",
		"url": "https://goodreads.com/book/show/41188653-javascript-data-structures-and-algorithms"
	},
	{
		"title": "Web Development with Go: Learn to Create Real World Web Applications using Go",
		"url": "https://goodreads.com/book/show/49009787-web-development-with-go"
	}
]
```
