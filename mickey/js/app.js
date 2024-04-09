// Code borrow and modified from https://reconfusion.github.io/
// JavaScript to handle mouseover and mouseout events

var activeMethodPill = null;
var activeScenePill = null;
var activeScenePill_im_comp = null;
var activeMethodPill_im_comp = null;
var activeMethodPill_im = null;
var activeScenePill_im = null;
var activeVidID = 0;
var activeImID = 0;
var select = false;

function selectCompVideo(methodPill, scenePill) {
    
    if (activeMethodPill) {
        activeMethodPill.classList.remove("active");
    }
    if (activeScenePill) {
        activeScenePill.classList.remove("active");
    }

    activeMethodPill = methodPill;
    activeScenePill = scenePill;
    methodPill.classList.add("active");
    scenePill.classList.add("active");
    method = methodPill.getAttribute("data-value");
    pill = scenePill.getAttribute("data-value");

    // swap video to avoid flickering
    activeVidID = 1 - activeVidID;
    var video_active = document.getElementById("compVideo" + activeVidID);
    var video_hidden = document.getElementById("compVideo" + (1 - activeVidID));
    video_active.src = "resources/comparison/" + pill + "_" + method + ".mp4";
    video_active.load();
}


function selectCompImage(methodPill, scenePill) {

    if (activeMethodPill_im) {
        activeMethodPill_im.classList.remove("active");
    }
    if (activeScenePill_im) {
        activeScenePill_im.classList.remove("active");
    }

    activeMethodPill_im = methodPill;
    activeScenePill_im = scenePill;
    methodPill.classList.add("active");
    scenePill.classList.add("active");
    method = methodPill.getAttribute("data-value");
    pill = scenePill.getAttribute("data-value");

    // swap image to avoid flickering
    activeImID = 1 - activeImID;
    var img_active = document.getElementById("compIm" + activeImID);
    var img_hidden = document.getElementById("compIm" + (1 - activeImID));
    img_active.src = "resources/im_matches/" + pill + "_" + method + ".png";
    img_active.onload = function() {
        img_hidden.hidden = true;
        img_active.hidden = false;
    }
}

function selectCompImageExtremeView(methodPill, scenePill) {

    if (activeMethodPill_im_comp) {
        activeMethodPill_im_comp.classList.remove("active");
    }
    if (activeScenePill_im_comp) {
        activeScenePill_im_comp.classList.remove("active");
    }

    activeMethodPill_im_comp = methodPill;
    activeScenePill_im_comp = scenePill;
    methodPill.classList.add("active");
    scenePill.classList.add("active");
    method = methodPill.getAttribute("data-value");
    pill = scenePill.getAttribute("data-value");

    // swap image to avoid flickering
    activeImID = 1 - activeImID;
    var img_active = document.getElementById("compIm_comp" + activeImID);
    var img_hidden = document.getElementById("compIm_comp" + (1 - activeImID));
    img_active.src = "resources/comparison/" + pill + "_" + method + ".png";
    img_active.onload = function() {
        img_hidden.hidden = true;
        img_active.hidden = false;
    }
}

window.addEventListener("load", (e) => {    
    activeMethodPill = document.getElementById("default-method");
    activeScenePill = document.getElementById("default-scene");
    activeMethodPill_im = document.getElementById("default-method-im");
    activeScenePill_im = document.getElementById("default-scene-im");
    activeScenePill_im_comp = document.getElementById("default-scene-im-comp");
    activeMethodPill_im_comp = document.getElementById("default-method-im-comp");
 })
