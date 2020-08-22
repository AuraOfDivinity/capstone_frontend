import LoginNew from 'views/LoginNew';
import RegisterNew from 'views/RegisterNew';
import AboutUs from 'views/AboutUs';

var Proutes = [
	{
		path: '/loginNew',
		name: 'Login New',
		icon: 'nc-icon nc-caps-small',
		component: LoginNew,
		layout: '/RegulerLay',
	},

	{
		path: '/registerNew',
		name: 'Register New',
		icon: 'nc-icon nc-caps-small',
		component: RegisterNew,
		layout: '/RegulerLay',
	},

	{
		path: '/aboutUs',
		name: 'About Us',
		icon: 'nc-icon nc-caps-small',
		component: AboutUs,
		layout: '/RegulerLay',
	},
];
export default Proutes;
