const TARGET_DATE = "2025-09-21";
const TARGET_PIN = "2004";

const dateInput = document.getElementById("dateInput");
const btnCheck = document.getElementById("btnCheck");
const pinInput = document.getElementById("pinInput");
const btnPin = document.getElementById("btnPin");
const msg = document.getElementById("msg");
const protectedArea = document.getElementById("protected");
const panel = document.getElementById("panel");

// Function para mostrar el mensaje descrito
function showMessage(text, ok = false) {
  msg.textContent = text;
  msg.style.color = ok ? "#aaf" : "#f88";
}

// Function para desbloquear una vez sea el correcto
function unlock() {
  window.location.href = "floresamarillas.html";
}

btnCheck.addEventListener("click", () => {
  const val = dateInput.value; // Del formato de año
  if (!val) {
    showMessage("Ingresa una fecha primero.");
    return;
  }
  if (val === TARGET_DATE) {
    showMessage("Fecha correcta. Bienvenida, preciosa. ❤️", true);
    setTimeout(unlock, 700);
  } else {
    showMessage("Fecha incorrecta. Intenta nuevamente.");
  }
});

// Creación de PIN
btnPin.addEventListener("click", () => {
  const pin = String(pinInput.value).trim();
  if (!pin) {
    showMessage("Ingresa el PIN.");
    return;
  }
  if (pin === TARGET_PIN) {
    showMessage("PIN correcto. Bienvenida, preciosa. ❤️", true);
    setTimeout(unlock, 600);
  } else {
    showMessage("PIN incorrecto. Intenta otra vez.");
  }
});

// Para que se permita dar enter.
[dateInput, pinInput].forEach(input => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (input === dateInput) btnCheck.click();
      else btnPin.click();
    }
  });
});