import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Alejandro';
  age = 25;
  img = 'https://www.peru.travel/Contenido/AcercaDePeru/Imagen/es/1/0.0/Principal/Machu%20Picchu.jpg';
  btnDisabled = true;

  person = {
    name: 'Alejandro',
    age: 25,
    avatar: 'https://www.peru.travel/Contenido/AcercaDePeru/Imagen/es/1/0.0/Principal/Machu%20Picchu.jpg'
  }

  toggleButton() {
    /*this.btnDisabled = false;  */
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age +=1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
