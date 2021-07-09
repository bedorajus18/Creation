import { Component, Input, OnInit } from '@angular/core';
import { Livre } from '../livre.model';
import { LivresService } from '../livres.service';

@Component({
  selector: 'app-afficher-les-livres',
  templateUrl: './afficher-les-livres.component.html',
  styleUrls: ['./afficher-les-livres.component.css']
})
export class AfficherLesLivresComponent implements OnInit {

  listeLivres:Livre[];
  constructor(private livresService: LivresService) { 
    this.listeLivres = livresService.lister();
  }

  ngOnInit(): void {
  }

}
