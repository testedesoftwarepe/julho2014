module.exports = {

  prompts: false,

  templateData: {

    conf: {
      name: "QA Night",
      description: "Encontro do grupo Teste de Software-PE",
      topics: "Automando com Java e Selenium VS Ruby e Watir",
      date: "30 de Julho de 2014",
      venue: "Qualiti",
      address: "Av. Marquês de Olinda, 126 - 4º andar - Bairro do Recife",
      city: "Recife",
      state: "PE"
    },

    callToAction: {
        text: "Inscrições abertas"
        //Comente esse link para que o botão aponte para o próprio site.
        ,link: "https://docs.google.com/forms/d/1hsRpul583dnw2qUpXJ35swGIH4EEvQKK9dgcrwxNMS0/viewform"
    },

    hangout:{
      hangoutSet: false,
      link:"https://plus.google.com/u/1/events/cm2q6g8adljfr0j7k0sihrk3pcg",
      hangoutNotSetMessage: "não teremos hangout nesse qa night."
    },

    site: {
      theme: "yellow-swan",
      url: "http://testedesoftwarepe.github.io/julho2014/",
      googleanalytics: "UA-53198502-1"
    },

    sections: [
      'about',
     'location',
      'speakers',
      'schedule',
      'events',
      'partners'
      // 'contact',
    ],

    labels: {
      about: "Sobre",
      location: "Localização",
      speakers: "Palestrantes",
      schedule: "Agenda",
      partners: "Parceiros",
      events: "Próximos Eventos"
      //sponsors: "Sponsors",
      //contact: "Contact"
    },

   schedule: [
      {
        name: "Check-in",
        time: "19h00"
      },

      {
        name: "Kildery Sukar",
        photo: "themes/yellow-swan/img/kildery.jpg",
        bio: "Kildery é formado em Ciência da Computação pela UNICAP, e trabalha com teste de software desde 2008, focado em análise de requisitos, planejamento e execução de casos de teste, além de desenvolver e executar testes automáticos. Atualmente é engenheiro de software na Modular Mining Systems.",
        company: "Modular Mining Systems",
        link: {
          href: "http://twitter.com/kilderysc",
          text: "@kilderysc"
        },
        presentation: {
          title: "O que é Teste de Software?",
          description: "Nesta palestra, vamos falar sobre princípios, processos e gerenciamento de Teste de Software",
          time: "19h15"
        }
        /*
        Activity é alguma dinâmica extra que poderá ocorrer. Como é uma atividade em grupo, não será mostrada nenhuma imagem. Caso queira remover, basta comentar a activity toda.
        */
        ,activity: {
          title: "Discussão sobre testes",
          description: "Discussão aberta sobre testes. Essa discussão não será feita pelo hangout.",
          time: "20h00"
        }
     },

      {
        name: "Encerramento",
        time: "21h00"
      }

    ],

    events: {
      form: "https://docs.google.com/forms/d/1ZmixuluQYqfWF06FG6YC82LDDz53N4-EjNXJrBFXyes/viewform"

    },

    partners: [
      {
        name: "ThoughWorks Recife",
        logo: "themes/yellow-swan/img/tw-logo.png",
        url: "http://www.thoughtworks.com/pt/"
      },
      /*{
        name: "UNINASSAU",
        logo:"themes/yellow-swan/img/uninassau-logo.jpeg",
        url: "http://www.mauriciodenassau.edu.br/"
      },*/
      {
        name: "Qualiti",
        logo:"themes/yellow-swan/img/qualiti-logo.jpeg",
        url: "http://www.qualiti.com.br/"
      }
    ],

    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
