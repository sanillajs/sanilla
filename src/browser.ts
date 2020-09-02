/*
 * browser.ts
 * Created on Wed Sep 02 2020
 *
 * Copyright (c) Sanilla. Licensed under the MIT License.
 */

import * as sanilla from './index';

interface Sanilla {
	stringToEngine: (string) => HTMLCollection;
	append: (selector: (string | HTMLElement), html: (string | HTMLElement | HTMLCollection)) => void;
	prepend: (selector: (string | HTMLElement), html: (string | HTMLElement | HTMLCollection)) => void;
	mount: (selector: (string | HTMLElement), html: (string | HTMLElement | HTMLCollection)) => void;
}

declare global {
	interface Window {
		Sanilla: any;
	}
}

window.Sanilla = {
	stringToEngine: sanilla.stringToEngine,
	append: sanilla.append,
	prepend: sanilla.prepend,
	mount: sanilla.mount,
} as any;
