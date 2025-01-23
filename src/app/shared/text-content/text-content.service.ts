import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextContentService {
  language: "DE" | "EN";
  text: { [key: string]: { EN: string, DE: string } } =
    {
      nav1: {
        EN: "About me",
        DE: "Über mich"
      },
      nav2: {
        EN: "Skills",
        DE: "Fähigkeiten"
      },
      nav3: {
        EN: "Projects",
        DE: "Projekte"
      },
      heroButton1: {
        EN: "Check my work",
        DE: "Arbeit ansehen"
      },
      heroButton2: {
        EN: "Contact me",
        DE: "Schreib mir"
      },
      marquee1: {
        EN: "Frontend Developer",
        DE: "Frontend Developer"
      },
      marquee2: {
        EN: "Open to work",
        DE: "Offen für Arbeit"
      },
      marquee3: {
        EN: "Remote",
        DE: "Remote"
      },
      who: {
        EN: "Who I Am",
        DE: "Wer ich bin"
      },
      aboutmeHeading: {
        EN: "About me",
        DE: "Über mich"
      },
      aboutme: {
        EN: "Hello, I'm a solution-oriented developer who approaches problems with a combination of analytical and intuitive thinking. I am currently continuously advancing my programming skills and am always striving to acquire new knowledge and expand my competencies.",
        DE: "Hallo, ich bin ein lösungsorientierter Entwickler, der Probleme mit einer Kombination aus analytischem und intuitivem Denken angeht. Aktuell entwickle ich meine Programmierfähigkeiten kontinuierlich weiter und bin stets bestrebt, neues Wissen zu erwerben und meine Kompetenzen auszubauen."
      },
      aboutmeLocation: {
        EN: "I have worked as a service technician in recent years and am therefore well-versed in solution-oriented work. Working under time pressure is not a problem for me, as the job of a service technician primarily involves working under tight deadlines. I have always completed my tasks diligently, quickly, and with precision, and I will continue to do so in the future.",
        DE: "Ich habe in den letzten Jahren als Servicetechniker gearbeitet und bin daher mit lösungsorientierter Arbeit bestens vertraut. Das Arbeiten unter Zeitdruck ist für mich kein Problem, da die Tätigkeit als Servicetechniker hauptsächlich aus Arbeiten unter engen Zeitvorgaben bestand. Ich habe meine Aufgaben stets zielstrebig, schnell und sorgfältig erledigt und werde dies auch in Zukunft so fortführen."
      },
      aboutmeMind: {
        EN: "I am an open-minded person and can identify myself with the personality type 'INTP'.",
        DE: "Ich bin eine aufgeschlossene Person und kann mich mit dem Persönlichkeitstyp 'INTP' identifizieren."
      },
      aboutmeProfession: {
        EN: `Coding is more than just solving computer problems; it's a universal language of logic. I see code as a lens through which we can understand complex systems.
          I'm passionate about using coding as a problem-solving tool. Got a challenge for me?`,
        DE: `Programmieren ist mehr als nur das Lösen von Computerproblemen; es ist eine universelle Sprache der Logik.
          Ich sehe Code als eine Linse, durch die wir komplexe Systeme verstehen können
          und bin leidenschaftlich daran interessiert, Programmieren als Werkzeug zur Problemlösung einzusetzen. Haben Sie eine Herausforderung für mich?`
      },
      technologies: {
        EN: "Technologies",
        DE: "Technologieen"
      },
      skillsetHeading: {
        EN: "Skill Set",
        DE: "Skill Set"
      },
      skillset1: {
        EN: "Recently, I have focused on various projects in frontend development and currently plan to further educate myself in the backend area.",
        DE: "Ich habe mich in jüngster Zeit mit diversen Projekten auf die Frontend Entwicklung fokussiert und habe aktuell vor, mich im Backend Bereich weiterzubilden."
      },
      skillset2a: {
        EN: "You need",
        DE: "Sie brauchen"
      },
      skillset2b: {
        EN: "more skills?",
        DE: "mehr Skills?"
      },
      skillset3: {
        EN: "Feel free to contact me. I'm looking to expand my skills.",
        DE: "Kontaktieren Sie mich gern. Ich möchte meine Fähigkeiten erweitern."
      },
      letsTalkButton: {
        EN: "Let's Talk",
        DE: "Lassen Sie uns reden"
      },
      hoverBubble: {
        EN: "I am interested in these frameworks, for example:",
        DE: "Ich habe zum Beispiel Interesse an diesen Frameworks:"
      },
      featuredProjectsHeading: {
        EN: "Featured Projects",
        DE: "Projekt-Auswahl"
      },
      featuredProjectsText: {
        EN: "Practical examples of my work - Interactive insights into my projects.",
        DE: "Praxisbeispiele meiner Arbeit - Interaktive Einblicke in meine Projekte."
      },
      legalNotice: {
        EN: "Legal Notice",
        DE: "Impressum"
      },
      privacyPolicy: {
        EN: "Privacy Policy",
        DE: "Datenschutz"
      },
      freiberg: {
        EN: "Freiberg Germany",
        DE: "Freiberg"
      },
      contact: {
        EN: "Contact",
        DE: "Kontakt"
      },
      phone: {
        EN: "Phone",
        DE: "Telefon"
      },
      whatIsThisProjectAbout: {
        EN: "What is this project about?",
        DE: "Worum geht es bei diesem Projekt?"
      },
      nextProject: {
        EN: "Next Project",
        DE: "Nächstes Projekt"
      },
      whatMyColleaguesSay: {
        EN: "What my colleagues say about me",
        DE: "Was meine Kollegen über mich sagen"
      },
      contactMe: {
        EN: "Contact me",
        DE: "Schreiben Sie mir"
      },
      title: {
        EN: "Let's work together",
        DE: "Lassen Sie uns zusammenarbeiten"
      },
      gotProblem: {
        EN: "Got a problem to solve?",
        DE: "Haben Sie ein Problem zu lösen?"
      },
      contactThroughForm: {
        EN: "Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.",
        DE: "Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, von Ihnen zu hören, Ihre Ideen zu kennen und mit meiner Arbeit zu Ihren Projekten beizutragen."
      },
      needDev: {
        EN: "Need a Frontend Developer?",
        DE: "Brauchen Sie einen Frontend Entwickler?"
      },
      letsTalk: {
        EN: "Let's talk!",
        DE: "Kontaktieren sie mich!"
      },
      yourName1: {
        EN: "What's your name?",
        DE: "Wie lautet Ihr Name?"
      },
      yourName2: {
        EN: "Your name goes here",
        DE: "Ihr Name kommt hier hin"
      },
      yourName3: {
        EN: "Oops! it seems your name is missing",
        DE: "Ups! Ihr Name scheint zu fehlen"
      },
      yourMail1: {
        EN: "What's your email?",
        DE: "Wie lautet Ihre E-Mail?"
      },
      yourMail2: {
        EN: "youremail@email.com",
        DE: "ihreemail@email.com"
      },
      yourMail3: {
        EN: "Hoppla! your email is required",
        DE: "Hoppla! Ihre E-Mail ist erforderlich"
      },
      howHelp1: {
        EN: "How can I help you?",
        DE: "Wie kann ich Ihnen helfen?"
      },
      howHelp2: {
        EN: "Hello Oliver, I am interested in...",
        DE: "Hallo Oliver, ich bin interessiert an..."
      },
      howHelp3: {
        EN: "What do you need to develop?",
        DE: "Was wollen Sie entwickeln?"
      },
      checkBox1: {
        EN: "I've read the ",
        DE: "Ich habe die"
      },
      checkBox2: {
        EN: "privacy policy",
        DE: "Datenschutzerklärung"
      },
      checkBox3: {
        EN: "and agree to the processing of my data as outlined.",
        DE: "gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu."
      },
      checkBox4: {
        EN: "Please accept the privacy policy.",
        DE: "Bitte akzeptieren Sie die Datenschutzbestimmungen."
      },
      sayHello: {
        EN: "Say Hello!",
        DE: "Sag Hallo!"
      }
      
    }

  constructor() {
    this.language = this.getLanguageFromLocalStorage()
  }

  getText(key: string) {
    return this.text[key][this.language]
  }

  switchLanguage() {
    this.language = this.language === "EN" ? "DE" : "EN";
    localStorage.setItem("language", this.language)
  }

  getLanguageFromLocalStorage() {
    let storageLang = localStorage.getItem("language");
    if (storageLang === "DE") {
      return "DE"
    } else {
      return "EN"
    }
  }
}
