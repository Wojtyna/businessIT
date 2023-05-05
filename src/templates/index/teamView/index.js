import React from 'react';

import { ViewWrap, MidBgLine, TeamImg, Title, MidBgLineWrap } from './style';

import TeamImage from '../../../assets/images/children.webp';
import MidBgImage from '../../../assets/images/bg-lines/mid.webp';

export default function TeamView({
  content: { title, teamImgAlt, midLineAlt },
}) {
  return (
    <ViewWrap className="view-inline-space">
      <MidBgLineWrap>
        <MidBgLine src={MidBgImage} alt={midLineAlt} />
      </MidBgLineWrap>
      <Title
        className="textBorder animate-opacity-onEnter"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <TeamImg alt={teamImgAlt} src={TeamImage} />
    </ViewWrap>
  );
}
