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






