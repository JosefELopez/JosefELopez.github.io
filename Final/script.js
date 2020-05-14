
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

      {q:'which of the following tag is used to mark a begining of paragraph ?',options:['TD','br','P','tr'],answer:3},

      {q:'Correct HTML tag for the largest heading is ?',options:['h4','h1','h8','h9'],answer:2},

      {q:'When do you start yo pandemic?', options:['Wake up at my usual time', 'Wake up around noon', 'Wake up when the moon is out', 'Time is not relevant'],answer:1},

      {q:'When do you start your da the pandemic?', options:['Wake up at my usual time', 'Wake up around noon', 'Wake up when the moon is out', 'Time is not relevant'],answer:1},

      {q:'When do you start g the pandemic?', options:['Wake up at my usual time', 'Wake up around noon', 'Wake up when the moon is out', 'Time is not relevant'],answer:1},

      {q:'When do you  during the pandemic?', options:['Wake up at my usual time', 'Wake up around noon', 'Wake up when the moon is out', 'Time is not relevant'],answer:1},

      {q:'When do you start ing the pandemic?', options:['Wake up at my usual time', 'Wake up around noon', 'Wake up when the moon is out', 'Time is not relevant'],answer:1},

      {q:'When do you start the pandemic?', options:['Wake up at my usual time', 'Wake up around noon', 'Wake up when the moon is out', 'Time is not relevant'],answer:1},

      {q:'When do you start your days during the pandemic?', options:['Wake up at my usual time', 'Wake up around noon', 'Wake up when the moon is out', 'Time is not relevant'],answer:1},

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

                        quizBox.innerHTML="Review your sanity below!!! In addition, here are some recommendations to keep that sanity high!!"
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
