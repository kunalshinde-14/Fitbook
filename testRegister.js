fetch(
  "http://localhost:3000/api/register",
  {
    method: "POST",
    headers: {
      "Content-Type":
        "application/json",
    },
    body: JSON.stringify({
      name: "Kunal",
      email:
        "kunal@gmail.com",
      password: "123456",
    }),
  }
)
  .then((res) =>
    res.json()
  )
  .then(console.log);