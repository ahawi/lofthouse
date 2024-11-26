document.querySelectorAll("[data-tel-input]").forEach(function (input) {
  input.addEventListener("input", function (event) {
    let value = input.value.replace(/\D/g, ""); // Убираем все нецифровые символы
    let formattedValue = "";
    let i = 0;

    if (value[0] === "7") {
      formattedValue += "+7";
      maxLength = 22;
      i = 1;
    } else if (value[0] === "8") {
      formattedValue += "8";
      maxLength = 21;
      i = 1;
    } else {
      input.value = formattedValue;
      return;
    }

    // Форматируем номер, ограничивая ввод
    if (i < value.length && formattedValue.length < maxLength) {
      formattedValue += " (" + value[i++];
    }
    if (i < value.length && formattedValue.length < maxLength) {
      formattedValue += value[i++];
    }
    if (i < value.length && formattedValue.length < maxLength) {
      formattedValue += value[i++];
    }
    if (i < value.length && formattedValue.length < maxLength) {
      formattedValue += ") " + value[i++];
    }
    if (i < value.length && formattedValue.length < maxLength) {
      formattedValue += value[i++];
    }
    if (i < value.length && formattedValue.length < maxLength) {
      formattedValue += value[i++];
    }
    if (i < value.length && formattedValue.length < maxLength) {
      formattedValue += " - " + value[i++];
    }
    if (i < value.length && formattedValue.length < maxLength) {
      formattedValue += value[i++];
    }
    if (i < value.length && formattedValue.length < maxLength) {
      formattedValue += " - " + value[i++];
    }
    if (i < value.length && formattedValue.length < maxLength) {
      formattedValue += value[i++];
    }

    if (i < value.length && formattedValue.length < maxLength) {
      formattedValue += value[i++];
    }

    // Обновляем значение поля ввода
    input.value = formattedValue;
  });
});
