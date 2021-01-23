// ДИНАМИЗАЦИЯ SELECT INPUTS======================================================================

const selectBrand = document.querySelector('#car_brand'),
      selectModel = document.querySelector('#car_model'),
      warningChooseBrand = document.querySelector('.warning__choose-brand');


selectBrand.addEventListener('change', () => {
    if(selectBrand[1].selected) {
    selectModel.innerHTML = ` 
    <option value=""disabled selected>Выберите модель BMW</option>
    <option value="">BMW 1-Series(F20)</option>
    <option value="">BMW 2-Series (F22)</option>
    <option value="">BMW 1-Series (E87)</option>
    <option value="">BMW 3-Series (E90)</option>
    <option value="">BMW 3-Series (E46)</option>
    <option value="">BMW 4-Series (F33)</option>
    <option value="">BMW 7-Series (E38)</option>
  `
  }

  if(selectBrand[2].selected) {
     selectModel.innerHTML = ` 
    <option value=""disabled selected>Выберите модель Mersedes</option>
    <option value="">Mercedes-Benz A-klasse</option>
    <option value="">Mercedes-Benz A-klasse AMG</option>
    <option value="">Mercedes-Benz B-klasse</option>
    <option value="">Mercedes-Benz C-klasse</option>
    <option value="">Mercedes-Benz CL-klasse</option>
    <option value="">Mercedes-Benz CL-klasse AMG</option>
    <option value="">Mercedes-Benz E-klasse</option>
    <option value="">Mercedes-Benz G-klasse</option>
    <option value="">Mercedes-Benz GL-klasse AMG</option>
  `
  }

  if(selectBrand[3].selected) {
     selectModel.innerHTML = ` 
    <option value=""disabled selected>Выберите модель Audi</option>
    <option value="">A4</option>
    <option value="">A6</option>
    <option value="">A8</option>
    <option value="">Q3</option>
    <option value="">Q4</option>
    <option value="">RS7</option>
    <option value="">S6</option>
    <option value="">SQ7</option>
    <option value="">SQ8</option>
    <option value="">B9</option>
  `
  }

   if(selectBrand[4].selected) {
     selectModel.innerHTML = ` 
    <option value=""disabled selected>Выберите модель Volkswagen</option>
    <option value="">Amarok SingleCab</option>
    <option value="">Arteon</option>
    <option value="">Amarok DoubleCab</option>
    <option value="">Arteon Shooting Brake</option>
    <option value="">Caddy Cargo</option>
    <option value="">Caddy Kasten</option>
    <option value="">Caddy Kombi</option>
    <option value="">Caravelle (T5)</option>
    <option value="">Caravelle (T6)</option>
    <option value="">Crafter Kasten</option>
    <option value="">Cross Polo</option>
    <option value="">Cross Touran</option>
    <option value="">e-Golf</option>
  `
  }

  if(selectBrand[5].selected) {
     selectModel.innerHTML = ` 
    <option value=""disabled selected>Выберите модель Jaguar</option>
    <option value="">E-Pace</option>
    <option value="">F-Pace</option>
    <option value=""> F-Type</option>
    <option value=""> F-Type Convertible</option>
    <option value="">F-Type Coupe</option>
    <option value="">I-Pace</option>
    <option value="">X-TYPE</option>
    <option value="">X-TYPE Estate</option>
    <option value="">XE</option>
    <option value="">XF</option>
    <option value="">XF Sportbrake</option>
    <option value="">XFR</option>
    <option value="">XFR-S</option>
  `
  }

   if(selectBrand[6].selected) {
     selectModel.innerHTML = ` 
    <option value=""disabled selected>Выберите модель Volvo</option>
    <option value="">S60</option>
    <option value="">V90</option>
    <option value="">S40</option>
    <option value="">C30</option>
    <option value="">C70</option>
    <option value="">XC90</option>
    <option value="">XC70</option>
    <option value="">V60</option>
    <option value="">V40</option>
    <option value="">V90</option>
  `
  }

   if(selectBrand[7].selected) {
     selectModel.innerHTML = ` 
    <option value=""disabled selected>Выберите модель Land Rover</option>
    <option value="">Discovery Sport</option>
    <option value="">Range Rover</option>
    <option value="">Range Rover Velar</option>
    <option value="">Defender 110</option>
    <option value="">Defender 90</option>
    <option value="">Double Cab Pick Up </option>
    <option value="">High Capacity Pick Up</option>
    <option value="">Discovery 3</option>
    <option value="">Range Rover Evoque Convertible</option>
    <option value="">Range Rover Sport</option>
  `
  }

   if(selectBrand[8].selected) {
     selectModel.innerHTML = ` 
    <option value=""disabled selected>Выберите модель Jeep</option>
    <option value="">Jeep Cherokee</option>
    <option value="">Jeep Compass</option>
    <option value="">Jeep Grand Cherokee</option>
    <option value="">Jeep Renegade</option>
    <option value="">Jeep Wrangler</option>
    <option value="">Jeep CJ-5 </option>
    <option value="">Jeep CJ-7</option>
    <option value="">Jeep Comanche</option>
    <option value="">Jeep Commander</option>
    <option value="">Jeep Patriot</option>
  `
  }

  if(selectBrand[9].selected) {
     selectModel.innerHTML = ` 
    <option value=""disabled selected>Выберите модель Mazda</option>
    <option value="">Mazda 6</option>
    <option value="">Mazda CX-30</option>
    <option value="">Mazda CX-5</option>
    <option value="">Mazda CX-9</option>
    <option value="">Mazda 121</option>
    <option value="">Mazda 2 </option>
    <option value="">Mazda 3</option>
    <option value="">Mazda 323</option>
    <option value="">Mazda 5</option>
    <option value="">Mazda Atenza</option>
  `
  }

  if(selectBrand[10].selected) {
     selectModel.innerHTML = ` 
    <option value=""disabled selected>Выберите модель Hyunday</option>
    <option value="">Hyundai Creta</option>
    <option value="">Hyundai Creta</option>
    <option value="">Hyundai Palisade</option>
    <option value="">Hyundai Santa Fe</option>
    <option value="">Hyundai Solaris</option>
    <option value="">Hyundai Sonata</option>
    <option value="">Hyundai Tucson</option>
    <option value="">Hyundai Accent</option>
    <option value="">Hyundai Aslan</option>
    <option value="">Hyundai Atos</option>
  `
  }

  if(selectBrand[11].selected) {
     selectModel.innerHTML = ` 
    <option value=""disabled selected>Выберите модель Porshe</option>
    <option value="">Porsche718 Boxster</option>
    <option value="">Porsche718 Cayman</option>
    <option value="">Porsche 911</option>
    <option value="">PorscheCabriolet</option>
    <option value="">Porsche Cayenne</option>
    <option value="">PorscheCayenne Coupe</option>
    <option value="">Porsche Macan</option>
    <option value="">Porsche Panamera</option>
    <option value="">Porsche Taycan</option>
    <option value="">Porsche 911 GT1</option>
  `
  }

   if(selectBrand[12].selected) {
     selectModel.innerHTML = ` 
    <option value=""disabled selected>Выберите модель Honda</option>
    <option value="">Honda CR-V</option>
    <option value="">Honda Pilot</option>
    <option value="">Honda Accord</option>
    <option value="">Honda Acty</option>
    <option value="">Honda Airwave</option>
    <option value="">Honda Amaze</option>
    <option value="">Honda Ascot</option>
    <option value="">Honda Ascot Innova</option>
    <option value="">Honda Avancier</option>
    <option value="">Honda Brio</option>
  `
  }

  if(selectBrand[13].selected) {
     selectModel.innerHTML = ` 
    <option value=""disabled selected>Выберите модель Bentley</option>
    <option value="">Bentley Bentayga</option>
    <option value="">Bentley Continental GT</option>
    <option value="">Bentley Flying Spur</option>
    <option value="">Bentley Mulsanne</option>
    <option value="">Bentley Arnage</option>
    <option value="">Bentley Azure</option>
    <option value="">Bentley Brooklands</option>
    <option value="">Bentley Continental Flying Spur</option>
  `
  }

})// Конец addEventListener........................

const optionSelected = document.querySelectorAll('.option__selected');

 
 function warninChoose() {
      selectModel.addEventListener('click', () => {
      if (!selectBrand.value.selected) {
        warningChooseBrand.classList.add('active');
       } 
    })
 }warninChoose();
 

selectBrand.addEventListener('change', () => {
  optionSelected.forEach(input => {
    if (input.selected) {
      warningChooseBrand.classList.add('disactive');
    }
  })
     
   
 })