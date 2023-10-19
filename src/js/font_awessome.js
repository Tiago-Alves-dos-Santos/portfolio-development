import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import * as fontAwessomeSolid from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(
    fontAwessomeSolid.faMoon, fontAwessomeSolid.faSun, fontAwessomeSolid.faBars
);

export default FontAwesomeIcon