export default async function handler(request: Request) {
  console.log(JSON.stringify(request));
  return new Response("Edge function is working!", {
    headers: { "content-type": "text/plain" },
  });
}