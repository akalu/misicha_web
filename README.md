# Asociación Misicha Perú — Sitio Web Oficial (Rediseño)

Sitio web moderno, receptivo y solidario desarrollado para la **Asociación Civil Misicha Perú** (`misicha.org`), organización sin fines de lucro dedicada al rescate, esterilización comunitaria, rehabilitación y adopción responsable de gatos en el Parque Universitario y las calles de Lima.

---

## 🎨 Identidad Visual y Paleta de Colores

Basada directamente en el logo oficial `misicha_logo.jpg`:
- **Naranja Michi Principal:** `#F16F24` / `#FF5722` (calidez, vitalidad, cercanía y amor animal).
- **Amarillo Sol y Ámbar:** `#FFC837` / `#F59E0B` (esperanza, energía positiva).
- **Rojo Coral / Carmesí:** `#E53935` / `#DC2626` (urgencia en rescates, pasión y compromiso).
- **Fondo Cálido Crema:** `#FFFBF5` / `#FCF9F6` (confortable a la vista, sensación hogareña).
- **Chocolate Oscuro / Espresso:** `#2A1810` (legibilidad contrastada y moderna).

---

## 🚀 Secciones y Funcionalidades Incluidas

1. **Header & Navegación:**
   - Logo oficial de Misicha y nombre de la asociación.
   - Barra superior interactiva con anuncio del **Michi Bingo 2025**.
   - Menú responsive completo para dispositivos móviles y escritorio.
   - Botones rápidos para "Donar / Yape" y "Adoptar".

2. **Hero Section (Portada):**
   - Mensaje emotivo de impacto: *"Cambiando destinos de a cuatro patitas con amor y respeto"*.
   - Estadísticas verificadas de la organización (+1,850 esterilizaciones TNR, +980 adopciones responsables, 100% labor voluntaria, 12 años en el Parque Universitario).
   - Insignias de garantía veterinaria (esterilizados, vacunas al día, test VIF/ViLeF negativos).

3. **Gatitos en Adopción Responsable (Display Felino):**
   - Filtros por edad y condición: *Todos, Cachorros/Bebés, Jóvenes, Adultos, Casos Especiales*.
   - Buscador en tiempo real por nombre, color o personalidad.
   - Tarjetas de michis con etiquetas de salud, temperamento y estado.
   - **Modal interactivo por cada gatito** con su historia de rescate, requisitos y **formulario de postulación de adopción integrado con celebración de confeti y enlace directo prellenado a WhatsApp**.
   - Sección informativa sobre la importancia vital de las **mallas de seguridad** en ventanas y balcones.
   - Proceso de adopción explicado en 4 pasos sencillos.

4. **Eventos Solidarios & Gran Michi Bingo:**
   - Banner del próximo **Michi Bingo Solidario 2025 (Edición Primavera)**.
   - Barra de progreso de recaudación de fondos para tratamientos veterinarios.
   - Exhibición de premios (Smart TV 50", freidora de aire, rascadores gigantes, canastas gourmet felinas).
   - **Calculadora y simulador interactivo de cartones** (1 cartón = S/ 10, combo 3 = S/ 25, combo 5 = S/ 40) con reserva y comprobante para WhatsApp.
   - Vitrina de ferias solidarias (*Michi Stand*) y rifas (*Michirrifas*).

5. **Cómo Ayudar & Canales de Donación (Perú e Internacional):**
   - **Yape y Plin:** Código QR escaneable y botón para copiar con un solo clic el número oficial (`992 485 174`).
   - **Cuentas Bancarias:** BCP, BBVA, Interbank en Soles y Dólares con botones para copiar número de cuenta y CCI.
   - **Calculadora Interactiva de Impacto Solidario:** Deslizador para ver qué se logra con S/ 20, S/ 50, S/ 80 o S/ 150+.
   - **Michi Padrino:** Planes de apadrinamiento mensual (Nutrición, Salud, Ángel Guardián).
   - **Donación en Especie:** Lista de alimentos y medicinas necesitadas, con puntos de acopio en Cercado de Lima, Miraflores, San Borja y Los Olivos.
   - **PayPal:** Enlace directo para donaciones internacionales.

6. **Nuestra Historia & Parque Universitario:**
   - La historia del rescate felino en el emblemático Parque Universitario del Cercado de Lima.
   - Los 4 pilares: TNR ético, rehabilitación médica, adopciones seguras y educación ciudadana.

7. **Finales Felices (Testimonios):**
   - Casos de éxito y fotos de gatos rescatados que ahora viven felices con sus familias adoptivas.

8. **Voluntariado & Hogares Temporales:**
   - Selección de áreas de apoyo: Brigadas del Parque, Hogar Temporal (tránsito) y Difusión/Eventos.
   - Formulario rápido de inscripción voluntaria.

9. **Preguntas Frecuentes (FAQ):**
   - Acordeón interactivo con respuestas a dudas sobre requisitos de adopción, mallas de protección, costos de recuperación veterinaria y bingos.

10. **Pie de Página & Botón Flotante:**
    - Información legal (RUC 20603418921, personería jurídica SUNARP), redes sociales, datos de contacto y horario de atención.
    - Botón flotante directo de WhatsApp con animación de atención.

---

## 🛠️ Tecnologías Utilizadas

- **React 18** (arquitectura de componentes modulares y estados interactivos)
- **Vite 6** (servidor ultrarrápido y compilación optimizada)
- **Tailwind CSS 3** (estilos responsivos con tokens personalizados de la marca Misicha)
- **Lucide React** (iconografía limpia, moderna y accesible)
- **Canvas Confetti** (efectos de celebración en formularios y reservas)

---

## 💻 Instrucciones para Ejecutar en Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar en modo desarrollo:**
   ```bash
   npm run dev
   ```
   El sitio estará disponible en `http://localhost:3000` (o el puerto asignado).

3. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Los archivos listos para desplegar en cualquier hosting (Vercel, Netlify, cPanel, GitHub Pages) se generarán en la carpeta `dist/`.
