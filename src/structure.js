const buildStructure = function (container) {
  container.append(
    $('<header/>')
      .append($('<h1/>')
        .append("Burek Corner")
      ),
    $('<nav/>')
      .append($('<ul/>')
        .append(
          $('<li/>')
            .append('home')
            .attr('id', 'home'),
          $('<li/>')
            .append('menu')
            .attr('id', 'menu'),
          $('<li/>')
            .append('contact')
            .attr('id', 'contact'),
        )
      ),
    $('<main/>')
  )
}

export { buildStructure }
