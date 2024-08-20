<template>
    
    <div v-if="!posts">

        <div class="loadingio-spinner-spinner-nq4q5u6dq7r" style="position: absolute; left: 880px; top: 400px"><div class="ldio-x2uulkbinbj">
<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
</div></div>

    </div>
    <div class="pdfCreate">PDF формируется ТОЛЬКО АНГЛИЙСКИЙ ТЕКСТ РАЗМЕРОМ НЕ БОЛЕЕ 100 кб</div>
    <div v-if="posts">
        <textarea ref="content" v-model="posts"  rows="40" cols="200" id="myid"><pre ></pre></textarea>
        <button @click="copyBuffer"  style="width: 10em; 
  height: 3em; 
  position: absolute;
  border-radius: 10px; top: 680px; left: 130px;">Копировать в буффер</button>

<div  v-if="loadBool"><span class="loader"></span></div>
<button v-if="boolButton" @click="linkUrl" style="width: 10em; 
  height: 3em; 
  position: absolute;
  border-radius: 10px; top: 680px; left: 300px;"  type="button">Открыть файл</button>
<button v-if="!boolButton" @click="download" id="createPDF" style="width: 10em; 
  height: 3em; 
  position: absolute;
  border-radius: 10px; top: 680px; left: 300px;">Сформировать PDF</button>
    </div>
  </template>
  
  <script>
 import axios from 'axios';
 //import  from 'websocket';
//import html2canvas from "html2canvas"
  
  export default {
    data(){
        return {
            p: this.$route.params.id,
            posts: '',
            chatSocket : '',
            createResult : '',
            ip : '',
            boolButton : false,
            loadBool : false,
        }
    },
    methods : {
        copyBuffer(){
            var text = document.getElementById('myid');
            text.innerHTML = window.location.href;
            console.log(text.innerHTML)
            text.select();
            document.execCommand("copy");
        },

        download() {
         this.loadBool = true;
          var resetBtn = document.getElementById("createPDF");
          resetBtn.disabled = true;
          console.log(this.ip + this.$route.params.id)
          location.host
          //
          let url = 'ws://81.94.150.58:3000/ws/socket-server/' + this.ip + this.$route.params.id + '/';
          this.chatSocket = new WebSocket(url)
          console.log("Connected!");
          var url1 = 'http://81.94.150.58:3000/api/v1/pdf/' + this.ip + '/' + this.$route.params.id + '/';
          axios.get(url1)
          
        
          this.chatSocket.onmessage = ({data}) => {
   
   
   this.createResult = data
   console.log(this.createResult)
   this.chatSocket.close()
   var resetBtn = document.getElementById("createPDF");
   
          resetBtn.disabled = false;
          this.loadBool = false;
          this.boolButton = true;
          

};
         
          
 },
 allPost(){
  console.log(this.$route.params.id)
        var url = `http://81.94.150.58:3000/api/v1/${this.$route.params.id}/`;
        axios.get(url).then(response => this.posts = response.data)

        console.log(this.posts)
 },

 getIP(){
  axios.get('https://ipapi.co/json/')
  .then(d =>this.ip = d.data.ip)
  
 },
 linkUrl(){
  var list = document.getElementsByClassName('pdfCreate')[0];
    if (this.createResult == 'Размер текста слишком большой для PDF'){
      
      list.innerHTML = "Размер текста слишком большой для PDF";
    } else if (this.createResult == 'Ошибка'){
      
      list.innerHTML = "Ошибка";
    } else{
    window.open(this.createResult); }
    }
 },

    mounted(){
        this.allPost()
        this.getIP()
  }
    }
  </script>


<style>

@keyframes ldio-x2uulkbinbj {
  0% { opacity: 1 }
  100% { opacity: 0 }
}
.ldio-x2uulkbinbj div {
  left: 94px;
  top: 48px;
  position: absolute;
  animation: ldio-x2uulkbinbj linear 1s infinite;
  background: #ff0000;
  width: 12px;
  height: 24px;
  border-radius: 6px / 12px;
  transform-origin: 6px 52px;
}.ldio-x2uulkbinbj div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -0.9166666666666666s;
  background: #ff0000;
}.ldio-x2uulkbinbj div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -0.8333333333333334s;
  background: #ff0000;
}.ldio-x2uulkbinbj div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.75s;
  background: #ff0000;
}.ldio-x2uulkbinbj div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.6666666666666666s;
  background: #ff0000;
}.ldio-x2uulkbinbj div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.5833333333333334s;
  background: #ff0000;
}.ldio-x2uulkbinbj div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.5s;
  background: #ff0000;
}.ldio-x2uulkbinbj div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.4166666666666667s;
  background: #ff0000;
}.ldio-x2uulkbinbj div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.3333333333333333s;
  background: #ff0000;
}.ldio-x2uulkbinbj div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.25s;
  background: #ff0000;
}.ldio-x2uulkbinbj div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.16666666666666666s;
  background: #ff0000;
}.ldio-x2uulkbinbj div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.08333333333333333s;
  background: #ff0000;
}.ldio-x2uulkbinbj div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
  background: #ff0000;
}
.loadingio-spinner-spinner-nq4q5u6dq7r {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff00;
}
.ldio-x2uulkbinbj {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-x2uulkbinbj div { box-sizing: content-box; }


textarea {
    position: absolute;
    left: 100px;
    top: 50px;
}





.loader {
  width: 100%;
  height: 8px;
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.loader::before {
  content: '';  
  box-sizing: border-box;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.15);
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 75%, transparent 75%, transparent);
  background-size: 15px 15px;
  z-index: 10;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  width: 0%;
  height: 100%;
  background-color: #FFF;
  position: absolute;
  border-radius: 0 4px 4px 0;
  top: 0;
  left: 0;
  animation: animFw 10s ease-in infinite;
}


@keyframes animFw {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

.pdfCreate {
  background-color: #000000;
  position: absolute;
  top: 680px;
  left: 450px;
  color: #FFF;
}


</style>