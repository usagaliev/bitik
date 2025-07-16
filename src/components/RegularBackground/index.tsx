import React from 'react';
import classes from './RegularBackground.module.scss';
import clsx from "clsx";
import {useWindowWidth} from "../../hooks/useWindowWidth.tsx";

export const RegularBackground = () => {
	const {isPhone, width } = useWindowWidth()

	const elementPosition = [
		{
			width: isPhone ? 145 : 600,
			left:isPhone ? '100' : 492,
			top: -13,
			height: 600,
		},
		{
			width:isPhone ? 100 : 400,
			left: isPhone ? 0 : 971.5,
			top: 393,
			height: 400,
		},
		{
			width: isPhone ? 80 : 380,
			left: isPhone ? 0 : -130.5,
			top: isPhone ? 'unset' : -43,
			bottom: isPhone ? 0 : 'unset',
			height: 380,
		}
	]

	return (
		<div className={classes.wrapper}>
			<div className={classes.item} style={elementPosition[0]}>
				<div className={clsx(classes.item__element, classes.item__element_orange)}></div>
			</div>

			<div className={classes.item} style={elementPosition[1]}>
				<div className={clsx(classes.item__element, classes.item__element_purple)}></div>
			</div>

			<div className={classes.item} style={elementPosition[2]}>
				<div className={clsx(classes.item__element, classes.item__element_orange)}></div>
			</div>

		</div>
	);
};