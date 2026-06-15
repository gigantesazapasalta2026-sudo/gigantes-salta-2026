async function sendToGigantes(payload) {
  const endpoint = window.GIGANTES_APPS_SCRIPT_URL || "";
  if (!endpoint || endpoint.includes("PEGAR_URL")) {
    return { ok: false, configured: false };
  }

  const body = new URLSearchParams();
  Object.entries(payload).forEach(([key, value]) => {
    body.append(key, value == null ? "" : String(value));
  });

  await fetch(endpoint, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    body
  });

  return { ok: true, configured: true };
}
