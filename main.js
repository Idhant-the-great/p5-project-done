function preload(){}

function setup()
{
    canvas= createCanvas(640, 480);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,0,0,640, 480);
    canvas.center()
    circle(20, 20, 40);
    rect(40, 12, 560, 20);
    circle(620, 20, 40);
    rect(10, 40, 20, 400);
    circle(20, 460, 40);
    rect(40, 450, 560, 20);
    circle(620, 460, 40);
    rect(610, 40, 20, 400);
}
function  take_snapshot()
{
    save('student_name.png');
}