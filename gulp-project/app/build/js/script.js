const headerSelect = document.querySelectorAll(".header__search-location");



headerSelect.forEach(el => {
    el.addEventListener("click", () => {
        const selectWrapper = el.closest(".header__search-box");
        const headerDropDown = selectWrapper.querySelector(".header__search-list-wrapper");
        const headerSelectItem = selectWrapper.querySelectorAll(".header__search-item");
        const headerSelectOutPut = selectWrapper.querySelector(".header__search-box-output") 
         
        if(headerDropDown.style.height == "0px" || !headerDropDown.style.height ){
            headerDropDown.style.height = headerDropDown.scrollHeight + "px"
        }else{
            headerDropDown.style.height = 0
        }
        headerSelectItem.forEach(selectItem => {
           selectItem.addEventListener("click", () => {
            headerSelectOutPut.innerHTML = selectItem.innerText
           
           })
        })
        
        window.addEventListener("click", (e) => {
             if( e.target != el)(
                headerDropDown.style.height = 0
             )
        })
    })

})


const body = document.querySelector("body")
const menu = document.querySelector(".nav__menu")
const navList = document.querySelector(".nav__list")
let menuOpen = false




    menu.addEventListener("click", () => {
        if(!menuOpen){
            menu.classList.add("open");
            navList.classList.add("active");
            body.classList.add("active")
            menu.style = `z-index: 999;
                        position:fixed;
                        right: 5%; `
            menuOpen = true;
        } else {
            menu.classList.remove("open");
            navList.classList.remove("active")
            body.classList.remove("active")
            menu.style=`position: absolute;`
            menuOpen = false
        }
    
    })







//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGVhZGVyU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXJfX3NlYXJjaC1sb2NhdGlvblwiKTtcclxuXHJcblxyXG5cclxuaGVhZGVyU2VsZWN0LmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3RXcmFwcGVyID0gZWwuY2xvc2VzdChcIi5oZWFkZXJfX3NlYXJjaC1ib3hcIik7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyRHJvcERvd24gPSBzZWxlY3RXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19zZWFyY2gtbGlzdC13cmFwcGVyXCIpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlclNlbGVjdEl0ZW0gPSBzZWxlY3RXcmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyX19zZWFyY2gtaXRlbVwiKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJTZWxlY3RPdXRQdXQgPSBzZWxlY3RXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19zZWFyY2gtYm94LW91dHB1dFwiKSBcclxuICAgICAgICAgXHJcbiAgICAgICAgaWYoaGVhZGVyRHJvcERvd24uc3R5bGUuaGVpZ2h0ID09IFwiMHB4XCIgfHwgIWhlYWRlckRyb3BEb3duLnN0eWxlLmhlaWdodCApe1xyXG4gICAgICAgICAgICBoZWFkZXJEcm9wRG93bi5zdHlsZS5oZWlnaHQgPSBoZWFkZXJEcm9wRG93bi5zY3JvbGxIZWlnaHQgKyBcInB4XCJcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaGVhZGVyRHJvcERvd24uc3R5bGUuaGVpZ2h0ID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICBoZWFkZXJTZWxlY3RJdGVtLmZvckVhY2goc2VsZWN0SXRlbSA9PiB7XHJcbiAgICAgICAgICAgc2VsZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBoZWFkZXJTZWxlY3RPdXRQdXQuaW5uZXJIVE1MID0gc2VsZWN0SXRlbS5pbm5lclRleHRcclxuICAgICAgICAgICBcclxuICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgaWYoIGUudGFyZ2V0ICE9IGVsKShcclxuICAgICAgICAgICAgICAgIGhlYWRlckRyb3BEb3duLnN0eWxlLmhlaWdodCA9IDBcclxuICAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbn0pXHJcblxyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdl9fbWVudVwiKVxyXG5jb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZfX2xpc3RcIilcclxubGV0IG1lbnVPcGVuID0gZmFsc2VcclxuXHJcblxyXG5cclxuXHJcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoIW1lbnVPcGVuKXtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgICAgICAgICAgbmF2TGlzdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcclxuICAgICAgICAgICAgbWVudS5zdHlsZSA9IGB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNSU7IGBcclxuICAgICAgICAgICAgbWVudU9wZW4gPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICAgICAgICAgIG5hdkxpc3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxyXG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcclxuICAgICAgICAgICAgbWVudS5zdHlsZT1gcG9zaXRpb246IGFic29sdXRlO2BcclxuICAgICAgICAgICAgbWVudU9wZW4gPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sImZpbGUiOiJzY3JpcHQuanMifQ==
