import './stylus/all.styl';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { navToggler } from './ts/navToggler';
library.add(faBars);
dom.i2svg()
    .then(() => {
        const headerNav: navToggler = new navToggler({
            'triggers': ['.site-header__controls'],
            'toggleItems': ['.site-header__nav', '#site-overlay'],
            'activeClass': 'active'
        })
        headerNav.watch();
    });