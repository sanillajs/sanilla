/*
 * browser.ts
 * Created on Wed Sep 02 2020
 *
 * Copyright (c) Sanilla. Licensed under the MIT License.
 */

import { Sanilla } from './index';

declare global {
	interface Window {
		Sanilla: any;
	}
}

if ( !window.Sanilla ) {
	window.Sanilla = new Sanilla();
}
