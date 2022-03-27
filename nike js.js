const navbar = document.querySelector(".navbar4");
const navbar2 = document.querySelector(".menu4");

window.onscroll = ()=>{
	this.scrollY > 230 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");;
	this.scrollY > 230 ? navbar2.classList.add("sticky2") : navbar2.classList.remove("sticky2");;
}






























