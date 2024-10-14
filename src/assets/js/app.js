AOS.init({
	once: true, // whether animation should happen only once - while scrolling down
})

document.addEventListener('DOMContentLoaded', () => {
	document.body.classList.add('disable-scroll')
	var preloader = document.querySelector('.preloader')
	var minimumTime = 2500 // Минимальное время отображения прелоадера в миллисекундах
	var startTime = new Date().getTime()
	const opacityTransition = 1000

	const hideLoader = () => {
		var currentTime = new Date().getTime()
		var elapsedTime = currentTime - startTime
		var remainingTime = minimumTime - elapsedTime

		if (remainingTime > 0) {
			setTimeout(function () {
				document.body.classList.remove('disable-scroll')
				preloader.classList.add('preloader--hide')

				setTimeout(() => {
					preloader.style.zIndex = '-1'
				}, opacityTransition)
			}, remainingTime)
		} else {
			document.body.classList.remove('disable-scroll')
			preloader.classList.add('preloader--hide')

			setTimeout(() => {
				preloader.style.zIndex = '-1'
			}, opacityTransition)
		}
	}

	window.addEventListener('load', function () {
		hideLoader()
	})

	const mobileNavigationMenu = document.querySelector('.mobile-navigation-menu')
	const burgerOpenButton = document.querySelector('.burger--open')
	const burgerCloseButton = document.querySelector('.burger--close')

	burgerOpenButton.addEventListener('click', () => {
		mobileNavigationMenu.classList.add('mobile-navigation-menu--visible')
		document.body.classList.add('disable-scroll')
	})

	burgerCloseButton.addEventListener('click', () => {
		mobileNavigationMenu.classList.remove('mobile-navigation-menu--visible')
		document.body.classList.remove('disable-scroll')
	})

	// Function to animate values
	function animateValue(className, start, end, duration, isNeedDollar = true) {
		const obj = document.querySelector(`.${className}`)
		const endValue = parseInt(end.replace(/\s/g, ''), 10) // Преобразуем end в числовое значение, удаляя пробелы
		const range = endValue - start
		let startTime = null

		function formatValue(value) {
			return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') // Форматируем значение с запятыми
		}

		function step(currentTime) {
			if (!startTime) startTime = currentTime
			const progress = currentTime - startTime
			const stepValue = Math.min(
				start + (progress / duration) * range,
				endValue
			)
			const formattedValue = formatValue(Math.floor(stepValue))

			obj.textContent = isNeedDollar
				? `$${formattedValue}`
				: `${formattedValue}`

			if (progress < duration) {
				requestAnimationFrame(step)
			} else {
				obj.textContent = isNeedDollar
					? `$${formatValue(endValue)}`
					: `${formatValue(endValue)}`
			}
		}

		requestAnimationFrame(step)
	}

	// Toggle frequently asked questions
	const frequentlyQuestionImgs = document.querySelectorAll(
		'.frequently__question-img'
	)
	frequentlyQuestionImgs.forEach((img, i) => {
		img.addEventListener('click', () => {
			const question = document.querySelectorAll('.frequently__question')[i]
			question.classList.toggle('frequently__question--open')
		})
	})

	// Intersection Observer callbacks
	const observerCallbacks = {
		introFirstColumn(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const imgs = document.querySelectorAll(
						'.intro__column-first .intro__column-img'
					)
					imgs.forEach((img, i) => {
						setTimeout(
							() => img.classList.add('intro__column-img--visible'),
							i * 150
						)
					})
					observer.unobserve(entry.target)
				}
			})
		},
		introSecondColumn(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const imgs = document.querySelectorAll(
						'.intro__column-second .intro__column-img'
					)
					imgs.forEach((img, i) => {
						setTimeout(() => {
							img.classList.add('intro__column-img--visible')
							if (i === imgs.length - 1) {
								img.classList.add('intro__column-toggle--switch')
							}
						}, i * 500)
					})
					observer.unobserve(entry.target)
				}
			})
		},
		introThirdColumn(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const curtain = document.querySelector('.intro__column-curtain')
					curtain.classList.add('intro__column-curtain--open')

					const imgs = document.querySelectorAll(
						'.intro__column-third .intro__column-img'
					)
					imgs.forEach((img, i) => {
						setTimeout(
							() => img.classList.add('intro__column-img--visible'),
							i * 1500
						)
					})
					observer.unobserve(entry.target)
				}
			})
		},
		metrics(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const curtain = document.querySelector(
						'.metrics__content-circle-curtain'
					)
					curtain.classList.add('metrics__content-circle-curtain--open')

					const gradient = document.querySelector('.metrics__content-gradient')
					gradient.classList.add('metrics__content-gradient--visible')

					observer.unobserve(entry.target)
				}
			})
		},
		metricsMarket(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					animateValue('metrics__market', 0, '47572397', 1200)
					observer.unobserve(entry.target)
				}
			})
		},
		metricsVolume(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					animateValue('metrics__volume', 0, '183241', 1200)
					observer.unobserve(entry.target)
				}
			})
		},
		metricsCirculation(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					animateValue('metrics__circulation', 0, '2575183', 1200, false)
					observer.unobserve(entry.target)
				}
			})
		},
		metricsPrice(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					animateValue('metrics__price', 0, '19', 1200)
					observer.unobserve(entry.target)
				}
			})
		},
		stakeItemMillion(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					animateValue('stake__item-million', 0, '30', 1200)
					observer.unobserve(entry.target)
				}
			})
		},
		stakeItemStaking(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					animateValue('stake__item-staking', 0, '2600', 1200)
					observer.unobserve(entry.target)
				}
			})
		},
		stakeItemTotal(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					animateValue('stake__item-total', 0, '1800000', 1200)
					observer.unobserve(entry.target)
				}
			})
		},
		utilityFirstRow(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const items = document.querySelectorAll(
						'.utility__row-first .utility__column-item'
					)
					items.forEach((item, i) => {
						setTimeout(() => {
							item.style.height =
								window.innerWidth <= 768
									? `calc(100% - ${i * 10}px)`
									: `calc(100% - ${i * 20}px)`
						}, i * 500)
					})

					observer.unobserve(entry.target)
				}
			})
		},
		utilityThirdRow(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const items = document.querySelectorAll(
						'.utility__row-third .utility__column-item'
					)
					items.forEach(item => {
						item.classList.add('utility__column-item--scale')
					})
					observer.unobserve(entry.target)
				}
			})
		},
		supportContentRow(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					animateValue('support__content-liquidity', 0, '4824884', 1200)
					animateValue('support__content-bought', 0, '63844', 1200, false)

					const img = document.querySelector('.support__content-img')
					img.classList.add('support__content-img--visible')
					observer.unobserve(entry.target)
				}
			})
		},
	}

	// Intersection Observer options
	const observerOptions = {
		root: null, // Default is the viewport
		rootMargin: '0px',
		threshold: 0.5, // 50% visibility
	}

	const numberObserverOptions = {
		root: null,
		rootMargin: '0px',
		threshold: 0,
	}

	// Create observers
	const createObserver = (target, callback, options) => {
		const observer = new IntersectionObserver(callback, options)
		observer.observe(target)
		return observer
	}

	const introColumns = document.querySelectorAll('.intro__column')
	createObserver(
		introColumns[0],
		observerCallbacks.introFirstColumn,
		observerOptions
	)
	createObserver(
		introColumns[1],
		observerCallbacks.introSecondColumn,
		observerOptions
	)
	createObserver(
		introColumns[2],
		observerCallbacks.introThirdColumn,
		observerOptions
	)

	const metricsCircle = document.querySelector(
		'.metrics__content-circle-wrapper'
	)
	createObserver(metricsCircle, observerCallbacks.metrics, observerOptions)

	createObserver(
		document.querySelector('.metrics__market'),
		observerCallbacks.metricsMarket,
		numberObserverOptions
	)
	createObserver(
		document.querySelector('.metrics__volume'),
		observerCallbacks.metricsVolume,
		numberObserverOptions
	)
	createObserver(
		document.querySelector('.metrics__circulation'),
		observerCallbacks.metricsCirculation,
		numberObserverOptions
	)
	createObserver(
		document.querySelector('.metrics__price'),
		observerCallbacks.metricsPrice,
		numberObserverOptions
	)

	createObserver(
		document.querySelector('.stake__item-million'),
		observerCallbacks.stakeItemMillion,
		numberObserverOptions
	)
	createObserver(
		document.querySelector('.stake__item-staking'),
		observerCallbacks.stakeItemStaking,
		numberObserverOptions
	)
	createObserver(
		document.querySelector('.stake__item-total'),
		observerCallbacks.stakeItemTotal,
		numberObserverOptions
	)

	createObserver(
		document.querySelector('.utility__row-first .utility__column'),
		observerCallbacks.utilityFirstRow,
		observerOptions
	)

	window.addEventListener('resize', () => {
		createObserver(
			document.querySelector('.utility__row-first .utility__column'),
			observerCallbacks.utilityFirstRow,
			observerOptions
		)
	})

	createObserver(
		document.querySelector('.utility__row-third .utility__column'),
		observerCallbacks.utilityThirdRow,
		observerOptions
	)

	const supportContentRow = document.querySelector('.support__content-row')
	createObserver(supportContentRow, observerCallbacks.supportContentRow, {
		...observerOptions,
		threshold: 0,
	})
})
