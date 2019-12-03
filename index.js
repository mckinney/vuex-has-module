/**
 * Check registred module
 * @param {Array|String} modulePath - module path ex: 'my/nested/module  ['my', 'nested', 'module']
 * @return {Boolean}
*/

function installer(store) {
	return (modulePath) => {
		if (!modulePath) {
			throw new Error("vuex-has-module expects a path argument.");
		}

		let storeModule = store._modules.root;
		modulePath = !Array.isArray(modulePath) ? modulePath.split("/") : modulePath;

		return modulePath.every((path) => {
			storeModule = storeModule._children[path];
			return storeModule;
		});
	}
}

export default (store) => {
	const hasModule = installer(store);
	store.hasModule = hasModule;
};

export { installer };