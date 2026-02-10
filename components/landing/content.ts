export const supportedLanguages = ["en", "de", "pl", "es"] as const;
export type Language = (typeof supportedLanguages)[number];

export const defaultLanguage: Language = "en";

export const languageLabels: Record<Language, string> = {
  en: "EN",
  de: "DE",
  pl: "PL",
  es: "ES"
};

export type LandingCopy = {
  seo: {
    title: string;
    description: string;
  };
  nav: {
    signup: string;
    login: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  rewards: {
    title: string;
    subtitle: string;
    body: string;
    cta: string;
  };
  money: {
    title: string;
    subtitle: string;
    body: string;
    cta: string;
  };
  experience: {
    ariaLabel: string;
    features: {
      title: string;
      body: string;
      withDevice?: boolean;
    }[];
  };
  security: {
    titleLines: string[];
    subtitle: string;
    body: string;
    cta: string;
  };
  trust: {
    titleLines: string[];
    paragraphs: string[];
  };
  ratings: {
    ariaLabel: string;
    storeLabel: string;
    button: string;
    testimonialQuote: string;
    testimonialName: string;
  };
  footer: {
    faq: { title: string; body: string }[];
    metaLines: string[];
    brandTitle: string;
    brandBody: string;
    columns: { title: string; items: string[] }[];
    copyright: string;
  };
};

const copy: Record<Language, LandingCopy> = {
  en: {
    seo: {
      title: "SampadAI - Her Wealth. Her Data. Her AI.",
      description:
        "SampadAI is a personal finance and optimization app for women, built to help you track, plan, and grow with confidence."
    },
    nav: {
      signup: "signup",
      login: "login"
    },
    hero: {
      title: "crafted for the woman in command",
      subtitle: "join the inner circle of women winning daily.",
      cta: "Download SampadAI"
    },
    rewards: {
      title: "feel special more often.",
      subtitle: "turn financial management into a lifestyle upgrade.",
      body:
        "every time you optimize your spending or reach a savings milestone on SampadAI, you're doing more than just \"banking.\" You're unlocking exclusive paths to wealth and curated experiences designed for the modern woman. With SampadAI, financial growth is its own reward.",
      cta: "Explore rewards"
    },
    money: {
      title: "we take your money matters seriously.",
      subtitle: "so that you don't have to.",
      body:
        "never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always.",
      cta: "Experience the upgrade"
    },
    experience: {
      ariaLabel: "SampadAI experiences",
      features: [
        {
          title: "we've got your back.",
          body:
            "stop reacting to your finances and start leading them. Receive intelligent, category-based breakdowns of your monthly spends and real-time alerts on your credit limits.",
          withDevice: true
        },
        {
          title: "begin your winning streak.",
          body:
            "your journey to financial freedom should be as rewarding as the destination."
        },
        {
          title: "for your eclectic taste.",
          body:
            "step into a member-only space featuring a handpicked selection of products and experiences designed to align with your lifestyle."
        },
        {
          title: "more cash in your pockets.",
          body:
            "stop jumping between apps to stay on top of your life. With SampadAI Auto-Pilot"
        }
      ]
    },
    security: {
      titleLines: ["security first.", "and second."],
      subtitle: "what's yours remains only yours.",
      body:
        "We've built SampadAI with a \"zero-error\" philosophy. Your personal information and transaction history are encrypted at every step, ensuring that what's yours remains yours.",
      cta: "Become a member"
    },
    trust: {
      titleLines: ["the story of", "SampadAI begins", "with trust."],
      paragraphs: [
        "wealth is more than a number. It's a choice. For too long, the world of finance was built by a few, for a few often overlooking the very people who manage the heart of every economy: women. We felt it was time someone built a system that didn't just track transactions, but honored the intention behind them.",
        "we created SampadAI to be the wind at your back. A platform that rewards the smart, the disciplined, and the visionary. By optimizing the way you manage your money today, we're helping you build the legacy you want for tomorrow. We built this because we believe financial freedom isn't a gift it's a right you've already earned.",
        "if you're here, you're ready to lead your own financial story. Welcome to SampadAI."
      ]
    },
    ratings: {
      ariaLabel: "App ratings",
      storeLabel: "app store",
      button: "Download the app",
      testimonialQuote:
        "\"in love! such a seamless user experience, smooth as freshly waxed pair of legs! very intuitive and easy to use application. good job people, good job.\"",
      testimonialName: "emilia llosa"
    },
    footer: {
      faq: [
        {
          title: "about SampadAI",
          body:
            "SampadAI is a personal finance and optimization app for women. it helps you track spending, plan goals, and make smarter money moves with AI-led guidance that feels human."
        },
        {
          title: "how does SampadAI help me grow?",
          body:
            "SampadAI turns your daily money decisions into long-term progress with insights, nudges, and milestones that keep you moving forward."
        },
        {
          title: "how do i earn rewards on SampadAI?",
          body:
            "members earn rewards by completing key financial milestones and building consistent habits.\n\nSampadAI milestone rewards:\n- hit savings goals and receive curated perks and experiences.\n- optimize monthly spending and unlock access to member-only benefits.\n\nSampadAI community rewards:\n- invite a friend and both of you unlock extra rewards when they complete their first milestone."
        },
        {
          title: "what do you get as a SampadAI member?",
          body:
            "as a SampadAI member, you unlock tools and insights designed to build clarity and confidence.\n\n- smart spend tracking with clear categories\n- savings goals with progress milestones\n- alerts for bills, renewals, and cashflow dips\n- AI suggestions to optimize budgets and reduce leaks\n- privacy-first data controls and export options"
        },
        {
          title: "how do i become a SampadAI member?",
          body:
            "join the waitlist to get early access. once we open, you'll get a simple onboarding flow to personalize your goals, connect accounts, and start optimizing."
        },
        {
          title: "how do i track my financial health?",
          body:
            "SampadAI gives you a clean, real-time snapshot of spending, savings, and goal progress. you'll see trends, insights, and simple next steps without financial jargon."
        },
        {
          title: "banks supported on SampadAI",
          body:
            "SampadAI supports most major banks and card networks, with more added regularly. connect only the accounts you want and control access anytime."
        }
      ],
      metaLines: [
        "resources: savings calculator budget planner net worth tracker debt payoff planner subscription audit investment glossary retirement checklist",
        "trusted by women building wealth, one intentional decision at a time"
      ],
      brandTitle: "complete security. no asterisks.",
      brandBody:
        "SampadAI encrypts all data and transactions to ensure a completely secure experience for our members.",
      columns: [
        {
          title: "products",
          items: ["auto-pilot", "goal planner"]
        },
        {
          title: "company",
          items: ["about", "careers", "community", "contact"]
        },
        {
          title: "resources",
          items: [
            "articles",
            "guides",
            "templates",
            "budgeting 101",
            "investing basics"
          ]
        },
        {
          title: "policy",
          items: ["privacy policy", "data protection", "terms of use", "ai disclosure"]
        }
      ],
      copyright: "copyright (c) 2026 SampadAI Pvt Ltd."
    }
  },
  de: {
    seo: {
      title: "SampadAI - Ihr Vermögen. Ihre Daten. Ihre KI.",
      description:
        "SampadAI ist eine persönliche finanz- und optimierungs-app für frauen, die dir hilft, ausgaben zu verfolgen, ziele zu planen und mit selbstvertrauen zu wachsen."
    },
    nav: {
      signup: "registrieren",
      login: "anmelden"
    },
    hero: {
      title: "gemacht für die frau, die führt",
      subtitle: "tritt dem inneren kreis von frauen bei, die täglich gewinnen.",
      cta: "SampadAI herunterladen"
    },
    rewards: {
      title: "fühl dich öfter besonders.",
      subtitle: "mach finanzmanagement zu einem lifestyle-upgrade.",
      body:
        "jedes mal, wenn du deine ausgaben optimierst oder einen spar-meilenstein auf SampadAI erreichst, tust du mehr als nur \"banking.\" du öffnest exklusive wege zu wohlstand und kuratierten erlebnissen für die moderne frau. mit SampadAI ist finanzielles wachstum seine eigene belohnung.",
      cta: "belohnungen entdecken"
    },
    money: {
      title: "wir nehmen deine geldangelegenheiten ernst.",
      subtitle: "damit du es nicht musst.",
      body:
        "verpass nie einen fälligkeitstermin mit erinnerungen, die dir helfen, deine rechnungen pünktlich zu zahlen, sofortige abwicklungen bedeuten, dass du nie warten musst, bis deine zahlungen durch sind, und die auszuganalyse zeigt dir, wohin dein geld geht, immer.",
      cta: "das upgrade erleben"
    },
    experience: {
      ariaLabel: "SampadAI erlebnisse",
      features: [
        {
          title: "wir stehen hinter dir.",
          body:
            "hör auf, auf deine finanzen zu reagieren, und fang an, sie zu führen. erhalte intelligente, kategorie-basierte aufschlüsselungen deiner monatlichen ausgaben und echtzeit-alarme zu deinen kreditlimits.",
          withDevice: true
        },
        {
          title: "starte deine gewinnserie.",
          body:
            "deine reise zur finanziellen freiheit sollte genauso lohnend sein wie das ziel."
        },
        {
          title: "für deinen eklektischen geschmack.",
          body:
            "tritt in einen mitgliederbereich mit einer handverlesenen auswahl an produkten und erlebnissen, die zu deinem lifestyle passen."
        },
        {
          title: "mehr geld in deinen taschen.",
          body:
            "hör auf, zwischen apps zu springen, um dein leben im blick zu behalten. mit SampadAI Auto-Pilot"
        }
      ]
    },
    security: {
      titleLines: ["sicherheit zuerst.", "und dann."],
      subtitle: "was dir gehört, bleibt nur dir.",
      body:
        "wir haben SampadAI mit einer \"null-fehler\"-philosophie gebaut. deine persönlichen daten und transaktionshistorie werden in jedem schritt verschlüsselt, damit das, was dir gehört, dir gehört.",
      cta: "mitglied werden"
    },
    trust: {
      titleLines: ["die geschichte von", "SampadAI beginnt", "mit vertrauen."],
      paragraphs: [
        "wohlstand ist mehr als eine zahl. es ist eine entscheidung. zu lange wurde die finanzwelt von wenigen für wenige gebaut und übersah dabei die menschen, die das herz jeder wirtschaft managen: frauen. wir fanden, es war zeit für ein system, das nicht nur transaktionen verfolgt, sondern die absicht dahinter ehrt.",
        "wir haben SampadAI geschaffen, um dir rückenwind zu geben. eine plattform, die die klugen, die disziplinierten und die visionären belohnt. indem wir optimieren, wie du dein geld heute managst, helfen wir dir, das vermächtnis von morgen aufzubauen. wir haben das gebaut, weil wir glauben, finanzielle freiheit ist kein geschenk, sondern ein recht, das du dir bereits verdient hast.",
        "wenn du hier bist, bist du bereit, deine eigene finanzgeschichte zu führen. willkommen bei SampadAI."
      ]
    },
    ratings: {
      ariaLabel: "App-bewertungen",
      storeLabel: "app store",
      button: "app herunterladen",
      testimonialQuote:
        "\"verliebt! so ein nahtloses user-erlebnis, glatt wie frisch gewachste beine! sehr intuitive und leicht zu bedienende app. guter job, leute, guter job.\"",
      testimonialName: "emilia llosa"
    },
    footer: {
      faq: [
        {
          title: "über SampadAI",
          body:
            "SampadAI ist eine persönliche finanz- und optimierungs-app für frauen. sie hilft dir, ausgaben zu verfolgen, ziele zu planen und mit KI-gestützter, menschlich wirkender hilfe klügere geldentscheidungen zu treffen."
        },
        {
          title: "wie hilft mir SampadAI zu wachsen?",
          body:
            "SampadAI verwandelt deine täglichen geldentscheidungen in langfristigen fortschritt mit insights, nudges und meilensteinen, die dich voranbringen."
        },
        {
          title: "wie verdiene ich belohnungen bei SampadAI?",
          body:
            "mitglieder verdienen belohnungen, indem sie wichtige finanz-meilensteine erreichen und konsequente gewohnheiten aufbauen.\n\nSampadAI meilenstein-belohnungen:\n- sparziele erreichen und kuratierte perks und erlebnisse erhalten.\n- monatliche ausgaben optimieren und zugang zu exklusiven member-vorteilen freischalten.\n\nSampadAI community-belohnungen:\n- lade eine freundin ein und ihr beide schaltet zusätzliche belohnungen frei, wenn sie ihren ersten meilenstein erreicht."
        },
        {
          title: "was bekommst du als SampadAI-mitglied?",
          body:
            "als SampadAI-mitglied schaltest du tools und einblicke frei, die klarheit und selbstvertrauen aufbauen.\n\n- intelligentes ausgaben-tracking mit klaren kategorien\n- sparziele mit fortschritts-meilensteinen\n- alarms für rechnungen, verlängerungen und cashflow-dellen\n- KI-vorschläge zur budget-optimierung und zum reduzieren von leaks\n- datenschutz-first kontrolle und export-optionen"
        },
        {
          title: "wie werde ich SampadAI-mitglied?",
          body:
            "trag dich auf die warteliste ein, um frühzugang zu erhalten. sobald wir öffnen, bekommst du einen einfachen onboarding-flow, um deine ziele zu personalisieren, konten zu verbinden und mit der optimierung zu starten."
        },
        {
          title: "wie behalte ich meine finanzielle gesundheit im blick?",
          body:
            "SampadAI gibt dir einen klaren, echtzeit-schnappschuss von ausgaben, sparen und ziel-fortschritt. du siehst trends, insights und einfache nächste schritte ohne finanz-jargon."
        },
        {
          title: "unterstützte banken bei SampadAI",
          body:
            "SampadAI unterstützt die meisten großen banken und kartennetzwerke, weitere kommen regelmäßig hinzu. verbinde nur die konten, die du willst, und steuere den zugriff jederzeit."
        }
      ],
      metaLines: [
        "ressourcen: sparrechner budgetplaner vermögens-tracker schulden-tilgungsplaner abonnements-audit investment-glossar renten-checkliste",
        "von frauen vertraut, die vermögen aufbauen, eine bewusste entscheidung nach der anderen"
      ],
      brandTitle: "vollständige sicherheit. keine fußnoten.",
      brandBody:
        "SampadAI verschlüsselt alle daten und transaktionen, um unseren mitgliedern ein vollständig sicheres erlebnis zu gewährleisten.",
      columns: [
        {
          title: "produkte",
          items: ["autopilot", "zielplaner"]
        },
        {
          title: "unternehmen",
          items: ["über uns", "karriere", "community", "kontakt"]
        },
        {
          title: "ressourcen",
          items: [
            "artikel",
            "leitfäden",
            "vorlagen",
            "budgetierung 101",
            "investment grundlagen"
          ]
        },
        {
          title: "richtlinien",
          items: [
            "datenschutzerklärung",
            "datenschutz",
            "nutzungsbedingungen",
            "KI-offenlegung"
          ]
        }
      ],
      copyright: "copyright (c) 2026 SampadAI Pvt Ltd."
    }
  },
  pl: {
    seo: {
      title: "SampadAI - jej majątek. jej dane. jej AI.",
      description:
        "SampadAI to aplikacja finansów osobistych i optymalizacji dla kobiet, która pomaga śledzić wydatki, planować cele i rozwijać się z pewnością siebie."
    },
    nav: {
      signup: "zarejestruj się",
      login: "zaloguj się"
    },
    hero: {
      title: "stworzone dla kobiety u steru",
      subtitle: "dołącz do wewnętrznego kręgu kobiet, które wygrywają każdego dnia.",
      cta: "pobierz SampadAI"
    },
    rewards: {
      title: "poczuj się wyjątkowo częściej.",
      subtitle: "zamień zarządzanie finansami w styl życia.",
      body:
        "za każdym razem, gdy optymalizujesz wydatki lub osiągasz kamień milowy oszczędności w SampadAI, robisz coś więcej niż tylko \"bankujesz.\" odblokowujesz ekskluzywne ścieżki do bogactwa i wyselekcjonowane doświadczenia stworzone dla nowoczesnej kobiety. z SampadAI rozwój finansowy jest nagrodą samą w sobie.",
      cta: "odkryj nagrody"
    },
    money: {
      title: "traktujemy twoje sprawy finansowe poważnie.",
      subtitle: "żebyś ty nie musiała.",
      body:
        "nigdy nie przegapisz terminu dzięki przypomnieniom, które pomagają płacić rachunki na czas, natychmiastowe rozliczenia sprawiają, że nie czekasz na przejście płatności, a analiza wyciągów pokazuje ci, dokąd trafiają twoje pieniądze — zawsze.",
      cta: "poznaj ulepszenie"
    },
    experience: {
      ariaLabel: "SampadAI doświadczenia",
      features: [
        {
          title: "jesteśmy po twojej stronie.",
          body:
            "przestań reagować na finanse i zacznij nimi kierować. otrzymuj inteligentne, kategoryczne zestawienia miesięcznych wydatków i alerty w czasie rzeczywistym o limitach kredytowych.",
          withDevice: true
        },
        {
          title: "zacznij swoją serię zwycięstw.",
          body:
            "twoja droga do wolności finansowej powinna być tak samo nagradzająca jak cel."
        },
        {
          title: "dla twojego eklektycznego gustu.",
          body:
            "wejdź do strefy tylko dla członkiń z ręcznie wybranymi produktami i doświadczeniami dopasowanymi do twojego stylu życia."
        },
        {
          title: "więcej gotówki w twojej kieszeni.",
          body:
            "przestań skakać między aplikacjami, by ogarniać życie. z SampadAI Auto-Pilot"
        }
      ]
    },
    security: {
      titleLines: ["bezpieczeństwo najpierw.", "i potem."],
      subtitle: "to, co twoje, pozostaje tylko twoje.",
      body:
        "zbudowaliśmy SampadAI z filozofią \"zero błędów\". twoje dane osobowe i historia transakcji są szyfrowane na każdym etapie, by to, co twoje, pozostało twoje.",
      cta: "zostań członkinią"
    },
    trust: {
      titleLines: ["historia", "SampadAI zaczyna się", "od zaufania."],
      paragraphs: [
        "bogactwo to więcej niż liczba. to wybór. zbyt długo świat finansów był budowany przez nielicznych dla nielicznych, pomijając osoby, które zarządzają sercem każdej gospodarki: kobiety. uznaliśmy, że czas stworzyć system, który nie tylko śledzi transakcje, ale też honoruje intencję, która za nimi stoi.",
        "stworzyliśmy SampadAI, by dawać ci wiatr w plecy. platformę, która nagradza mądre, zdyscyplinowane i wizjonerskie. optymalizując sposób, w jaki zarządzasz pieniędzmi dziś, pomagamy ci budować dziedzictwo jutra. zbudowaliśmy to, bo wierzymy, że wolność finansowa nie jest darem — to prawo, które już wypracowałaś.",
        "jeśli tu jesteś, jesteś gotowa poprowadzić własną historię finansów. witaj w SampadAI."
      ]
    },
    ratings: {
      ariaLabel: "Oceny aplikacji",
      storeLabel: "app store",
      button: "pobierz aplikację",
      testimonialQuote:
        "\"zakochana! tak płynne doświadczenie użytkownika, gładkie jak świeżo wydepilowane nogi! bardzo intuicyjna i łatwa w użyciu aplikacja. dobra robota, ludzie, dobra robota.\"",
      testimonialName: "emilia llosa"
    },
    footer: {
      faq: [
        {
          title: "o SampadAI",
          body:
            "SampadAI to aplikacja finansów osobistych i optymalizacji dla kobiet. pomaga śledzić wydatki, planować cele i podejmować mądrzejsze decyzje dzięki wskazówkom AI, które są ludzkie w odbiorze."
        },
        {
          title: "jak SampadAI pomaga mi rosnąć?",
          body:
            "SampadAI zamienia codzienne decyzje finansowe w długoterminowy postęp dzięki insightom, przypomnieniom i kamieniom milowym, które pchają cię do przodu."
        },
        {
          title: "jak zdobywam nagrody w SampadAI?",
          body:
            "członkinie zdobywają nagrody, realizując kluczowe kamienie milowe finansów i budując konsekwentne nawyki.\n\nNagrody za kamienie milowe SampadAI:\n- osiągnij cele oszczędności i otrzymaj wyselekcjonowane benefity oraz doświadczenia.\n- optymalizuj miesięczne wydatki i odblokuj dostęp do benefitów tylko dla członkiń.\n\nNagrody społeczności SampadAI:\n- zaproś przyjaciółkę i obie odblokujecie dodatkowe nagrody, gdy ukończy swój pierwszy kamień milowy."
        },
        {
          title: "co otrzymujesz jako członkini SampadAI?",
          body:
            "jako członkini SampadAI odblokowujesz narzędzia i insighty zaprojektowane, by budować klarowność i pewność siebie.\n\n- inteligentne śledzenie wydatków z jasnymi kategoriami\n- cele oszczędności z kamieniami milowymi postępu\n- alerty o rachunkach, odnowieniach i spadkach przepływu gotówki\n- sugestie AI do optymalizacji budżetów i redukcji wycieków\n- kontrola danych z naciskiem na prywatność i opcje eksportu"
        },
        {
          title: "jak zostać członkinią SampadAI?",
          body:
            "dołącz do listy oczekujących, aby uzyskać wczesny dostęp. gdy otworzymy, przejdziesz prosty onboarding, aby spersonalizować cele, połączyć konta i zacząć optymalizować."
        },
        {
          title: "jak śledzić moją kondycję finansową?",
          body:
            "SampadAI daje ci przejrzysty podgląd w czasie rzeczywistym wydatków, oszczędności i postępu celów. zobaczysz trendy, insighty i proste kolejne kroki bez finansowego żargonu."
        },
        {
          title: "banki obsługiwane przez SampadAI",
          body:
            "SampadAI obsługuje większość głównych banków i sieci kart, a kolejne są dodawane regularnie. łącz tylko te konta, które chcesz, i kontroluj dostęp w każdej chwili."
        }
      ],
      metaLines: [
        "zasoby: kalkulator oszczędności planer budżetu tracker majątku plan spłaty długu audyt subskrypcji słownik inwestycji lista kontrolna emerytury",
        "zaufany przez kobiety budujące majątek, jedna świadoma decyzja na raz"
      ],
      brandTitle: "pełne bezpieczeństwo. bez gwiazdek.",
      brandBody:
        "SampadAI szyfruje wszystkie dane i transakcje, aby zapewnić naszym członkiniom w pełni bezpieczne doświadczenie.",
      columns: [
        {
          title: "produkty",
          items: ["autopilot", "planer celów"]
        },
        {
          title: "firma",
          items: ["o nas", "kariera", "społeczność", "kontakt"]
        },
        {
          title: "zasoby",
          items: [
            "artykuły",
            "przewodniki",
            "szablony",
            "budżet 101",
            "podstawy inwestowania"
          ]
        },
        {
          title: "polityka",
          items: [
            "polityka prywatności",
            "ochrona danych",
            "warunki użytkowania",
            "ujawnienie AI"
          ]
        }
      ],
      copyright: "copyright (c) 2026 SampadAI Pvt Ltd."
    }
  },
  es: {
    seo: {
      title: "SampadAI - su riqueza. sus datos. su IA.",
      description:
        "SampadAI es una app de finanzas personales y optimización para mujeres, creada para ayudarte a seguir gastos, planificar y crecer con confianza."
    },
    nav: {
      signup: "regístrate",
      login: "iniciar sesión"
    },
    hero: {
      title: "creado para la mujer al mando",
      subtitle: "únete al círculo interno de mujeres que ganan cada día.",
      cta: "descargar SampadAI"
    },
    rewards: {
      title: "siéntete especial más a menudo.",
      subtitle: "convierte la gestión financiera en una mejora de estilo de vida.",
      body:
        "cada vez que optimizas tus gastos o alcanzas un hito de ahorro en SampadAI, haces más que solo \"banca.\" desbloqueas rutas exclusivas hacia la riqueza y experiencias curadas diseñadas para la mujer moderna. con SampadAI, el crecimiento financiero es su propia recompensa.",
      cta: "explorar recompensas"
    },
    money: {
      title: "nos tomamos tus asuntos de dinero en serio.",
      subtitle: "para que tú no tengas que hacerlo.",
      body:
        "nunca pierdas una fecha límite con recordatorios que te ayudan a pagar tus facturas a tiempo; las liquidaciones instantáneas significan que nunca esperas a que tus pagos se completen, y el análisis de extractos te muestra adónde va tu dinero, siempre.",
      cta: "experimenta la mejora"
    },
    experience: {
      ariaLabel: "experiencias SampadAI",
      features: [
        {
          title: "te respaldamos.",
          body:
            "deja de reaccionar a tus finanzas y empieza a liderarlas. recibe desgloses inteligentes por categoría de tus gastos mensuales y alertas en tiempo real sobre tus límites de crédito.",
          withDevice: true
        },
        {
          title: "empieza tu racha ganadora.",
          body:
            "tu camino hacia la libertad financiera debe ser tan gratificante como el destino."
        },
        {
          title: "para tu gusto ecléctico.",
          body:
            "entra en un espacio solo para miembros con una selección curada de productos y experiencias pensadas para tu estilo de vida."
        },
        {
          title: "más efectivo en tus bolsillos.",
          body:
            "deja de saltar entre apps para mantener tu vida al día. con SampadAI Auto-Pilot"
        }
      ]
    },
    security: {
      titleLines: ["seguridad primero.", "y después."],
      subtitle: "lo que es tuyo permanece solo tuyo.",
      body:
        "hemos construido SampadAI con una filosofía de \"cero errores\". tu información personal y tu historial de transacciones se cifran en cada paso, asegurando que lo que es tuyo siga siendo tuyo.",
      cta: "hazte miembro"
    },
    trust: {
      titleLines: ["la historia de", "SampadAI comienza", "con confianza."],
      paragraphs: [
        "la riqueza es más que un número. es una elección. durante demasiado tiempo, el mundo de las finanzas fue construido por unos pocos, para unos pocos, pasando por alto a quienes gestionan el corazón de cada economía: las mujeres. sentimos que era hora de crear un sistema que no solo rastree transacciones, sino que también honre la intención detrás de ellas.",
        "creamos SampadAI para ser el viento a tu favor. una plataforma que recompensa a las personas inteligentes, disciplinadas y visionarias. al optimizar la forma en que gestionas tu dinero hoy, te ayudamos a construir el legado que quieres para mañana. construimos esto porque creemos que la libertad financiera no es un regalo, es un derecho que ya has ganado.",
        "si estás aquí, estás lista para liderar tu propia historia financiera. bienvenida a SampadAI."
      ]
    },
    ratings: {
      ariaLabel: "valoraciones de la app",
      storeLabel: "app store",
      button: "descargar la app",
      testimonialQuote:
        "\"enamorada! una experiencia de usuario tan fluida, suave como piernas recién depiladas! aplicación muy intuitiva y fácil de usar. buen trabajo, gente, buen trabajo.\"",
      testimonialName: "emilia llosa"
    },
    footer: {
      faq: [
        {
          title: "sobre SampadAI",
          body:
            "SampadAI es una app de finanzas personales y optimización para mujeres. te ayuda a seguir gastos, planificar metas y tomar decisiones más inteligentes con guía de IA que se siente humana."
        },
        {
          title: "¿cómo me ayuda SampadAI a crecer?",
          body:
            "SampadAI convierte tus decisiones diarias de dinero en progreso a largo plazo con insights, recordatorios y hitos que te mantienen avanzando."
        },
        {
          title: "¿cómo gano recompensas en SampadAI?",
          body:
            "las miembros ganan recompensas al completar hitos financieros clave y crear hábitos consistentes.\n\nRecompensas por hitos de SampadAI:\n- alcanza metas de ahorro y recibe beneficios y experiencias curadas.\n- optimiza el gasto mensual y desbloquea acceso a beneficios solo para miembros.\n\nRecompensas de comunidad SampadAI:\n- invita a una amiga y ambas desbloquean recompensas extra cuando complete su primer hito."
        },
        {
          title: "¿qué obtienes como miembro de SampadAI?",
          body:
            "como miembro de SampadAI, desbloqueas herramientas e insights diseñados para construir claridad y confianza.\n\n- seguimiento inteligente de gastos con categorías claras\n- metas de ahorro con hitos de progreso\n- alertas para facturas, renovaciones y caídas de flujo de caja\n- sugerencias de IA para optimizar presupuestos y reducir fugas\n- controles de datos con enfoque en privacidad y opciones de exportación"
        },
        {
          title: "¿cómo me convierto en miembro de SampadAI?",
          body:
            "únete a la lista de espera para acceso anticipado. cuando abramos, tendrás un onboarding simple para personalizar tus metas, conectar cuentas y empezar a optimizar."
        },
        {
          title: "¿cómo sigo mi salud financiera?",
          body:
            "SampadAI te ofrece una vista clara en tiempo real de gastos, ahorros y progreso de metas. verás tendencias, insights y próximos pasos simples sin jerga financiera."
        },
        {
          title: "bancos compatibles con SampadAI",
          body:
            "SampadAI es compatible con la mayoría de bancos y redes de tarjetas principales, y se agregan más regularmente. conecta solo las cuentas que quieras y controla el acceso en cualquier momento."
        }
      ],
      metaLines: [
        "recursos: calculadora de ahorro planificador de presupuesto rastreador de patrimonio plan de pago de deuda auditoría de suscripciones glosario de inversión lista de verificación de jubilación",
        "con la confianza de mujeres que construyen riqueza, una decisión intencional a la vez"
      ],
      brandTitle: "seguridad completa. sin asteriscos.",
      brandBody:
        "SampadAI cifra todos los datos y transacciones para garantizar una experiencia completamente segura para nuestras miembros.",
      columns: [
        {
          title: "productos",
          items: ["auto-pilot", "planificador de metas"]
        },
        {
          title: "empresa",
          items: ["acerca de", "carreras", "comunidad", "contacto"]
        },
        {
          title: "recursos",
          items: [
            "artículos",
            "guías",
            "plantillas",
            "presupuesto 101",
            "fundamentos de inversión"
          ]
        },
        {
          title: "políticas",
          items: [
            "política de privacidad",
            "protección de datos",
            "términos de uso",
            "divulgación de IA"
          ]
        }
      ],
      copyright: "copyright (c) 2026 SampadAI Pvt Ltd."
    }
  }
};

export function isSupportedLanguage(language: string): language is Language {
  return supportedLanguages.includes(language as Language);
}

export function getLandingCopy(language?: string): LandingCopy {
  if (!language || !isSupportedLanguage(language)) {
    return copy[defaultLanguage];
  }

  return copy[language];
}
