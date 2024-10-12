AOS.init()

AOS.init({
	once: true, // whether animation should happen only once - while scrolling down
})

document.addEventListener('DOMContentLoaded', () => {
	// numbers animation
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

	// Функция, которую нужно запускать при достижении середины элемента
	function introFirstColumnAnimation(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				console.log('М середина элемента достигнута!')
				// intro First Column
				const introFirstColumnImgs = document
					.querySelector('.intro__column-first')
					.querySelectorAll('.intro__column-img')

				introFirstColumnImgs.forEach((introColumnImg, i) => {
					setTimeout(() => {
						introColumnImg.classList.add('intro__column-img--visible')
					}, i * 150) // Задержка в 500 мс между появлениями изображений
				})

				// Здесь можно вызвать любую другую функцию
				observer.unobserve(entry.target) // Если нужно наблюдать только один раз
			}
		})
	}

	// Функция, которую нужно запускать при достижении середины элемента
	function introSecondColumnAnimation(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
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

				// Здесь можно вызвать любую другую функцию
				observer.unobserve(entry.target) // Если нужно наблюдать только один раз
			}
		})
	}

	// Функция, которую нужно запускать при достижении середины элемента
	function introThirdColumnAnimation(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
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

				// Здесь можно вызвать любую другую функцию
				observer.unobserve(entry.target) // Если нужно наблюдать только один раз
			}
		})
	}

	// Функция, которую нужно запускать при достижении середины элемента
	function metricsAnimation(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// metrics curtain
				const metricsCurtain = document.querySelector(
					'.metrics__content-circle-curtain'
				)
				metricsCurtain.classList.add('metrics__content-circle-curtain--open')

				// metrics gradient
				const metricsGradient = document.querySelector(
					'.metrics__content-gradient'
				)
				metricsGradient.classList.add('metrics__content-gradient--visible')

				// Здесь можно вызвать любую другую функцию
				observer.unobserve(entry.target) // Если нужно наблюдать только один раз
			}
		})
	}

	// Функция, которую нужно запускать при достижении середины элемента
	function metricsMarketAnimation(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				animateValue('metrics__market', 0, 47572397, 1200)
				observer.unobserve(entry.target) // Если нужно наблюдать только один раз
			}
		})
	}

	// Функция, которую нужно запускать при достижении середины элемента
	function metricsVolumeAnimation(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				animateValue('metrics__volume', 0, 183241, 1200)

				// Здесь можно вызвать любую другую функцию
				observer.unobserve(entry.target) // Если нужно наблюдать только один раз
			}
		})
	}

	// Функция, которую нужно запускать при достижении середины элемента
	function metricsCirculationAnimation(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				animateValue('metrics__circulation', 0, 2575183, 1200)

				// Здесь можно вызвать любую другую функцию
				observer.unobserve(entry.target) // Если нужно наблюдать только один раз
			}
		})
	}

	// Функция, которую нужно запускать при достижении середины элемента
	function metricsPriceAnimation(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				animateValue('metrics__price', 0, 19, 1200)

				// Здесь можно вызвать любую другую функцию
				observer.unobserve(entry.target) // Если нужно наблюдать только один раз
			}
		})
	}

	// Функция, которую нужно запускать при достижении середины элемента
	function stakeItemMillionAnimation(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// stake numbers animation
				animateValue('stake__item-million', 0, 30, 1200)

				observer.unobserve(entry.target) // Если нужно наблюдать только один раз
			}
		})
	}

	// Функция, которую нужно запускать при достижении середины элемента
	function stakeItemStakingAnimation(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// stake numbers animation
				animateValue('stake__item-staking', 0, 2600, 1200)

				observer.unobserve(entry.target) // Если нужно наблюдать только один раз
			}
		})
	}

	// Функция, которую нужно запускать при достижении середины элемента
	function stakeItemTotalAnimation(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				animateValue('stake__item-total', 0, 1800000, 1200)

				observer.unobserve(entry.target) // Если нужно наблюдать только один раз
			}
		})
	}

	// Функция, которую нужно запускать при достижении середины элемента
	function utilityFirstRowAnimation(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// utility First Column Items
				const utilityFirstRowItems = document
					.querySelector('.utility__row-first')
					.querySelectorAll('.utility__column-item')

				utilityFirstRowItems.forEach((utilityFirstRowItem, i) => {
					setTimeout(() => {
						utilityFirstRowItem.style.height = `calc(100% - ${i * 20}px)`
					}, i * 500) // Задержка в 500 мс между появлениями изображений
				})

				observer.unobserve(entry.target) // Если нужно наблюдать только один раз
			}
		})
	}

	// // // Функция, которую нужно запускать при достижении середины элемента
	// function utilitySecondRowAnimation(entries, observer) {
	// 	entries.forEach(entry => {
	// 		if (entry.isIntersecting) {
	// 			// utility Second Column Items
	// 			const utilitySecondRowItem = document
	// 				.querySelector('.utility__row-second')
	// 				.querySelector('.utility__column-item')

	// 			utilitySecondRowItem.classList.add('utility__column-item--open')

	// 			observer.unobserve(entry.target) // Если нужно наблюдать только один раз
	// 		}
	// 	})
	// }

	// Функция, которую нужно запускать при достижении середины элемента
	function utilityThirdRowAnimation(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// utility third column items
				const utilityThirdRowItems = document
					.querySelector('.utility__row-third')
					.querySelectorAll('.utility__column-item')

				utilityThirdRowItems.forEach(utilityThirdRowItem => {
					utilityThirdRowItem.classList.add('utility__column-item--scale')
				})

				observer.unobserve(entry.target) // Если нужно наблюдать только один раз
			}
		})
	}

	// Функция, которую нужно запускать при достижении середины элемента
	function supportContentRowAnimation(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// support numbers
				animateValue(
					'support__content-liquidity-first-number',
					0,
					4,
					1200,
					false
				)
				animateValue(
					'support__content-liquidity-second-number',
					0,
					824,
					1200,
					false
				)
				animateValue(
					'support__content-liquidity-third-number',
					0,
					884,
					1200,
					false
				)
				animateValue('support__content-bought-first-number', 0, 63, 1200, false)
				animateValue(
					'support__content-bought-second-number',
					0,
					844,
					1200,
					false
				)

				// support img
				const supportContentImg = document.querySelector(
					'.support__content-img'
				)
				supportContentImg.classList.add('support__content-img--visible')

				observer.unobserve(entry.target) // Если нужно наблюдать только один раз
			}
		})
	}

	// Настройки для наблюдателя
	let options = {
		root: null, // В null по умолчанию, что означает viewport
		rootMargin: '0px',
		threshold: 0.5, // 50% видимости элемента
	}

	let introColumns = document.querySelectorAll('.intro__column')

	// Создание наблюдателя
	let introFirstColumnObserver = new IntersectionObserver(
		introFirstColumnAnimation,
		options
	)
	introFirstColumnObserver.observe(introColumns[0])

	// Создание наблюдателя
	let introSecondColumnObserver = new IntersectionObserver(
		introSecondColumnAnimation,
		options
	)
	introSecondColumnObserver.observe(introColumns[1])

	// Создание наблюдателя
	let introThirdColumnObserver = new IntersectionObserver(
		introThirdColumnAnimation,
		options
	)
	introThirdColumnObserver.observe(introColumns[2])

	// Создание наблюдателя
	let metricsObserver = new IntersectionObserver(metricsAnimation, options)
	const metricsCircle = document.querySelector(
		'.metrics__content-circle-wrapper'
	)
	metricsObserver.observe(metricsCircle)

	// Настройки для наблюдателя
	let NumbersAnimationOptions = {
		root: null, // В null по умолчанию, что означает viewport
		rootMargin: '0px',
		threshold: 0,
	}

	// Создание наблюдателя
	let metricsMarketObserver = new IntersectionObserver(
		metricsMarketAnimation,
		NumbersAnimationOptions
	)
	const metricsMarket = document.querySelector('.metrics__market')
	metricsMarketObserver.observe(metricsMarket)

	// Создание наблюдателя
	let metricsVolumeObserver = new IntersectionObserver(
		metricsVolumeAnimation,
		NumbersAnimationOptions
	)
	const metricsVolume = document.querySelector('.metrics__volume')
	metricsVolumeObserver.observe(metricsVolume)

	// Создание наблюдателя
	let metricsCirculationObserver = new IntersectionObserver(
		metricsCirculationAnimation,
		NumbersAnimationOptions
	)
	const metricsCirculation = document.querySelector('.metrics__circulation')
	metricsCirculationObserver.observe(metricsCirculation)

	// Создание наблюдателя
	let metricsPriceObserver = new IntersectionObserver(
		metricsPriceAnimation,
		NumbersAnimationOptions
	)
	const metricsPrice = document.querySelector('.metrics__price')
	metricsPriceObserver.observe(metricsPrice)

	// Создание наблюдателя
	let stakeItemMillionObserver = new IntersectionObserver(
		stakeItemMillionAnimation,
		NumbersAnimationOptions
	)
	const stakeItemMillion = document.querySelector('.stake__item-million')
	stakeItemMillionObserver.observe(stakeItemMillion)

	// Создание наблюдателя
	let stakeItemStakingObserver = new IntersectionObserver(
		stakeItemStakingAnimation,
		NumbersAnimationOptions
	)
	const stakeItemStaking = document.querySelector('.stake__item-staking')
	stakeItemStakingObserver.observe(stakeItemStaking)

	// Создание наблюдателя
	let stakeItemTotalObserver = new IntersectionObserver(
		stakeItemTotalAnimation,
		NumbersAnimationOptions
	)
	const stakeItemTotal = document.querySelector('.stake__item-total')
	stakeItemTotalObserver.observe(stakeItemTotal)

	// Создание наблюдателя
	let utilityRowFirstObserver = new IntersectionObserver(
		utilityFirstRowAnimation,
		options
	)
	const utilityRowFirst = document
		.querySelector('.utility__row-first')
		.querySelectorAll('.utility__column')[1]
	utilityRowFirstObserver.observe(utilityRowFirst)

	// // Создание наблюдателя
	// let utilityRowSecondObserver = new IntersectionObserver(
	// 	utilitySecondRowAnimation,
	// 	options
	// )
	// const utilityRowSecond = document
	// 	.querySelector('.utility__row-second')
	// 	.querySelectorAll('.utility__column')[1]
	// utilityRowSecondObserver.observe(utilityRowSecond)

	// Создание наблюдателя
	let utilityRowThirdObserver = new IntersectionObserver(
		utilityThirdRowAnimation,
		options
	)
	const utilityRowThird = document
		.querySelector('.utility__row-third')
		.querySelectorAll('.utility__column')[1]
	utilityRowThirdObserver.observe(utilityRowThird)

	let suportAnimationOtions = {
		root: null, // В null по умолчанию, что означает viewport
		rootMargin: '0px',
		threshold: 0, // 50% видимости элемента
	}

	// Создание наблюдателя
	let supportContentRowObserver = new IntersectionObserver(
		supportContentRowAnimation,
		suportAnimationOtions
	)
	const supportContentRow = document.querySelector('.support__content-row')
	supportContentRowObserver.observe(supportContentRow)
})
