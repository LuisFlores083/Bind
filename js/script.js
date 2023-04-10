 const app = new Vue({
    el: '#seccion',

    data: {
      colorFondo: '',
      validacion:'Escribe un nombre mayor a 3 letras',
      nombre:'',
      tamanio:12,

        
    }, 
    methods:{
      validar:function(){
        if(this.nombre.length == 0){
          this.validacion ='Escribe un nombre con un minimo de 4 letras';
          this.clase=0;
        }
        else if( this.nombre.length > 0 && this.nombre.length < 4){
          this.validacion ='Nombre Invalido';
          this.clase=2;
        }
        else {
          this.validacion ='Nombre Valido';
          this.clase=1;
        }
          
      },

    }
 });