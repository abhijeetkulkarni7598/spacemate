import styled from "styled-components";

export const ServicepgStyle = styled.div`
.services-main-container {
    margin-top: 8rem;
    padding: 5rem 4rem;
}

.input-group-button__serv {
    align-content: center;
    text-align: center;
    justify-content: center;
    padding: 1rem 2rem;
    border-radius: 1rem;
    background-color: var(--primary-color);
    color: #000;
    font-size: 1.6rem;
    transition: ease-in;
    width: 15rem;
}
.input-group-button__serv:hover, 
.input-group-button__serv:focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.25em);
}

.work-container-subdiv-service {
    padding: 0 5rem;
}

.main-hero-para-service {
    margin-top: 3rem;
    padding: 0 2rem;
}

.work-container-subdiv-service-block {
    padding: 0 2rem;
}

.gallery-link-button {
    display:inline-block;
    background-color: var(--primary-color);
    padding: 1.5rem;
    margin-top: 2rem;
    border-radius: 1rem;
    font-size: 1.6rem;
}
.gallery-link-button:hover {
    background-color: transparent;
    padding: 1.3rem;
    margin-top: 2rem;
    border-radius: 1rem;
    font-size: 1.6rem;
    border: 2px solid var(--primary-color);
}


@media screen and (max-width: 550px) {
    .services-main-container {
        margin-top: 5rem;
        padding-top: 1rem;
        
    }

    .main-hero-para-service {
    font-weight: lighter;
    /* text-align: justify; */
    margin-top: 2rem;
    }
    /* color: var(--main-text-color); */

    .work-container-subdiv-service {
        padding: 0
    }
    
    .main-hero-para-service {
        margin-top: 3rem;
        padding: 0 0;
    }

    .work-container-subdiv-service-block {
        padding: 0 0rem;
    }
    

}

@media (max-width: 750px) {
    .work-container-subdiv-service {
        padding: 0
    }
}

`;