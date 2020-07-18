
<style lang="scss" scoped>

</style>
<template>
  <div class="Cuerpo">
      <demo-login-modal />
      <Modal_Registro_Doc/>
      <div class="pad_100">
   <div class="container">
      <div class="row">
         <div class="col">
           <h3 class="center">Proyecto de <strong>Taller</strong></h3>
         </div>
      </div>
      <br><br><br>
      <div class="row">
         <div class="col-lg-6 center">
            <img src="../assets/doctor.jpg" alt="medico" class="rounded-circle servicio-img"><br>
            <h2>Médico</h2>
            <p>Si deseas ofrecer consultas médicas, puedes registrarse en esta página</p>
            <button class="button" @click="$modal.show('demo-registro-doc')">Registrate!</button>
         </div><!-- /.col-lg-4 -->
         <div class="col-lg-6 center">
            <img src="../assets/paciente.jpg" alt="paciente" class="rounded-circle servicio-img"><br>
            <h2>Paciente</h2>
            <p>Si deseas tener una consulta médica, puedes registrarte en esta página</p>
            <button class="button" @click="$modal.show('demo-login')">Registrate!</button>
         </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->
   </div>
</div>

  </div>
</template>

<script>
import DemoLoginModal from '@/components/Modal_Login.vue'
import Modal_Registro_Doc from '@/components/Modal_Registro_Doc.vue'
export default {
    name:'Cuerpo',
    components: {
    DemoLoginModal,
    Modal_Registro_Doc
  },
  data() {
    return {
      canBeShown: false
    }
  },
  created() {
    setInterval(() => {
      this.canBeShown = !this.canBeShown
    }, 5000)
  },
  methods: {
    conditionalShow() {
      this.$modal.show('conditional-modal', {
        show: this.canBeShown
      })
    },

    showBasicDialog() {
      this.$modal.show('dialog', {
        text: 'I am a tiny dialog box.<br/>And I render <b>HTML!</b>'
      })
    },

    showTitleDialog() {
      this.$modal.show('dialog', {
        title: 'Information',
        text: 'Check out, I have a title 😎'
      })
    },

    showButtonsDialog() {
      this.$modal.show('dialog', {
        title: 'The standard Lorem Ipsum passage',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        buttons: [
          {
            title: 'Cancel',
            handler: () => {
              this.$modal.hide('dialog')
            }
          },
          {
            title: 'Like',
            default: true,
            handler: () => {
              alert('Like action')
            }
          },
          {
            title: 'Repost',
            handler: () => {
              alert('Repost action')
            }
          }
        ]
      })
    },

    showDynamicRuntimeModal() {
      this.$modal.show(
        {
          template: `
              <div class="example-modal-content">
                <p>Component has been created inline.</p>
                <p>{{ text }}</p>
                <p>This component is draggable because of the "dynamicDefault" property.</p>
              </div>
            `,
          props: ['text']
        },
        {
          text: 'Text has been passed as a property.'
        },
        {
          height: 'auto'
        }
      )
    },

    showDynamicComponentModal() {
      this.$modal.show(DemoCustomComponent, {
        text: 'This text is passed as a property'
      })
    },

    showDynamicComponentModalWithModalParams() {
      let counter = 0

      const interval = setInterval(() => {
        if (counter === 5) {
          clearInterval(interval)
        } else {
          counter++
        }

        const name = `dynamic-modal-${Math.random()}`

        this.$modal.show(
          {
            template: `
              <div class="example-modal-content">
                <h2>{{ name }}</h2>
                <button class="btn" @click="closeByName">Close using name</button>
                <button class="btn" @click="closeByEvent">Close using events</button>
                <button class="btn" @click="this.$modal.hideAll">Close all dynamic modals</button>
              </div>
            `,
            props: ['name'],
            methods: {
              closeByName() {
                this.$modal.hide(name)
              },
              closeByEvent() {
                this.$emit('close')
              }
            }
          },
          { name },
          { name, height: 'auto' }
        )
      }, 300)
    },

    dialogEvent(eventName) {
      console.log('Dialog event: ' + eventName)
    }
  }
}
</script>

<style scoped>
  
a {
    margin: 0px;
    padding: 0px;
    
}

h1, h2, h3, h4, h5, h6{
    color: #025f8ace ;
}


.pad_100{
    padding: 50px 0px;
}
.center {
    text-align: center;
    margin: 0px auto;
}

button {
    background-color: transparent;
    text-transform: uppercase;
    border: 1px solid #025f8ace ;
    padding: 10px 20px;
    margin: 5px 0px;
    color: #025f8ace ;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;
    opacity: 0.7;
    font-weight: bold;
}
button:hover {
    opacity: 1;
    background-color: #03a8f4d5 ;
    color: white; 
}
.black {
    background-color: #03a8f4d5 ;
    opacity: 1;
    color: white; 
}
.black a {
    color : white; 
}
.black:hover {
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF; 
    color: #03a8f4d5 ;
}

.black:hover a {
    color:  #03a8f4d5 ;
}



</style>

