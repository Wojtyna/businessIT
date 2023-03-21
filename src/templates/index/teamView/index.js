import React from 'react';

import {
  ViewWrap,
  BigText,
  MidBgLine,
  SmallText,
  TeamImg,
  TeamText,
  MidBgLineWrap,
} from './style';

import TeamImage from '../../../assets/images/children.webp';
import MidBgImage from '../../../assets/images/bg-lines/mid.png';

export default function TeamView({
  content: { smallText, bigText, teamText, teamImgAlt, midLineAlt },
}) {
  return (
    <ViewWrap className="view-inline-space">
      <MidBgLineWrap>
        <MidBgLine src={MidBgImage} alt={midLineAlt} />
      </MidBgLineWrap>
      <SmallText dangerouslySetInnerHTML={{ __html: smallText }} />
      <BigText dangerouslySetInnerHTML={{ __html: bigText }} />
      <TeamText dangerouslySetInnerHTML={{ __html: teamText }} />
      <TeamImg alt={teamImgAlt} src={TeamImage} />
    </ViewWrap>
  );
}
