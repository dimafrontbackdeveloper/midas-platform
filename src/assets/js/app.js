document.addEventListener('DOMContentLoaded', () => {
	// intro First Column
	const introFirstColumnImgs = document
		.querySelector('.intro__column-first')
		.querySelectorAll('.intro__column-img')

	introFirstColumnImgs.forEach((introColumnImg, i) => {
		setTimeout(() => {
			introColumnImg.classList.add('intro__column-img--visible')
		}, i * 150) // Задержка в 500 мс между появлениями изображений
	})

	// intro second Column
	const introSecondColumnImgs = document
		.querySelector('.intro__column-second')
		.querySelectorAll('.intro__column-img')

	introSecondColumnImgs.forEach((introColumnImg, i) => {
		setTimeout(() => {
			introColumnImg.classList.add('intro__column-img--visible')

			if (introSecondColumnImgs.length - 1 === i) {
				introColumnImg.classList.add('intro__column-toggle--switch')
			}
		}, i * 500) // Задержка в 500 мс между появлениями изображений
	})

	// intro third Column

	const introCurtain = document.querySelector('.intro__column-curtain')
	introCurtain.classList.add('intro__column-curtain--open')

	const introThirdColumnImgs = document
		.querySelector('.intro__column-third')
		.querySelectorAll('.intro__column-img')

	introThirdColumnImgs.forEach((introColumnImg, i) => {
		setTimeout(() => {
			introColumnImg.classList.add('intro__column-img--visible')
		}, i * 1500) // Задержка в 500 мс между появлениями изображений
	})

	// metrics numbers
	function animateValue(className, start, end, duration, isNeedDollar = true) {
		const obj = document.querySelector(`.${className}`)
		const range = end - start
		let startTime = null

		function step(currentTime) {
			if (!startTime) startTime = currentTime
			const progress = currentTime - startTime
			const stepValue = Math.min(start + (progress / duration) * range, end)

			if (className === 'metrics__circulation') {
				obj.textContent = isNeedDollar
					? `$${stepValue.toFixed(2)}`
					: `${stepValue.toFixed(2)}`
			} else {
				obj.textContent = isNeedDollar
					? `$${Math.floor(stepValue)}`
					: `${Math.floor(stepValue)}`
			}

			if (progress < duration) {
				requestAnimationFrame(step)
			} else {
				if (className !== 'metrics__circulation') {
					obj.textContent = isNeedDollar
						? `$${end.toLocaleString()}`
						: `${end.toLocaleString()}`
				} else {
					obj.textContent = isNeedDollar
						? `$${end.toFixed(2).toLocaleString()}`
						: `${end.toFixed(2).toLocaleString()}`
				}
			}
		}

		requestAnimationFrame(step)
	}

	animateValue('metrics__market', 0, 47572397, 1200)
	animateValue('metrics__volume', 0, 183241, 1200)
	animateValue('metrics__circulation', 0, 2575183, 1200)
	animateValue('metrics__price', 0, 19, 1200)

	// metrics curtain
	const metricsCurtain = document.querySelector(
		'.metrics__content-circle-curtain'
	)
	metricsCurtain.classList.add('metrics__content-circle-curtain--open')

	// metrics gradient
	const metricsGradient = document.querySelector('.metrics__content-gradient')
	metricsGradient.classList.add('metrics__content-gradient--visible')

	// stake numbers animation
	animateValue('stake__item-million', 0, 30, 1200)
	animateValue('stake__item-staking', 0, 2600, 1200)
	animateValue('stake__item-total', 0, 1800000, 1200)

	// utility First Column Items
	const utilityFirstRowItems = document
		.querySelector('.utility__row-first')
		.querySelectorAll('.utility__column-item')

	utilityFirstRowItems.forEach((utilityFirstRowItem, i) => {
		setTimeout(() => {
			utilityFirstRowItem.style.height = `calc(100% - ${i * 20}px)`
		}, i * 500) // Задержка в 500 мс между появлениями изображений
	})

	// utility Second Column Items
	const utilitySecondRowItem = document
		.querySelector('.utility__row-second')
		.querySelector('.utility__column-item')

	utilitySecondRowItem.classList.add('utility__column-item--open')

	// utility third column items
	const utilityThirdRowItems = document
		.querySelector('.utility__row-third')
		.querySelectorAll('.utility__column-item')

	utilityThirdRowItems.forEach(utilityThirdRowItem => {
		utilityThirdRowItem.classList.add('utility__column-item--scale')
	})

	// support numbers
	animateValue('support__content-liquidity-first-number', 0, 4, 1200, false)
	animateValue('support__content-liquidity-second-number', 0, 824, 1200, false)
	animateValue('support__content-liquidity-third-number', 0, 884, 1200, false)
	animateValue('support__content-bought-first-number', 0, 63, 1200, false)
	animateValue('support__content-bought-second-number', 0, 844, 1200, false)

	// support img
	const supportContentImg = document.querySelector('.support__content-img')
	supportContentImg.classList.add('support__content-img--visible')

	// frequently
	const frequentlyQuestions = document.querySelectorAll('.frequently__question')
	const frequentlyQuestionImgs = document.querySelectorAll(
		'.frequently__question-img'
	)

	frequentlyQuestionImgs.forEach((frequentlyQuestionImg, i) => {
		frequentlyQuestionImg.addEventListener('click', () => {
			const frequentlyQuestion = frequentlyQuestions[i]

			if (
				!frequentlyQuestion.classList.contains('frequently__question--open')
			) {
				frequentlyQuestion.classList.add('frequently__question--open')
			} else {
				frequentlyQuestion.classList.remove('frequently__question--open')
			}
		})
	})
})
