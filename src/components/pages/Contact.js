import React from 'react';
import Title from '../UI/titles/Titles';
import Aux from '../../hoc/Aux';

const Contact = (props) => {
  return (
    <Aux>
			<Title title="Contact" subtitle={(<p><a href='mailto:hello@joeay.co.uk'>hello@joeay.co.uk</a>, easy.</p>)} />
    </Aux>
  )
}

export default Contact;