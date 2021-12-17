import styled from "styled-components";
import Instagram from "@material-ui/icons/Instagram";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Pinterest from "@material-ui/icons/Pinterest";
import { Email, LocationOn, Phone } from "@material-ui/icons";
import { mobile } from "./../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 32px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 20%;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>QATA</Logo>
        <Desc>
          We believe in a world where you have total freedom to be you, without
          judgement. To experiment. To express yourself. To be brave and grab
          life as the extraordinary adventure it is. So we make sure everyone
          has an equal chance to discover all the amazing things they’re capable
          of – no matter who they are, where they’re from or what looks they
          like to boss. We exist to give you the confidence to be whoever you
          want to be.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>

          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>FAQs</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: "10px" }} /> 1234 Houston, Texas,
          US.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 567 890
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} /> customerservices@qata.com
        </ContactItem>
        <Payment src="https://pngimg.com/uploads/paypal/paypal_PNG15.png" />
      </Right>
    </Container>
  );
}

export default Footer;
