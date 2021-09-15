const generateMenu = function (container) {
  container.append(
    $('<header/>')
      .append($('<h2/>')
        .append("menu")
      ),
  )
}

export { generateMenu }