import Post from "../Post/index.vue";

export default {
  name: "Board",
  components: {
    Post
  },
  props: [],
  data() {
    return {
      id: this.$route.params.id,
      posts: {},
      author: {},
      picture: "",
      stuff: ""
    };
  },
  computed: {},
  mounted() {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.id}`)
      .then(response => response.json())
      .then(json => (this.posts = json));
    fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
      .then(response => response.json())
      .then(json => (this.author = json));
    fetch(`https://randomuser.me/api/`)
      .then(response => response.json())
      .then(json => (this.picture = json.results[0].picture.thumbnail));
  },
  methods: {
  
  }
};
