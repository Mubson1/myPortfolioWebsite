//function for showing the Nepali date
function showTime(){
    document.getElementById('date').innerHTML = Date();
    setTimeout(showTime,1000)   //changes or resets at 1000 milisecond
}
//displays date and time
showTime();

//function for switching between navigation images and links
function change(){
    var c1 = document.getElementById("11");
    var c2 = document.getElementById("13");
    // onclick of the button, changing the image to link
    if(c1.style.display=="block")
    {
        c1.style.display = "none";
        c2.style.display = "block";
    }
    // onclick of button, again changing the link to button
    else{
        c1.style.display = "block";
        c2.style.display = "none";
    }
}
//display the navigation image when webpage is loaded.
document.getElementById("11").style.display = "block";

// function for switching between background images at the homepage
function picchange(){
    var c3 = document.getElementById("30");
    var c4 = document.getElementById("31");
    var c5 = document.getElementById("32");
    // onclick of button, changes the main image of webpage to second image.
    if(c3.style.display=="block"){
        c4.style.display = "block";
        c5.style.display = "none";
        c3.style.display = "none";
    }
    // onclick of button, changes the second image of the webpage to third image.
    else if(c4.style.display=="block"){
        c3.style.display = "none";
        c5.style.display = "block";
        c4.style.display = "none";
    }
    // onclick of button, changes the third image of webpage to original image.
    else if(c5.style.display=="block"){
        c3.style.display = "block";
        c4.style.display = "none";
        c5.style.display = "none";
    }
}
//displaying the original image when the webpage is loaded.
document.getElementById("30").style.display = "block";
