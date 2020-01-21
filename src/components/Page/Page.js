import Comment from "../Comment/index.vue";

export default {
  name: "page",
  components: {
    Comment
  },
  props: [],
  data() {
    return {
      id: this.$route.params.id,
      author: {},
      relatedPosts: [],
      picture: "",
      postInfo: {},
      comments: [],
      stuff: ''
    };
  },
  computed: {},
  mounted() {
    //get the other posts for this user
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then(response => response.json())
      .then(json => {
        this.postInfo = json;
        //get the user
        fetch(
          `https://jsonplaceholder.typicode.com/users/${this.postInfo.userId}`
        )
          .then(response => response.json())
          .then(json => (this.author = json));

        //get the user's posts for related articles
        fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${this.postInfo.userId}`
        )
          .then(response => response.json())
          .then(json => (this.relatedPosts = json));
      });

    //get all the comments for this post
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.id}`)
      .then(response => response.json())
      .then(json => {
        this.comments = json.map(comment => {
          return {
            title: comment.name,
            description: comment.body,
            active: false
          };
        });
      });

    //store a random profile image
    fetch(`https://randomuser.me/api/`)
      .then(response => response.json())
      .then(json => (this.picture = json.results[0].picture.thumbnail));
  },
  methods: {
    // changePage: function(post) {
    //   this.stuff = post;
    //   this.$router.push({ path: `/author/post/${post.id}` });
    // }
  }
};
