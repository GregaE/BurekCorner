const generateContact = function (container) {
  container.append(
    $('<div/>')
      .addClass("contact")
      .append($('<h2/>')
        .append("contact")
    ),
  )
}

export { generateContact }