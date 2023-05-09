let messageBox = document.querySelector(".academy-home .message-box");
let yellowBarHeight = document.querySelector(".academy-home .footer-menu");
let containerHeight = document.querySelector(".academy-home").offsetHeight - yellowBarHeight.offsetHeight;
let homeMessageStatus = 0;

function homeMessageStyle() {

    if (messageBox.offsetHeight + 20 > containerHeight) {

   

        if (homeMessageStatus == 2) {
            messageBox.classList.add("d-none");
        } else if(homeMessageStatus == 1) {
            document.querySelectorAll(".academy-home .message-box p").forEach((Element) => {
                Element.classList.add("d-none");
            });
        }
        document.querySelector(".message-title").style.margin = "0";
        messageBox.style.bottom = yellowBarHeight.offsetHeight + "px";
        messageBox.style.top = "unset";
        messageBox.style.transform = "unset";

        
        homeMessageStatus++;
        homeMessageStyle();

    } 

}

homeMessageStyle();
