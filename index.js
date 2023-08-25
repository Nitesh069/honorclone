var g=gsap.timeline();
g
    .from("#s01,#s02,#s03,#s04,#s05",{
        opacity:0,
        y:20,
        stagger:0.5,
        duration:1 
    })
    .to(".landing1",{
        y:"-100%",
        ease:"Power4.easeOut",
        duration:1

    })


var g2=gsap.timeline();
g2
    .from(".c25,.c23,.c24,.c27,#a22",{
        opacity:0,
        // stagger:"",
        duration:1,
        y:-50
    }    )
  
    gsap.from("#lord2",{
        opacity:0,
        y:150,
        duration:1,
        // delay:2,
        scrollTrigger:{
            trigger:"#lord2",
            scroller:"body",
            marker:true,
            scrub:5,
            start:"top 70%",
            end:"top 90%"
        }
    })
    gsap.from("#lord3",{
        opacity:0,
        y:150,
        duration:1,
        // delay:2,
        scrollTrigger:{
            trigger:"#lord3",
            scroller:"body",
            marker:true,
            scrub:5,
            start:"top 70%",
            end:"top 90%"
        }
    })
    gsap.from("#lord4",{
        opacity:0,
        y:150,
        duration:1,
        // delay:2,
        scrollTrigger:{
            trigger:"#lord4",
            scroller:"body",
            marker:true,
            scrub:5,
            start:"top 70%",
            end:"top 90%"
        }
    })
    gsap.from("#a41",{
        opacity:0,
        y:100,
        duration:1,
        // delay:2,
        scrollTrigger:{
            trigger:"#a41",
            scroller:"body",
            marker:true,
            scrub:5,
            start:"top 90%",
            end:"top 90%"
        }
    })
    gsap.from("#a42",{
        opacity:0,
        y:100,
        duration:1,
        // delay:2,
        scrollTrigger:{
            trigger:"#a42",
            scroller:"body",
            marker:true,
            scrub:5,
            start:"top 90%",
            end:"top 90%"
        }
    })
    gsap.from("#a43",{
        opacity:0,
        y:100,
        duration:1,
        // delay:2,
        scrollTrigger:{
            trigger:"#a43",
            scroller:"body",
            marker:true,
            scrub:5,
            start:"top 90%",
            end:"top 90%"
        }
    })
    gsap.from("#a44",{
        opacity:0,
        y:100,
        duration:1,
        // delay:2,
        scrollTrigger:{
            trigger:"#a44",
            scroller:"body",
            marker:true,
            scrub:5,
            start:"top 90%",
            end:"top 90%"
        }
    })
    gsap.from("#a45",{
        opacity:0,
        y:100,
        duration:1,
        // delay:2,
        scrollTrigger:{
            trigger:"#a45",
            scroller:"body",
            marker:true,
            scrub:5,
            start:"top 90%",
            end:"top 90%"
        }
    })
    gsap.from("#a46",{
        opacity:0,
        y:100,
        duration:1,
        // delay:2,
        scrollTrigger:{
            trigger:"#a46",
            scroller:"body",
            marker:true,
            scrub:5,
            start:"top 90%",
            end:"top 90%"
        }
    })
    gsap.from("#a47",{
        opacity:0,
        y:100,
        duration:1,
        // delay:2,
        scrollTrigger:{
            trigger:"#a47",
            scroller:"body",
            marker:true,
            scrub:5,
            start:"top 90%",
            end:"top 90%"
        }
    })
    gsap.from("#a48",{
        opacity:0,
        y:100,
        duration:1,
        // delay:2,
        scrollTrigger:{
            trigger:"#a48",
            scroller:"body",
            marker:true,
            scrub:5,
            start:"top 90%",
            end:"top 90%"
        }
    })
    gsap.from("#a49",{
        opacity:0,
        y:100,
        duration:1,
        // delay:2,
        scrollTrigger:{
            trigger:"#a49",
            scroller:"body",
            marker:true,
            scrub:5,
            start:"top 90%",
            end:"top 90%"
        }
    })
    gsap.from("#a50",{
        opacity:0,
        y:100,
        duration:1,
        // delay:2,
        scrollTrigger:{
            trigger:"#a50",
            scroller:"body",
            marker:true,
            scrub:5,
            start:"top 90%",
            end:"top 90%"
        }
    })
    gsap.from("#a64",{
        opacity:0,
        y:100,
        duration:1,
        // delay:2,
        scrollTrigger:{
            trigger:"#a64",
            scroller:"body",
            marker:true,
            scrub:5,
            start:"top 50%",
            end:"top 90%"
        }
    })
    gsap.from("#a68",{
        opacity:0,
        x:-100,
        duration:1,
        // delay:2,
        scrollTrigger:{
            trigger:"#a68",
            scroller:"body",
            marker:true,
            scrub:5,
            start:"top 90%",
            end:"top 90%"
        }
    })
        gsap.from("#a70",{
            opacity:0,
            y:100,
            duration:1,
            // delay:2,
            scrollTrigger:{
                trigger:"#a70",
                scroller:"body",
                marker:true,
                scrub:5,
                start:"top 50%",
                end:"top 90%"
            }
        })
    gsap.from("#a69",{
        opacity:0,
        x:100,
        duration:1,
        // delay:2,
        scrollTrigger:{
            trigger:"#a69",
            scroller:"body",
            marker:true,
            scrub:5,
            start:"top 90%",
            end:"top 90%"
        }
    })
    gsap.from("#a74",{
        opacity:0,
        y:100,
        duration:1,
        // delay:2,
        scrollTrigger:{
            trigger:"#a74",
            scroller:"body",
            marker:true,
            scrub:5,
            start:"top 50%",
            end:"top 90%"
        }
    })
    

    var a2=document.querySelector(".c14");
    var a3=document.querySelector(".landing2");
    var a4=document.querySelector(".content1")
    var a5=document.querySelector(".c02")
    a2.addEventListener("click",function(){
        a3.style.display="block";
        a3.style.transition="ease-in";
        a4.style.display="none";

        gsap.from(".landing2",{
            opacity:0,
            x:-100,
            duration:.5
        })
    })
    a5.addEventListener("click",function(){
        a3.style.display="none";
        a4.style.display="block";
        gsap.from(".content1",{
            opacity:0,
            x:-100,
            duration:.5
        })
    })



     var divs=document.querySelector(".content,#a20,#a35,#a40");
    var content=document.querySelector(".content");
    var boddy=document.querySelector("body");
    var a20=document.querySelector("#a20");
    var lord3=document.querySelector("#lord3");
    var a35=document.querySelector("#a35");
    var a40=document.querySelector("#a40");

    // var font=document.querySelector("#a11, .c12 a,#lord,#lord2,#lord3,#lord4,#a40");
    var a11=document.querySelector("#a11");
    var c1212=document.querySelector(".c1212");
    var c1213=document.querySelector(".c1213");
    var c1214=document.querySelector(".c1214");
    var c1215=document.querySelector(".c1215");
    var c1216=document.querySelector(".c1216");
    var c1217=document.querySelector(".c1217");
    var c1218=document.querySelector(".c1218");
    var c1219=document.querySelector(".c1219");
    var a1212=document.querySelector(".a1212");
    var a1213=document.querySelector(".a1213");
    var a1214=document.querySelector(".a1214");
    var a1215=document.querySelector(".a1215");
    var a1216=document.querySelector(".a1216");
    var a1217=document.querySelector(".a1217");
    var a1218=document.querySelector(".a1218");
    var a1219=document.querySelector(".a1219");
    var c1220=document.querySelector(".c1220");
    var lord=document.querySelector("#lord");
    var lord2=document.querySelector("#lord2");
    var lord4=document.querySelector("#lord4");
    var a40=document.querySelector("#a40");
    var a47=document.querySelector("#a47");
    var a49=document.querySelector("#a49");
    var c14=document.querySelector(".c14");
    var landing2=document.querySelector(".landing2");
   

    var theme=document.querySelector("#theme");
    theme.style.backgroundColor="black";
    var theme2=document.querySelector("#theme2");
    theme2.style.backgroundColor="black";

    var flag=0;
    theme.addEventListener("click",function(){
         if(flag==0){
        content.style.backgroundColor="black";
        boddy.style.backgroundColor="black";
        a20.style.backgroundColor="black";
        lord3.style.backgroundColor="black";
        a35.style.backgroundColor="black";
        a40.style.backgroundColor="black";
        
        theme.style.backgroundColor="white";
        a11.style.color="white";
        c1212.style.color="white";
        c1213.style.color="white";
        c1214.style.color="white";
        c1215.style.color="white";
        c1216.style.color="white";
        c1217.style.color="white";
        c1218.style.color="white";
        c1219.style.color="white";
        
        c1220.style.color="white";
        lord.style.color="white";
        lord2.style.color="white";
        lord3.style.color="white";
        lord4.style.color="white";
        a40.style.color="white";
        a47.style.color="white";
        a49.style.color="white";
        flag=1;
     }
     else{
        content.style.backgroundColor="white";
        boddy.style.backgroundColor="white";
        a20.style.backgroundColor="white";
        lord3.style.backgroundColor="white";
        a35.style.backgroundColor="white";
        a40.style.backgroundColor="white";

        theme.style.backgroundColor="black";
        a11.style.color="black";
        c1212.style.color="black";
        c1213.style.color="black";
        c1214.style.color="black";
        c1215.style.color="black";
        c1216.style.color="black";
        c1217.style.color="black";
        c1218.style.color="black";
        c1219.style.color="black";
        c1220.style.color="black";
        lord.style.color="black";
        lord2.style.color="black";
        lord3.style.color="black";
        lord4.style.color="black";
        a40.style.color="black";
        a47.style.color="black";
        a49.style.color="black";
        flag=0;
     }
    })
    
    var flag2=0;
    theme2.addEventListener("click",function(){
         if(flag2==0){
        content.style.backgroundColor="black";
        boddy.style.backgroundColor="black";
        a20.style.backgroundColor="black";
        lord3.style.backgroundColor="black";
        a35.style.backgroundColor="black";
        a40.style.backgroundColor="black";
        landing2.style.backgroundColor="black";
        
        theme2.style.backgroundColor="white";
        c14.style.color="white";
        a11.style.color="white";
        c1212.style.color="white";
        c1213.style.color="white";
        c1214.style.color="white";
        c1215.style.color="white";
        c1216.style.color="white";
        c1217.style.color="white";
        c1218.style.color="white";
        c1219.style.color="white";
        c1220.style.color="white";
        a1212.style.color="white";
        a1213.style.color="white";
        a1214.style.color="white";
        a1215.style.color="white";
        a1216.style.color="white";
        a1217.style.color="white";
        a1218.style.color="white";
        a1219.style.color="white";
        lord.style.color="white";
        lord2.style.color="white";
        lord3.style.color="white";
        lord4.style.color="white";
        a40.style.color="white";
        a47.style.color="white";
        a49.style.color="white";
        landing2.style.color="white";
        
        flag2=1;
    }
    else{
        content.style.backgroundColor="white";
        boddy.style.backgroundColor="white";
        a20.style.backgroundColor="white";
        lord3.style.backgroundColor="white";
        a35.style.backgroundColor="white";
        a40.style.backgroundColor="white";
        
        theme2.style.backgroundColor="black";
        c14.style.color="black";
        a11.style.color="black";
        c1212.style.color="black";
        c1213.style.color="black";
        c1214.style.color="black";
        c1215.style.color="black";
        c1216.style.color="black";
        c1217.style.color="black";
        c1218.style.color="black";
        c1219.style.color="black";
        c1220.style.color="black";
        lord.style.color="black";
        lord2.style.color="black";
        lord3.style.color="black";
        lord4.style.color="black";
        a40.style.color="black";
        a47.style.color="black";
        a49.style.color="black";
        flag2=0;
     }
    })
    