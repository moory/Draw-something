var canvas=document.getElementById("canvas");
var context=canvas.getContext("2d");
var addr;
var myimg=document.getElementById("myimg");
var mask=document.getElementById("mask");
var cai=document.getElementById("cai");
var eventFloor=document.getElementById("eventFloor");
//=======功能选择=======
document.getElementById("huaBtn").onclick=function(){
    canvas.style.display="block";
    cai.style.display="none";
    mask.style.display='none';
};
document.getElementById("caiBtn").onclick=function(){
    canvas.style.display="none";
    eventFloor.style.display="none";
    cai.style.display="block";
    mask.style.display='none';
};
//=======异步传输========
function send(){
    addr=canvas.toDataURL();
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status>=200 && xhr.status<300 || xhr.status==304){
                console.log('ok!');
            }else{
                console.log("send unsuccessful:"+xhr.status);
            }
        }
    };
    xhr.open('POST','cun.php',true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(`addr=${addr}`);
}
btn.onclick=function(){
    if(this.innerHTML=="猜"){
        canvas.style.display="none";
        eventFloor.style.display="none";
        cai.style.display="block";
        this.innerHTML="画";
    }else{
        canvas.style.display="block";
        eventFloor.style.display="block";
        cai.style.display="none";
        this.innerHTML="猜";
    }
};
//========画笔工具========
var hbFlag=false;
hb.onclick=function(){
    hbFloor.style.display="block";
    lineFloor.style.display="none";
    yqFloor.style.display="none";
};
hbFloor.onmousedown=function(){
    context.beginPath();
    hbFlag=true;
};
hbFloor.onmousemove=function(e){
    if(hbFlag){
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
    }
};
hbFloor.onmouseup=function(){
    context.closePath();
    send();
    hbFlag=false;
};
hbFloor.onmouseout=function(){
    hbFlag=false;
};
yq.onclick=function(){
    hbFloor.style.display="none";
    lineFloor.style.display="none";
    yqFloor.style.display="block";
};
yqFloor.onclick=function(e){
    var data = context.getImageData(0,0,500,500);
    var x = e.offsetX-1;
    var y = e.offsetY-1;
    var node = (x+y*500)*4;
    var targetColor=color(data,node);
    floodFill(data,node,targetColor,replaceColor);
    context.putImageData(data,0,0);
    send();
};
//===============清屏工具=============
clear.onclick=function(){
    context.clearRect(0,0,canvas.width,canvas.height);
    send();
};
//=============调色板=============
customColor.onchange=function(){
    context.strokeStyle=this.value;
    colorBoard.style.background=this.value;
    replaceColor=colorBoard.style.backgroundColor.slice(4,-1)+",255";
};
r.onclick=function(){
    context.strokeStyle="#ff0000";
    replaceColor="255,0,0,255";
    colorBoard.style.background="#ff0000";
};
g.onclick=function(){
    context.strokeStyle="#00ff00";
    replaceColor="0,255,0,255";
    colorBoard.style.background="#00ff00";
};
b.onclick=function(){
    context.strokeStyle="#0000ff";
    replaceColor="0,0,255,255";
    colorBoard.style.background="#0000ff";
};
//===========油漆桶==========
var replaceColor="0,0,0,255";
//Flood-fill (node, target-color, replacement-color):
function floodFill(data,node,targetColor,replacementColor){
    //1. If target-color is equal to replacement-color, return.
    if(targetColor==replacementColor) return;
    //2. Set Q to the empty queue.
    var q=[];var hash={};
    //3. Add node to the end of Q.
    q.push(node);
    //4. While Q is not empty:
    while(q.length){
        //5. Set n equal to the first element of Q.
        var n = q[0];
        //6. Remove first element from Q.
        q.shift();
        //7. If the color of n is equal to target-color:
        if(color(data,n)==targetColor){
            //8. Set the color of n to replacement-color and mark "n" as processed.
            setColor(data,n,replacementColor);
            hash[n]=1;
            //9. Add west node to end of Q if west has not been processed yet.
            if(hash[n-4]==undefined){q.push(n-4)}
            //10. Add east node to end of Q if east has not been processed yet.
            if(hash[n+4]==undefined){q.push(n+4)}
            //11. Add north node to end of Q if north has not been processed yet.
            if(hash[n-2000]==undefined){q.push(n-2000)}
            //12. Add south node to end of Q if south has not been processed yet.
            if(hash[n+2000]==undefined){q.push(n+2000)}
        }
    }
    //13. Return.
    return 0;
}
function color(data,node){
    return ""+data.data[node]+","+data.data[node+1]+","+data.data[node+2]+","+data.data[node+3];
}
function setColor(data,node,replacementColor){
    var color=replacementColor.split(",");
    data.data[node]=color[0];
    data.data[node+1]=color[1];
    data.data[node+2]=color[2];
    data.data[node+3]=color[3];
}
//============直线工具===============
var lineX, lineY;
var imgdata=null;
var state=false;
line.onclick=function(){
    hbFloor.style.display="none";
    lineFloor.style.display="block";
    yqFloor.style.display="none";
};
lineFloor.onmousedown=function(e){
    imgdata=context.getImageData(0,0,canvas.width,canvas.height)
    lineX= e.offsetX-1;
    lineY= e.offsetY-1;
    state=true;
};
lineFloor.onmousemove=function(e){
    if(state){
        context.clearRect(0,0,canvas.width,canvas.height);
        if(imgdata!=null){
            context.putImageData(imgdata,0,0);
        }
        context.beginPath();
        context.moveTo(lineX,lineY);
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        context.closePath();
    }
};
lineFloor.onmouseup=function(){
    state=false;
    imgdata=context.getImageData(0,0,canvas.width,canvas.height);
    send();
};
//============表情转换功能=============
var sendMsg=document.getElementById("sendMsg");
var msg=document.getElementById("msg");
var chat_msg=document.getElementById("chat_msg");
function enterClick(e){
    if(e.keyCode==13){
        sendMsg.onclick();
    }
}
sendMsg.onclick=function(){
    if(msg.value!=""){
        var div=document.createElement("div");
        div.className="msg_text";
        var span=document.createElement("span");
        span.innerHTML="小明"+":";
        div.appendChild(span);
        var p=document.createElement("p");
        msg.value = msg.value.replace(/#[0-9]{3}#/g, function (k) {
            if (k.slice(1, -1) < 200) {
                return "<img src='wechat/" + k.slice(1,-1) +".gif'>";
            } else {
                return "<img src='wechat/" + k.slice(1,-1) +".png'>";
            }
        });
        p.innerHTML=msg.value;
        div.appendChild(p);
        chat_msg.appendChild(div);
        msg.value="";
    }
};
//============表情框===========
var show=false;
bq.addEventListener("click",function(){
    bqk.innerHTML="";
    if(!show){
        bqk.style.display="block";
        var title=["微笑","撇嘴","美女","发呆","墨镜",
            "哭","羞","哑","睡","哭",
            "囧","怒","调皮","笑","惊讶",
            "难过","酷","汗","抓狂","吐",
            "笑","快乐","奇","傲","饿",
            "累","吓","汗","高兴","闲"];
        var k=0;
        for(var i=100;i<220;i++){
            var li=document.createElement("li");
            var img=document.createElement("img");
            if(i<200){
                img.src="wechat/"+i+".gif";
                img.alt="#"+i+"#";
            }else{
                img.src="wechat/"+i+".png";
                img.alt="#"+i+"#";
            }
            img.title=title[k];
            k++;
            li.appendChild(img);
            bqk.appendChild(li);
        }
        show=true;
        var imgle=bqk.querySelectorAll("li img");
        for(var i=0;i<imgle.length;i++){
            imgle[i].onclick=function(){
                msg.value+=this.alt;
            }
        }
        outer.addEventListener("click",function(e){
            target=e.target;
            if(target.nodeName!=="IMG"){
                bqk.style.display="none";
                show=false;
            }
        })
    }else{
        bqk.style.display="none";
        show=false;
    }
},false);
var current=document.querySelectorAll("#color div div");
lw1.onclick=function(){
    context.lineWidth=1;
    for(var i=0;i<current.length;i++){
        if(current[i].className="show"){
            current[i].className="";
        }
    }if(i==current.length){
        this.children[0].className="show";
    }
};
lw2.onclick=function(){
    context.lineWidth=3;
    for(var i=0;i<current.length;i++){
        if(current[i].className="show"){
            current[i].className="";
        }
    }if(i==current.length){
        this.children[0].className="show";
    }
};
lw3.onclick=function(){
    context.lineWidth=5;
    for(var i=0;i<current.length;i++){
        if(current[i].className="show"){
            current[i].className="";
        }
    }if(i==current.length){
        this.children[0].className="show";
    }
};