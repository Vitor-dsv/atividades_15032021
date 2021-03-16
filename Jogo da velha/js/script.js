$(() => {
  let vez = 1;
  let vencedor = "";

  function quadradosIguais(a, b, c) {
    const quadradoA = $("#quadrado" + a);
    const quadradoB = $("#quadrado" + b);
    const quadradoC = $("#quadrado" + c);

    let bgA = quadradoA.css("background-image");
    let bgB = quadradoB.css("background-image");
    let bgC = quadradoC.css("background-image");

    if (bgA == bgB && bgB == bgC && bgA != "none" && bgA != "") {
      if (bgA.indexOf("1.jpg") >= 0) {
        vencedor = "X";
      } else {
        vencedor = "circle";
      }

      return true;
    } else {
      return false;
    }
  }

  function verificarFimDeJogo() {
    if (
      quadradosIguais(1, 2, 3) ||
      quadradosIguais(4, 5, 6) ||
      quadradosIguais(7, 8, 9) ||
      quadradosIguais(1, 4, 7) ||
      quadradosIguais(2, 5, 8) ||
      quadradosIguais(3, 6, 9) ||
      quadradosIguais(1, 5, 9) ||
      quadradosIguais(3, 5, 7)
    ) {
      $("#resultado").html(`<h1>The ${vencedor} player won! </h1>`);
      $(".quadrado").off("click");
    }
  }

  $(".quadrado").click(function () {
    let bg = $(this).css("background-image");

    if (bg == "none" || bg == "") {
      let fig = `url('../assets/${vez.toString()}.jpg')`;
      $(this).css("background", fig);

      vez = vez == 1 ? 2 : 1;
      verificarFimDeJogo();
    }
  });

  getAPIWik = () => {
    $.ajax({
      type: "get",
      url:
        "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Tic%20tac%20toe",
      data: "data",
      dataType: "jsonp",
      success: (data) => {
        if (data) {
          if (data.query?.search) {
            if (data.query.search?.length > 0) {
              const myPopup = $("#myPopup");
              const text = data.query.search[0].snippet.replace(
                /<[^>]*>?/gm,
                ""
              );

              myPopup.text(text);
              myPopup.toggleClass("show");
            }
          }
        }
      },
    });
  };
});
