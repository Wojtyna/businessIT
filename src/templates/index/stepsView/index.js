import React from 'react';

import {
  ViewWrap,
  Number,
  NumberWrap,
  PanelImage,
  PanelStyle,
  PanelTitle,
  PanelsWrap,
  TipText,
  TipTitle,
  TipWrap,
  ViewTitle,
  MidBgLine,
  MidBgLineWrap,
} from './style';

import PrintImage from '../../../assets/images/steps/blueprint.webp';
import ClipboardImage from '../../../assets/images/steps/clipboard.webp';
import CustomerImage from '../../../assets/images/steps/customer.webp';
import ManufacturingImage from '../../../assets/images/steps/manufacturing.webp';
import ProductionImage from '../../../assets/images/steps/production.webp';
import ProjectionImage from '../../../assets/images/steps/projection.webp';
import ScalesImage from '../../../assets/images/steps/scales.webp';
import MidBgImage from '../../../assets/images/bg-lines/secondMid.webp';

export default function StepsView({
  content: {
    title,
    steps,
    tip: { tipTitle, text },
    panelImageAlt,
    midLineAlt,
  },
}) {
  const PanelsData = [
    {
      title: steps[0],
      image: CustomerImage,
    },
    {
      title: steps[1],
      image: ClipboardImage,
    },
    {
      title: steps[2],
      image: PrintImage,
    },
    {
      title: steps[3],
      image: ManufacturingImage,
    },
    {
      title: steps[4],
      image: ScalesImage,
    },
    {
      title: steps[5],
      image: ProductionImage,
    },
    {
      title: steps[6],
      image: ProjectionImage,
    },
  ];

  return (
    <ViewWrap className="spaceBetweenSections view-inline-space">
      <MidBgLineWrap>
        <MidBgLine src={MidBgImage} alt={midLineAlt} />
      </MidBgLineWrap>

      <ViewTitle className="textBorder animate-opacity-onEnter">
        {title}
      </ViewTitle>

      <PanelsWrap className="animate-opacity-onEnter">
        {PanelsData.map((item, index) => (
          <PanelStyle key={`STEPS_PANEL_${index}`}>
            <NumberWrap>
              <Number>{index + 1}</Number>
            </NumberWrap>
            <PanelImage src={item.image} alt={panelImageAlt} />
            <PanelTitle>{item.title}</PanelTitle>
          </PanelStyle>
        ))}
      </PanelsWrap>

      <TipWrap className="animate-opacity-onEnter">
        <TipTitle>{tipTitle}</TipTitle>
        <TipText dangerouslySetInnerHTML={{ __html: text }} />
      </TipWrap>
    </ViewWrap>
  );
}
