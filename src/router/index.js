import Vue from 'vue'
import Router from 'vue-router'
import SocioProfilo from '../pages/socio-profilo/edit-pag'
import SocioDashboard from '../pages/socio-dashboard/edit-pag'
import SocioTessera from '../pages/socio-tessera/edit-pag'
import SocioRinnovo from '../pages/socio-rinnovo/edit-pag'

Vue.use(Router)

export default new Router({
	mode: 'history',

	routes: [
		{
			path: '/',
			redirect: '/profilo'
		},

		{
			path: '/profilo',
			name: "socio.profilo",
			component: SocioProfilo,
			//props: (route) => ({ name: route.query.name })
		},

		{
			path: '/dashboard',
			name: "socio.dashboard",
			component: SocioDashboard,
			//props: (route) => ({ name: route.query.name })
		},

		{
			path: '/tessera',
			name: "socio.tessera",
			component: SocioTessera,
			//props: (route) => ({ name: route.query.name })
		},

		{
			path: '/rinnovo',
			name: "socio.rinnovo",
			component: SocioRinnovo,
			//props: (route) => ({ name: route.query.name })
		},
	]
})
