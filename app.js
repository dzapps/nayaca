

const app = new Vue({
  el:'#app',
  data() {

    return {
      name: '',
      current_position: '',
      current_company: '',
      current_location: '',
      about_me: '',
      accomplishment: '',
      coding: '',
      degree: '',
      languages: '',
      salary: '',
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
      video: '',
      desired_position: '',
      positiona: '',
      startdatea: '',
      enddatea: '',
      noenda: '',
      companya: '',
      locationa: '',
      tasksa: '',
      
    }
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
},
    perioda() {
      if (this.startdatea && this.enddatea && this.noenda) {
        return 'since ' + this.startdatea;
      } else if (this.startdatea && this.enddatea) {
        return this.startdatea + ' - ' + this.enddatea;
      } else if (this.startdatea && this.noenda) {
        return 'since ' + this.startdatea;
      } else if (this.enddatea && this.noenda) {
        return null;
      } else if (this.startdatea) {
        return 'since ' + this.startdatea;
      } else if (this.enddatea) {
        return 'until ' + this.enddatea;
      } else if (this.noenda) {
        return 'I currently work here.';
      } else {
        return null;
      }
    }
  },
  methods: {

/*     progressivo: function() {
       if (this.name = true && this.email = true) {
         return
       }
        this.about_isVisible = !this.about_isVisible,
        this.contact_isVisible = !this.contact_isVisible,
        this.experience_isVisible = !this.experience_isVisible
      }, */

/*      exportPdf: function() {
       const doc = new jsPDF();
       doc.addHTML(document.getElementById('resumepage'),function() {
    doc.save('nayaca.pdf');
});
}, */

    exportPdf() {
      const doc = window.print();
      doc.save('hello.pdf');
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
