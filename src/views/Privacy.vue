<template>
  <div class="privacy">
    <div class="container">
      <h1 class="title">
        Terms & Privacy
      </h1>
      <div class="textspace">
        <div class="text">
          <p>
            La presente Política de Privacidad establece los términos en que
            umbra usa y protege la información que es proporcionada por sus
            usuarios al momento de utilizar su sitio web. Este proyecto está
            comprometido con la seguridad de los datos de sus usuarios. Cuando
            le pedimos llenar los campos de información personal con la cual
            usted pueda ser identificado, lo hacemos asegurando que solo se
            empleará de acuerdo con los siguientes términos.
          </p>
          <p>
            Nuestro sitio web podrá recoger información personal, por ejemplo:
            Nombre, situación geográfica y año de nacimiento. Umbra emplea la
            información con el fin de proporcionar el mejor servicio posible,
            particularmente para crear una mayor experiencia inmersiva y mejorar
            nuestro servicio. Estamos altamente comprometido para cumplir con el
            compromiso de mantener su información segura.
          </p>
          <p>
            Una cookie se refiere a un fichero que es enviado con la finalidad
            de solicitar permiso para almacenarse en su ordenador, al aceptar
            dicho fichero se crea y las cookies sirven entonces para tener
            información respecto al tráfico web, y también facilita las futuras
            visitas a una web recurrente. Nuestro sitio web no emplea las
            cookies para poder identificar las páginas que son visitadas y su
            frecuencia.
          </p>
          <p>
            Este sitio web contiene enlaces a otros sitios que pudieran ser de
            su interés. Una vez que usted de clic en estos enlaces y abandone
            nuestra página, ya no tenemos control sobre al sitio al que es
            redirigido y por lo tanto no somos responsables de los términos o
            privacidad ni de la protección de sus datos en esos otros sitios
            terceros. Dichos sitios están sujetos a sus propias políticas de
            privacidad por lo cual es recomendable que los consulte para
            confirmar que usted está de acuerdo con estas.
          </p>
          <p>
            Este proyecto no venderá, cederá ni distribuirá la información
            personal que es recopilada sin su consentimiento, salvo que sea
            requerido por un juez con un orden judicial.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "privacy"
};
</script>

<style scoped>
* {
  border: 2px solid red;
}
.privacy {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  font-weight: 600;
  font-size: 1rem;
}

.textspace {
  margin-right: 0;
  margin-top: -1.5rem;
}

.text {
  max-height: 55vh;
  overflow-y: auto;
  margin-left: 10%;
  margin-right: 10%;

  font-family: "Tiempos Headline Regular", Times, serif;
  font-size: 1.3rem;
  text-align: left;
  line-height: 1, 5rem;
  filter: blur(0.05rem);
  color: #f5f9fb;
}

.title {
  font-family: "Tiempos Headline Regular", Times, serif;
  font-size: 3.15rem;
  font-weight: 500;
  text-align: left !important;
  margin-top: 5.1rem;
  margin-bottom: 5rem;
  margin-left: 0;
  color: #f5f9fb;
  filter: blur(0.07rem);
}

.container {
  flex-direction: column;
  justify-content: left;
  align-items: left;
}

@media screen and (max-width: 399px) {
  * {
    border: 2px solid greenyellow;
  }
  .title {
    font-size: 2.2rem;
    margin-top: 3.1rem;
  }

  .text {
    font-size: 1.1rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

@media screen and (min-width: 640px) {
  .textspace {
    max-width: 85vw;
  }
}

@media screen and (min-width: 1200px) {
  .textspace {
    max-width: 55vw;
  }
}
</style>
