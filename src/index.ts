import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

const BASE_URL = "https://goodreads.com";

const app = new Hono();

app.get("/", (c) => c.text("Hello Hono!"));

app.get("/:id", async (c) => {
	const id = c.req.param("id");

	const response = await fetch(`${BASE_URL}/review/list/${id}?shelf=currently-reading`);
	if (!response.ok) throw new HTTPException(response.status, { message: response.statusText });

	const res: { title: string; url: string }[] = [];

	await new HTMLRewriter()
		.on("td.field.title a", {
			element(el) {
				const title = el.getAttribute("title");
				const url = el.getAttribute("href");
				if (title && url) {
					res.push({ title, url: BASE_URL + url });
				}
			},
		})
		.transform(response)
		.arrayBuffer();

	return c.json(res);
});

export default app;
