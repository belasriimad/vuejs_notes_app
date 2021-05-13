new Vue({
    el: "#app",
    data: {
        notes: [],
        note: ''
    },
    methods: {
        addNote: function() {
            this.notes.push({ note: this.note });
            this.note = '';
        },
        removeNote: function(index) {
            this.notes.splice(index, 1);
        }
    }
});