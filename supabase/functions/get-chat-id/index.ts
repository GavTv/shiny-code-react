Deno.serve(async () => {
  const botToken = "8705985113:AAGA7hh23Rjzm05CbraERDXLfs0xcz6ZdPU";
  const res = await fetch(`https://api.telegram.org/bot${botToken}/getUpdates`);
  const data = await res.json();
  return new Response(JSON.stringify(data, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
});
