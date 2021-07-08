function setFormMsg(element, type,msg){
    const message=element.querySelector(".form-msg")
    message.textContent=msg;
    
    msg.classList.remove("form-msg-err","form-msg-success");
    msg.classList.add( `form-msg-${type}`)
}


document.addEventListener("DOMContentLoaded", () => {
    const login = document.querySelector("#login");
    const register = document.querySelector("#register");
    
    document.querySelector("#linkCreateAccount").addEventListener('click',() => {
        login.classList.add("form-hidden");
        register.classList.remove("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", ()=> {
        
        login.classList.remove("form-hidden");
        register.classList.add("form-hidden");
    });

    //invalid credentials
    login.addEventListener("submit", ()=> {
        setFormMsg(login, "err", "Invalid username/password combination");
    });

    document.querySelector(".register").addEventListener('click',() => {
        login.classList.add("form-hidden");
        register.classList.remove("form-hidden");
        document.querySelector(".register").classList.add("active")
    });

    document.querySelector(".login").addEventListener("click", ()=> {
        
        login.classList.remove("form-hidden");
        register.classList.add("form-hidden");
        document.querySelector(".login").classList.add("active")
    });


})

