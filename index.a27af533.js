var e=document.querySelector(".burger__logo"),t=document.querySelector("body"),o=document.querySelectorAll(".burger__nav-LIst-Item"),c=document.querySelector("#button_submit");document.getElementById("contactForm").addEventListener("submit",function(e){e.preventDefault()}),e.addEventListener("click",function(){e.classList.toggle("active"),t.classList.toggle("overflow-hidden")}),o.forEach(function(o){o.addEventListener("click",function(){e.classList.remove("active"),t.classList.remove("overflow-hidden")})});var n=function(){var e=document.querySelector(".form__name"),t=document.querySelector(".form__textarea"),o=document.querySelector(".form__email");e.value="",t.value="",o.value=""};c&&c.addEventListener("click",function(){setTimeout(n,1e3)});
//# sourceMappingURL=index.a27af533.js.map
