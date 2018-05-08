M.AutoInit()
$(".dropdown-button").dropdown()
$(".dropdown-button2").dropdown()
$(document).ready(function ()
{
    $('.sidenav').sidenav()
    $('input#controlA, input#control').characterCounter()
})


var $num = $('#controlA')
var $pass = $('#passA')
var $enviar = $('#enviar')

$num.on("keypress paste", function (event)
{
    if (this.value.length >= this.maxLength)
        event.preventDefault()
})
$num.on("blur", function ()
{
    if ($num.val().length != 13)
        $num.removeClass('valid').addClass('invalid')
})
$num.on("keyup click ready", function (event)
{
    if ($num.val().length == 13)
        $num.removeClass('invalid').addClass('valid')
    else
        $num.removeClass('valid').removeClass('invalid')
    if ($num.hasClass('valid') && $pass.hasClass('valid'))
        $enviar.removeClass('disabled')
    else
        $enviar.addClass('disabled')
})
$pass.on("keyup click ready", function (event)
{
    if ($pass.val().length > 0)
        $pass.addClass('valid').removeClass('invalid')
    else
        $pass.removeClass('valid').removeClass('invalid')
    if ($num.hasClass('valid') && $pass.hasClass('valid'))
        $enviar.removeClass('disabled')
    else
        $enviar.addClass('disabled')
})
$pass.on("blur", function ()
{
    if ($pass.val().length <= 0)
        $pass.addClass('invalid').removeClass('valid')
})