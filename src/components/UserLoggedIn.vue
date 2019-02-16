<template>
	<div>
		<b>{{user.email}}</b> ({{roleActiveDescription}})

		<v-menu bottom left>

			<v-btn slot="activator" dark icon>
				<v-icon>account_circle</v-icon>
			</v-btn>

			<v-container class="background">
				<v-layout column>

					<template v-if="user.roles && user.roles.length>1">

						<v-flex>
							<p class="font-weight-bold">Visualizza come:</p>
						</v-flex>

						<v-flex>
							<v-list>
								<v-list-tile
									v-for="role in user.roles"
									:key="role.id"
									v-if="role.name!=roleActive"
									@click="onClickChangeRole(role)"
								>
									<v-list-tile-title>{{ role.description }}</v-list-tile-title>
								</v-list-tile>
							</v-list>
						</v-flex>

						<v-divider></v-divider>

					</template>

					<v-flex>
						<v-btn flat @click.prevent="onClickLogout" style="width:100%;">
							Esci <v-spacer />
							<v-icon right dark>exit_to_app</v-icon>
						</v-btn>
					</v-flex>

					<v-flex>
						<v-btn flat @click.prevent="onClickMyProfile" style="width:100%;">
							Mio profilo <v-spacer />
							<v-icon right dark>face</v-icon>
						</v-btn>
					</v-flex>

				</v-layout>
			</v-container>
		</v-menu>
	</div>
</template>

<script>
import { mapBinding, mapDispatch } from '~/common/utils/vuex'


export default {

	name: 'user-logged-in',

	props: {
	},

	data: () => ({
	}),

	computed: mapBinding({
		roleActive: "<auth/roleActive",
		user: "<auth/user",
		roleActiveDescription: "<auth/roleActiveDescription",
	}),

	methods: {

		...mapDispatch({
			onClickLogout: { path: "auth/logout", route: "login" },
		}),

		onClickMyProfile() {
			this.$router.push({ name: "users.edit", params: {userId: this.user.id} });
		},

		onClickChangeRole (role) {
			this.$store.commit ( "auth/roleActive", role.name );
			this.$store.commit ( "auth/roleLast", role.name );
		},

	},

};
</script>

<style lang="stylus" scoped>
	.background {
		background-color: white;
	}
</style>
