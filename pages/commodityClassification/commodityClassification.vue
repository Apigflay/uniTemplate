<template>
	<view>
		<navigationbar></navigationbar>
		宝贝分类
		<!-- muted="muted" -->
		<video ref="video" id="my_video" class="video" x5-video-player-type="h5-page" :x5-video-player-fullscreen='true'
		 :webkit-playsinline="true" :playsinline="true" :autoplay="true" :loop="true" objectFit="cover" :muted='false'
		  :controls="false" src="../../static/promotionalVideo.mp4"
		 :show-center-play-btn="false" >
		 </video>
		<tabbar :tabbar-id="tabbarId"></tabbar>
	</view>
</template>

<script>
	import tabbar from '../../components/tabbar/tabbar.vue'
	import navigationbar from '../../components/navigation-bar/navigation-bar.vue';
	export default {
		data() {
			return {
				tabbarId:2,
			};
		},
		components:{
			tabbar,
			navigationbar
		},
	}
</script>

<style lang="scss">

</style>
