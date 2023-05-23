import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          headers: {
            title: "Observatory of Community Networks",
            button: "Rc News",
          },
          nav: {
             contact: "Contact us",
             ou: "RC News",
             about: "About us",
             button: "RC News",
          },
          section: {
            title: "RC in Haiti",
            subtitle: "Here is the list of community networks in Haiti and their addresses.",
            button: "See all Rc in Haiti >",
          },
          home: {
            main: {
              section1: {
                title: "What is a Community Network!",
                desc: `
                  Community networks refer to the telecommunications infrastructure deployed and operated by a local group to meet its own communication needs[1]. They are the result of people working together, combining their resources, joining forces and coming together to bridge the absence or gaps in connectivity.`,
              },
              section2: {
                title: "Interest of wireless community networks",
                desc: `
                The Internet makes the world a better place to live 2 where He creates
                or facilitates economic development, supports small and medium enterprises
                (SMEs) and creates broader economic opportunities for all.
                `,
                desc2:
                `Access to the Internet is a fundamental human right recognized by the United Nations since 2012 and
                also by certain countries such as France. Yet nearly half of the world's population is still offline in 2020.
                </p>`,
              },
              section3: {
                title: "RC around the world.",
                desc: "Around the world, people are coming together to create and maintain their own connections to the Internet by setting up community networks to connect the nearly 3 billion who are not yet connected.",
                desc2: "Within countries such as South Africa, Argentina, Zimbabwe, Colombia, India, United States, Kyrgyzstan, Georgia have already developed community network initiatives to reach marginalized populations in order to solve their Internet access problems at a low cost. ",
              },
            },
          },
          new: {
            title: "News",
            subtitle: "Haitian News on Community Networks and Universal Internet Access",
          },
          contact: {
            title: "Contact us",
            sub: "Do you want to contact us ? You can either email us at <1 class='email'> contact@orc.org.ht </1> or use the number +50937027275.",
            formTitle: "CONTACT FORM",
            button: "Send",
            name: "your name please",
            email: "your email please",
            number: "your phone number",
            text: "Empty fields!!!!",
          },
          lookup: {
            title: "Network mapping",
          },
          footer: {
            title1: {
                title: "Us",
                part1: "About us",
                part2: "Envoyez-nous un email",
                part3: "Appelez-nous",
            },
            title2: {
                title: "RC around the world",

            },
            title3: {
                title: "Regulatory frameworks",
                part1: "Promoters and Governance",
                part2: "Regulation",
                part3: "Particularity",
            },
            title4: {
              title: "Funds available",
              part1: "Internet Society Foundation",
              part2: "Beyond the Net Large Grant Program",
              part3: "Connecting the Unconnected Funding Program",
          },
            form: {
                title: "JOIN OUR NEWSLETTER",
                sub: "Sign up to receive the latest updates, features and news!",
            },
          },
          notFound: {
            text: "Hmm… This page does not exist. Try looking for something else.",
          },
          login: {
            label1: "Email address or username",
            label2: "Password",
            label3: "You do not have an account? Register",
            help1: "Required",
            help2: "Must contain at least 1 uppercase letter, must contain at least 1 lowercase letter and 1 number Can contain any of these special characters $ % # * &",
            button: "Login",
          },
          profil: {

          },
          about: {
            title1: "Hi, we‘re ORC.",
            desc: `The Observatory of Community Networks (ORC)
            brings together in a single site the projects,
            grants and news on community networks
            around the world to promote universal access to high-speed Internet
            with an affordable cost for populations excluded because of their geographical areas,
            economic power or lack of telecommunications infrastructure
            because the United Nations recognizes that accessing the Internet is
            a fundamental right.`,
              desc1: `According to the 2023 report by We are social and Meltwater,
              in the 8 billion of the total world population,
              the world today has 5.16 billion Internet users,
              which means that 64.4% of the world's population is now online
              but 35.6% are not yet online to cum
              the same benefits as connected populations.`,
              desc2: `Community networks
              refer to telecommunications infrastructure
              deployed and operated by a local group to meet
              their own communication needs.
              They are the result of people working together, combining their resources,
              uniting their efforts and coming together to fill
              the absence or gaps in connectivity.
              Concretely, this access to the Internet will allow access to electronic commerce,
              telehealth services distance learning,
              to social and political commitment,
              government services and public safety information.`,
          },
      },
      },
      fr: {
        translation: {
          headers: {
            title: "Observatoire des Réseaux Communautaires",
            button: "Rc Actualités",
          },
            nav: {
               contact: "Contactez nous",
               ou: "Actualités RC",
               about: "A propos de nous",
               button: "Actualités RC",
            },
            section: {
              title: "RC en Haïti",
              subtitle: "Voici la liste des réseaux communautaires d'Haïti et leurs adresses.",
              button: "Voir tous les Rc en Haïti >",
            },
            home: {
              main: {
                section1: {
                  title: "C’est quoi un Réseau Communautaire!",
                  desc: `
                  Les réseaux communautaires se réfèrent aux infrastructures de télécommunications
                   déployées et exploitées par un groupe local pour répondre à ses propres besoins
                   de communication[1]. Ils sont le résultat de personnes travaillant ensemble,
                    combinant leurs ressources, unissant leurs efforts et se rapprochant
                     pour combler l’absence
                     ou les lacunes de connectivité.
                  `,
                },
                section2: {
                  title: "Intérêt des réseaux communautaires sans fil",
                  desc: `
                  Internet fait du monde un endroit plus agréable à vivre 2 où Il crée
                    ou facilite le développement économique,
                   soutient les petites et moyennes entreprises (PME) et
                   crée des opportunités économiques plus larges pour tous.
                  `,
                  desc2:
                    `L’accès à Internet est un droit fondamental de l’homme reconnu par les Nations-Unies
                    depuis 2012 et aussi par certains pays comme la France. Pourtant, près de la moitié
                   de la population mondiale est encore déconnectée en 2020.
                  `,
                },
                section3: {
                  title: "RC dans le monde",
                  desc: "Partout dans le monde, les gens s’unissent pour créer et maintenir leurs propres connexions à l’Internet en mettant en place des réseaux  communautaires pour connecter près de 3 milliards qui ne le sont pas encore.",
                  desc2: `Au sein des pays comme Afrique du Sud, Argentine, Zimbabwe, Colombie, Inde, Etats Unis, Kirghizistan,
                       Géorgie ont déjà développé des initiatives de réseaux communautaires pour toucher des populations marginalisées
                       afin de résoudre leurs problèmes d’accès à Internet à un faible coût. `,
                },
              },
            },
            new: {
              title: "Actualités",
              subtitle: "Actualités haitiennes sur les réseaux communautaires et l‘accès à Internet universel",
            },
            contact: {
              title: "Contactez-nous",
              sub: "Vous souhaitez nous contacter? Vous pouvez soit nous envoyer un courriel à <1 class='email'>contact@orc.org.ht </1> ou utiliser le numéro +50937027275.",
              formTitle: "FORMULAIRE DE CONTACT",
              button: "Envoyer",
              name: "votre nom svp",
              email: "votre email svp",
              number: "votre numéro de téléphone",
              text: "Champs vide !!!!",
            },
            lookup: {
              title: "Cartographie du réseau",
            },
            footer: {
              title1: {
                  title: "Nous",
                  part1: "a propos de nous",
                  part2: "Envoyez-nous un email",
                  part3: "Appelez-nous",
              },
              title2: {
                  title: "RC dans le monde",

              },
              title3: {
                  title: " Cadres réglementaires",
                  part1: "Promoteurs et Gouvernance",
                  part2: "Régulation",
                  part3: "Particularité",
              },
              title4: {
                title: "Fonds disponibles",
                part1: "Internet Society Foundation",
                part2: "Beyond the Net Large Grant Program",
                part3: "Connecting the Unconnected Funding Program",
            },
              form: {
                  title: "REJOIGNEZ NOTRE NEWSLETTER",
                  sub: "Inscrivez-vous pour recevoir les dernières mises à jour, fonctionnalités et actualités!",
              },
            },
            notFound: {
              text: "Hum… Cette page n'existe pas. Essayez de chercher autre chose.",
            },
            login: {
              label1: "Adresse e-mail ou nom d'utilisateur",
              label2: "Mot de passe",
              label3: "Vous n’avez pas de compte? S’inscrire",
              help1: "Required",
              help2: "Doit contenir au moins 1 lettre majuscule, doit contenir au moins 1 lettre minuscule et 1 chiffre Peut contenir n'importe lequel de ces caractères spéciaux $ % # * &",
              button: "Se connecter",
            },
            profil: {

            },
            about: {
              title1: "Bonjour, nous sommes ORC.",
              desc: `L’Observatoire des Réseaux Communautaires (ORC)
              rassemble dans un site unique les projets,
              les subventions et les actualités sur les réseaux communautaires
              dans le monde en vue de favoriser l’accès universel à l’Internet à haut débit
              avec un coût abordable pour les  populations exclues du fait de leur zones géographique,
              du pouvoir économique ou d’absence d’infrastructures de télécommunication
              car l’Organisation des Nations Unis reconnait qu’accéder à Internet est
              un droit fondamental.`,
              desc1: `Selon le rapport 2023 de We are social et Meltwater,
              dans les 8 milliards de la population mondiale totale,
              le monde compte aujourd’hui 5,16 milliards d’utilisateurs d’Internet,
              ce qui signifie que 64,4 % de la population mondiale est désormais en ligne
              mais 35,6% ne sont pas encore en ligne pour jouir
              les mêmes bénéfices que les populations connectées.`,
              desc2: `Les réseaux communautaires
              se réfèrent aux infrastructures de télécommunications
              déployées et exploitées par un groupe local pour répondre à
              ses propres besoins de communication.
              Ils sont le résultat de personnes travaillant ensemble, combinant leurs ressources,
              unissant leurs efforts et se rapprochant pour combler
              l’absence ou les lacunes de connectivité.
              Concrètement, cet accès à  Internet permettra l’accès au commerce électronique,
              aux services de télé-santé à l’apprentissage à distance,
              à l’engagement social et politique,
              aux services gouvernementaux et  à l’information sur la sécurité publique.`,
            },
        },
      },
    },
  });

export default i18n;
