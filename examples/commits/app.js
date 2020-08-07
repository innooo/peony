var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='

/**
 * Actual demo
 */

var demo = new Vue({
  data: {
    branches: ['master', 'dev'],
    currentBranch: 'master',
    commits: null
  },

  beforeCreated() {
    console.log('before create')
  },

  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL + self.currentBranch)
      xhr.onload = function () {
        self.commits = JSON.parse(xhr.responseText)
        console.log(self.commits[0].html_url)
      }
      xhr.send()
    }
  },

  created: function () {
    this.fetchData()
  },

  provide() {
    return {
      for: 'demo'
    }
  },

  watch: {
    currentBranch: 'fetchData'
  },

  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },

})
