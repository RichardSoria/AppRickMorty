import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { OpinionService } from '../services/opinion.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class HomePage {
  nameFind: string = '';
  characterDetails: any = null;
  opinion: string = '';
  constructor(private http: HttpClient, private opinionService: OpinionService) { }

  async findCharacter() {
    if (this.nameFind) {
      const name = this.nameFind.trim().toLowerCase();
      const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
      this.http.get<any>(url).subscribe({
        next: (response: any) => {
          if (response.results && response.results.length > 0) {
            const exactMatch = response.results.find(
              (char: any) => char.name.toLowerCase() === name
            );
            if (exactMatch) {
              this.characterDetails = exactMatch;
            } else {
              this.characterDetails = null;
              alert('No se encontró ningún personaje con ese nombre exacto.');
            }
          } else {
            this.characterDetails = null;
            alert('No se encontró ningún personaje con ese nombre.');
          }
        },
        error: (err) => {
          console.error('Error al buscar personaje:', err);
          this.characterDetails = null;
          alert('Ocurrió un error al buscar el personaje.');
        }
      });
    } else {
      alert('Por favor, ingrese un nombre de personaje.');
      this.characterDetails = null;
    }
  }

  saveOpinion() {
    if (!this.opinion) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    if (!this.characterDetails) {
      alert('No hay personaje seleccionado.');
      return;
    }

    // Extraemos todos los datos que necesitas para guardar
    const url = this.characterDetails.url || '';
    const name = this.characterDetails.name || '';
    const species = this.characterDetails.species || '';
    const status = this.characterDetails.status || '';
    const gender = this.characterDetails.gender || '';
    const origin = this.characterDetails.origin?.name || '';
    const episode = this.characterDetails.episode?.length || 0;

    this.opinionService.saveOpinion(
      this.opinion,
      name,
      species,
      status,
      gender,
      origin,
      episode,
      url
    ).then(() => {
      alert('Opinión guardada con éxito');
      this.resetOpinion();
    }).catch((error) => {
      console.error('Error al guardar la opinión:', error);
      alert('Error al guardar la opinión');
    });
  }

  resetOpinion() {
    this.opinion = '';
  }
}
