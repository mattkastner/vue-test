import comment from "../Comment/index.vue";

export default {
  name: "Post",
  components: {
    comment
  },
  props: ["post"],
  data() {
    return {
      postInfo: {},
      stuff: ""
    };
  },
  computed: {
    commentsSize: function() {
      let size = 0;
      for (let key in this.comments) {
        if (this.comments.hasOwnProperty(key)) size++;
      }
      return size;
    }
  },
  mounted() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.post.id}`)
      .then(response => response.json())
      .then(json => (this.postInfo = json));
  },
  methods: {
    navigateToPage: function() {
      this.$router.push({ path: `/author/post/${this.postInfo.id}` });
    }
  }
};
