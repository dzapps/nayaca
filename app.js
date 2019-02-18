const app = new Vue({
  el:'#app',
  data: {
    name: '',
    current_position: '',
    current_company: '',
    current_location: '',
    about_me: '',
    email: '',
    phone: '',
    website: '',
    linkedIn: '',
    address: '',
    email: '',
    phone: '',
    website: '',
    linkedIn: '',
    address: '',
    position: '',
    startdate: '',
    enddate: '',
    noend: '',
    location: '',
    tasks: '',
    about_isVisible: true,
    contact_isVisible: false,
    experience_isVisible: false
  },
  computed: {
    currently: function() {
  if (this.current_position && this.current_company && this.current_location) {
    return this.current_position + ' | ' + this.current_company + ' | ' + this.current_location;
  } else if (this.current_position && this.current_company) {
    return this.current_position + ' | ' + this.current_company;
  } else if (this.current_position && this.current_location) {
    return this.current_position + ' | ' + this.current_location;
  } else if (this.current_company && this.current_location) {
    return this.current_company + ' | ' + this.current_location;
  } else {
    return this.current_position || this.current_company || this.current_location;
  }
    }
  },
  methods: {
    toggle: function() {
       this.about_isVisible = !this.about_isVisible,
       this.contact_isVisible = !this.contact_isVisible,
       this.experience_isVisible = !this.experience_isVisible
     },
     submitResume: function() {
       this.name = '',
       this.current_position = '',
       this.current_company = '',
       this.current_location = '',
       this.about_me = ''
     },
    resetResume: function() {
      this.name = '',
      this.current_position = '',
      this.current_company = '',
      this.current_location = '',
      this.about_me = ''
     }
    }

});


/*

const http = require('http');
const fs = require('fs');


const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
  if(err){
    throw err;
  }

  const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write(html);
    res.end();
  });

  server.listen(port, hostname, () => {
    console.log('Server started on port '+port)
  });

}); */
