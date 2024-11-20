export function messageRoute(req, res) {
  const name = req?.query?.name || "world";

  res.json({
    message: `Hello, ${name}!`,
  });
}