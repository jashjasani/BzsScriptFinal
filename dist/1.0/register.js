document.addEventListener("DOMContentLoaded",function(e){fetch("https://bildzeitschrift.netlify.app/.netlify/functions/check",{method:"GET",headers:{Authorization:sessionStorage.getItem("auth")}}).then(e=>{200==e.status&&Swal.fire({position:"center",title:"You are already logged in.",showConfirmButton:!1,timer:1500})}),document.getElementById("email-form").addEventListener("submit",async function(e){e.preventDefault(),e.stopPropagation();var e=document.getElementById("register-btn"),t=(e.value="Einen Moment bitte...",e.style.backgroundColor="#82736b",document.getElementById("vorname").value),n=document.getElementById("Nachname").value,o=document.getElementById("email-3").value,i=document.getElementById("Passwort").value,s=document.getElementById("Passwort-best-tigen").value;if(i!=s)Swal.fire({position:"center",icon:"error",title:"Passwort und Bestätigungspasswort stimmen nicht überein",showConfirmButton:!1,timer:1500}),document.getElementById("Passwort-best-tigen").focus();else try{var a=await fetch("https://bildzeitschrift.netlify.app/.netlify/functions/register",{method:"POST",mode:"cors",cache:"no-cache",body:JSON.stringify({first_name:t,last_name:n,email:o,password:i})});200==a.status?(Swal.fire({position:"center",icon:"success",title:"Registration succesful",showConfirmButton:!1,timer:1500}),location.assign("/sign-up-confirmation")):422==a.status&&Swal.fire({position:"center",icon:"info",title:"An account with this email is already registered",showConfirmButton:!1,timer:1500})}catch(e){console.log(e.message)}e.value="Jetzt registrieren",e.style.backgroundColor="#bf8563"},!0)}),window.addEventListener("popstate",function(e){window.location.href!==e.currentTarget.location.href&&console.log("URL search parameters have changed:",window.location.search)});var Webflow=Webflow||[];Webflow.push(function(){console.log("Hello")});