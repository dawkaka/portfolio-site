import {FunctionComponent} from 'react'


import styles from '../styles/Home.module.css'

const ProjectItem: FunctionComponent<{image?: string,title:string,live?:string,
    source:string, discrp:string, noLive: boolean}> = ({noLive,image = "software.jpg", title, live, source, discrp}) => {
  const disable = noLive ? styles.btnDisable : ""
  return (
    <div className={styles.projectItem} style={{backgroundImage:`url(/${image})`, backgroundSize:"contain"}}>

    <div className={styles.projectItemInfo}>
    <h4>{title}</h4>
    <p>{discrp}</p>
    <div className={styles.sourceLive}>
    <button className={`${styles.button} ${disable}`}>
    <a href={live} className={`${styles.button} ${disable}`}>View live</a>
    </button>
    <button>
    <a href={source} className={`${styles.button} ${styles.buttonLite}`}>View source</a>
    </button>
    </div>
    </div>
    </div>
  )
}

const Projects: FunctionComponent = ()=> {

  return (
     <div className={styles.heroMain}>
     <section id="projects" className={styles.skewSectP}>
      <div>
     <div className={styles.projectMain}>

     <div className={styles.headerCenter}>
     <div className={styles.lineContainer}>
     <div className={`${styles.line} ${styles.line3}`}></div>
     </div>
     <h1 className={styles.headerBig}>Projects</h1>
     </div>

     <div className={styles.projectItemsContainer}>
     <ProjectItem title="Path Finding Algorithms Visualizer"
         discrp="A path finding algorithms visualizer made with react. You can visualizer both weighted and unweighted algorithms including; Dijskra's, A star, Breadth-first and Depth-first path finding algorithms."
          live="https://reactpathfindvisualizer.netlify.app"
          source="https://github.com/dawkaka/path-finding-algorithms"
          image="Capture.PNG"
          noLive={false}
     />
     <ProjectItem title="Stripe Landing Page Clone"
     discrp="With this one I tried to clone stripe's landing page beacuse it has a lot of diagrams which weren't picture but made with css. A good way to strengthen css skills"
     live="https://dawkaka-stripe-landing.netlify.app/"
     source="https://github.com/dawkaka/css-designs/tree/main/stripe"
     image="Capture3.PNG"
     noLive={false}
     />
     <ProjectItem title="Vercel Landing Page Clone"
     discrp="Vercel's landing page is one of the best disgned websites both in terms of UI and UX. Had fun cloning it and I also took some inspirations from it to build this portfolio website."
     live="https://vercel-landing-page.vercel.app/"
     source="https://github.com/dawkaka/css-designs/tree/main/vercel"
     image="Capture2.PNG"
     noLive={false}
     />

     <ProjectItem title="Sorting Algorithms Visualizer"
     discrp= "A website that allows you to visualizer differnt sorting algorithms including; bublle sort, insertion sort etc."
     source="https://github.com/dawkaka/sortalgorithmsvisualizer"
     live="https://reactsortalgorithmsvisualizer.netlify.app"
     image="Capture4.PNG"
     noLive={false}
     />

     <ProjectItem title="Movie Subtitle Auto"
     discrp= "A piece of software to authomatical remane movie series and their corresponding subtitles when to avoid doing it manually."
     source="https://github.com/dawkaka/movie-subtitle-auto"
     noLive={true}
     />
     <ProjectItem title="Task Manager Api"
     discrp="A REST API built with Go"
     source="https://github.com/dawkaka/go-rest-api-tutorial"
     noLive={true}
     />

     </div>

    <p><a  className={styles.findMore} href="https://github.com/dawkaka">
    Find more projects on my github
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 31.143 31.143" >
<g>
	<g id="c100_arrow">
		<path d="M0,15.571c0.001,1.702,1.383,3.081,3.085,3.083l17.528-0.002l-4.738,4.739c-1.283,1.284-1.349,3.301-0.145,4.507
			c1.205,1.201,3.222,1.138,4.507-0.146l9.896-9.898c1.287-1.283,1.352-3.301,0.146-4.506c-0.033-0.029-0.068-0.051-0.1-0.08
			c-0.041-0.043-0.07-0.094-0.113-0.139l-9.764-9.762c-1.268-1.266-3.27-1.316-4.474-0.111c-1.205,1.205-1.153,3.208,0.111,4.476
			l4.755,4.754H3.085C1.381,12.485,0,13.865,0,15.571z"/>
	</g>
	<g id="Capa_1_46_">
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

    </a></p>

     </div>

     </div>

    </section>
    </div>
  )
}



export default Projects
