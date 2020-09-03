/*
 * index.ts
 * Created on Wed Sep 02 2020
 *
 * Copyright (c) Sanilla. Licensed under the MIT License.
 */

export class Sanilla {

	constructor() {
	}

	private elementBuilder(html: Element, mounter: (...args: any[]) => any) {
	}

	public stringToEngine(html: string) {
		const template = document.createElement('template');
		template.innerHTML = html;

		const fragment = template.content.cloneNode(true) as HTMLElement;

		return fragment.children;
	}

	public append(selector: (string|HTMLElement), html: (string|HTMLElement|HTMLCollection)) {
		if ( typeof html === 'string' ) {
			html = this.stringToEngine(html);
		}

		if ( typeof selector === 'string' ) {
			selector = document.querySelector(selector) as HTMLElement;
		}

		if (selector && selector instanceof HTMLElement ) {
			if ( html instanceof HTMLElement ) {
				if ( html.tagName.toLowerCase() === 'script' ) {
					const src = html.getAttribute('src');
					if ( !src ) {
						window.eval(html.innerText);
					}
				} else {
					selector.append(html);
				}
			} else if ( html instanceof HTMLCollection ) {
				while ( html.length > 0 ) {
					if ( html[0].tagName.toLowerCase() === 'script' ) {
						const script = html[0] as HTMLElement;
						const src = script.getAttribute('src');
						if ( src ) {
							const newScript = document.createElement('script');
							newScript.src = src;
							selector.append(newScript);
						} else {
							window.eval(script.innerText);
						}
						script.remove();
					} else {
						selector.append(html[0]);
					}
				}
			}
		} else  {
			throw Error('Wrong selector');
		}
	}

	public prepend(selector: (string|HTMLElement), html: (string|HTMLElement|HTMLCollection)) {
		if ( typeof html === 'string' ) {
			html = this.stringToEngine(html);
		}

		if ( typeof selector === 'string' ) {
			selector = document.querySelector(selector) as HTMLElement;
		}

		if (selector && selector instanceof HTMLElement ) {
			if ( html instanceof HTMLElement ) {
				if ( html.tagName.toLowerCase() === 'script' ) {
					const src = html.getAttribute('src');
					if ( !src ) {
						window.eval(html.innerText);
					}
				} else {
					selector.prepend(html);
				}
			} else if ( html instanceof HTMLCollection ) {
				while ( html.length > 0 ) {
					if ( html[0].tagName.toLowerCase() === 'script' ) {
						const script = html[0] as HTMLElement;
						const src = script.getAttribute('src');
						if ( src ) {
							const newScript = document.createElement('script');
							newScript.src = src;
							selector.append(newScript);
						} else {
							window.eval(script.innerText);
						}
						script.remove();
					} else {
						selector.append(html[0]);
					}
				}
			}
		} else {
			throw Error('Wrong selector');
		}
	}

	public mount(selector: (string|HTMLElement), html: (string|HTMLElement|HTMLCollection)) {
		if ( typeof selector === 'string' ) {
			selector = document.querySelector(selector) as HTMLElement;
		}

		selector.innerHTML = '';

		this.append(selector, html);
	}

}
