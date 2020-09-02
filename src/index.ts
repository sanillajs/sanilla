/*
 * index.ts
 * Created on Wed Sep 02 2020
 *
 * Copyright (c) Sanilla. Licensed under the MIT License.
 */

export const stringToEngine = (html: string) => {
	const template = document.createElement('template');
	template.innerHTML = html;

	const fragment = template.content.cloneNode(true) as HTMLElement;
	const scripts = fragment.querySelectorAll('script');
	scripts.forEach((script: HTMLElement, idx: number) => {
		const src = script.getAttribute('src');
		if ( src ) {
			const newScript = document.createElement('script');
			newScript.src = src;
			fragment.appendChild(newScript);
		} else {
			eval(script.innerText);
		}
		script.remove();
	});

	return fragment.children;
}

export const append = (selector: (string|HTMLElement), html: (string|HTMLElement|HTMLCollection)) => {
	if ( typeof html === 'string' ) {
		html = stringToEngine(html);
	}

	if ( typeof selector === 'string' ) {
		selector = document.querySelector(selector) as HTMLElement;
	}

	if (selector && selector instanceof HTMLElement ) {
		if ( html instanceof HTMLElement ) {
			selector.append(html);
		} else if ( html instanceof HTMLCollection ) {
			while ( html.length > 0 ) {
				selector.append(html[0]);
			}
		}
	} else  {
		throw Error('Wrong selector');
	}
}

export const prepend = (selector: (string|HTMLElement), html: (string|HTMLElement|HTMLCollection)) => {
	if ( typeof html === 'string' ) {
		html = stringToEngine(html);
	}

	if ( typeof selector === 'string' ) {
		selector = document.querySelector(selector) as HTMLElement;
	}

	if (selector && selector instanceof HTMLElement ) {
		if ( html instanceof HTMLElement ) {
			selector.prepend(html);
		} else if ( html instanceof HTMLCollection ) {
			while ( html.length > 0 ) {
				selector.prepend(html[0]);
			}
		}
	} else {
		throw Error('Wrong selector');
	}
}
