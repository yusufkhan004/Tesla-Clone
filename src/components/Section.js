import React from 'react';
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

const Section = (props) =>{
    console.log(props);

    return(
        <Wrap bgImage={props.backgroundImg}>
            <ItemText>
                <Fade bottom>
                <h1> {props.title} </h1>
                </Fade>
                <Fade cascade>
                <p>{props.description}</p>
                </Fade>
            </ItemText>

            <Button>
            <ButtonGroup>
            <Fade left>
            <LeftButton>
                    {props.leftBtnText}
                </LeftButton>
            </Fade>
                {
                    props.rightBtnText && 
                    <Fade right>
                    <RightButton>
                    {props.rightBtnText}
                    </RightButton>
                    </Fade>
                }
            </ButtonGroup>
            <DownArrow />
            </Button>
        </Wrap>
    )
}


export default Section

const Wrap = styled.div `
    width: 100vw; //Full viewWidth
    height: 100vh; //vertical height
    background-size: cover;
    background-position: center; 
    background-reapeat: no-repeat;
    background-image: ${ props => `url("/images/${props.bgImage}")` };
    display: flex;
    flex-direction column;
    justify-content: space-between; //vertical alignment
    align-items: center; //horzontal
`

const ItemText = styled.div `
    padding-top: 15vh;
    text-align: center;
    h1{
        line-height: 48px;
        font-weight: 500;
        font-size: 42px;
        color: #393c41;
    }
    p{
        line-height: 20px;
        font-weight: 400;
        font-size: 14px;
        color:#5c5d61;
    }
`

const ButtonGroup = styled.div `
    display: flex; //row
    margin-bottom: 30px;
    font-weight: 500;
    @media (max-width: 632px){
        flex-direction: column;
    }
`
const LeftButton = styled.div `
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 13px;
    cursor: pointer;
    margin: 8px;

`
const RightButton = styled(LeftButton) `
    background-color: white;
    opacity: 0.65;
    color: black;
    
`
const DownArrow = styled(ExpandMoreRoundedIcon) `
    margin-bottom: 20px;
    fontSize: 3.5rem;
    animation: animateDown infinite 1.5s;
`

const Button = styled.div `

`