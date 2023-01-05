/**
 * Substitute to prevent repeated usage of document.getElementById
 */
export function element(id:string):HTMLElement {
    return document.getElementById(id)!;
}

/**
 * Toggle an elements visibility using the hidden class
 */
export function toggleHidden(elem:HTMLElement) {
    if(elem.classList.contains("hidden")) elem.classList.remove("hidden");
    else elem.classList.add("hidden");
}

/**
 * Switch between "panes" by making the former disappear and latter appear
 * 
 * @param from currently visible pane, to be disappeared
 * @param to currently invisible pane, to be appeared
 */
export function switchPane(from:HTMLElement, to:HTMLElement) {
    from.classList.add("hidden");
    to.classList.remove("hidden");
}