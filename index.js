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



    var a2=document.querySelector(".c14");
    var a3=document.querySelector(".landing2");
    var a4=document.querySelector(".content1")
    var a5=document.querySelector(".c02")
    a2.addEventListener("click",function(){
        a3.style.display="block";
        a3.style.transition="ease-in";
        a4.style.display="none";
    })
    a5.addEventListener("click",function(){
        a3.style.display="none";
        a4.style.display="block";
    })