import styled from "styled-components"

export const HeaderhomeStyle = styled.div`
header {
    background-color: var(--bgcolor);
    min-height: 100vh;
    width: 100%;
    padding-top: 1rem;
}


.main-hero-container {
    height: 80vh;
    display: flex;
    margin-top: 5rem;
}

.main-hero-container h1 {
    font-size: 4.4rem;
    font-weight: 400;
    span{
        font-size: 4.4rem;
    }
}

.display-2 {
    color: #353935;
}

.main-hero-para {
    font-size: 1.5rem;
    color: var(--main-text-color);
    margin: 3rem 0 5rem 0;
    font-weight: lighter;
    width: 75%;
}

.main-hero-container h3 {
    font-weight: lighter;
}

.input-group {
    position: relative !important;
}

.spacemate-tagline {
    color: var(--primary-color);
    font-weight: 400;
    font-size: 4rem;

}

/* Button header */

.input-group-button {
    /* position: absolute; */
    /* margin-right: 5px;
    top: 0.5rem;
    color: #000;
    background-color: var(--primary-color);
    width: 30%;
    border-radius: 2rem !important;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem 0;
    font-size: 1.8rem;
    cursor: pointer; */

    appearance: none;
    background-color: transparent;
    border: 2px solid var(--primary-color);
    border-radius: 15px;
    box-sizing: border-box;
    color: var(--primary-color);
    cursor: pointer;
    display: inline-block;
    font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-height: 60px;
    min-width: 0;
    outline: none;
    padding: 1.6rem 2.4rem;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 30%;
    will-change: transform;
}

.input-group-button:disabled {
    pointer-events: none;
}

.input-group-button:hover {
    color: #fff;
    background-color: var(--primary-color);
    box-shadow: rgba(0, 0, 0, 0.15) 0 8px 15px;
    transform: translateY(-2px);
}

.input-group-button:active {
    box-shadow: none;
    transform: translateY(0);
}


/* button header end */




.main-herosection-images {
    position: relative;
    width: 35%;
}

.main-herosection-images img {
    width: 100%;
    // height: 75%;
    margin-top: 10rem;
    box-shadow: 0 0.8rem 0.8rem rgba(0, 0, 0, 0.25);
    border-radius: 1.5rem;
    position: absolute;
}

.main-herosection-images .main-hero-section-img2 {
    position: absolute;
    width: 70%;
    // height: 35%;
    left: 50%;
    top: 9%;
    box-shadow: 0.8rem 0 0.8rem rgba(0, 0, 0, 0.25);
}

@media screen and (max-width: 1050px) {
    .main-hero-container {
        height: 60vh;
        display: flex;
    }

    .main-herosection-text {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .main-hero-container h1 {
        font-weight: bolder;
        font-size: 3.2rem;
        padding: 2rem 0;

    }

    .main-herosection-images {
        position: relative;
        width: 30vw;
        height: 40vh;
    }

    .main-herosection-images img {
        width: 100%;
        // height: 75%;
        margin-top: 10rem;
        box-shadow: 0 0.8rem 0.8rem rgba(0, 0, 0, 0.25);
        border-radius: 1.5rem;
        position: absolute;
    }

    .main-herosection-images .main-hero-section-img2 {
        position: absolute;
        width: 75%;
        // height: 40%;
        left: 50%;
        top: 9%;
        box-shadow: 0.8rem 0 0.8rem rgba(0, 0, 0, 0.25);
    }
}

@media screen and (max-width: 700px) {
    .main-hero-container {
        align-items: center;
        height: 100vh;
        display: flex;
    }

    .main-herosection-text {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .main-hero-container h1 {
        font-weight: bolder;
        font-size: 3rem;
        margin-top: -8rem;

    }

    .main-hero-para {
        margin: 3rem 0 5rem 0;
        width: 100%;
    }

    .main-herosection-images {
        position: relative;
        width: 45vw;
        height: 40vh;
    }
}

@media screen and (max-width: 550px) {
    header {
        padding-top: 2rem;
    }

    .header-main-container {
        display: grid;
        grid-template-columns: 1frr;
        flex-wrap: wrap;
    }

    .main-hero-container {
        align-items: center;
        height: 100vh;
        display: flex;
        margin-bottom: 5rem;
        margin-top: 2rem;
    }

    .main-herosection-text {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .main-hero-container h1 {
        font-weight: 400;
        font-size: 2.8rem;
        padding: 2.5rem 0;
        margin-bottom: 0;

    }

    .main-hero-container h1 span {

        font-weight: 400;
        font-size: 2.8rem;
        margin-bottom: 0;

    }

    .main-hero-para {
        margin: 2rem 0 3rem 0;
        width: 100%;
    }

    .main-herosection-images {
        position: relative;
        width: 55vw;
        height: 35vh;
    }

    .input-group-button {
        top: 0.5rem;
        width: 45%;
        border-radius: 1.5rem !important;
        padding: 1rem 0rem;
        font-size: 1.6rem;
    }
}

@media screen and (max-width: 350px) {
    header {
        padding-top: 8rem;
    }

}
`;