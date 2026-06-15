function formDataToMessage(form, title) {
  const data = new FormData(form);
  const lines = [title, ""];
  for (const [key, value] of data.entries()) {
    if (String(value).trim()) lines.push(`${key}: ${value}`);
  }
  return lines.join("\n");
}

function setupInteractiveForm(formId, title) {
  const form = document.getElementById(formId);
  if (!form) return;
  const result = form.querySelector(".result");
  const copyButton = form.querySelector("[data-copy]");
  const mailButton = form.querySelector("[data-mail]");

  form.addEventListener("submit", event => {
    event.preventDefault();
    const message = formDataToMessage(form, title);
    result.textContent = message;
    result.classList.add("show");
  });

  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      const message = formDataToMessage(form, title);
      result.textContent = message;
      result.classList.add("show");
      try {
        await navigator.clipboard.writeText(message);
        copyButton.textContent = "Copiado";
        setTimeout(() => copyButton.textContent = "Copiar datos", 1600);
      } catch {
        copyButton.textContent = "Selecciona y copia";
      }
    });
  }

  if (mailButton) {
    mailButton.addEventListener("click", () => {
      const message = encodeURIComponent(formDataToMessage(form, title));
      window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${message}`;
    });
  }
}

setupInteractiveForm("signupForm", "Preinscripcion Gira Gigantes de Azapa Jujuy 2026");
setupInteractiveForm("activityForm", "Anotacion Actividad Recaudacion Gira Jujuy 2026");
setupInteractiveForm("sponsorForm", "Sponsor Interesado Gira Gigantes de Azapa Jujuy 2026");
setupInteractiveForm("docsForm", "Control Documentos Gira Gigantes de Azapa Jujuy 2026");
