import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'alejandro';
  age = 25;
  img = 'https://www.peru.travel/Contenido/AcercaDePeru/Imagen/es/1/0.0/Principal/Machu%20Picchu.jpg';
  btnDisabled = true;

  register = {
    name: '', 
    email: '',
    password: '',
  }

  person = {
    name: 'alejandro',
    age: 25,
    avatar: 'https://www.peru.travel/Contenido/AcercaDePeru/Imagen/es/1/0.0/Principal/Machu%20Picchu.jpg'
  }

  names: string[] = ['ernesto', 'alejandro', 'astrid']
  carros: string[] = ['Corolla', 'Yaris']
  NewName =  '';
  box = { 
    width: 100,
    height: 100,
    background: 'red'
  }
  NewVehiculo = '';

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

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

  addName() {
    this.names.push(this.NewName)
    this.NewName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  addVehiculo() {
    this.carros.push(this.NewVehiculo)
    this.NewVehiculo = '';
  }

  deleteVehiculo(index: number) {
    this.carros.splice(index, 1);
  }

  onRegister() {
    console.log(this.register)
  }

}
