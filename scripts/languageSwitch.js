document.addEventListener('DOMContentLoaded', function () {
    let languageToggle = document.getElementById('language-toggle');
    let headerListItems = document.querySelectorAll('#Lista-Header li');
    function setSpanish() {
      headerListItems.forEach(function (item, index) {
      
        switch (index) {
          case 0:
            item.textContent = 'Sobre nosotros';
            break;
          case 1:
            item.textContent = 'Servicios';
            break;
          case 2:
            item.textContent = 'Productos';
            break;
          case 3:
            item.textContent = '¿Por qué trabajar con nosotros?';
            break;
          case 4:
            item.textContent = 'Blog';
            break;
          case 5:
            item.textContent = 'Contacto';
            break;
        }
      });

      document.querySelector('.contenedor-titulo h2').textContent = "Soluciones para la industria de los robots"
      document.querySelector('.contenedor-titulo a').textContent = "VER SERVICIOS"

      document.querySelector('#sobre-nosotros h3').textContent = "Sobre nosotros"
      document.querySelector('#sobre-nosotros .texto p').innerHTML = "Nuestra filosofía está basada en la actitud de servicio hacia nuestros clientes, durante 30 años hemos podido generar una excelente reputación de responsabilidad y compromiso.</br></br> Nuestros clientes aprecian nuestro esfuerzo por hacer nuestros sus retos y compromisos. tenemos la satisfacción de hacer que nuestros clientes destaquen y sean reconocidos por el éxito en sus proyectos.</br></br> La mejor carta de presentación son los testimonios de nuestros clientes a quienes dedicamos toda nuestra atención."
      document.querySelector('#sobre-nosotros .texto a').textContent = "VER SERVICIOS"

      document.querySelector('#servicios h3').textContent = "Servicios"
      document.querySelector('#integracion h4').textContent = "Integración de sistemas robóticos"
      document.querySelector('#integracion p').textContent = "Desarrollo de soluciones personalizadas para integrar robots en líneas de producción existentes o nuevas. Esto incluye la adaptación de robots para tareas específicas, programación personalizada y asegurar que se integren sin problemas con otros sistemas y maquinaria."
      document.querySelector('#mantenimiento h4').textContent = "Mantenimiento y reparación de robots"
      document.querySelector('#mantenimiento p').textContent = "Servicios de mantenimiento preventivo y reparación para sistemas robóticos. Esto asegura que los robots funcionen de manera eficiente y reduce el tiempo de inactividad en la producción debido a fallas técnicas."
      document.querySelector('#diseno h4').textContent = "Consultoría y diseño de sistemas robóticos"
      document.querySelector('#diseno p').textContent = "Proporcionar asesoramiento experto sobre la selección y el diseño de sistemas robóticos adecuados para necesidades específicas de producción, incluyendo la elección de robots, EOATs (End-of-Arm Tooling) y software de control."
      document.querySelector('#capacitacion h4').textContent = "Capacitación y soporte técnico"
      document.querySelector('#capacitacion p').textContent = "Formación en el uso y mantenimiento de sistemas robóticos, así como soporte técnico continuo para resolver cualquier problema operativo o técnico que pueda surgir."
      document.querySelector('#automatizacion h4').textContent = "Automatización de procesos"
      document.querySelector('#automatizacion p').textContent = "Analizar los procesos de producción de los clientes y desarrollar soluciones de automatización utilizando robots. Esto puede incluir la automatización de tareas repetitivas, peligrosas o que requieren alta precisión."
      document.querySelector('#alquiler h4').textContent = "Venta y alquiler de equipos robóticos"
      document.querySelector('#alquiler p').textContent = "Se ofrece una amplia gama de robots y accesorios relacionados, tanto para la venta como en modalidad de alquiler, para adaptarse a las necesidades temporales o a largo plazo de los clientes."

      document.querySelector('#productos h3').textContent = "Productos"

      document.querySelector('#por-que-trabajar h3').textContent = "¿Por qué trabajar con nosotros?"
      document.querySelector('#ef1').textContent = "Mejora de la eficiencia y productividad"
      document.querySelector('#ef2').textContent = "La implementación de soluciones robóticas puede significar una mejora sustancial en la eficiencia y la productividad de los procesos de producción."
      document.querySelector('#bc1').textContent = "Reducción de costos a largo plazo"
      document.querySelector('#bc2').textContent = "A largo plazo, los robots reducen los costos operativos. Esto se debe a la disminución de errores, menor desperdicio de materiales, reducción de los costos laborales y menores tiempos de inactividad."
      document.querySelector('#flex1').textContent = "Adaptabilidad y flexibilidad en la producción"
      document.querySelector('#flex2').textContent = "Se ofrece flexibilidad significativa para cambiar la producción de nuestros clientes según las demandas del mercado o para introducir nuevos productos sin necesidad de grandes inversiones adicionales en nueva maquinaria."

      document.querySelector('#blog h3').textContent = "Blog"
      document.querySelector('#blog1 h4').textContent = "La Revolución de la Automatización: Cómo los Robots Están Transformando las Industrias"
      document.querySelector('#blog1 p').textContent = "Estudios de caso de empresas que han implementado con éxito soluciones robóticas, destacando los beneficios en términos de eficiencia, reducción de costos y mejora de la calidad."
      document.querySelector('#blog1 a').textContent = "Leer más ➝"
      document.querySelector('#blog2 h4').textContent = "Maximizando la Eficiencia: Consejos para Mantener su Sistema Robótico en Óptimas Condiciones"
      document.querySelector('#blog2 p').textContent = "Orientación sobre mantenimiento preventivo, identificación de señales comunes de problemas en robots, además de cómo realizar diagnósticos básicos."
      document.querySelector('#blog2 a').textContent = "Leer más ➝"

      document.querySelector('#que-esperas h3').textContent = "¿Estás listo para llevar tu producción al siguiente nivel?"
      document.querySelector('#que-esperas a').textContent = "Contáctanos hoy"
      
    }
  
    function setEnglish() {
      headerListItems.forEach(function (item, index) {
        switch (index) {
          case 0:
            item.textContent = 'About us';
            break;
          case 1:
            item.textContent = 'Services';
            break;
          case 2:
            item.textContent = 'Products';
            break;
          case 3:
            item.textContent = 'Why working with us?';
            break;
          case 4:
            item.textContent = 'Blog';
            break;
          case 5:
            item.textContent = 'Contact';
            break;
        }
      });

      document.querySelector('.contenedor-titulo h2').textContent = "Solutions for the robot industry"
      document.querySelector('.contenedor-titulo a').textContent = "OUR SERVICES"

      document.querySelector('#sobre-nosotros h3').textContent = "About us"
      document.querySelector('#sobre-nosotros .texto p').innerHTML = "Our philosophy is based on a service-oriented attitude towards our clients. For 30 years, we have been able to generate an excellent reputation for responsibility and commitment. <br><br> Our clients appreciate our effort to take on their challenges and commitments as our own. We take satisfaction in making our clients stand out and be recognized for their success in their projects. <br><br> The best introduction is the testimonials from our clients, to whom we dedicate all our attention."
      document.querySelector('#sobre-nosotros .texto a').textContent = "OUR SERVICES"

      document.querySelector('#servicios h3').textContent = "Services"
      document.querySelector('#integracion h4').textContent = "Robotic Systems Integration"
      document.querySelector('#integracion p').textContent = "Development of customized solutions to integrate robots into existing or new production lines. This includes adapting robots for specific tasks, custom programming, and ensuring they integrate seamlessly with other systems and machinery"
      document.querySelector('#mantenimiento h4').textContent = "Robot Maintenance and Repair"
      document.querySelector('#mantenimiento p').textContent = "Preventive maintenance and repair services for robotic systems. This ensures robots operate efficiently and reduces downtime in production due to technical failures."
      document.querySelector('#diseno h4').textContent = "Consultancy and Robotic Systems Design"
      document.querySelector('#diseno p').textContent = "Providing expert advice on the selection and design of robotic systems suitable for specific production needs, including choosing robots, EOATs (End-of-Arm Tooling), and control software."
      document.querySelector('#capacitacion h4').textContent = "Training and Technical Support"
      document.querySelector('#capacitacion p').textContent = "Training in the use and maintenance of robotic systems, as well as continuous technical support to solve any operational or technical issues that may arise."
      document.querySelector('#automatizacion h4').textContent = "Automation"
      document.querySelector('#automatizacion p').textContent = "Analyzing clients' production processes and developing automation solutions using robots. This can include automating repetitive, dangerous, or high-precision tasks."
      document.querySelector('#alquiler h4').textContent = "Robot Equipment Sales and Rental"
      document.querySelector('#alquiler p').textContent = "A wide range of robots and related accessories are offered, both for sale and on a rental basis, to suit the temporary or long-term needs of clients."

      document.querySelector('#productos h3').textContent = "Products"

      document.querySelector('#por-que-trabajar h3').textContent = "Why working with us?"
      document.querySelector('#ef1').textContent = "Improvement of Efficiency and Productivity"
      document.querySelector('#ef2').textContent = "The implementation of robotic solutions can mean a substantial improvement in the efficiency and productivity of production processes."
      document.querySelector('#bc1').textContent = "Long-term Cost Reduction"
      document.querySelector('#bc2').textContent = "In the long run, robots reduce operating costs. This is due to decreased errors, less waste of materials, reduction in labor costs, and shorter downtimes."
      document.querySelector('#flex1').textContent = "Adaptability and Flexibility in Production"
      document.querySelector('#flex2').textContent = "Significant flexibility is offered to change our clients' production according to market demands or to introduce new products without the need for large additional investments in new machinery."

      document.querySelector('#blog h3').textContent = "Blog"
      document.querySelector('#blog1 h4').textContent = "The Automation Revolution: How Robots are Transforming Industries"
      document.querySelector('#blog1 p').textContent = "Case studies of companies that have successfully implemented robotic solutions, highlighting the benefits in terms of efficiency, cost reduction, and quality improvement."
      document.querySelector('#blog1 a').textContent = "Read more"
      document.querySelector('#blog2 h4').textContent = "Maximizing Efficiency: Tips for Keeping Your Robotic System in Optimal Condition"
      document.querySelector('#blog2 p').textContent = "Guidance on preventive maintenance, identifying common signs of problems in robots, plus how to perform basic diagnostics."
      document.querySelector('#blog2 a').textContent = "Read more"

      document.querySelector('#que-esperas h3').textContent = "Are you ready to take your production to the next level?"
      document.querySelector('#que-esperas a').textContent = "Contact us today"

     
    }
  
    languageToggle.addEventListener('change', function () {
      if (languageToggle.checked) {
        setEnglish();
      } else {
        setSpanish();
      }
    });
  
    headerListItems.forEach(function (item, index) {
      item.addEventListener('click', function () {
        let sectionId;
        switch (index) {
          case 0:
            sectionId = 'sobre-nosostros';
            break;
          case 1:
            sectionId = 'servicios';
            break;
          case 2:
            sectionId = 'productos';
            break;
          case 3:
            sectionId = 'por-que-trabajar';
            break;
          case 4:
            sectionId = 'blog';
            break;
          case 5:
            sectionId = 'que-esperas';
            break;
          default:
            sectionId = 'sobre-nosostros';
            break;
        }
  
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
      });
    });
  });