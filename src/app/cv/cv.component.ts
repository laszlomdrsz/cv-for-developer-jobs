import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  idovonalElemek = [
    {
      cim: 'Webfejlesztőmentor (Webmentor Group Bt.)',
      pozicio: 'Alapító, mentor webfejlesztők részére',
      datum: '2020. június -',
      leiras: 'Mentori tevékenységem konzultációkra, állandó segítségnyújtásra, információs anyagok (cikk, e-book, videókurzus) készítésére terjed ki.',
      kep: 'webfejlesztomentor.jpg'
    },
    {
      cim: 'OnlineVagyok',
      pozicio: 'Alapító',
      datum: '2017. június - 2020. június',
      leiras: 'Első webfejlesztéssel foglalkozó vállalkozásomat ma már teljes mértékben korábbi csapatom működteti.',
      kep: 'onlinevagyok.png'
    },
    {
      cim: 'Impact Hub Budapest',
      pozicio: 'Social Impact Award Community Lead',
      datum: '2019. február - 2019. június',
      leiras: 'Oktatási, szervezési és marketingtevékenységek támogatásával foglalkoztam társadalmi célú startup-környezetben, illetve honlapfejlesztési feladatokat is elláttam.',
      kep: 'impacthub.jpg'
    },
    {
      cim: 'Holistic Medical Egészségközpont',
      pozicio: 'Online Marketing Manager',
      datum: '2015. május - 2017. június',
      leiras: 'Itt ismerkedtem meg a WordPress használatával, illetve sok marketinggel kapcsolatos tapasztalatot szereztem.',
      kep: 'holisticmedical.png'
    },
    {
      cim: 'AIESEC',
      pozicio: 'Team Leader/Supervisor',
      datum: '2014. október - 2017. július',
      leiras: 'Főképp marketinggel, szervezési feladatokkal, NGO-kkal való kapcsolattartással, illetve Magyarországon tartózkodó külföldiek támogatásával foglalkoztam.',
      kep: 'aiesec.jpg'
    },
    {
      cim: 'Budapesti Corvinus Egyetem',
      pozicio: 'Nemzetközi gazdálkodás BA',
      datum: '2014. szeptember - 2020. június',
      leiras: 'Az egyetem kiválasztásának az alapja a kapcsoaltépítés, vállalkozásindításra való felkészülés, illetve matematikai és nyelvi képességeim továbbfejlesztése volt.',
      kep: 'corvinus.png'
    },
  ];

  nyelvek = [
    {name: 'en', label: 'Angol', level: 'C1'},
    {name: 'de', label: 'Német', level: 'C1'},
    {name: 'jp', label: 'Japán', level: 'B1'},
    {name: 'hu', label: 'Magyar', level: 'Anyanyelv'},
  ];

  elerhetosegek = [
    {icon: 'call', label: 'Telefon', value: '+36707757137'},
    {icon: 'email', label: 'E-mail', value: 'laszlomdrsz@gmail.com'},
    {icon: 'icons/github.png', label: 'Github', value: 'github.com/laszlomdrsz', link: true},
    {icon: 'icons/linkedin.png', label: 'LinkedIn', value: 'linkedin.com/in/laszlomadarasz', link: true},
  ];

  szakteruletek = [
    {
      title: 'Full-stack webfejlesztés',
      description: 'Még gimnazista koromban, 2012-ben kezdtem el webfejlesztéssel foglalkozni hobbiként, akkor még nem is gondoltam, hogy később ez lesz a fő foglalkozásom.',
      img: 'angular-nodejs.png',
      references: [
        {
          title: 'Csomagpont elszámoló rendszer és más összekötések',
          url: 'https://csomagpont.com/',
          img: 'csomagpont.jpg'
        },
        {
          title: 'Szuperinfó hirdetésfeladó rendszer',
          url: 'https://szuperinfo.hirdessemeg.hu',
          img: 'szuperinfo.png'
        },
        {
          title: 'ShopRenter Csomagpont alkalmazás',
          url: 'https://support.shoprenter.hu/hc/hu/articles/360009934018-Csomagpont',
          img: 'shoprenter.png'
        },
        {
          title: 'MediaWorks hirdetésfeladó rendszer',
          url: 'https://napilap.hirdessemeg.hu',
          img: 'mediaworks.jpg'
        },
        {
          title: 'Kreatívliget elszámoló rendszer',
          url: 'https://kreativliget.hu/',
          img: 'kreativliget.svg'
        },
    ]
    },
    {
      title: 'Oktatás',
      description: 'Mindig különös szenvedélyt éreztem a tanuláshoz és a tudásom átadásához, ezért amikor csak lehetett, indítottam olyan projekteket, ahol kiteljesedhettem azen a területen.',
      img: 'oktatas.png',
      references: [
        {
          title: 'MinnerAkadémia WordPress kurzus',
          url: 'https://minnerakademia.hu/products/course/wordpress-weboldal-keszites-oktatas-kezdoknek',
          img: 'minner.png'
        },
        {
          title: 'Webfejlesztőmentor',
          url: 'https://webfejlesztomentor.hu',
          img: 'webfejlesztomentor.jpg'
        },
        {
          title: 'Egyetemistából vállalkozó',
          url: 'https://www.youtube.com/watch?v=Zol1cdtO8-A',
          img: 'egyetemistabolvallalkozo.jpg'
        },
    ]
    },
    {
      title: 'WordPress fejlesztés',
      description: 'A környezetemben sok vállalkozás foglalkozott felhasználói szinten WordPress oldalak kezelésével, így az ő igényeikből kiindulva kezdtem el WordPress egyedi fejlesztésekkel foglalkozni.',
      img: 'wordpress.png',
      references: [
        {
          title: 'Balaicza magánrendelő leletküldő rendszer',
          url: 'https://balaicza.hu/',
          img: 'balaicza.png'
        },
        {
          title: 'Next Purchase Discount plugin',
          url: 'https://wordpress.org/plugins/next-purchase-discount-for-woocommerce/',
          img: 'npd.png'
        },
        {
          title: 'Kreatívliget webshop egyedi fejlesztések',
          url: 'https://kreativliget.hu/',
          img: 'kreativliget.svg'
        },
    ]
    },
  ];

  technologiak = ['HTML5', 'CSS3', 'SCSS', 'Angular', 'NodeJS', 'PHP', 'TypeScript', 'Git', 'MySQL', 'MongoDB', 'Angular Material',
  'Docker', 'Linux', 'WordPress', 'WooCommerce'];

  nyujtasok = [
    {
      cim: 'Önállóság, problémamegoldás',
      leiras: 'Hozzászoktam, hogy egyedül kell megoldanom bármilyen feladatot, ami rám hárul.'
    },
    {
      cim: 'Gyors tanulás',
      leiras: 'Szívesen megtanulok bármit, és még élvezem is.'
    },
    {
      cim: 'Rugalmasság',
      leiras: 'Akkor tekintem késznek a munkát, ha elégedett a partnerem, még akkor is, ha ehhez plusz lépéseket kell tennem.'
    },
    {
      cim: 'Pontosság, megbízhatóság',
      leiras: 'Az üzleti világban ritka, hogy egy projekt nem késik, de rám nagyon kevésszer vártak.'
    },
    {
      cim: 'Vállalkozói jogviszony',
      leiras: 'El tudom látni a saját adózási, eszközbeszerzési, és más munkához szükséges feltételeimet.'
    },
  ];

  igenyek = [
    {
      cim: 'Helyben és időben rugalmas munkavégzés',
      leiras: 'Energiám leghatékonyabb beosztásának érdekében.'
    },
    {
      cim: 'Teljesítmény alapú értékelés',
      leiras: 'A tétlenül töltött órák helyett az elvégzett munka értéke számít.'
    },
    {
      cim: 'Barátságos, bizalmi környezet',
      leiras: 'A legjobbat nyújtom a munkámban, és másokról is ezt feltételezem. Szeretem, ha ez a feltételezés kölcsönös.'
    },
    {
      cim: 'Havi szintű rendszeres fizetés',
      leiras: 'Annak érdekében, hogy fókuszomat a munkán tudjam tartani, ne a pénzügyi bizonytalanság kezelésén.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
