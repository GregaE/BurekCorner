const generateHome = function (container) {
  container.append(
    $('<div/>')
        .addClass("banner")
        .append($("<img>")
          .attr({"src":"https://cdn.tasteatlas.com/images/dishes/1d0ca43e5dbe48e9b1b68121326fb02f.jpg", "alt":"Freshly made whole burek"})
        ))
      .append($('<div/>')
        .addClass("description")
        .append("Burek, delicious flaky multilayered pastry filled with meat, cheese or vegetables, is THE quintessential street food enjoyed across all Balkan countries.</br>The Burek Corner is the first establishment in Barcelona to bring you the Bosnian-style rolled burek. The burek pies are made daily on-site using locally sourced ingredients. We offer a variety of different flavours for all tastes!")
      )
}

export { generateHome }