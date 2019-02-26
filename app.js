

const app = new Vue({
  el:'#app',
  data: {
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
      position1: '',
      company1: '',
      location1: '',
      startdate1: '',
      enddate1: '',
      noend1: false,
      tasks1: '',
      position2: '',
      company2: '',
      location2: '',
      startdate2: '',
      enddate2: '',
      noend2: false,
      tasks2: '',
      position3: '',
      company3: '',
      location3: '',
      startdate3: '',
      enddate3: '',
      noend3: false,
      tasks3: '',
      study_s1: '',
      institution_s1: '',
      location_s1: '',
      startdate_s1: '',
      enddate_s1: '',
      noend_s1: false,
      achievements_s1: '',
      study_s2: '',
      institution_s2: '',
      location_s2: '',
      startdate_s2: '',
      enddate_s2: '',
      noend_s2: false,
      achievements_s2: '',
      study_s3: '',
      institution_s3: '',
      location_s3: '',
      startdate_s3: '',
      enddate_s3: '',
      noend_s3: false,
      achievements_s3: '',
      max: 100,
      valuebar: 10
  },

  computed: {
/*    currently: function() {
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
},*/
    period1() {
      if (this.startdate1 && this.enddate1 && this.noend1) {
        return 'since ' + this.startdate1;
      } else if (this.startdate1 && this.enddate1) {
        return this.startdate1 + ' - ' + this.enddate1;
      } else if (this.startdate1 && this.noend1) {
        return 'since ' + this.startdate1;
      } else if (this.enddate1 && this.noend1) {
        return null;
      } else if (this.startdate1) {
        return 'since ' + this.startdate1;
      } else if (this.enddate1) {
        return 'until ' + this.enddate1;
      } else if (this.noend1) {
        return 'I currently work here.';
      } else {
        return null;
      }
    },

    period2() {
      if (this.startdate2 && this.enddate2 && this.noend2) {
        return 'since ' + this.startdate2;
      } else if (this.startdate2 && this.enddate2) {
        return this.startdate2 + ' - ' + this.enddate2;
      } else if (this.startdate2 && this.noend2) {
        return 'since ' + this.startdate2;
      } else if (this.enddate2 && this.noend2) {
        return null;
      } else if (this.startdate2) {
        return 'since ' + this.startdate2;
      } else if (this.enddate2) {
        return 'until ' + this.enddate2;
      } else if (this.noend2) {
        return 'I currently work here.';
      } else {
        return null;
      }
    },

    period3() {
      if (this.startdate3 && this.enddate3 && this.noend3) {
        return 'since ' + this.startdate3;
      } else if (this.startdate3 && this.enddate3) {
        return this.startdate3 + ' - ' + this.enddate3;
      } else if (this.startdate3 && this.noend3) {
        return 'since ' + this.startdate3;
      } else if (this.enddate3 && this.noend3) {
        return null;
      } else if (this.startdate3) {
        return 'since ' + this.startdate3;
      } else if (this.enddate3) {
        return 'until ' + this.enddate3;
      } else if (this.noend3) {
        return 'I currently work here.';
      } else {
        return null;
      }
    },

    period_s1() {
      if (this.startdate_s1 && this.enddate_s1 && this.noend_s1) {
        return 'since ' + this.startdate_s1;
      } else if (this.startdate_s1 && this.enddate_s1) {
        return this.startdate_s1 + ' - ' + this.enddate_s1;
      } else if (this.startdate_s1 && this.noend_s1) {
        return 'since ' + this.startdate_s1;
      } else if (this.enddate_s1 && this.noend_s1) {
        return null;
      } else if (this.startdate_s1) {
        return 'since ' + this.startdate_s1;
      } else if (this.enddate_s1) {
        return 'until ' + this.enddate_s1;
      } else if (this.noend_s1) {
        return 'I currently study here.';
      } else {
        return null;
      }
    },

    period_s2() {
      if (this.startdate_s2 && this.enddate_s2 && this.noend_s2) {
        return 'since ' + this.startdate_s2;
      } else if (this.startdate_s2 && this.enddate_s2) {
        return this.startdate_s2 + ' - ' + this.enddate_s2;
      } else if (this.startdate_s2 && this.noend_s2) {
        return 'since ' + this.startdate_s2;
      } else if (this.enddate_s2 && this.noend_s2) {
        return null;
      } else if (this.startdate_s2) {
        return 'since ' + this.startdate_s2;
      } else if (this.enddate_s2) {
        return 'until ' + this.enddate_s2;
      } else if (this.noend_s2) {
        return 'I currently study here.';
      } else {
        return null;
      }
    },

    period_s3() {
      if (this.startdate_s3 && this.enddate_s3 && this.noend_s3) {
        return 'since ' + this.startdate_s3;
      } else if (this.startdate_s3 && this.enddate_s3) {
        return this.startdate_s3 + ' - ' + this.enddate_s3;
      } else if (this.startdate_s3 && this.noend_s3) {
        return 'since ' + this.startdate_s3;
      } else if (this.enddate_s3 && this.noend_s3) {
        return null;
      } else if (this.startdate_s3) {
        return 'since ' + this.startdate_s3;
      } else if (this.enddate_s3) {
        return 'until ' + this.enddate_s3;
      } else if (this.noend_s3) {
        return 'I currently study here.';
      } else {
        return null;
      }
    }

  },
  methods: {
    iworkhere1() {
      this.noend1 = !this.noend1;
    },
    iworkhere2() {
      this.noend2 = !this.noend2;
    },
    iworkhere3() {
      this.noend3 = !this.noend3;
    },
    istudyhere1() {
      this.noend_s1 = !this.noend_s1;
    },
    istudyhere2() {
      this.noend_s2 = !this.noend_s2;
    },
    istudyhere3() {
      this.noend_s3 = !this.noend_s3;
    },
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
