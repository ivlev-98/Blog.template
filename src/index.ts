import './stylus/all.styl';
import { navToggler } from './ts/navToggler';
import { ImgPreview } from './ts/imgPreview';
import { AlertClose } from './ts/alertClose';
const headerNav: navToggler = new navToggler({
    'triggers': ['.site-header__controls'],
    'toggleItems': ['.site-header__nav', '#site-overlay'],
    'activeClass': 'active'
})
headerNav.watch();
const rightNav: navToggler = new navToggler({
    'triggers': ['#menuTrigger'],
    'toggleItems': ['#site-overlay2', '.container', '.site-header'],
    'activeClass': 'active'
})
rightNav.watch();
if (document.querySelector("#imgLabel > .img")) {
    const imgPreview = new ImgPreview("#img", "#imgLabel > .img");
    imgPreview.watch("#imgLabel > svg");
}
const alertClose: AlertClose = new AlertClose('.alert > span');
if (document.querySelector('.alert')) {
    alertClose.watch();
}