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
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          nav: {
             contact: "Contact us",
             ou: "Find us",
             about: "About us",
             button: "Learn more",
          },
          home: {
            main: {
              section1: {
                title: "What is a Community Network!",
                desc: `<p className="lead">
                  Community networks refer to the telecommunications infrastructure deployed
                   and operated by a local group to meet its own communication needs[1].
                    They are the result of people working together, combining their resources,
                  uniting their efforts and coming together to bridge the absence or gaps in connectivity.
                </p>
                <p className="lead">
                The mode of management and the conditions of access are entirely autonomous and
                can be defined as they wish according to the resources and partnerships at their disposal.
                </p>
                <p className="lead">
                Concretely, community networks can, in general,
                cover various needs such as access to the telecommunications network,
                 access to the Internet or may be a local radio and/or television or other.
                </p>
                <p className="lead">
                With regard to wireless community networks with the Internet,
                apart from access to web resources and services which are
                among others access to e-commerce and tele-health services,
                distance learning, social and political engagement, government services and public safety information,
                community networks fundamentally promote connectivity to populations excluded because of their geographical areas,
                economic power or absence
                telecommunications infrastructure.
                </p>
                <p className="lead">
                These networks make the Internet available to the target community through cables, fiber optics or WIFI (IEEE 802.11).
                It is a network designed by the community and for the community.
                </p>`,
              },
              section2: {
                title: "Interest of wireless community networks",
                desc: `<p className="lead">
                The Internet makes the world a better place to live 2 where He creates
                or facilitates economic development, supports small and medium enterprises
                (SMEs) and creates broader economic opportunities for all.
                </p>
                <p className="lead">
                Access to the Internet is a fundamental human right recognized by the United Nations since 2012 and
                also by certain countries such as France. Yet nearly half of the world's population is still offline in 2020.
                </p>`,
              },
              section3: {
                title: "Some examples of community networks.",
                desc: `<p> The Internet Society (ISOC), in its mission to reduce the digital divide, in collaboration with certain local partners, has already supported nearly thirty community networks around the world. His mantra is for the community, with the community, by the community. Below are some examples: </p>

                <p>  Net : is a bottom-up, citizen-administered, technological and economic project, with the objective of creating a free, open and neutral telecommunications network based on a common model.</p>
                <p>  Nepal Wireless Project : Nepal Wireless Project is a non-profit initiative located in remote rural areas of Nepal. It was launched in 2002 to bring communication services to villages in Myagdi district and to find ways to bridge the digital divide between urban and rural areas in Nepal.</p>
                <p> NYCMesh  : Some projects are located in underserved urban areas of developed countries. In 2019, as part of the Beyond the Net grant program, the local New York chapter of the Internet Society set up a community network to serve an unconnected community (see details here).</p>
                <p> Tusheti, Georgia: The Internet Society has partnered with its Georgia Chapter and several Georgian Internet organizations to connect the remote and mountainous region of Tusheti to the Internet. The project was launched in September 2017, opening new opportunities for tourism and cultural preservation, providing an essential communication channel for health care and potential emergencies (read more here).</p>
                <p> Le réseau sans fil de Mankosi : in South Africa, the people of Mankosi set up a wireless community network to serve 12 villages with more than 6,000 inhabitants who were completely disconnected. A BBC report tells us about it here https://www.youtube.com/watch?v=R9u-hfxAeBo</p>`,
              },
            },
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
                title: "Client services",
                part1: "Help Center",
                part2: "Email us",
                part3: "Call us",
            },
            title2: {
                title: "This website",
                part1: "Promoters and Governance",
                part2: "Regulation",
                part3: "Funding",
                part4: "Particularity",
            },
            title3: {
                title: "Company Information",
                part1: "contact us",
                part2: "Terms of use",
                part3: "privacy policy",
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
            title2: "Our Impact",
          },
      },
      },
      fr: {
        translation: {
            nav: {
               contact: "Contactez nous",
               ou: "Où nous trouver",
               about: "A propos de nous",
               button: "En savoir plus",
            },
            home: {
              main: {
                section1: {
                  title: "C’est quoi un Réseau Communautaire!",
                  desc: `<p className="lead">
                  Les réseaux communautaires se réfèrent aux infrastructures de télécommunications
                   déployées et exploitées par un groupe local pour répondre à ses propres besoins
                   de communication[1]. Ils sont le résultat de personnes travaillant ensemble,
                    combinant leurs ressources, unissant leurs efforts et se rapprochant
                     pour combler l’absence
                     ou les lacunes de connectivité.
                  </p>
                  <p className="lead">
                    Le mode de gestion et les conditions d’accès sont entièrement autonome et peuvent être
                     définis à leur guise selon les ressources
                     et partenariats dont ils disposent.
                  </p>
                  <p className="lead">
                    Concrètement, les réseaux communautaires peuvent, en général,
                    couvrir divers besoins comme l’accès au réseau de télécommunication,
                    l’accès à Internet ou peuvent être une radio et/ou télévision locale ou autre.
                  </p>
                  <p className="lead">
                    En ce qui concerne les réseaux communautaire sans fil avec Internet,
                    en dehors de l’accès aux ressources et services de la toile qui sont
                    entre autres l’accès au commerce électronique et aux services de télé-santé,
                    l’apprentissage à distance, l’engagement social et politique,
                    les services gouvernementaux et l’information sur la sécurité publique,
                    les réseaux communautaires favorisent fondamentalement la connectivité aux populations
                    exclues du fait de leur zones géographique, du pouvoir économique ou d’absence
                    d’infrastructures de télécommunication.
                  </p>
                  <p className="lead">
                  Ces réseaux rendent l’Internet disponible à la communauté cible grâce aux câbles,
                   à la fibre optique ou au WIFI (IEEE 802.11). C’est un réseau conçu par la communauté
                   et pour la communauté.
                  </p>`,
                },
                section2: {
                  title: "Intérêt des réseaux communautaires sans fil",
                  desc: `<p className="lead">
                  Internet fait du monde un endroit plus agréable à vivre 2 où Il crée
                    ou facilite le développement économique,
                   soutient les petites et moyennes entreprises (PME) et
                   crée des opportunités économiques plus larges pour tous.
                  </p>
                  <p className="lead">
                    L’accès à Internet est un droit fondamental de l’homme reconnu par les Nations-Unies
                    depuis 2012 et aussi par certains pays comme la France. Pourtant, près de la moitié
                   de la population mondiale est encore déconnectée en 2020.
                  </p>`,
                },
                section3: {
                  title: "Quelques exemples de réseaux communautaires.",
                  desc: `<p> L’Internet Society (ISOC), dans sa mission de réduction de la fracture numérique, en collaborations avec certains partenaires locaux, a soutenu déjà près d’une trentaine de réseaux communautaires à travers le monde. Son mantra est pour la communauté, avec la communauté, par la communauté. Ci-dessous quelques exemples : </p>

                  <p> Net est un projet bottom-up, administré par les citoyens, technologique et économique, ayant pour objectif de créer un réseau de télécommunication libre, ouvert et neutre basé sur un modèle commun.</p>
                  <p>  Nepal Wireless Project : Nepal Wireless Project est une initiative à but non lucratif située dans les zones rurales reculées du Népal. Il a été lancé en 2002 pour apporter des services de communication aux villages du district de Myagdi et pour trouver des moyens de réduire la fracture numérique entre les zones urbaines et rurales du Népal.</p>
                  <p> NYCMesh  : Certains projets sont situés dans des zones urbaines mal desservies des pays développés. En 2019, dans le cadre du programme de subvention Beyond the Net, le chapitre local New York de Internet Society a mis en place un réseau communautaire pour desservir une communauté non connectée (voir détails ici).</p>
                  <p> Tusheti , Géorgie:Internet Society s’est associée à son chapitre géorgien et à plusieurs organisations Internet géorgiennes pour relier la région reculée et montagneuse de Tusheti à Internet. Le projet a été lancé en septembre 2017, ouvrant de nouvelles opportunités pour le tourisme et la préservation culturelle, fournissant un canal de communication essentiel pour les soins de santé et les situations d’urgence potentielles (en savoir plus ici).</p>
                  <p> Le réseau sans fil de Mankosi : en Afrique du Sud, les habitants de Mankosi ont mis en place un réseau communautaire sans fil pour desservir 12 villages de plus de 6.000 habitants qui étaient complètement déconnectés. Un reportage de BBC nous en parle ici https://www.youtube.com/watch?v=R9u-hfxAeBo </p>`,
                },
              },
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
                  title: "Services à la clientèle",
                  part1: "Centre d'aide",
                  part2: "Envoyez-nous un email",
                  part3: "Appelez-nous",
              },
              title2: {
                  title: "Ce site Web",
                  part1: "Promoteurs et Gouvernance",
                  part2: "Régulation",
                  part3: "Financement",
                  part4: "Particularité",
              },
              title3: {
                  title: "Informartion d'entreprise",
                  part1: "Contactez-nous",
                  part2: "Conditions d'utilisation",
                  part3: "politique de confidentialité",
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
              title2: "Notre impact",
            },
        },
      },
    },
  });

export default i18n;
