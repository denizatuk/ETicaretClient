import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() { }

  //message(message: string, messageType: MessageType,position: Position,delay:Number = 3,dismissOthers:boolean=false)
  
  message(message: string, options:Partial<AlertifyOptions>) {
    alertify.set('notifier','delay', options.delay);
    alertify.set('notifier','position', options.position);
    alertify[options.messageType](message);
    const msj = alertify[options.messageType](message);
    if (options.dismissOthers) {
      msj.dismissOthers();
    }
  }
  dismiss(){
    alertify.dismiss();
  }
}
export class AlertifyOptions{
  messageType:MessageType = MessageType.Message;
  position:Position = Position.TopCenter;
  delay:Number = 3;
  dismissOthers:boolean = false;
}
export enum MessageType {
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}

export enum Position {

  TopCenter = "top-center",
  TopRight = "top-right",
  TopLeft = "top-left",
  BottomCenter = "bottom-center",
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left"
}