/**
 * Check registred module
 * @param {Array|String} modulePath - module path ex: 'my/nested/module  ['my', 'nested', 'module']
 * @return {Boolean}
*/

export default (store) => {
	// eslint-disable-next-line no-param-reassign
	store.hasModule = function hasModule(modulePath) {
		let moduleExists = false;

		if (modulePath) {
			if (!Array.isArray(modulePath)) {
				// eslint-disable-next-line no-param-reassign
				modulePath = modulePath.split("/");
			}

			// eslint-disable-next-line no-underscore-dangle
			let m = this._modules.root;
			moduleExists = modulePath.every((p) => {
				// eslint-disable-next-line no-underscore-dangle
				m = m._children[p];
				return m;
			});
		}

		return moduleExists;
	};
};
