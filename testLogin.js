fetch("http://localhost:3000/api/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "kunal@gmail.com",
    password: "123456",
  }),
})
  .then(async (res) => {
    console.log("Status:", res.status);

    const text = await res.text();
    console.log("Response:", text);
  })
  .catch(console.error);