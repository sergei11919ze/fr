<template>
  <div>
    <div class="t">Создавайте текстовые заметки и делитесь ими с друзьями</div>
    
    <div v-if="posts.status == 200" class="l" >Ссылка на заметку: <a :href="posts.url" target="_blank">{{ 'http://localhost:8080/' + posts.url }}</a></div>
    <div v-if="posts.status == 1" class="l" style="left: 900px;">{{ posts.url }}</div>
    <div v-if="posts.status == 2" class="l" style="left: 850px;">{{ posts.url }}</div>
    <div v-if="posts.status == 3" class="l" style="left: 850px;">{{ posts.url }}</div>
 </div>
 <div v-if="loading && !posts.url">
  
  <div class="loadingio-spinner-spinner-nq4q5u6dq7r" style="position: absolute; left: 880px; top: 530px"><div class="ldio-x2uulkbinbj">
<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
</div></div>
 </div>
 <div class="linkCreateClass">Все ссылки действительны в течении 72 часов</div>
  <form @submit.prevent>
      
      <textarea class="codemirror-textarea" v-bind:value="body" @input="textBody" rows="30" cols="100" name="comment"> 
      </textarea>
      
      <button @click="createPost" id="buttonPost">Создать заметку</button>
  </form>
  <div class='to-share'><div><a :href="'https://api.whatsapp.com/send?text=url=' + 'http://localhost:8080/' + posts.url" style="margin-right: 10px;  float:left">
<img   style="width: 50px;"  src="https://i.pinimg.com/originals/a7/9b/68/a79b687ea194584379449e01fb63401b.png">
</a></div>
<div><a :href="'https://vk.com/share.php?url=' + 'http://localhost:8080/' + posts.url" target="_blank" ><img  src="https://iwiki.su/wp-content/uploads/2014/04/VK.com-logo.svg_.png"   alt=""></a>
</div>
<div style="position: absolute; left: 110px; bottom: 65px"><a :href="'https://t.me/share/url?url=' + 'http://localhost:8080/' + posts.url + '&text=Заметки'" target="_blank" ><img  src="https://img.icons8.com/?size=100&id=63306&format=png&color=000000"   alt=""></a>
</div>
</div>


</template>

<script>
import axios from 'axios';
import * as  CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css'


export default {
data(){
  return {
    posts: [],
    n : '',
    body : '',
   loading : false,
  }
},
watch : {
    posts(value){
      if (value) {
        if (value) {
         
          
          this.loading = false;
          var resetBtn = document.getElementById("buttonPost");
          resetBtn.disabled = false;
        }
      }
    }
},

methods : {
  createPost(){
    var resetBtn = document.getElementById("buttonPost");
    resetBtn.disabled = true;
    this.posts = ''
    this.loading = true
      axios.post('http://81.94.150.58:3000/api/v1/', {body: this.n.getValue() })
  .then(response => this.posts = response.data)
  this.body = '';
  },
  textBody(event){
      
      this.body =  event.target.value;    
  },
  preFinc(){
    
    var elements = document.getElementsByClassName('codemirror-textarea')[0];
    console.log(elements)
    var t = CodeMirror.fromTextArea(elements, {
      lineNumbers : true,
    });
   this.n = t;
  },

},



mounted(){
  this.preFinc();
  
  
},


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









button {
  width: 10em; 
  height: 3em; 
  position: absolute;
  border-radius: 10px;
  top: 450px;
  left: 900px;
}

.CodeMirror {
  width: 600px;
  top: 120px;
  left: 700px;
  border: 2px solid #802d2d;
  position: absolute;
  background-color: rgb(231, 230, 225);
  
}

form {
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.t {
  padding: 5px 5px 5px 5px;
    position: absolute;
    top: 8%;
    left: 790px;
    background: url('https://img1.akspic.ru/attachments/originals/6/7/4/7/4/147476-atmosfera-nebo-cvet-pastel-rozovyj-2560x1440.jpg');
    box-shadow: 10px 5px 5px rgb(0, 89, 255);
    border-radius: 10px;
}

.l {
  padding: 5px 5px 5px 5px;
    position: absolute;
    top: 550px;
    left: 810px;
    background: url('https://img1.akspic.ru/attachments/originals/6/7/4/7/4/147476-atmosfera-nebo-cvet-pastel-rozovyj-2560x1440.jpg');
    box-shadow: 10px 5px 5px rgb(0, 89, 255);
    border-radius: 10px;
}

.to-share {
  position: absolute;
  width: 100px;
  height: 100px;
  
  top: 456px;
  left: 1050px;
}

img {
  height: 30px;
  width: 30px;
}

.linkCreateClass {
  position: absolute;
  background-color: black;
  color: aliceblue;
  top: 500px;
  left: 850px;
}
</style>
