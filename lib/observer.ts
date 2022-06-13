
import styles from '../styles/Home.module.css'


export default function createObserver(){

  function headerIntersection(entries: IntersectionObserverEntry[], observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${styles.fadeIn}`)
        }
    });
  }

  function  slideIntersectionRight(entries: IntersectionObserverEntry[], observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add(`${styles.slideRight}`)
        }
    });
  }

  function  slideIntersectionLeft(entries: IntersectionObserverEntry[], observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add(`${styles.slideLeft}`)
        }
    });
  }

    let options = {
      // root: document.querySelector('#scrollArea'),
      // rootMargin: '0px',
      //threshold: 0.1
    }

    let observer = new IntersectionObserver(headerIntersection, options);
    let slideLObserver = new IntersectionObserver(slideIntersectionLeft,options)
    let slideRObserver = new IntersectionObserver(slideIntersectionRight,options)
    let targets = document.querySelectorAll(`.${styles.headerBig}`);
    let leftTargets = document.querySelectorAll(`.${styles.workResp}`)
    let rightTargets = document.querySelectorAll(`.${styles.workInfo}`)

    if(targets){
        addObserver(targets, observer)
    }

    if(leftTargets) {
      addObserver(leftTargets, slideLObserver)
    }

    if(rightTargets) {
        addObserver(rightTargets, slideRObserver)
    }
}

function addObserver(targets: NodeListOf<Element>,observer: IntersectionObserver) {
  for(let elem of Array.from(targets)) {
    observer.observe(elem);
  }
}
