$(function () {
    console.log('ready');
    setupTable();
    $(document).on('click', '.list-group li', function (e) {
        e.preventDefault()

        $that = $(this);

        $('.list-group').find('li').removeClass('active');
        $that.addClass('active');
        //$('html,body').css('cursor','haircross');
        $('selector').css({'cursor': 'url(/cursors/customMoveCursor.cur), default'});
    });
    flag = 0
    $('td').on('mouseup', function () {
        flag = 0
    });

    $('td').on('mousedown', function () {
        loop();
        flag = 1
        $('td').on('mousemove', function () {
            if (flag == 1) {
                var setbox = $('.active').attr('id');
                //document.getElementById("tableBack").style.cursor="move";
                switch (setbox) {
                    case "lPark":
                        //$(this).text('P');
                        $(this).css('background-color', 'green');
                        break;
                    case "lUp":
                        $(this).text('↑');
                        $(this).css('background-color', '#555');
                        break;
                    case "lDown":
                        $(this).text('↓');
                        $(this).css('background-color', '#555');
                        break;
                    case "lVert":
                        $(this).text('↕');
                        $(this).css('background-color', '#555');
                        break;
                    case "lLeft":
                        $(this).text('←');
                        $(this).css('background-color', '#555');
                        break;
                    case "lRight":
                        $(this).text('→');
                        $(this).css('background-color', '#555');
                        break;
                    case "lHori":
                        $(this).text('↔');
                        $(this).css('background-color', '#555');
                        break;
                    case "lUnnav":
                        $(this).text('X');
                        $(this).css('background-color', '#000');
                        break;
                    default:
                        $(this).text(' ');
                }
            }
        });
    });
});

document.getElementById('getval').addEventListener('change', readURL, true);
function readURL() {
    console.log('hi')
    var file = document.getElementById("getval").files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        document.getElementById('tableBack').style.backgroundImage = "url(" + reader.result + ")";
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
    }
}

$(document).ready(function () {
    console.log("ready!");
});
function loop() {
    var color = 'rgb(' + ((255 * Math.random()) | 0) + ','
        + ((255 * Math.random()) | 0) + ','
        + ((255 * Math.random()) | 0) + ')';
    makeCursor(color);

    //setTimeout(loop, 1000);
}

function setupTable() {
    var tb = document.getElementById("tableBack");
    //var tbdy = document.createElement('tbody');
    for (var i = 0; i < 10; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 10; j++) {
            var td = document.createElement('td');
            //td.appendChild(document.createTextNode('\u0020'))
            tr.appendChild(td)
        }
        //tbdy.appendChild(tr);
        tb.appendChild(tr);
    }
    //tb.appendChild(tbdy);
}

function makeCursor(color) {

    // create off-screen canvas
    var cursor = document.createElement('canvas'),
        ctx = cursor.getContext('2d');

    cursor.width = 30;
    cursor.height = 30;
    var centerX = cursor.width / 2;
    var centerY = cursor.height / 2;
    var radius = 70;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    //document.getElementById("tableBack").style.cursor="move";
    // set image as cursor (modern browsers can take PNGs as cursor).
    document.getElementById("tableBack").style.cursor = 'url(' + cursor.toDataURL() + '), auto';
}