(() => {
  "use strict";

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");

  const closeMenu = () => {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  };

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const opening = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(opening));
      nav.classList.toggle("is-open", opening);
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        toggle.focus();
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  const spanish = {
    "Skip to content": "Saltar al contenido",
    "Menu": "Menú",
    "Home": "Inicio",
    "Services": "Servicios",
    "About": "Nosotros",
    "Contact": "Contacto",
    "Privacy": "Privacidad",
    "Book an Appointment": "Reservar una cita",
    "Call to Book": "Llamar para reservar",
    "Explore Our Services": "Explorar nuestros servicios",
    "A skincare studio in Huntington, New York": "Un estudio de cuidado de la piel en Huntington, Nueva York",
    "Personalized Skincare.": "Cuidado de la piel personalizado.",
    "Refined Results.": "Resultados refinados.",
    "Thoughtful facials, skincare, makeup, upper-body massage, and scalp-massage services shaped around you—in a calm, private setting.": "Faciales, cuidado de la piel, maquillaje y masajes de la parte superior del cuerpo y del cuero cabelludo, pensados para ti en un ambiente tranquilo y privado.",
    "The studio approach": "El enfoque del estudio",
    "Care, considered.": "Cuidado con intención.",
    "Personal attention": "Atención personal",
    "Every visit begins with a conversation about your preferences and what you hope to experience.": "Cada visita comienza con una conversación sobre tus preferencias y la experiencia que deseas.",
    "Thoughtful selection": "Selección cuidadosa",
    "Services are chosen with care, without pressure, overstatement, or a one-size-fits-all approach.": "Los servicios se eligen con cuidado, sin presión, exageraciones ni fórmulas iguales para todos.",
    "Quiet professionalism": "Profesionalismo sereno",
    "A clean, calm environment supports an unhurried and comfortable skincare experience.": "Un ambiente limpio y tranquilo favorece una experiencia cómoda y sin prisas.",
    "A thoughtful edit of care.": "Una selección de cuidado con intención.",
    "Personalized services designed to support a polished, restorative experience—always grounded in honest conversation.": "Servicios personalizados para brindar una experiencia refinada y reparadora, siempre basada en una conversación honesta.",
    "Facials": "Faciales",
    "A personalized facial experience selected around your preferences and current skincare routine.": "Una experiencia facial personalizada según tus preferencias y tu rutina actual.",
    "Skin Rejuvenation": "Rejuvenecimiento de la piel",
    "Considered care focused on refreshing the look and feel of your skin without exaggerated promises.": "Cuidado pensado para refrescar la apariencia y sensación de tu piel, sin promesas exageradas.",
    "Skincare": "Cuidado de la piel",
    "Practical, personal guidance to help make your everyday routine feel more intentional.": "Orientación práctica y personal para hacer que tu rutina diaria sea más consciente.",
    "Makeup": "Maquillaje",
    "Refined application that complements your features, preferences, and occasion.": "Aplicación refinada que complementa tus rasgos, preferencias y ocasión.",
    "Upper Body Massage": "Masaje de la parte superior del cuerpo",
    "A comfortable, focused service for a quiet pause within your studio visit.": "Un servicio cómodo y enfocado que ofrece una pausa tranquila durante tu visita.",
    "Scalp Massage": "Masaje del cuero cabelludo",
    "A calming addition or focused experience designed for rest and ease.": "Una experiencia relajante pensada para el descanso y la tranquilidad.",
    "Meet Martha": "Conoce a Martha",
    "Personal care begins with listening.": "El cuidado personal comienza al escuchar.",
    "Originally from Colombia and proud to have called the United States home for more than 30 years, Martha brings a deep appreciation for beauty, wellness, and self-care to every visit. For more than a decade, she has helped clients feel confident in their skin through personalized attention and thoughtful care.": "Originaria de Colombia y orgullosa de haber hecho de Estados Unidos su hogar durante más de 30 años, Martha aporta a cada visita un profundo aprecio por la belleza, el bienestar y el autocuidado. Durante más de una década, ha ayudado a sus clientes a sentirse seguros en su piel mediante atención personalizada y cuidado consciente.",
    "More About the Studio": "Más sobre el estudio",
    "Your visit": "Tu visita",
    "What to expect.": "Qué puedes esperar.",
    "A conversation": "Una conversación",
    "Share your preferences, routine, and what would make the visit feel worthwhile.": "Comparte tus preferencias, tu rutina y lo que haría que la visita sea valiosa para ti.",
    "Personalized selection": "Selección personalizada",
    "Together, choose a service approach suited to the experience you are seeking.": "Juntos elegiremos un servicio acorde con la experiencia que buscas.",
    "Comfortable care": "Cuidado confortable",
    "Settle into an attentive treatment experience in a calm studio setting.": "Disfruta de una experiencia atenta en un ambiente tranquilo.",
    "Thoughtful recommendations": "Recomendaciones cuidadosas",
    "Leave with practical aftercare suggestions relevant to your selected service.": "Recibe sugerencias prácticas de cuidado posterior según el servicio elegido.",
    "Frequently asked": "Preguntas frecuentes",
    "A few helpful answers.": "Algunas respuestas útiles.",
    "What services does Martha Skin Studio offer?": "¿Qué servicios ofrece Martha Skin Studio?",
    "Facials, skin rejuvenation, skincare, makeup, upper-body massage, and scalp massage.": "Faciales, rejuvenecimiento y cuidado de la piel, maquillaje y masajes de la parte superior del cuerpo y del cuero cabelludo.",
    "Where is Martha Skin Studio located?": "¿Dónde se encuentra Martha Skin Studio?",
    "683 Old Country Road in Huntington, New York.": "683 Old Country Road en Huntington, Nueva York.",
    "How can I book an appointment?": "¿Cómo puedo reservar una cita?",
    "to book.": "para reservar.",
    "What should I expect at my first visit?": "¿Qué puedo esperar en mi primera visita?",
    "A conversation about your preferences, thoughtful service selection, a comfortable treatment experience, and relevant aftercare recommendations.": "Una conversación sobre tus preferencias, una selección cuidadosa del servicio, una experiencia cómoda y recomendaciones de cuidado posterior.",
    "Does Martha Skin Studio serve clients near Dix Hills?": "¿Martha Skin Studio atiende a clientes cerca de Dix Hills?",
    "Yes. The Huntington studio welcomes guests from Dix Hills and nearby Long Island communities.": "Sí. El estudio en Huntington recibe a clientes de Dix Hills y comunidades cercanas de Long Island.",
    "Visit the studio": "Visita el estudio",
    "Quiet care, close to home.": "Cuidado sereno, cerca de ti.",
    "Serving Huntington, Dix Hills, and nearby Long Island communities, including Melville, Commack, Deer Park, and Half Hollow Hills.": "Atendemos a Huntington, Dix Hills y comunidades cercanas de Long Island, incluidas Melville, Commack, Deer Park y Half Hollow Hills.",
    "Get Directions": "Cómo llegar",
    "Personalized skincare in Huntington, New York.": "Cuidado personalizado de la piel en Huntington, Nueva York.",
    "Care that begins with you.": "Cuidado que comienza contigo.",
    "Explore a considered range of skincare, makeup, and massage experiences at our facial studio serving Huntington and nearby Long Island communities.": "Explora una cuidada selección de servicios de piel, maquillaje y masajes en nuestro estudio facial para Huntington y comunidades cercanas de Long Island.",
    "A personalized facial experience shaped around your preferences and current routine.": "Una experiencia facial personalizada según tus preferencias y rutina actual.",
    "Who may enjoy it": "Para quién puede ser ideal",
    "Guests seeking attentive facials in Huntington, NY, with time for a thoughtful conversation.": "Personas que buscan faciales atentos en Huntington, NY, con tiempo para una conversación cuidadosa.",
    "What to expect": "Qué puedes esperar",
    "A consultation, personalized service selection, a comfortable facial experience, and relevant aftercare suggestions.": "Una consulta, selección personalizada del servicio, una experiencia facial cómoda y sugerencias de cuidado posterior.",
    "Considered care focused on refreshing the look and feel of your skin.": "Cuidado pensado para refrescar la apariencia y sensación de tu piel.",
    "Guests who want a refreshed skincare experience without exaggerated promises or a one-size-fits-all approach.": "Personas que desean una experiencia renovadora sin promesas exageradas ni fórmulas iguales para todos.",
    "A conversation about your preferences, a thoughtfully selected service, and practical aftercare recommendations.": "Una conversación sobre tus preferencias, un servicio elegido con cuidado y recomendaciones prácticas posteriores.",
    "Personal guidance for a more intentional everyday skincare routine.": "Orientación personal para una rutina diaria más consciente.",
    "Guests looking for personal attention as they consider their current routine and skincare preferences.": "Personas que buscan atención personal al evaluar su rutina y preferencias actuales.",
    "A clear, approachable conversation centered on your goals, habits, and the experience you want.": "Una conversación clara y accesible sobre tus objetivos, hábitos y la experiencia que deseas.",
    "Refined application designed to complement your features and personal style.": "Aplicación refinada para complementar tus rasgos y estilo personal.",
    "Guests preparing for an occasion or simply seeking a polished, personal makeup experience.": "Personas que se preparan para una ocasión o desean una experiencia de maquillaje personal y refinada.",
    "A conversation about your preferences followed by an application shaped around the look and feeling you want.": "Una conversación sobre tus preferencias seguida de una aplicación adaptada al estilo que deseas.",
    "A focused, comfortable experience that creates space for a quiet pause.": "Una experiencia cómoda y enfocada que crea espacio para una pausa tranquila.",
    "Guests seeking a calm addition to their studio visit or a focused service on its own.": "Personas que buscan un complemento tranquilo para su visita o un servicio enfocado por sí solo.",
    "A brief conversation about comfort and preferences, followed by an attentive upper-body massage experience.": "Una breve conversación sobre comodidad y preferencias, seguida de un atento masaje de la parte superior del cuerpo.",
    "A calming service designed around rest, ease, and personal comfort.": "Un servicio relajante pensado para el descanso, la tranquilidad y la comodidad personal.",
    "Guests looking to add a quiet, restorative moment to their visit.": "Personas que desean añadir un momento tranquilo y reparador a su visita.",
    "A comfortable, focused scalp massage delivered with attention to your stated preferences.": "Un masaje cómodo y enfocado del cuero cabelludo, realizado según tus preferencias.",
    "Not sure where to begin?": "¿No sabes por dónde comenzar?",
    "Let’s choose thoughtfully.": "Elijamos con intención.",
    "Tell us what kind of experience you are seeking. We’ll begin with a conversation.": "Cuéntanos qué tipo de experiencia buscas. Comenzaremos con una conversación.",
    "Contact the Studio": "Contactar al estudio",
    "About the studio": "Sobre el estudio",
    "Inspired by heritage. Dedicated to healthy skin.": "Inspirada por sus raíces. Dedicada a una piel saludable.",
    "Martha Skin Studio is grounded in listening, thoughtful service selection, and a calm experience from arrival to aftercare.": "Martha Skin Studio se basa en escuchar, seleccionar cada servicio con cuidado y ofrecer una experiencia tranquila desde la llegada hasta el cuidado posterior.",
    "A practice shaped by care.": "Una práctica guiada por el cuidado.",
    "For more than a decade, Martha has dedicated her career to helping clients feel confident in their skin through personalized skincare and facial treatments.": "Durante más de una década, Martha ha dedicado su carrera a ayudar a sus clientes a sentirse seguros en su piel mediante cuidado personalizado y tratamientos faciales.",
    "Originally from Colombia and proud to have called the United States home for more than 30 years, she combines a deep appreciation for beauty, wellness, and self-care with a warm, personal approach that makes every guest feel welcome.": "Originaria de Colombia y orgullosa de haber hecho de Estados Unidos su hogar durante más de 30 años, combina un profundo aprecio por la belleza, el bienestar y el autocuidado con un trato cálido y personal que hace sentir bienvenido a cada cliente.",
    "Her dream has always been simple: to create a space where every guest receives thoughtful, individualized care in a calm, luxurious environment. Martha Skin Studio is the realization of that dream—a boutique skincare studio where trust, personal attention, and genuine hospitality come together.": "Su sueño siempre ha sido sencillo: crear un espacio donde cada persona reciba atención individualizada en un ambiente tranquilo y lujoso. Martha Skin Studio es la realización de ese sueño: un estudio boutique donde se unen la confianza, la atención personal y la hospitalidad genuina.",
    "Professional qualifications": "Credenciales profesionales",
    "New York State Licensed Esthetician": "Esteticista con licencia del Estado de Nueva York",
    "Certified Facial Specialist": "Especialista facial certificada",
    "Certified Makeup Artist": "Maquilladora certificada",
    "Advanced Training in Microneedling": "Capacitación avanzada en microneedling",
    "Advanced Training in Microdermabrasion": "Capacitación avanzada en microdermoabrasión",
    "Training in Facial Massage Techniques": "Capacitación en técnicas de masaje facial",
    "Training in Scalp Massage Techniques": "Capacitación en técnicas de masaje del cuero cabelludo",
    "Training in Upper-Body Massage for Relaxation": "Capacitación en masaje relajante de la parte superior del cuerpo",
    "Philosophy": "Filosofía",
    "Beautiful skin isn’t about changing who you are. It’s about helping your natural confidence shine through thoughtful skincare and personalized care.": "Una piel hermosa no se trata de cambiar quién eres, sino de dejar que tu confianza natural brille mediante un cuidado consciente y personalizado.",
    "What guides the studio": "Lo que guía al estudio",
    "Clear. Calm. Considered.": "Claro. Tranquilo. Con intención.",
    "Listen first": "Escuchar primero",
    "Your preferences and comfort shape the conversation.": "Tus preferencias y comodidad guían la conversación.",
    "Keep it honest": "Mantener la honestidad",
    "Services are presented clearly, without unsupported promises.": "Los servicios se presentan con claridad, sin promesas infundadas.",
    "Make room for care": "Crear espacio para el cuidado",
    "An unhurried environment helps every visit feel personal.": "Un ambiente sin prisas hace que cada visita se sienta personal.",
    "Visit Martha Skin Studio": "Visita Martha Skin Studio",
    "Personal care in Huntington.": "Cuidado personal en Huntington.",
    "Welcoming guests from Huntington, Dix Hills, and nearby Long Island communities.": "Recibimos a clientes de Huntington, Dix Hills y comunidades cercanas de Long Island.",
    "Plan Your Visit": "Planifica tu visita",
    "Begin with a conversation.": "Comencemos con una conversación.",
    "Call Martha Skin Studio to book an appointment. For general studio questions, you may also send an email.": "Llama a Martha Skin Studio para reservar una cita. Para preguntas generales, también puedes enviar un correo electrónico.",
    "Studio details": "Información del estudio",
    "United States": "Estados Unidos",
    "Hours": "Horario",
    "Tuesday–Saturday: 10:00 AM–7:00 PM": "Martes–sábado: 10:00 a. m.–7:00 p. m.",
    "Sunday–Monday: Closed": "Domingo–lunes: cerrado",
    "General inquiry": "Consulta general",
    "Tell us how we can help.": "Cuéntanos cómo podemos ayudarte.",
    "To book an appointment, please call": "Para reservar una cita, llama al",
    ". Use this form for general, non-urgent questions.": ". Usa este formulario para preguntas generales que no sean urgentes.",
    "Name": "Nombre",
    "Email": "Correo electrónico",
    "Telephone": "Teléfono",
    "(optional)": "(opcional)",
    "Service of interest": "Servicio de interés",
    "Not sure yet": "Aún no estoy seguro",
    "How can we help?": "¿Cómo podemos ayudarte?",
    "Prepare Email Inquiry": "Preparar consulta por correo",
    "This button opens your email app. Please do not include sensitive health information.": "Este botón abre tu aplicación de correo. No incluyas información médica sensible.",
    "Website privacy": "Privacidad del sitio web",
    "Last updated July 24, 2026": "Última actualización: 24 de julio de 2026",
    "Information you choose to share": "Información que decides compartir",
    "This static website does not store form submissions. The appointment inquiry form prepares an email in your own email application. Information you send by email is received by Martha Skin Studio and used to respond to your inquiry.": "Este sitio estático no almacena formularios. El formulario prepara un mensaje en tu propia aplicación de correo. Martha Skin Studio recibe la información que envías y la utiliza para responder a tu consulta.",
    "Website technology": "Tecnología del sitio web",
    "This site does not currently use analytics, advertising pixels, user accounts, or nonessential cookies. External services—such as Google Fonts, email applications, and map directions—may process technical information under their own privacy practices when you use them.": "Actualmente este sitio no utiliza análisis, píxeles publicitarios, cuentas de usuario ni cookies no esenciales. Los servicios externos, como Google Fonts, aplicaciones de correo y mapas, pueden procesar información técnica según sus propias políticas de privacidad.",
    "Sensitive information": "Información sensible",
    "Please do not send sensitive health, financial, or identity information through the website or ordinary email.": "No envíes información médica, financiera o de identidad sensible a través del sitio web ni por correo electrónico común.",
    "Changes": "Cambios",
    "This notice should be reviewed if analytics, online booking, payment, embedded maps, or a form provider is added.": "Este aviso debe revisarse si se añaden análisis, reservas en línea, pagos, mapas integrados o un proveedor de formularios.",
    "Questions may be sent to": "Puedes enviar tus preguntas a",
    "This page has stepped away.": "Esta página no está disponible.",
    "The address may have changed, or the page may no longer be available.": "Es posible que la dirección haya cambiado o que la página ya no esté disponible.",
    "Return Home": "Volver al inicio"
  };

  const translatePage = (language) => {
    const toSpanish = language === "es";
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) return;
      if (!node.__englishText) node.__englishText = node.nodeValue;
      const englishText = node.__englishText;
      const trimmed = englishText.trim();
      const translated = spanish[trimmed];
      node.nodeValue = toSpanish && translated
        ? englishText.replace(trimmed, translated)
        : englishText;
    });
    document.documentElement.lang = toSpanish ? "es" : "en";
    document.title = toSpanish
      ? `${spanish[document.title.split(" | ")[0]] || document.title.split(" | ")[0]} | Martha Skin Studio`
      : document.documentElement.dataset.englishTitle;
    document.querySelector(".language-toggle")?.setAttribute("aria-label", toSpanish ? "View website in English" : "Ver el sitio en español");
    document.querySelector(".language-toggle").textContent = toSpanish ? "ENGLISH" : "ESPAÑOL";
  };

  document.documentElement.dataset.englishTitle = document.title;
  if (nav) {
    const languageButton = document.createElement("button");
    languageButton.className = "language-toggle";
    languageButton.type = "button";
    nav.append(languageButton);
    let language = "en";
    try { language = localStorage.getItem("martha-language") || "en"; } catch (_) {}
    translatePage(language);
    languageButton.addEventListener("click", () => {
      language = document.documentElement.lang === "es" ? "en" : "es";
      try { localStorage.setItem("martha-language", language); } catch (_) {}
      translatePage(language);
      closeMenu();
    });
  }

  const form = document.querySelector("#inquiry-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const required = ["name", "email", "message"];
      let valid = true;

      required.forEach((id) => {
        const field = document.getElementById(id);
        const error = document.getElementById(`${id}-error`);
        let message = "";
        const isSpanish = document.documentElement.lang === "es";
        if (!field.value.trim()) message = isSpanish ? "Completa este campo." : "Please complete this field.";
        if (id === "email" && field.value && !field.validity.valid) message = isSpanish ? "Ingresa un correo electrónico válido." : "Please enter a valid email address.";
        field.setAttribute("aria-invalid", String(Boolean(message)));
        error.textContent = message;
        if (message && valid) {
          field.focus();
          valid = false;
        }
      });

      if (!valid) return;
      const values = new FormData(form);
      const subject = `Appointment inquiry${values.get("service") ? ` — ${values.get("service")}` : ""}`;
      const body = [
        `Name: ${values.get("name")}`,
        `Email: ${values.get("email")}`,
        `Telephone: ${values.get("phone") || "Not provided"}`,
        `Service: ${values.get("service") || "Not sure yet"}`,
        "",
        values.get("message")
      ].join("\n");
      document.querySelector(".form-status").textContent = document.documentElement.lang === "es" ? "Abriendo tu aplicación de correo…" : "Opening your email application…";
      window.location.href = `mailto:hello@marthaskinstudio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();
