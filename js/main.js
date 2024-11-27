document.querySelectorAll("[data-tel-input]").forEach(function (input) {
  input.addEventListener("input", function () {
    let value = input.value.replace(/\D/g, "");
    let formattedValue = "";
    let index = 0;

    if (value[0] === "7") {
      formattedValue += "+7";
      maxLength = 22;
      index = 1;
    } else if (value[0] === "8") {
      formattedValue += "8";
      maxLength = 21;
      index = 1;
    } else {
      input.value = formattedValue;
      return;
    }

    while (index < value.length && formattedValue.length < maxLength) {
      if (index === 1) formattedValue += " (";
      else if (index === 4) formattedValue += ") ";
      else if (index === 7 || index === 9) formattedValue += " - ";
      formattedValue += value[i];
      i++;
    }

    input.value = formattedValue;
  });
});

// мышь в хиро
const heroTitle = document.querySelector(".hero__title");
const apartmentsSection = document.querySelector(".apartments");

heroTitle.addEventListener("click", function () {
  window.scrollTo({
    top: apartmentsSection.offsetTop - 88,
    behavior: "smooth",
  });
});
