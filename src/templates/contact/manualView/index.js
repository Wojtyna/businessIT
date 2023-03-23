import React from 'react';

import {
  CompanyTitle,
  ContactDataWrap,
  ContactIcon,
  ContactItem,
  Header,
  Logo,
  LogoWrap,
  SocialMediaWrap,
  ViewWrap,
} from './style';
import ContentData from '../../../assets/data.json';
import IconButton from '../../../components/iconButton';

import LogoImage from '../../../assets/images/logo-huge.webp';
import EmailImage from '../../../assets/images/contact/email.webp';
import PhoneImage from '../../../assets/images/contact/phone.webp';
import TwitterImage from '../../../assets/images/social-media/twitter.webp';
import YoutubeImage from '../../../assets/images/social-media/youtube.webp';

export default function ManualView({
  content: { text, phone, mail, iconAlt },
}) {
  const openUrl = (uri) => {
    window.open(uri, '_blank', 'noreferrer');
  };

  return (
    <ViewWrap>
      <Header>
        <LogoWrap>
          <Logo src={LogoImage} alt={`${ContentData.companyName} Logo`} />
          <CompanyTitle className="companyName">
            {ContentData.companyName}
          </CompanyTitle>
        </LogoWrap>
        {text}
      </Header>

      <ContactDataWrap>
        <ContactItem isFirst>
          <ContactIcon alt={iconAlt} src={PhoneImage} />
          {phone}
        </ContactItem>
        <ContactItem>
          <ContactIcon alt={iconAlt} src={EmailImage} />
          {mail}
        </ContactItem>
      </ContactDataWrap>

      <SocialMediaWrap>
        <IconButton
          onClick={() => {
            openUrl(ContentData.socialMedia.twitter.url);
          }}
          alt={ContentData.socialMedia.twitter.alt}
          iconSource={TwitterImage}
        />
        <IconButton
          onClick={() => {
            openUrl(ContentData.socialMedia.youtube.url);
          }}
          alt={ContentData.socialMedia.youtube.alt}
          iconSource={YoutubeImage}
        />
      </SocialMediaWrap>
    </ViewWrap>
  );
}
