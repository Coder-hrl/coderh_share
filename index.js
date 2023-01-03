class HPromise {
	static PEDNDING = 'pending';
	static FULFILLED = 'fulfilled';
	static REJECTED = 'rejected';

	constructor(executor) {
		this.state = HPromise.PEDNDING;
		this.value = null;
		this.callbacks = [];
		try {
			executor(
				this.resolve.bind(this),
				this.reject.bind(this),
			);
		} catch (error) {
			this.reject.bind(this);
		}
	}
	resolve(value) {
		setTimeout(() => {
			if (
				this.state === HPromise.PEDNDING
			) {
				this.state = HPromise.FULFILLED;
				this.value = value;
			}
		});
	}
	reject(reason) {
		setTimeout(() => {
			if (
				this.state === HPromise.PEDNDING
			) {
				this.state = HPromise.REJECTED;
				this.value = reason;
			}
		});
	}
	then(onfulfilled, onrejected) {
		return new HPromise(
			(resolve, reject) => {
				setTimeout(() => {
					if (
						typeof onfulfilled !==
						'function'
					) {
						onfulfilled = () => {};
					}
					if (
						typeof onrejected !==
						'function'
					) {
						onrejected = () => {};
					}
					if (
						this.state ===
						HPromise.FULFILLED
					) {
						const res = onfulfilled(
							this.value,
						);
						if (
							res instanceof HPromise
						) {
							res.then(res1 => {
								resolve('我是赛季开打');
							});
						} else {
							resolve(res);
						}
					}
					if (
						this.state ===
						HPromise.REJECTED
					) {
						const res = onrejected(
							this.value,
						);
						resolve(res);
					}
				});
			},
		);
	}
}

const p = new HPromise(
	(resolve, reject) => {
		resolve('resolve');
		// reject('reject');
	},
)
	.then(
		res => {
			console.log('res:' + res);
			return '我是赛季开打';
			// return new HPromise(resolve =>
			// 	resolve('我是赛季开打'),
			// );
		},
		err => {
			console.log('err:' + err);
			return '链式调用';
		},
	)
	.then(
		res => {
			console.log('other:' + res);
		},
		err => {
			console.log(err);
		},
	);
