document.addEventListener("DOMContentLoaded",()=>{["/bestellungen","/abonnements","/archiv"].includes(location.pathname)&&null==sessionStorage.getItem("auth")&&location.replace("/login")});