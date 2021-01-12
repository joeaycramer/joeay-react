import React from 'react';

import Title from '../UI/titles/Titles';
import PortfolioGrid from '../portfolio/portfolioGrid/PortfolioGrid';

const Work = (props) => {
  return (
    <React.Fragment>
      <Title title="WORK" subtitle={(<p>Check out a selection of some of my favourite pieces of work, some private, some for agencies</p>)} />

      <PortfolioGrid items={props.items} />
    </React.Fragment>
  )
}

export default Work;