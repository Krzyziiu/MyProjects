const oMnie = ()=>{
    alert("O mnie")
  }


document.addEventListener('DOMContentLoaded', function () {
  const jpg = document.querySelector('.jpg');
  const jpgDrugi = document.querySelector('.jpg-drugi');
  const tekst = document.querySelector('.tekst');
  const tekstDrugi = document.querySelector('.tekst-drugi');

  const initialOffset = -620;
  jpgDrugi.style.transform = `translateX(${initialOffset}px)`;
  tekstDrugi.style.transform = `translateX(${initialOffset}px)`;

  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const opacity = 1 - scrollY / 600;

    jpg.style.opacity = Math.max(0, Math.min(1, opacity));
    jpg.style.transform = `translateX(${-scrollY}px)`;
    jpg.style.transition = "opacity 0.1s ease";

    tekst.style.opacity = Math.max(0, Math.min(1, opacity));
    tekst.style.transform = `translateX(${scrollY}px)`;
    tekst.style.transition = "opacity 0.1s ease";

    jpgDrugi.style.opacity = Math.max(0, Math.min(1, 1-opacity));
    jpgDrugi.style.transform = `translateX(${-initialOffset - scrollY}px)`;
    jpgDrugi.style.transition = "opacity 0.1s ease";

    

    tekstDrugi.style.opacity = Math.max(0, Math.min(1, 1-opacity));
    tekstDrugi.style.transform = `translateX(${initialOffset + scrollY}px)`;
    tekstDrugi.style.transition = "opacity 0.1s ease";
  });
});
  



const scrolluj = () =>{
  scrollBy({
    top: 100,//window.innerHeight*0.9, //0.79 żeby strzałka była nadal widoczna
    left: 0,
    behavior: "smooth"
  })
  //document.querySelector(".arrows-body").style.transform = "rotate(180deg)"

}