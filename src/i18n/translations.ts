export type Language = 'en' | 'es';

export interface TranslationDictionary {
  skip: string;
  navPractice: string;
  navAttorney: string;
  navContact: string;
  location: string;
  heroTitleLine1: string;
  heroTitleEmphasis: string;
  heroIntro: string;
  request: string;
  established: string;
  languages: string;
  services: string;
  practiceTitle: string;
  practiceIntro: string;
  criminal: string;
  criminalShort: string;
  immigration: string;
  immigrationShort: string;
  civil: string;
  civilShort: string;
  explore: string;
  founding: string;
  attorneyLabel: string;
  attorneyTitleLine1: string;
  attorneyTitleEmphasis: string;
  bio1: string;
  bio2: string;
  barProfile: string;
  howHelp: string;
  practiceDetails: string;
  criminalDetail: string;
  criminalLi1: string;
  criminalLi2: string;
  criminalLi3: string;
  consultationPrep: string;
  criminalPrep: string;
  immigrationDetail: string;
  immigrationLi1: string;
  immigrationLi2: string;
  immigrationLi3: string;
  immigrationPrep: string;
  civilDetail: string;
  civilLi1: string;
  civilLi2: string;
  civilLi3: string;
  civilPrep: string;
  contactLabel: string;
  contactTitleLine1: string;
  contactTitleEmphasis: string;
  contactIntro: string;
  callOffice: string;
  officeLocation: string;
  formLabel: string;
  formTitle: string;
  formNote: string;
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  topicLabel: string;
  chooseOption: string;
  other: string;
  messageLabel: string;
  messagePlaceholder: string;
  acknowledgment: string;
  submit: string;
  formDisclaimer: string;
  storyTitle: string;
  officeInfo: string;
  legalTitle: string;
  legalText: string;
  legalText2: string;
  legalLink: string;
  stockFootage: string;
  viewAreas: string;
  readBio: string;
  watchIntro: string;
  homeContactIntro: string;
  contactPageIntro: string;
  attorneyPageIntro: string;
  backToAreas: string;
  mediaLabel: string;
  imageSlot: string;
  videoSlot: string;
  practiceMedia: string;
  practiceMediaIntro: string;
  attorneyMedia: string;
  attorneyMediaIntro: string;
  contactMedia: string;
  contactMediaIntro: string;
  criminalMedia: string;
  criminalMediaIntro: string;
  immigrationMedia: string;
  immigrationMediaIntro: string;
  civilMedia: string;
  civilMediaIntro: string;
  videoLabel: string;
  videoTitle: string;
  videoIntro: string;
  transcriptLabel: string;
  transcript: string;
  successTitle: string;
  successBody: string;
  successReturn: string;
  successPageTitle: string;
  homePageTitle: string;
  validationError: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    skip: 'Skip to content',
    navPractice: 'Practice areas',
    navAttorney: 'The attorney',
    navContact: 'Contact',
    location: 'LONG BEACH, CALIFORNIA',
    heroTitleLine1: 'A voice for',
    heroTitleEmphasis: 'your rights.',
    heroIntro: 'Criminal defense, immigration, and civil representation with Salvador Sánchez, Esq.',
    request: 'Request a consultation',
    established: 'Established in 2016',
    languages: 'English & Spanish',
    services: 'LEGAL SERVICES',
    practiceTitle: 'Areas of practice.',
    practiceIntro: 'Learn how the office can help and what to bring to your first conversation.',
    criminal: 'Criminal defense',
    criminalShort: 'Representation when you or a loved one is facing criminal charges.',
    immigration: 'Immigration',
    immigrationShort: 'Guidance for families navigating residency, citizenship, and removal proceedings.',
    civil: 'Civil matters',
    civilShort: 'Legal help with consumer disputes, housing issues, and personal injury claims.',
    explore: 'Explore area ↗',
    founding: 'FOUNDING ATTORNEY',
    attorneyLabel: 'THE ATTORNEY',
    attorneyTitleLine1: 'From Compton to',
    attorneyTitleEmphasis: 'the courtroom.',
    bio1: 'Salvador Sánchez grew up in Compton. After earning his law degree at Rutgers in Newark and working in New Jersey, he returned to Southern California and opened his own law office in 2016.',
    bio2: 'Today, his Long Beach practice brings together criminal defense, immigration, and civil law. Clients can speak with him in English or Spanish.',
    barProfile: 'State Bar profile ↗',
    howHelp: 'HOW WE CAN HELP',
    practiceDetails: 'A place to start.',
    criminalDetail: 'Discuss the charges, any upcoming court appearance, and what you want to understand about the process.',
    criminalLi1: 'DUI and traffic-related criminal charges',
    criminalLi2: 'Theft, assault, and other criminal charges',
    criminalLi3: 'Juvenile matters and petitions for dismissal',
    consultationPrep: 'For your consultation',
    criminalPrep: 'If available, have your citation, hearing notice, and next court date handy.',
    immigrationDetail: 'Talk through a family petition, a pending application, or a notice from an immigration agency.',
    immigrationLi1: 'Family petitions and permanent residence',
    immigrationLi2: 'Naturalization and citizenship',
    immigrationLi3: 'Asylum and removal defense',
    immigrationPrep: 'Have the most recent notice you received and any appointment dates available for the consultation.',
    civilDetail: 'Explain the dispute, who is involved, and what you would like to resolve.',
    civilLi1: 'Housing disputes and eviction matters',
    civilLi2: 'Debt collection and consumer rights',
    civilLi3: 'Vehicle accidents and personal injury',
    civilPrep: 'Set aside relevant letters or agreements and a short list of important dates.',
    contactLabel: 'CONTACT THE OFFICE',
    contactTitleLine1: 'Let’s talk about',
    contactTitleEmphasis: 'your case.',
    contactIntro: 'Have a question or a hearing coming up? Contact the Long Beach office or request a consultation below.',
    callOffice: 'Call the office',
    officeLocation: 'Office location',
    formLabel: 'START A CONVERSATION',
    formTitle: 'Request a consultation.',
    formNote: 'Please share only basic contact information. Do not include confidential details or case documents.',
    nameLabel: 'Your name',
    emailLabel: 'Email address',
    phoneLabel: 'Phone number (optional)',
    topicLabel: 'What would you like to discuss?',
    chooseOption: 'Choose an area',
    other: 'Other',
    messageLabel: 'Brief message (optional)',
    messagePlaceholder: 'Please do not include confidential information.',
    acknowledgment: 'I understand that submitting this form does not create an attorney-client relationship and I should not include confidential information.',
    submit: 'Send inquiry',
    formDisclaimer: 'Contacting this office does not establish an attorney-client relationship. Please do not send confidential information or case documents through this form.',
    storyTitle: 'His story in photographs.',
    officeInfo: 'OFFICE INFORMATION',
    legalTitle: 'Legal notice.',
    legalText: 'This website is attorney advertising and offers general information. For advice specific to your situation, speak with an attorney.',
    legalText2: 'Contacting this office does not establish an attorney-client relationship. Please do not send confidential information or case documents through an initial inquiry.',
    legalLink: 'Legal notice',
    stockFootage: 'ILLUSTRATIVE FOOTAGE',
    viewAreas: 'View practice areas',
    readBio: 'Read the biography',
    watchIntro: 'Watch the introduction ↓',
    homeContactIntro: 'Have a question or a hearing coming up? Contact the Long Beach office or visit the contact page to request a consultation.',
    contactPageIntro: 'Contact the Long Beach office or request a consultation in English or Spanish.',
    attorneyPageIntro: 'Meet Salvador Sánchez, an attorney serving Long Beach and surrounding communities.',
    backToAreas: '← All practice areas',
    mediaLabel: 'MEDIA IN DEVELOPMENT',
    imageSlot: 'Image placeholder',
    videoSlot: 'Video placeholder',
    practiceMedia: 'More ways to explore.',
    practiceMediaIntro: 'Space for future photos and videos introducing legal services.',
    attorneyMedia: 'A closer look at the practice.',
    attorneyMediaIntro: 'Space for an approved portrait and a video introduction from Salvador Sánchez.',
    contactMedia: 'Get to know the office.',
    contactMediaIntro: 'Space for an office photo and a short video on what to expect at a first visit.',
    criminalMedia: 'Criminal defense resources.',
    criminalMediaIntro: 'Space for an image and a short video about preparing to discuss a criminal matter.',
    immigrationMedia: 'Immigration resources.',
    immigrationMediaIntro: 'Space for an image and a short video about preparing for an immigration consultation.',
    civilMedia: 'Civil matters resources.',
    civilMediaIntro: 'Space for an image and a short video about organizing documents for a civil matter.',
    videoLabel: 'VIDEO WITH SOUND',
    videoTitle: 'An introduction to the practice areas.',
    videoIntro: 'A short sample with synthetic narration. Press play to listen.',
    transcriptLabel: 'Read the transcript',
    transcript: 'This is a sample introduction to the practice areas. Explore criminal defense, immigration, and civil matters. The Long Beach office serves clients in English and Spanish.',
    successTitle: 'Thank you for reaching out.',
    successBody: 'Your inquiry has been submitted. The office will review your message.',
    successReturn: 'Return to the website',
    successPageTitle: 'Message received | Salvador Sánchez, Esq.',
    homePageTitle: 'Salvador Sánchez, Esq. | Long Beach Attorney',
    validationError: 'Please fill out all required fields and accept the acknowledgment before sending.',
  },
  es: {
    skip: 'Saltar al contenido',
    navPractice: 'Áreas de práctica',
    navAttorney: 'El abogado',
    navContact: 'Contacto',
    location: 'LONG BEACH, CALIFORNIA',
    heroTitleLine1: 'Una voz por',
    heroTitleEmphasis: 'tus derechos.',
    heroIntro: 'Defensa penal, inmigración y representación en asuntos civiles con el abogado Salvador Sánchez.',
    request: 'Solicitar una consulta',
    established: 'Fundado en 2016',
    languages: 'Inglés y español',
    services: 'SERVICIOS LEGALES',
    practiceTitle: 'Áreas de práctica.',
    practiceIntro: 'Conoce cómo puede ayudarte el despacho y qué puedes preparar para tu primera conversación.',
    criminal: 'Defensa penal',
    criminalShort: 'Representación cuando tú o un ser querido enfrenta cargos penales.',
    immigration: 'Inmigración',
    immigrationShort: 'Orientación para familias que gestionan residencia, ciudadanía y procesos de deportación.',
    civil: 'Asuntos civiles',
    civilShort: 'Asesoría legal en disputas de consumo, vivienda y reclamaciones por lesiones personales.',
    explore: 'Conocer área ↗',
    founding: 'ABOGADO FUNDADOR',
    attorneyLabel: 'EL ABOGADO',
    attorneyTitleLine1: 'De Compton a',
    attorneyTitleEmphasis: 'los tribunales.',
    bio1: 'Salvador Sánchez creció en Compton. Después de obtener su título de Derecho en Rutgers, en Newark, y ejercer en Nueva Jersey, regresó al sur de California y abrió su propio despacho en 2016.',
    bio2: 'Hoy, su práctica en Long Beach reúne defensa penal, inmigración y derecho civil. Sus clientes pueden comunicarse con él en inglés o español.',
    barProfile: 'Perfil en el Colegio de Abogados ↗',
    howHelp: 'CÓMO PODEMOS AYUDAR',
    practiceDetails: 'Un primer paso.',
    criminalDetail: 'Conversemos sobre los cargos, las próximas comparecencias ante el tribunal y lo que necesitas entender del proceso.',
    criminalLi1: 'Cargos penales por DUI y relacionados con el tránsito',
    criminalLi2: 'Robo, agresión y otros cargos penales',
    criminalLi3: 'Asuntos de menores y solicitudes de desestimación',
    consultationPrep: 'Para tu consulta',
    criminalPrep: 'Si los tienes disponibles, prepara la citación, el aviso de audiencia y la fecha de tu próxima comparecencia.',
    immigrationDetail: 'Conversemos sobre una petición familiar, una solicitud pendiente o una notificación de una agencia de inmigración.',
    immigrationLi1: 'Peticiones familiares y residencia permanente',
    immigrationLi2: 'Naturalización y ciudadanía',
    immigrationLi3: 'Asilo y defensa contra la deportación',
    immigrationPrep: 'Ten a mano la notificación más reciente que hayas recibido y las fechas de cualquier cita.',
    civilDetail: 'Explica la disputa, quiénes están involucrados y qué te gustaría resolver.',
    civilLi1: 'Disputas de vivienda y procesos de desalojo',
    civilLi2: 'Cobros de deudas y derechos del consumidor',
    civilLi3: 'Accidentes de vehículos y lesiones personales',
    civilPrep: 'Reúne las cartas o acuerdos pertinentes y una breve lista de fechas importantes.',
    contactLabel: 'CONTACTA AL DESPACHO',
    contactTitleLine1: 'Hablemos sobre',
    contactTitleEmphasis: 'tu caso.',
    contactIntro: '¿Tienes alguna pregunta o una audiencia próxima? Comunícate con la oficina de Long Beach o solicita una consulta a continuación.',
    callOffice: 'Llama a la oficina',
    officeLocation: 'Ubicación de la oficina',
    formLabel: 'INICIAR UNA CONVERSACIÓN',
    formTitle: 'Solicita una consulta.',
    formNote: 'Comparte únicamente información básica de contacto. No incluyas detalles confidenciales ni documentos del caso.',
    nameLabel: 'Tu nombre',
    emailLabel: 'Correo electrónico',
    phoneLabel: 'Teléfono (opcional)',
    topicLabel: '¿Sobre qué te gustaría conversar?',
    chooseOption: 'Selecciona un área',
    other: 'Otro',
    messageLabel: 'Mensaje breve (opcional)',
    messagePlaceholder: 'Por favor, no incluyas información confidencial.',
    acknowledgment: 'Entiendo que enviar este formulario no crea una relación abogado-cliente y que no debo incluir información confidencial.',
    submit: 'Enviar consulta',
    formDisclaimer: 'Contactar a este despacho no establece una relación abogado-cliente. No envíes información confidencial ni documentos del caso mediante este formulario.',
    storyTitle: 'Su historia en fotografías.',
    officeInfo: 'INFORMACIÓN DEL DESPACHO',
    legalTitle: 'Aviso legal.',
    legalText: 'Este sitio web constituye publicidad de servicios legales y ofrece información general. Para recibir asesoría sobre tu situación específica, consulta con un abogado.',
    legalText2: 'Contactar a este despacho no establece una relación abogado-cliente. No envíes información confidencial ni documentos del caso en una consulta inicial.',
    legalLink: 'Aviso legal',
    stockFootage: 'VIDEO ILUSTRATIVO',
    viewAreas: 'Ver áreas de práctica',
    readBio: 'Leer la biografía',
    watchIntro: 'Ver el video de presentación ↓',
    homeContactIntro: '¿Tienes una pregunta o una audiencia próxima? Comunícate con el despacho de Long Beach o solicita una consulta en la página de contacto.',
    contactPageIntro: 'Comunícate con el despacho de Long Beach o solicita una consulta en inglés o español.',
    attorneyPageIntro: 'Conoce a Salvador Sánchez, abogado que presta servicios en Long Beach y sus alrededores.',
    backToAreas: '← Todas las áreas de práctica',
    mediaLabel: 'MATERIAL EN PREPARACIÓN',
    imageSlot: 'Espacio para una imagen',
    videoSlot: 'Espacio para un video',
    practiceMedia: 'Más formas de explorar.',
    practiceMediaIntro: 'Espacio para fotos y videos sobre los servicios jurídicos del despacho.',
    attorneyMedia: 'Una mirada al despacho.',
    attorneyMediaIntro: 'Espacio para un retrato aprobado y un video de presentación de Salvador Sánchez.',
    contactMedia: 'Conoce el despacho.',
    contactMediaIntro: 'Espacio para una foto del despacho y un video breve sobre qué esperar de la primera visita.',
    criminalMedia: 'Recursos de defensa penal.',
    criminalMediaIntro: 'Espacio para una imagen y un video breve sobre cómo prepararte para conversar sobre un caso penal.',
    immigrationMedia: 'Recursos de inmigración.',
    immigrationMediaIntro: 'Espacio para una imagen y un video breve sobre cómo prepararte para una consulta de inmigración.',
    civilMedia: 'Recursos para asuntos civiles.',
    civilMediaIntro: 'Espacio para una imagen y un video breve sobre cómo organizar documentos para un asunto civil.',
    videoLabel: 'VIDEO CON AUDIO',
    videoTitle: 'Una introducción a las áreas de práctica.',
    videoIntro: 'Una muestra breve con narración sintética. Pulsa reproducir para escuchar.',
    transcriptLabel: 'Leer la transcripción',
    transcript: 'Esta es una presentación de muestra de las áreas de práctica. Explora defensa penal, inmigración y asuntos civiles. La oficina de Long Beach atiende en inglés y español.',
    successTitle: 'Gracias por comunicarte.',
    successBody: 'Tu consulta ha sido enviada. La oficina revisará tu mensaje.',
    successReturn: 'Volver al sitio web',
    successPageTitle: 'Mensaje recibido | Salvador Sánchez, Esq.',
    homePageTitle: 'Salvador Sánchez, Esq. | Abogado en Long Beach',
    validationError: 'Completa todos los campos obligatorios y acepta el aviso antes de enviar.',
  },
};
