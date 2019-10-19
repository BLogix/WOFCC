import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1 100%;
`;

export const Header = styled.section`
    background-image: url('https://dl.dropboxusercontent.com/s/xfjbsqugk29jtmw/102434-OLS3V2-932.jpg?dl=0');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;

export const Title = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;

    h1 {
        font-size: 3.5em;
        line-height: 2;
        align-self: center;
        z-index: 1;
    }

    section {
        align-self: center;
        z-index: 0;
        height: 4em;
    }
`;

export const CarouselBox = styled.section`
    width: calc(100vw - 1.3%);
    flex-flow: row nowrap;
    justify-content: center;
    align-content: center;
`;

export const AudioLanding = styled.section`
    width: calc(100vw - 5%);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 10px 0 10px 0;
`;

export const AudioBox = styled.section`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
`;

export const CenterCarousel = styled.section`
    position: relative;
    alignment: center;
    min-width: 40%;
    max-width: 840px;
    margin: 0 auto;
`;