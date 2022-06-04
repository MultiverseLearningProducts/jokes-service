# jokes-service
A Jokes API with jokes searchable via query parameters

Example call:
```sh
$ curl -H "Accept: application/json" "http://localhost:4000/search?term=hipster&limit=2"
```

Example response
```json
{
  "results": [
    {
      "id": "GlGBIY0wAAd",
      "joke": "How much does a hipster weigh? An instagram."
    },
    {
      "id": "xc21Lmbxcib",
      "joke": "How did the hipster burn the roof of his mouth? He ate the pizza before it was cool."
    }
  ],
  "search_term": "hipster",
  "total_jokes": 2,
}
```