import React, {useState} from 'react';
import styled from 'styled-components';
// import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


const Header = () => {
    const [sideNavStatus, setSideNavStatus] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);

    return (
        <Container>
        <LogoContainer>
        <a href="#">
        <img src="/images/logo.svg" alt="" />
        </a>
        </LogoContainer>
        <Menu>
            {cars && cars.map((car, index) => (
                <a key={index} href="#">{car}</a>
            ))}
            
            {/* <a href="#">Model 3</a>
            <a href="#">Model X</a>
            <a href="#">Model Y</a>
            <a href="#">Solar Roof</a>
            <a href="#">Solar Panels</a> */}
        </Menu>

        <RightMenu>
        <a href="#"> Shop </a>
        <a href="#">  Account </a>
        </RightMenu>

        <CustomMenu onClick={() => setSideNavStatus(true)}>
            <a>
            Menu
            </a>
        </CustomMenu>
        
        <BurgerNavMenu show={sideNavStatus}>
            <CloseWrapper>
                <CloseButton onClick={() => setSideNavStatus(false)} />
            </CloseWrapper>
            {cars && cars.map((car, index) => (
                <li><a key={index} href="#">{car}</a></li>
            ))}
            <li> <a href="#">Existing Inventory</a></li>
            <li> <a href="#">Used Inventory</a></li>
            <li> <a href="#">Trade-In</a></li>
            <li> <a href="#">Test Drive</a></li>
            <li> <a href="#">Powerwall</a></li>
            <li> <a href="#">Commercial Energy</a></li>
            <li> <a href="#">Utilities</a></li>
            <li> <a href="#">Charging</a></li>
            <li> <a href="#">Find Us</a></li>
            <li> <a href="#">Support</a></li>
            <li> <a href="#">Careers</a></li>
            <li> <a href="#">Shop</a></li>
            <li> <a href="#">Account</a></li>
            <li> <a href="#">More</a></li>
            <li> <a href="#">India</a></li>
        </BurgerNavMenu>
        </Container>
    )
}

export default Header;

const LogoContainer = styled.div `
    display:flex;
    min-height: 60px;
    align-items: center;
    padding: 0 30px;
    ${'' /* margin: 0 35px; */}
    justify-content: space-between;
    img{
        width: 6rem;
        display: flex;
    }
`

const Container = styled.div `
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top:0;
    left:0;
    right: 0;
    z-index: 1;

`
const anchor = styled.div `
    a{
        font-weight: 500;
        font-size:15px;
        line-height: 21px;
        ${'' /* color: #181b21; */}
        ${'' /* text-transform: uppercase; */}
        padding: 0 15px;
        flex-wrap: nowrap;
    }
`

const Menu = styled(anchor) `
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 0 20px;
    ${'' /* a{
        font-weight: 500;
        font-size:15px;
        line-height: 21px;
        color: #181b21;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    } */}

    @media(max-width: 1200px) {
        display: none;
    }
    

`

const RightMenu = styled(anchor) `
    ${'' /* a{
        font-weight: 500;
        font-size:15px;
        line-height: 21px;
        padding: 0 10px;
    } */}
    @media(max-width: 1200px) {
        display: none;
    }
`

const CustomMenu = styled(anchor) `
    cursor: pointer;
`
const BurgerNavMenu = styled.div `
    position: fixed;
    top:0;
    bottom: 0;
    margin-right: 0px;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.5s ease-in-out;
    li{
        padding: 15px 20px;
        ${'' /* border-bottom: 1px solid rgba(0, 0, 0, .2); */}

        a{
            font-weight: 500;
            font-size:15px;
        }

    }
`

const CloseButton = styled(CloseIcon) `
    cursor: pointer;
    ${'' /* padding: 15px; */}

`

const CloseWrapper = styled.div `
    display: flex;
    padding: 15px;
    justify-content: flex-end;
`