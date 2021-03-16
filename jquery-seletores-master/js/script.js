$(() => {
    $("#txt").val('texto alterado com jquery');
    $(".email").val('texto alterado com jquery pela classe');

    $(".destaque ~ p").addClass("destaque");
    $('li:first').css("color", "green");
    $('li:first-child').css('color', 'green');
    $('li:last-child').css('color', 'green');

    $('p:gt(2)').css({
        'color': 'orange',
        'font-size': '12px'
    });

    $('a[title]').css('color', 'red');
    $('a:not([title])').hide();
    $('li:odd').css('background-color', '#ccc');
    // $('li:even').css('background-color', 'red');
    $('p:contains(afo 6)').css('color', 'yellow');
    $('p:has(i)').css('color', 'blue');
    $('p:empty').text('este paragrafo estava vazio Joazinho #goku');
    $('p:hidden').show();
});