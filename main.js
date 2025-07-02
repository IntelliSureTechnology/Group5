document.addEventListener('DOMContentLoaded',()=>{
  const hamburger=document.querySelector('.hamburger');
  const navLinks=document.querySelector('.nav-links');
  hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  });
  // Number counter
  const counters=document.querySelectorAll('.number');
  const speed=200; // smaller=faster
  counters.forEach(counter=>{
    const updateCount=()=>{
      const target=+counter.getAttribute('data-target');
      const count=+counter.innerText;
      const inc= target/speed;
      if(count<target){
        counter.innerText=Math.ceil(count+inc);
        setTimeout(updateCount,20);
      }else{
        counter.innerText=target;
      }
    };
    const observer=new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting){updateCount();observer.disconnect();}
    },{threshold:.6});
    observer.observe(counter);
  });
});