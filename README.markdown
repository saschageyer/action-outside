action-outside :mag_right:
-------
_Invoke a callback function when clicked or tabbed outside one or multiple DOM elements._

![action-outside](https://github.com/saschageyer/action-outside/blob/master/action-outside.gif)

```javascript
import ActionOutside from 'action-outside';

const menu = document.querySelector('.menu');
const actionOutsideMenu = new ActionOutside(menu, () => {
  console.log('clicked or tabbed outside menu!');
});
actionOutsideMenu.listen(true);
```

### [NPM](https://www.npmjs.com/package/action-outside)
```sh
npm install --save action-outside
```

### parameters
parameter | type | description
------ | ---- | -------
elements | DOM element or array of DOM elements | clicking or tabbing outside these elements will invoke the callback function
callback | function | is invoked after a click or tab outside the specified elements
```javascript
const myActionOutside = new ActionOutside(elements, callback);
```

### methods
method | argument type | description
------ | ---- | -----------
.listen() | boolean | add or remove the event listener for mouseup (click) and keyup (tab)
```javascript
const myActionOutside = new ActionOutside(elements, callback);
myActionOutside.listen(true);
myActionOutside.listen(false);
```

### [demo](https://saschageyer.github.io/action-outside/)
```javascript
import ActionOutside from 'action-outside';

const dropdown = document.querySelector('.dropdown');
const dropdownButton = document.querySelector('.dropdown__button');
const dropdownList = document.querySelector('.dropdown__list');
let expanded = (dropdownButton.getAttribute('aria-expanded') == 'true');

dropdownButton.addEventListener('click', toggleDropdown);
const dropdownActionOutside = new ActionOutside(dropdown, toggleDropdown);

function toggleDropdown() {
  dropdownButton.setAttribute('aria-expanded', !expanded);
  dropdownList.setAttribute('aria-hidden', expanded);
  dropdownActionOutside.listen(!expanded);
  expanded = !expanded;
}
```
Note: you most likely want your callback function to remove the event listener by using the listen(false) method!
