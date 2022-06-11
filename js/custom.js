let mobileBtn = document.querySelector('header nav .mobile-btn');
let mobileNav = document.querySelector('header .mobile-nav');
let bodyElement = document.getElementById('main-wrapper');
mobileBtn.addEventListener('click', showMenu);

function showMenu() {
    mobileNav.classList.toggle('showNav');
    let navWidth = mobileNav.offsetWidth;


    //Aley Khaled Solution
    // if (mobileNav.classList.contains('showNav')) {
    //     bodyElement.style.marginRight = navWidth + 'px';
    //     bodyElement.style.marginLeft = -navWidth + 'px';
    // } else {
    //     bodyElement.style.marginRight = 0 + 'px';
    //     bodyElement.style.marginLeft = 0 + 'px';
    // }


    //AbdElRahman Solution
    if (bodyElement.style.marginRight > (0 + 'px')) {
        bodyElement.style.marginRight = 0 + 'px';
        bodyElement.style.marginLeft = 0 + 'px';
    } else {
        bodyElement.style.marginRight = mobileNav.offsetWidth + 'px';
        bodyElement.style.marginLeft = -mobileNav.offsetWidth + 'px';
    }
}

var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	input.value = ""; //Reset text input field


	//START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	//END STRIKETHROUGH


	// START ADD DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
	//END ADD CLASS DELETE
}


function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

