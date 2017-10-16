var tab=document.getElementById("mytable");
var but=document.getElementById("mybut");
var text=document.getElementById("mytext");
var sou=document.getElementsByClassName("sou")[0];
var body=document.body;
var ul=document.getElementById("souul");

//随机显示背景图片
var x=Math.round(Math.random()*6);
document.body.style.backgroundImage='url(images/back'+x+'.jpg)';

//搜索框样式
sou.onfocus=function(){
    sou.style.borderRadius="5px";
    sou.style.borderWidth="3px";
    sou.style.borderColor="rgba(255,0,0,0.5)";
}
sou.onblur=function(){
    sou.style.borderRadius="5px";
    sou.style.borderWidth="3px";
    sou.style.borderColor="rgba(0,0,0,0)"; 
}

function nowDate(){
    var now=new Date();
    return now.getMonth()+1+"月"+now.getDate()+"日";
}
but.onclick=function(){
    var newnode=document.createElement("tr");
    tab.appendChild(newnode);
    newnode.innerHTML="<td>"+nowDate()+"</td><td>"+text.value+"</td>";
}

sou.oninput=function(){
    var key=sou.value;
    var node=document.createElement("script");
    node.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+key+"&json=1&p=3&sid=1433_21097_17001_22159&req=2&csor=1&cb=callback&_=1507816364569";
    body.appendChild(node);
    body.removeChild(node);
}

function callback(data){
    ul.innerHTML='';
    for(var i=0;i<4;i++){
        if(data.s[i]!==undefined){
            var node2=document.createElement("li");
            ul.appendChild(node2);
            node2.innerHTML=data.s[i];
        }
    }
}