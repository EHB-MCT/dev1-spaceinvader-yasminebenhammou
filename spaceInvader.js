"use strict";


drawSpaceinvader();

function drawSpaceinvader() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");
    let colorBlocks = "#66FF00";

    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fillStyle = "black";
    context.fill();


    context.beginPath();
    context.rect(75, 75, 50, 50);
    context.fillStyle = "black";
    context.fill();


    context.beginPath();
    context.rect(125, 75, 50, 50);
    context.fillStyle = colorBlocks
    context.fill();

    context.beginPath();
    context.rect(175, 75, 50, 50);
    context.fillStyle = colorBlocks
    context.fill();

    context.beginPath();
    context.rect(225, 75, 50, 50);
    context.fillStyle = colorBlocks
    context.fill();

    context.beginPath();
    context.rect(275, 75, 50, 50);
    context.fillStyle = "black"
    context.fill();

    //---------

    context.beginPath();
    context.rect(75, 125, 50, 50);
    context.fillStyle = colorBlocks
    context.fill();


    context.beginPath();
    context.rect(125, 125, 50, 50);
    context.fillStyle = colorBlocks
    context.fill();

    context.beginPath();
    context.rect(175, 125, 50, 50);
    context.fillStyle = colorBlocks
    context.fill();

    context.beginPath();
    context.rect(225, 125, 50, 50);
    context.fillStyle = colorBlocks
    context.fill();

    context.beginPath();
    context.rect(275, 125, 50, 50);
    context.fillStyle = colorBlocks
    context.fill();

    //---------

    context.beginPath();
    context.rect(75, 175, 50, 50);
    context.fillStyle = colorBlocks
    context.fill();


    context.beginPath();
    context.rect(125, 175, 50, 50);
    context.fillStyle = "black"
    context.fill();

    context.beginPath();
    context.rect(175, 175, 50, 50);
    context.fillStyle = colorBlocks
    context.fill();

    context.beginPath();
    context.rect(225, 175, 50, 50);
    context.fillStyle = "black"
    context.fill();

    context.beginPath();
    context.rect(275, 175, 50, 50);
    context.fillStyle = colorBlocks
    context.fill();

    //----------


    context.beginPath();
    context.rect(125, 225, 50, 50);
    context.fillStyle = colorBlocks
    context.fill();

    context.beginPath();
    context.rect(225, 225, 50, 50);
    context.fillStyle = colorBlocks
    context.fill();

    context.beginPath();
    context.rect(225, 275, 50, 50);
    context.fillStyle = colorBlocks
    context.fill();

    context.beginPath();
    context.rect(125, 275, 50, 50);
    context.fillStyle = colorBlocks
    context.fill();

    context.beginPath();
    context.rect(175, 275, 50, 50);
    context.fillStyle = colorBlocks
    context.fill();








}