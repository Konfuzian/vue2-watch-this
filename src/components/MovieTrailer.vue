<template>
  <div v-if="videos.length > 0" class="iframe-container center">
    <iframe :src="videoSrc(videos[0])" frameBorder="0" allowfullscreen />
  </div>
</template>

<script>
export default {
  props: {
    videos: Array,
  },
  methods: {
    videoSrc(video) {
      if (!video) return "";
      const urls = {
        YouTube: `https://www.youtube.com/embed/${video.key}?modestbranding=1`,
        Vimeo: `https://player.vimeo.com/video/${video.key}`,
      };
      return urls[video.site];
    },
  },
};
</script>

<style scoped>
.iframe-container {
  background: url(./spinner.gif)
    center center no-repeat;
  background-size: contain;
}

iframe {
  margin-top: 1rem;
  width: 100%;
  height: 200px;
}
</style>