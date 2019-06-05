import React, { Component } from 'react';
import Personne from '../class/personne';

class Composant extends Component {
   constructor(props){
       super(props);
       this.state={
           'prenom':'Greg',
           'repas' : 'repas',
           'personne' : new Personne('David',63)
       };
   }

   render() {
    let personne = this.state.personne;

       return (
           <div className="">
               Hello les gars, de la part de {personne.prenom}. C'est l'heure du {this.state.repas}
               
           </div>
       );
   }
}

export default Composant;

