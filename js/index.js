console.log("owo")

$('#el').click(function() {
    $('#el').css('background-color', 'green');
});

const vu = new Vue({
    el: '#app',
    data: {
        visible: false,
    },
    methods: {
        handleSelect: function(eve){
            alert(eve)
        }
    }
})

vu.$mount('#app')

$.get('https://script.google.com/macros/s/AKfycbxI3xxApAMGzI36F4HVGdrHiD2xDMJM5q_toPvxSM8a6U1PF94UKTTjZ5PIqCt_pZOfXw/exec', function(data) {
    alert(data)
})
