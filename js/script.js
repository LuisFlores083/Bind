 const app = new Vue({
    el: '#seccion',

    data: {
      colorFondo: '',
      validacion:'Escribe un nombre mayor a 3 letras',
      nombre:'',
      tamanio:12,
      cantidad:0,
      num1:1,
      num2:1,
      resultado:0,

        
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

      sumarNumeros(){
        this.resultado=this.num1+this.num2;
      }

    },

    computed:{
      resultadoSuma(){
        return this.num1+this.num2;
      },
      resultadoResta(){
        return this.num1-this.num2;
      },
      resultadoMulti(){
        return this.num1*this.num2;
      },
      resultadoDivi(){
        return this.num1/this.num2;
      },
      resultadoModul(){
        return this.num1%this.num2;
      },
    },
    
 });