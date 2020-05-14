
   var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');


  var op5=document.getElementById('op5');
  var op6=document.getElementById('op6');
  var op7=document.getElementById('op7');
  var op8=document.getElementById('op8');
  var op9=document.getElementById('op9');
  var op10=document.getElementById('op10');

  var app={
    questions:[
      {q:'When do you start your days during the pandemic?', options:['Wake up at my usual time', 'Wake up around noon', 'Wake up when the moon is out', 'Time is not relevant'],answer:1},

      {q:'When do you go to sleep?',options:['Before midnight', 'Around 2 am', 'Before the sun sets', 'When the birds wake up in the morning!'],answer:1},

      {q:'Have you been exercising?',options:['Yes absolutely!','No I still do not have time to exercise','Yeah somewhat here and there','No exercise is not in my blood'],answer:1},

      {q:'What do you usually watch?', options:['My YouTube subscriptions', 'The birds and the passerby outside my window', 'News', 'Anything that is trending!'],answer:1},

      {q:'What do you usually do to relax?', options:['Eat!', 'Exercise!', 'Sleep!', 'Play video games!'],answer:1},

      {q:'What do you do during your free time?', options:['Try to find ways of how I can help get things back to normal!', 'Spend time with my family!', 'Spend time with myself to collect my thoughts :)', 'Free time?'],answer:1},

      {q:'What kind of humor do you enjoy?', options:['Topical', 'Observational', 'Dark', 'Cringe'],answer:1},

      {q:'At the beginning of this pandemic did you freakout?', options:['Yes, I was worried about my future', 'No, I thought this was going to go away quickly', 'Yes, I was stocking up on supplies!', 'No, I did not believe there was a pandemic approaching'],answer:1},

      {q:'Do you think this pandemic has made you more hygenic?', options:['Yes, I have been washing my hands for longer!', 'No, I was pretty clean before this happened', 'No, I am at home so why should it really matter?', 'Hygiene?'],answer:1},

      {q:'Finally do you think this lockdown is worth it?', options:['Yes, we need to keep care of everyone!', 'No, I had so many things planned for 2020!', 'Yes, because now I can relax!', 'No, because I do not believe Corona is dangerous!'],answer:1},

                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="Review your sanity below!!! A sanity below 5 needs to be worked on a bit :)"
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){

                         var id=ele.id.split('');

                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="OK!";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";
                         	ele.innerHTML="OK!";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.questions.length+"/"+this.score;
                }

           }


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         }
