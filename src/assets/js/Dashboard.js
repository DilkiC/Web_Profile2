/**
 * @author Dilki Cooray <dilkicooray97@gmail.com>
 * since 10/7/2021
 */

var about=document.getElementById('about-page');
var skills=document.getElementById('skills-page');
var works=document.getElementById('works-page');
var contact=document.getElementById('contact-page');
var hobby=document.getElementById('hobby-page');
var port=document.getElementById('port-page');

about.style.display="block";
skills.style.display="none";
works.style.display="none";
contact.style.display="none";
hobby.style.display="none";
port.style.display="none";

var aboutBtn=document.getElementById('about-link');
aboutBtn.addEventListener('click',function () {
    about.style.display="block";
    skills.style.display="none";
    works.style.display="none";
    contact.style.display="none";
    hobby.style.display="none";
    port.style.display="none";



    aboutBtn.style.backgroundColor="#c7bebe";
    skillsBtn.style.backgroundColor="#b7cdee";
    worksBtn.style.backgroundColor="#b7cdee";
    contactBtn.style.backgroundColor="#b7cdee";
    hobbyBtn.style.backgroundColor="#b7cdee";
    portBtn.style.backgroundColor="#b7cdee";

});


/*aboutBtn.hover(function () {
document.getElementsByClassName('content-row1-col').style.backgroundColor="#c7bebe";
});*/


var picBtn=document.getElementById('pic-link');
picBtn.addEventListener('click',function () {
    about.style.display="block";
    skills.style.display="none";
    works.style.display="none";
    contact.style.display="none";
    hobby.style.display="none";
    port.style.display="none";

    aboutBtn.style.backgroundColor="#c7bebe";
    skillsBtn.style.backgroundColor="#b7cdee";
    worksBtn.style.backgroundColor="#b7cdee";
    contactBtn.style.backgroundColor="#b7cdee";
    hobbyBtn.style.backgroundColor="#b7cdee";
    portBtn.style.backgroundColor="#b7cdee";
});
/*picBtn.hover(function () {
    document.getElementsByClassName('content-row1-col').style.backgroundColor="#c7bebe";
});*/

var skillsBtn=document.getElementById('skills-link');
skillsBtn.addEventListener('click',function () {
    skills.style.display="block";
    about.style.display="none";
    works.style.display="none";
    contact.style.display="none";
    hobby.style.display="none";
    port.style.display="none";

    skillsBtn.style.backgroundColor="#c7bebe";
    aboutBtn.style.backgroundColor="#b7cdee";
    worksBtn.style.backgroundColor="#b7cdee";
    contactBtn.style.backgroundColor="#b7cdee";
    hobbyBtn.style.backgroundColor="#b7cdee";
    portBtn.style.backgroundColor="#b7cdee";
});
/*skillsBtn.hover(function () {
    document.getElementsByClassName('content-row1-col').style.backgroundColor="#c7bebe";
});*/

var worksBtn=document.getElementById('works-link');
worksBtn.addEventListener('click',function () {
    skills.style.display="none";
    about.style.display="none";
    works.style.display="block";
    contact.style.display="none";
    hobby.style.display="none";
    port.style.display="none";

    worksBtn.style.backgroundColor="#c7bebe";
    skillsBtn.style.backgroundColor="#b7cdee";
    aboutBtn.style.backgroundColor="#b7cdee";
    contactBtn.style.backgroundColor="#b7cdee";
    hobbyBtn.style.backgroundColor="#b7cdee";
    portBtn.style.backgroundColor="#b7cdee";
});
/*worksBtn.hover(function () {
    document.getElementsByClassName('content-row1-col').style.backgroundColor="#c7bebe";
});*/

var contactBtn=document.getElementById('contact-link');
contactBtn.addEventListener('click',function () {
    skills.style.display="none";
    about.style.display="none";
    works.style.display="none";
    contact.style.display="block";
    hobby.style.display="none";
    port.style.display="none";

    skillsBtn.style.backgroundColor="#b7cdee";
    aboutBtn.style.backgroundColor="#b7cdee";
    worksBtn.style.backgroundColor="#b7cdee";
    contactBtn.style.backgroundColor="#c7bebe";
    hobbyBtn.style.backgroundColor="#b7cdee";
    portBtn.style.backgroundColor="#b7cdee";


});

/*contactBtn.hover(function () {
    document.getElementsByClassName('content-row1-col').style.backgroundColor="#c7bebe";
});*/

var hobbyBtn=document.getElementById('hobby-link');
hobbyBtn.addEventListener('click',function () {
    skills.style.display="none";
    about.style.display="none";
    works.style.display="none";
    contact.style.display="none";
    hobby.style.display="block";
    port.style.display="none";

    skillsBtn.style.backgroundColor="#b7cdee";
    aboutBtn.style.backgroundColor="#b7cdee";
    worksBtn.style.backgroundColor="#b7cdee";
    contactBtn.style.backgroundColor="#b7cdee";
    hobbyBtn.style.backgroundColor="#c7bebe";
    portBtn.style.backgroundColor="#b7cdee";


});

var portBtn=document.getElementById('port-link');
portBtn.addEventListener('click',function () {
    skills.style.display="none";
    about.style.display="none";
    works.style.display="none";
    contact.style.display="none";
    hobby.style.display="none";
    port.style.display="block";

    skillsBtn.style.backgroundColor="#b7cdee";
    aboutBtn.style.backgroundColor="#b7cdee";
    worksBtn.style.backgroundColor="#b7cdee";
    contactBtn.style.backgroundColor="#b7cdee";
    hobbyBtn.style.backgroundColor="#b7cdee";
    portBtn.style.backgroundColor="#c7bebe";


});

/*var moreAssBtn=document.getElementById('more-ass');
var popup=document.getElementById('popup')
moreAssBtn.addEventListener('click',function () {
    popup.style.display="block";

});
var closeBtn=document.getElementById('closeBtn');
closeBtn.addEventListener('click',function () {
    popup.style.display="none";

});*/

// Get the modal
var modal = document.getElementById("myModal");
var modalPro = document.getElementById("myModalPro");

// Get the button that opens the modal
var btn = document.getElementById("more-ass");
var btnPro = document.getElementById("more-pro");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var spanPro = document.getElementsByClassName("closePro")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
btnPro.onclick = function() {
    modalPro.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
spanPro.onclick = function() {
    modalPro.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == modalPro) {
        modalPro.style.display = "none";
    }
}

