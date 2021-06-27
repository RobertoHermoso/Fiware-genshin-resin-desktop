import { Component } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medium-angular-electron';

  
  click(value){
    axios
      .get("http://localhost:1026/v2/entities")
      .then((response) => {
        var resin = response.data[0].resin.value
        console.log(resin)
        axios.post("http://localhost:1026/v2/entities/resin-id:001/attrs", {
          resin: {
            type: "Number",
            value: resin - value,
          },
          modified: {
            type: "Boolean",
            value: false,
          },
        }).then(res=>{
          console.log(res)
        })
    })
  }
}
