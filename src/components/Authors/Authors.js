export default {
  name: "Authors",
  components: {},
  props: [],
  data() {
    return {
      stuff: '',
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" }
      ]
    };
  },
  computed: {},
  mounted() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(json => {
        this.items = json.map(author => {
          return {
            id: author.id,
            username: author.username,
            "Full Name": author.name,
            phone: author.phone,
            company: author.company.name,
            website: author.website
          };
        });
      });
  },
  methods: {
    navigateToAuthor: function(item, index, event) {
      this.stuff = {item, index, event}
      this.$router.push({path: `/author/${item.id}`})
    }
  }
};
