import styled from "styled-components"

const Wrapper = styled.main`
nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    display: flex;
    align-items: center;
    margin: 0 auto;
    height: var(--nav-height);
}
h1 {
    margin: 0 0 0.4rem 0.5rem; 
    color: var(--primary-500)
}
span{
    color: var(--primary-500)
}
footer {
   position: fixed;
   bottom: 0;
   width: 100%;
   height: var(--nav-height);
   background-color: var( --primary-500);
   color: white;
   justify-content: center;
   align-items: center;
   display: flex;
}

.page {
    min-height: calc(100vh - 2*(var(--nav-height)));
    max-height: calc(100vh - 2*(var(--nav-height)));
    display: grid; 
    grid-template-rows: 1fr 1fr;
    align-items : center;
}

.landing-info {
    display: flex;
    flex-direction: column;
    //align-items: center;
}
.main-img{
    padding: 1rem;
}
@media (min-width: 992px){
    .page {
        grid-template-columns: 1fr 1fr ;
        grid-template-rows: 1fr;
        column-gap: 1rem;
    }
    
}
@media (max-width: 700px){
    footer {
        height: 10vh;
    }
}

@media (max-width: 480px){
    h2 {
    text-align: center;
    font-size: 2.2rem;
}
}
`

export default Wrapper