document.addEventListener("DOMContentLoaded", function () {
  var openButtons = document.querySelectorAll("[data-guide-dialog]");
  var closeButtons = document.querySelectorAll("[data-guide-close]");

  function closeDialog(dialog) {
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
  }

  openButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var dialog = document.getElementById(button.getAttribute("data-guide-dialog"));
      if (!dialog) return;

      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
    });
  });

  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var dialog = button.closest("dialog");
      if (dialog) closeDialog(dialog);
    });
  });

  document.querySelectorAll(".study-guide-dialog").forEach(function (dialog) {
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) closeDialog(dialog);
    });
  });
});
