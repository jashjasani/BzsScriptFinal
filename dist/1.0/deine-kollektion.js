document.addEventListener("DOMContentLoaded",async()=>{var e=new URLSearchParams(window.location.search);const d=document.querySelector(".single-collection-wrapper");document.querySelector(".login-head").innerText=e.get("name"),e.get("name")&&fetch("https://bildzeitschrift.netlify.app/.netlify/functions/collection?name="+e.get("name"),{method:"GET",headers:{Authorization:sessionStorage.getItem("auth")}}).then(e=>e.json()).then(t=>{t=t.collection;var r="https://res.cloudinary.com/wdy-bzs/image/upload/images/";let a=d.innerHTML="";for(let e=0;e<t.items.length;e++){var i=t.items[e].replaceAll("-","_").replaceAll("(","").replaceAll(")","");a+=`<a href="https://www.bildzeitschrift.com/magazine?productId=${t.items[e]}" class="item-link w-inline-block" randid=${e} name="${t.items[e]}">
                <img src="${r+i}"  style="height: -webkit-fill-available; width: -webkit-fill-available;" loading="lazy" sizes="(max-width: 479px) 86vw, (max-width: 767px) 40vw, (max-width: 991px) 27vw, 21vw" alt="" srcset="${r+i} 500w, ${r+i} 800w,${r+i} 1080w, ${r+i} 1536w," class="single-collection-img"></a>`}document.querySelector(".produvt-img-wrapper.w-inline-block").remove(),d.insertAdjacentHTML("beforeend",a)});document.querySelector(".presentation-mode").addEventListener("click",function(e){e.preventDefault();let t="";for(i of document.querySelectorAll(".single-collection-img"))t+=`<section style="height: 100vh;background: black; width:100%" data-background-color="black">
                        <img style="margin-top:0;" src="${i.src}">
                   </section>`;e=`
                            <div class="reveal">
                                <div class="slides" style="background: black; width:100%">
                                    ${t}
                                </div>
                            </div>
                            `;document.body.insertAdjacentHTML("afterbegin",e);let r=new Reveal({touch:!0,embedded:!1,help:!0,width:"100%",keyboard:{27:()=>{r.destroy(),document.querySelector(".reveal").remove()}}});r.configure({touch:!0,help:!0,controls:!0}),r.initialize().then()});e=document.querySelector("#Filter-Kollektionen");e.value="",e.addEventListener("change",()=>{var e=Array.from(d.children),t=event.target.value,r=e,a=d;switch(t){case"":a.innerHTML="";for(var i of r)a.appendChild(i);break;case"First":r.sort((e,t)=>e.getAttribute("name").localeCompare(t.getAttribute("name"))),a.innerHTML="";for(var n of r)a.appendChild(n);break;case"Second":r.sort((e,t)=>t.getAttribute("name").localeCompare(e.getAttribute("name"))),a.innerHTML="";for(var l of r)a.appendChild(l);break;case"Third":r.sort((e,t)=>e.getAttribute("randid").localeCompare(t.getAttribute("randid"))),a.innerHTML="";for(var o of r)a.appendChild(o);break;case"Fourth":r.sort((e,t)=>t.getAttribute("randid").localeCompare(e.getAttribute("randid"))),a.innerHTML="";for(var c of r)a.appendChild(c)}})});