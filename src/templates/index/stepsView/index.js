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
} from './style';

import PrintImage from '../../../assets/images/steps/blueprint.webp';
import ClipboardImage from '../../../assets/images/steps/clipboard.webp';
import CustomerImage from '../../../assets/images/steps/customer.webp';
import ManufacturingImage from '../../../assets/images/steps/manufacturing.webp';
import ProductionImage from '../../../assets/images/steps/production.webp';
import ProjectionImage from '../../../assets/images/steps/projection.webp';
import ScalesImage from '../../../assets/images/steps/scales.webp';

export default function StepsView({
  content: {
    title,
    steps,
    tip: { tipTitle, text },
    panelImageAlt,
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
    <ViewWrap className="view-inline-space index-view">
      <ViewTitle className="textBorder">{title}</ViewTitle>

      <PanelsWrap>
        {PanelsData.map((item, index) => (
          <PanelStyle key={`STEPS_PANEL_${index}`}>
            <NumberWrap>
              <Number className="textBorder">{index + 1}</Number>
            </NumberWrap>
            <PanelImage src={item.image} alt={panelImageAlt} />
            <PanelTitle>{item.title}</PanelTitle>
          </PanelStyle>
        ))}
      </PanelsWrap>

      <TipWrap>
        <TipTitle>{tipTitle}</TipTitle>
        <TipText dangerouslySetInnerHTML={{ __html: text }} />
      </TipWrap>
    </ViewWrap>
  );
}
