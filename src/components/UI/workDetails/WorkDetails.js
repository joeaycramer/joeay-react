import React from 'react';
import c from './WorkDetails.scss';
import Aux from '../../../hoc/Aux';

const WorkDetails = (props) => {

	return (
		<Aux>
			<div className={c.flexRow}>
				<div className={c.detailCard}>
					<p className={c.detailCard__title}>
						Role
					</p>
					<p>Fao</p>
				</div>

				<div className={c.detailCard}>
					<p className={c.detailCard__title}>
						year
					</p>
					<p>Fao</p>
				</div>

				<div className={c.detailCard}>
					<p className={c.detailCard__title}>
						client
					</p>
					<p>Fao</p>
				</div>
			</div>


			<div className={c.flexRow}>
				<div className={c.detailCard}>
					<p className={c.detailCard__title}>
						Task
					</p>
					<p>lorem sdfasdf asdf </p>
				</div>
			</div>
		</Aux>
		)
}

export default WorkDetails;