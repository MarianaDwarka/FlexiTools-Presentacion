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