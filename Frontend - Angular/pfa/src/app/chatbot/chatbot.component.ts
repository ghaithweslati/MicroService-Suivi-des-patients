import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import {ApiAiClient} from 'api-ai-javascript/es6/ApiAiClient';
import {  ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  readonly token = environment.dialogFlow.angularBot;
  readonly client = new ApiAiClient({accessToken:this.token});
  
  question;
  conversation=[];
  prenom;
  @ViewChild('content', { static: true }) private content: any;
  constructor(public myapp: AppComponent) { 
    myapp.titre="Chatbot";
    this.prenom=myapp.patient.prenom;
  }

  ngOnInit(): void {
  }


  talk()
  {
    this.conversation.push({contenu:this.question,type:"direct-chat-msg",image:'https://www.icone-png.com/png/28/28461.png',prenom:this.prenom});
    //this.content.scrollToBottom(150);
    this.client.textRequest(this.question).then(res=>
      {
      this.question="";
      let reponse = res.result.fulfillment.speech.slice(0);
      this.conversation.push({contenu:reponse,type:"direct-chat-msg right",image:'https://www.kindpng.com/picc/b/347/3479906.png',prenom:'Bot'});
      //this.content.scrollToBottom(150);
      });

  }


}
