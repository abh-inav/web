var h,w,r;
var clicko;
var selectr;
var colvalue=[];
var secectrcolv=[];
var stro=[],str=[];
var palleto=[],pallet=[];
var i=1;
function alert_rotate() {
    h=document.querySelector("html").clientHeight;
    w=document.querySelector("html").clientWidth;
    r=h/w;
        if(r>1){
                 alert("If You are Using a Mobil Device Please Rotate");
        }
    }
function colvalassign(){

    for(i=1;i<=4;i++){
        for(j=1;j<=4;j++){
            colvalue[j]='#c'+j+'p'+i;
        }
        secectrcolv[i]=colvalue;
        colvalue=[];
    }
}
function strval(){
for(i=1;i<=4;i++){
for(j=1;j<=4;j++){
stro[j]=document.querySelector(secectrcolv[i][j]);
}
str[i]=stro;
stro=[];
}
}
function assign(){
colvalassign();
strval();
assignpalltevalcol()
}
function assignpalltevalcol(){
for(i=1;i<=4;i++){
for(j=1;j<=4;j++){
palleto[j]=window.getComputedStyle(str[i][j]).backgroundColor;
}
pallet[i]=palleto;
palleto=[];
}
}
function palletbx1(){
assign();
document.body.style.backgroundColor=pallet[1][1];
document.querySelector("#r-bottom_box").style.backgroundColor=pallet[1][2];
document.querySelector("#r-top_box").style.backgroundColor=pallet[1][3];
document.querySelector("#right_box").style.backgroundColor=pallet[1][4];
}
function palletbx2(){
assign();
document.body.style.backgroundColor=pallet[2][1];
document.querySelector("#r-bottom_box").style.backgroundColor=pallet[2][2];
document.querySelector("#r-top_box").style.backgroundColor=pallet[2][3];
document.querySelector("#right_box").style.backgroundColor=pallet[2][4];
}
function palletbx3(){
assign();
document.body.style.backgroundColor=pallet[3][1];
document.querySelector("#r-bottom_box").style.backgroundColor=pallet[3][2];
document.querySelector("#r-top_box").style.backgroundColor=pallet[3][3];
document.querySelector("#right_box").style.backgroundColor=pallet[3][4];
}
function palletbx4(){
assign();
document.body.style.backgroundColor=pallet[4][1];
document.querySelector("#r-bottom_box").style.backgroundColor=pallet[4][2];
document.querySelector("#r-top_box").style.backgroundColor=pallet[4][3];
document.querySelector("#right_box").style.backgroundColor=pallet[4][4];
}
