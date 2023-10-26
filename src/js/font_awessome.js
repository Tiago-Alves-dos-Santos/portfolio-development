import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import * as fontAwessomeSolid from '@fortawesome/free-solid-svg-icons';
import * as fontAwessomeBrand from '@fortawesome/free-brands-svg-icons';
import * as fontAwessomeRegular from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(
    fontAwessomeSolid.faMoon, fontAwessomeSolid.faSun, fontAwessomeSolid.faBars, fontAwessomeSolid.faFilePdf,
    //brands
    fontAwessomeBrand.faWhatsapp, fontAwessomeBrand.faLinkedin, fontAwessomeBrand.faTelegram, fontAwessomeBrand.faGithub
    //regular
);

export default FontAwesomeIcon