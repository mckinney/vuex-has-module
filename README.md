# Vuex Has Module

Vuex plugin for detcting if a dynamic module has been registered

## Getting Started

```
import Vue from 'vue';
import Vuex from 'vuex';
import hasModule from 'vuex-has-module';

Vue.use(Vuex);

export new Vuex.Store({
	plugins: [
		hasModule,
	],
});
```

## Example Usage

```
export default {
	namespaced: true,
	actions: {
		register(context, todo) {
			if (!this.hasModule("path/to/dynamic/module")) {
				this.registerModule(['path', 'to', 'dynamic', 'module'], {
					// ...
				})
			}
		},
	},
};
```