
//Initilize the variables
let songIndex=0;
let audioelement= new Audio("song/1.mp3");

let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressBar');
let Gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songItem'));
let smallplay=document.getElementsByClassName("smallplay");
//console.log(smallplay);
let songs=[
    {songname:"Har Har Shambhu" , filePath: "song/1.mp3",coverPath:"cover/1.jpg"},
    {songname:"Kesariya" , filePath: "song/2.mp3",coverPath:"cover/2.jpg"},
    {songname:"Maine Tera Naam Dil Rakh Diya" , filePath: "song/3.mp3",coverPath:"cover/3.jpg"},
    {songname:"Tera nam dhokha rakh doo" , filePath: "song/4.mp3",coverPath:"cover/4.jpg"},
    {songname:"meri jindagi hai tu" , filePath: "song/5.mp3",coverPath:"cover/5.jpg"},
    {songname:"Ami je tumar" , filePath: "song/6.mp3",coverPath:"cover/6.jpg"},
    {songname:"mast najaro se" , filePath: "song/7.mp3",coverPath:"cover/7.jpg"},
    {songname:"uu antamam mama" , filePath: "song/8.mp3",coverPath:"cover/8.jpg"},
    {songname:"Shiv Tandav" , filePath: "song/9.mp3",coverPath:"cover/9.jpg"},
    {songname:"jiya dhadak dhadak" , filePath: "song/10.mp3",coverPath:"cover/10.jpg"}
]
songitems.forEach((element,i)=>{
//console.log(element,i);
element.getElementsByTagName('img')[0].src=songs[i].coverPath;
element.getElementsByClassName('songpage')[0].innerHTML=songs[i].songname;

})

//listen the event
//handle play pause click
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0)
    {
        audioelement.play();
        document.getElementById('title').style.display='flex';
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        Gif.style.opacity=1;
    }else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        document.getElementById('title').style.display='none';
        Gif.style.opacity=0;
    }

})
 audioelement.addEventListener('timeupdate',()=>{
// console.log("hiii");
//update seekbar
progress=parseInt((audioelement.currentTime/audioelement.duration)*100)
// console.log(progress);
myprogressbar.value=progress;
})
myprogressbar.addEventListener("change",()=>{
    //here we want duration
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
    

})
const makeAllplay=()=>{
    Array.from(smallplay).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
index=0;
// for small play button
Array.from(smallplay).forEach((element=>{
    element.addEventListener('click',(e)=>{
        makeAllplay();
        
        index=parseInt(e.target.id);
        // console.log(e.target);
        // console.log(index);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src=`song/${index+1}.mp3`;
        document.getElementById('title').innerHTML=songs[`${index}`].songname;
        audioelement.currentTime=0;
        audioelement.play();
        Gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

    })
}))
let backward=document.getElementById("back");
let forward=document.getElementById('forward');

let songno=songs.length;

backward.addEventListener('click',()=>{
    if(index>0)
    index-=1;
    else index=songno-1;
    let b=document.getElementById(index);
    b.classList.remove('fa-circle-play');
    b.classList.add('fa-circle-pause');
    let c=document.getElementById(index+1);
    c.classList.add('fa-circle-play');
    c.classList.remove('fa-circle-pause');
    document.getElementById('title').innerHTML=songs[`${index}`].songname;
    audioelement.src=`song/${index+1}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    Gif.style.opacity=1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    
})

forward.addEventListener('click',()=>{
    if(index<songno-1)
    index+=1;
    else index=(index)%(songno);
    // console.log(index);
    document.getElementById('title').innerHTML=songs[`${index}`].songname;
     let b=document.getElementById(index);
     b.classList.remove('fa-circle-play');
        b.classList.add('fa-circle-pause');
        let c=document.getElementById(index-1);
        c.classList.add('fa-circle-play');
        c.classList.remove('fa-circle-pause');
    audioelement.src=`song/${index+1}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    Gif.style.opacity=1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    
})

let songtime=document.getElementsByClassName('songlen');

    
    audioelement.onloadedmetadata = function( ) {
        
        audioelement.src=`song/${i}.mp3`;
        // console.log(i);
        console.log(audioelement);
        songtime[i].innerHTML=audioelement.duration;
        
 };
        


