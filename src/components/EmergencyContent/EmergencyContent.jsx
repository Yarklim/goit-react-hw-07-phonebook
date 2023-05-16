import PropTypes from 'prop-types';
import {
  Container,
  Title,
  Img,
  ContentList,
  ListItem,
  Name,
  Phone,
  ButtonClose,
  Link,
  ImgPhone,
} from './EmergencyContent.styled';
import phone from '../images/phone.png';
import elon from '../images/elon.jpg';
import bill from '../images/bill.jpg';
import goit from '../images/goit.jpg';
import avangers from '../images/avangers.jpg';

export const EmergencyContent = ({ onClose }) => {
  return (
    <Container>
      <Title>Call them if you have problems with your homework!</Title>
      <ContentList>
        <ListItem>
          <Img src={elon} alt="avatar" width={70} />
          <Name>Elon Musk:</Name>
          <Phone>9-21-32-50</Phone>
          <Link href="tel:123-456-789">
            <ImgPhone src={phone} alt="phone" width={40} />
          </Link>
        </ListItem>

        <ListItem>
          <Img src={bill} alt="avatar" width={70} />
          <Name>Bill Gates:</Name>
          <Phone>95-7-8-10-11</Phone>
          <Link href="tel:123-456-789">
            <ImgPhone src={phone} alt="phone" width={40} />
          </Link>
        </ListItem>

        <ListItem>
          <Img src={goit} alt="avatar" width={70} />
          <Name>GoIT Mentors:</Name>
          <Phone>48-2023-03-29</Phone>
          <Link href="tel:123-456-789">
            <ImgPhone src={phone} alt="phone" width={40} />
          </Link>
        </ListItem>

        <ListItem>
          <Img src={avangers} alt="avatar" width={70} />
          <Name>Avangers:</Name>
          <Phone>3000</Phone>
          <Link href="tel:123-456-789">
            <ImgPhone src={phone} alt="phone" width={40} />
          </Link>
        </ListItem>
      </ContentList>
      <ButtonClose type="button" onClick={onClose}>
        Close
      </ButtonClose>
    </Container>
  );
};

EmergencyContent.propTypes = {
  onClose: PropTypes.func,
};
