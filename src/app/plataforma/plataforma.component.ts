import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { AuthService } from '../service/auth.service';
import { ServicoService } from '../service/servico.service';

@Component({
  selector: 'app-plataforma',
  templateUrl: './plataforma.component.html',
  styleUrls: ['./plataforma.component.css']
})
export class PlataformaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaServicos: Categoria[]
  idCategoria: number
  
  constructor(
    private router: Router,
    private categoriaService: ServicoService,
    private authService: AuthService
    ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == ''){
      // alert('Sua sessão expirou, faça o login novamente...')
       this.router.navigate(['/home'])
     }
     //this.authService.refreshToken()
     //this.getAllCategoria()
     //this.getAllAtendimento()
     //this.getAllMotivo()
     //this.getByIdCatController()

  }

  //getAllCategoria(){
  //  this.categoriaService.getAllServicos().subscribe((resp: Categoria[])=>{
  //    this.listaServicos = resp
  //  })
  //}

  //getAllAtendimento(){
  //  this.categoriaService.getAllServicos().subscribe((resp: Categoria[])=>{
  //    this.listaServicos = resp
  //  })
  //}

  //getAllMotivo(){
  //  this.categoriaService.getAllServicos().subscribe((resp: Categoria[])=>{
  //    this.listaServicos = resp
  //  })
  //}

  //getByIdCatController(){
  //  this.categoriaService.getByIdServicos(this.idCategoria).subscribe((resp: Categoria)=>{
  //    this.categoria = resp
  //  })
  //}

}