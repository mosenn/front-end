import React, { useState } from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import reviews from '../data';

export const Slider = () => {
	const [SliderIndex, SetSliderIndex] = useState(0);
	const [animate, Setanimate] = useState(false);
	const { id, name, job, image, text } = reviews[SliderIndex];

	const FixedLength = (indexNumber) => {
		if (indexNumber > reviews.length - 1) {
			return 0;
		}
		if (indexNumber < 0) {
			return reviews.length - 1;
		}
		return indexNumber;
	};

	const NextSlider = () => {
		SetSliderIndex((SliderIndex) => {
			let newIndex = ++SliderIndex;
			return FixedLength(newIndex);
		});
	};

	const PrevSlider = () => {
		SetSliderIndex((SliderIndex) => {
			let NewIndex = --SliderIndex;
			return FixedLength(NewIndex);
		});
	};
	return (
		<section className="main-slider">
			<figure>
				<img
					src={image}
					alt={name}
					className={`${
						animate ? 'animateclass' : 'animationclassTwo'
					}`}
				/>
				<h3>{name}</h3>
				<h4>{job}</h4>
				<figcaption>{text}</figcaption>
			</figure>
			<div className="parent-arrow-btn">
				<FaArrowAltCircleLeft
					onClick={() => {
						NextSlider();
						Setanimate(!animate);
					}}
				/>
				<FaArrowAltCircleLeft
					onClick={() => {
						PrevSlider();
						Setanimate(!animate);
					}}
				/>
			</div>
		</section>
	);
};
