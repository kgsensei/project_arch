const simple={
    rebuildPage:()=>{
        page={
            width:window.innerWidth,
            height:window.innerHeight
        }
    },
    randint:(i,a)=>{return Math.floor(Math.random()*(a-i+1))+i},
    openURL:function(u){window.open(u,'_blank')}
}
function gid(i){return document.getElementById(i)}
Object.prototype.preHTML=function(h){this.innerHTML=h+this.innerHTML}
Object.prototype.addHTML=function(h){this.innerHTML+=h}
Object.prototype.setHTML=function(h){this.innerHTML=h}
Object.prototype.hide=function(){this.style.display='none'}
Object.prototype.show=function(){this.style.display='block'}
Object.prototype.width=function(){return this.offsetWidth}
Object.prototype.height=function(){return this.offsetHeight}
Object.prototype.left=function(){return this.offsetLeft}
Object.prototype.top=function(){return this.offsetTop}
Array.prototype.sample=function(){return this[Math.floor(Math.random()*this.length)]}
String.prototype.isUpper=function(){if(this.toUpperCase()==this){return true}return false}
String.prototype.isLower=function(){if(this.toLowerCase()==this){return true}return false}
String.prototype.isEmpty=function(){if(this.replaceAll(/ /g,'')==''){return true}else return false}
String.prototype.invertCase=function(){return this.split('').map((a)=>{return a.isUpper()?a.toLowerCase():a.toUpperCase()}).join('')}
window.addEventListener('resize',simple.rebuildPage)
simple.rebuildPage()
