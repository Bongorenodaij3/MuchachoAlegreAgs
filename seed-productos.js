// Datos originales del menú (generado automáticamente), usados por admin.html
const SEED_PRODUCTOS = [
  {
    "nombre": "Tostada tropical",
    "precio": 50.0,
    "detalle": "Pescado, Zanahoría y cebolla morada",
    "categoria": "ceviches",
    "orden": 0
  },
  {
    "nombre": "Tostada negro",
    "precio": 50.0,
    "detalle": "Pescado, pico de gallo y salsas negras",
    "categoria": "ceviches",
    "orden": 1
  },
  {
    "nombre": "Tostada ceviche de camarón",
    "precio": 70.0,
    "detalle": null,
    "categoria": "ceviches",
    "orden": 2
  },
  {
    "nombre": "Tostada especial",
    "precio": 80.0,
    "detalle": "Camarón, pescado, por temporada (piña o mango), manzana",
    "categoria": "ceviches",
    "orden": 3
  },
  {
    "nombre": "Tostada cualquier marisco",
    "precio": 110.0,
    "detalle": "Camarón, Pulpo",
    "categoria": "ceviches",
    "orden": 4
  },
  {
    "nombre": "Tostada aguachile Camarón",
    "precio": 110.0,
    "detalle": "Verde, Negro, Rojo",
    "categoria": "ceviches",
    "orden": 5
  },
  {
    "nombre": "Tostada de aguachile Pulpo",
    "precio": 120.0,
    "detalle": "Verde, Rojo, Negro",
    "categoria": "ceviches",
    "orden": 6
  },
  {
    "nombre": "Tostada marlin",
    "precio": 60.0,
    "detalle": null,
    "categoria": "ceviches",
    "orden": 7
  },
  {
    "nombre": "Tostada surimi",
    "precio": 110.0,
    "detalle": "Trozos de surimi coronado con pico de gallo",
    "categoria": "ceviches",
    "orden": 8
  },
  {
    "nombre": "Tostada ceviche de atún",
    "precio": 90.0,
    "detalle": "Por temporada | Trozos de atun, sandia y mango",
    "categoria": "ceviches",
    "orden": 9
  },
  {
    "nombre": "Tostada Pulpo Enamorado",
    "precio": 110.0,
    "detalle": null,
    "categoria": "ceviches",
    "orden": 10
  },
  {
    "nombre": "Tostada la fresona",
    "precio": 130.0,
    "detalle": "Pulpo, surimi, manzana, jicama",
    "categoria": "ceviches",
    "orden": 11
  },
  {
    "nombre": "Copa alegre",
    "precio": null,
    "detalle": null,
    "opciones": [
      {
        "nombre": "Camaron",
        "precio": 110.0
      },
      {
        "nombre": "Pulpo",
        "precio": 110.0
      },
      {
        "nombre": "Pulpo-pulpo",
        "precio": 150.0
      },
      {
        "nombre": "Ostión",
        "precio": 110.0
      },
      {
        "nombre": "Surimi",
        "precio": 110.0
      },
      {
        "nombre": "Callo de Almeja",
        "precio": 130.0
      },
      {
        "nombre": "Camaron + Pulpo",
        "precio": 110.0
      },
      {
        "nombre": "Camaron + Pulpo-pulpo",
        "precio": 150.0
      },
      {
        "nombre": "Camaron + Surimi",
        "precio": 110.0
      },
      {
        "nombre": "Camaron + Ostion",
        "precio": 110.0
      },
      {
        "nombre": "Camaron + Callo",
        "precio": 130.0
      },
      {
        "nombre": "Pulpo + Ostion",
        "precio": 130.0
      },
      {
        "nombre": "Pulpo + Surimi",
        "precio": 130.0
      },
      {
        "nombre": "Pulpo + Callo",
        "precio": 130.0
      },
      {
        "nombre": "Camaron + Pulpo + Ostion",
        "precio": 110.0
      },
      {
        "nombre": "Camaron + Pulpo + Surimi",
        "precio": 110.0
      },
      {
        "nombre": "Camaron + Pulpo + Callo",
        "precio": 130.0
      },
      {
        "nombre": "Camaron + Ostion + Surimi",
        "precio": 110.0
      },
      {
        "nombre": "Vuelve a la vida",
        "precio": 130.0
      }
    ],
    "categoria": "cocteles",
    "orden": 0
  },
  {
    "nombre": "Chavela",
    "precio": null,
    "detalle": null,
    "opciones": [
      {
        "nombre": "Chabela Camaron",
        "precio": 170.0
      },
      {
        "nombre": "Chabela Pulpo",
        "precio": 170.0
      },
      {
        "nombre": "Chabela pulpo-pulpo",
        "precio": 200.0
      },
      {
        "nombre": "Chabela Ostión",
        "precio": 170.0
      },
      {
        "nombre": "Chabela Surimi",
        "precio": 170.0
      },
      {
        "nombre": "Chabela Callo de Almeja",
        "precio": 190.0
      },
      {
        "nombre": "Camaron + Pulpo",
        "precio": 170.0
      },
      {
        "nombre": "Camaron + Pulpo-pulpo",
        "precio": 200.0
      },
      {
        "nombre": "Camaron + Surimi",
        "precio": 170.0
      },
      {
        "nombre": "Camaron + Ostion",
        "precio": 170.0
      },
      {
        "nombre": "Camaron + Callo",
        "precio": 190.0
      },
      {
        "nombre": "Pulpo + Ostion",
        "precio": 170.0
      },
      {
        "nombre": "Pulpo + Surimi",
        "precio": 170.0
      },
      {
        "nombre": "Pulpo + Callo",
        "precio": 190.0
      },
      {
        "nombre": "Camaron + Pulpo + Ostion",
        "precio": 170.0
      },
      {
        "nombre": "Camaron + Pulpo + Surimi",
        "precio": 170.0
      },
      {
        "nombre": "Camaron + Pulpo + Callo",
        "precio": 190.0
      },
      {
        "nombre": "Camaron + Ostion + Surimi",
        "precio": 170.0
      },
      {
        "nombre": "Vuelve a la vida",
        "precio": 190.0
      }
    ],
    "categoria": "cocteles",
    "orden": 1
  },
  {
    "nombre": "Peke",
    "precio": null,
    "detalle": null,
    "opciones": [
      {
        "nombre": "Camaron",
        "precio": 100.0
      },
      {
        "nombre": "Pulpo",
        "precio": 100.0
      },
      {
        "nombre": "Ostión",
        "precio": 100.0
      },
      {
        "nombre": "Surimi",
        "precio": 100.0
      },
      {
        "nombre": "Callo de Almeja",
        "precio": 120.0
      },
      {
        "nombre": "Camaron + Pulpo",
        "precio": 100.0
      },
      {
        "nombre": "Camaron + Surimi",
        "precio": 100.0
      },
      {
        "nombre": "Camaron + Ostion",
        "precio": 100.0
      },
      {
        "nombre": "Camaron + Callo",
        "precio": 120.0
      },
      {
        "nombre": "Pulpo + Ostion",
        "precio": 100.0
      },
      {
        "nombre": "Pulpo + Surimi",
        "precio": 100.0
      },
      {
        "nombre": "Pulpo + Callo",
        "precio": 120.0
      },
      {
        "nombre": "Camaron + Pulpo + Ostion",
        "precio": 100.0
      }
    ],
    "categoria": "cocteles",
    "orden": 2
  },
  {
    "nombre": "Mil amores",
    "precio": 190.0,
    "detalle": "Chavela con todo el marisco coronada con ceviche tropical.",
    "categoria": "cocteles",
    "orden": 3
  },
  {
    "nombre": "Sin Vergüenza",
    "precio": 200.0,
    "detalle": "Chavela con todo el marisco coronada con ceviche especial.",
    "categoria": "cocteles",
    "orden": 4
  },
  {
    "nombre": "Sabrosura Del Pacifico",
    "precio": 190.0,
    "detalle": "Chavela con todo el marisco coronada con ceviche de camarón.",
    "categoria": "cocteles",
    "orden": 5
  },
  {
    "nombre": "Empanizados",
    "precio": 160.0,
    "detalle": null,
    "categoria": "camarones",
    "orden": 0
  },
  {
    "nombre": "Diabla",
    "precio": 160.0,
    "detalle": null,
    "categoria": "camarones",
    "orden": 1
  },
  {
    "nombre": "Mojo",
    "precio": 160.0,
    "detalle": null,
    "categoria": "camarones",
    "orden": 2
  },
  {
    "nombre": "Mantequilla",
    "precio": 160.0,
    "detalle": null,
    "categoria": "camarones",
    "orden": 3
  },
  {
    "nombre": "Ajillo",
    "precio": 160.0,
    "detalle": null,
    "categoria": "camarones",
    "orden": 4
  },
  {
    "nombre": "Imperiales",
    "precio": 200.0,
    "detalle": null,
    "categoria": "camarones",
    "orden": 5
  },
  {
    "nombre": "Ajidiabla",
    "precio": 160.0,
    "detalle": null,
    "categoria": "camarones",
    "orden": 6
  },
  {
    "nombre": "Momia",
    "precio": 190.0,
    "detalle": null,
    "categoria": "camarones",
    "orden": 7
  },
  {
    "nombre": "Empanizados con papas",
    "precio": 170.0,
    "detalle": null,
    "categoria": "camarones",
    "orden": 8
  },
  {
    "nombre": "Camarones Florentina",
    "precio": 200.0,
    "detalle": null,
    "categoria": "camarones",
    "orden": 9
  },
  {
    "nombre": "Camarones Veracruzana",
    "precio": 180.0,
    "detalle": null,
    "categoria": "camarones",
    "orden": 10
  },
  {
    "nombre": "Camarones Al Coco",
    "precio": 180.0,
    "detalle": null,
    "categoria": "camarones",
    "orden": 11
  },
  {
    "nombre": "Empanizado",
    "precio": 140.0,
    "detalle": null,
    "categoria": "filetes",
    "orden": 0
  },
  {
    "nombre": "Ajillo",
    "precio": 140.0,
    "detalle": null,
    "categoria": "filetes",
    "orden": 1
  },
  {
    "nombre": "Diabla",
    "precio": 140.0,
    "detalle": null,
    "categoria": "filetes",
    "orden": 2
  },
  {
    "nombre": "Mojo",
    "precio": 140.0,
    "detalle": null,
    "categoria": "filetes",
    "orden": 3
  },
  {
    "nombre": "Plancha",
    "precio": 140.0,
    "detalle": null,
    "categoria": "filetes",
    "orden": 4
  },
  {
    "nombre": "Mexicana",
    "precio": 150.0,
    "detalle": null,
    "categoria": "filetes",
    "orden": 5
  },
  {
    "nombre": "Ajidiabla",
    "precio": 150.0,
    "detalle": null,
    "categoria": "filetes",
    "orden": 6
  },
  {
    "nombre": "Empapelado",
    "precio": 180.0,
    "detalle": null,
    "categoria": "filetes",
    "orden": 7
  },
  {
    "nombre": "Envuelto de mariscos",
    "precio": 160.0,
    "detalle": null,
    "categoria": "filetes",
    "orden": 8
  },
  {
    "nombre": "Empanizado con papas",
    "precio": 150.0,
    "detalle": null,
    "categoria": "filetes",
    "orden": 9
  },
  {
    "nombre": "1/2 Empanizado",
    "precio": 100.0,
    "detalle": null,
    "categoria": "filetes",
    "orden": 10
  },
  {
    "nombre": "1/2 Empanizado con papas",
    "precio": 110.0,
    "detalle": null,
    "categoria": "filetes",
    "orden": 11
  },
  {
    "nombre": "Filete Veracruzano",
    "precio": 150.0,
    "detalle": null,
    "categoria": "filetes",
    "orden": 12
  },
  {
    "nombre": "Filete Florentina",
    "precio": 170.0,
    "detalle": null,
    "categoria": "filetes",
    "orden": 13
  },
  {
    "nombre": "Filete Al Coco",
    "precio": 170.0,
    "detalle": null,
    "categoria": "filetes",
    "orden": 14
  },
  {
    "nombre": "Pollo",
    "precio": 120.0,
    "detalle": null,
    "categoria": "milanesas",
    "orden": 0
  },
  {
    "nombre": "Res",
    "precio": 130.0,
    "detalle": null,
    "categoria": "milanesas",
    "orden": 1
  },
  {
    "nombre": "Arrachera",
    "precio": 140.0,
    "detalle": null,
    "categoria": "milanesas",
    "orden": 2
  },
  {
    "nombre": "Camarón",
    "precio": 140.0,
    "detalle": null,
    "categoria": "caldos",
    "orden": 0
  },
  {
    "nombre": "Pescado",
    "precio": 140.0,
    "detalle": null,
    "categoria": "caldos",
    "orden": 1
  },
  {
    "nombre": "Camaron-Pescado",
    "precio": 160.0,
    "detalle": null,
    "categoria": "caldos",
    "orden": 2
  },
  {
    "nombre": "Sopa de mariscos",
    "precio": 160.0,
    "detalle": null,
    "categoria": "caldos",
    "orden": 3
  },
  {
    "nombre": "7 mares",
    "precio": 180.0,
    "detalle": null,
    "categoria": "caldos",
    "orden": 4
  },
  {
    "nombre": "Orden de aguachile de Camarón",
    "precio": 180.0,
    "detalle": "Puede ser Verde, Negro o Rojo.",
    "categoria": "especialidades",
    "orden": 0
  },
  {
    "nombre": "Orden de aguachile de pulpo",
    "precio": 240.0,
    "detalle": "Puede ser Verde, Negro o Rojo.",
    "categoria": "especialidades",
    "orden": 1
  },
  {
    "nombre": "Orden de aguachile de Camarón Mixto",
    "precio": 210.0,
    "detalle": null,
    "categoria": "especialidades",
    "orden": 2
  },
  {
    "nombre": "Orden de Aguachile de Pulpo Mixto",
    "precio": 270.0,
    "detalle": null,
    "categoria": "especialidades",
    "orden": 3
  },
  {
    "nombre": "Tostitos de aguachile Camarón",
    "precio": 120.0,
    "detalle": "Aguachile Verde, Negro ó Rojo",
    "categoria": "especialidades",
    "orden": 4
  },
  {
    "nombre": "Tostitos de ceviche Pescado",
    "precio": 100.0,
    "detalle": "Negro, Tropical",
    "categoria": "especialidades",
    "orden": 5
  },
  {
    "nombre": "Tostitos ceviche Camaron",
    "precio": 110.0,
    "detalle": "Camarón, Especial",
    "categoria": "especialidades",
    "orden": 6
  },
  {
    "nombre": "Ostiones en su concha (x12)",
    "precio": 240.0,
    "detalle": null,
    "categoria": "especialidades",
    "orden": 7
  },
  {
    "nombre": "Ostiones en su concha (x6)",
    "precio": 180.0,
    "detalle": null,
    "categoria": "especialidades",
    "orden": 8
  },
  {
    "nombre": "Pata de mula",
    "precio": 40.0,
    "detalle": null,
    "categoria": "especialidades",
    "orden": 9
  },
  {
    "nombre": "Almeja chocolata",
    "precio": 60.0,
    "detalle": null,
    "categoria": "especialidades",
    "orden": 10
  },
  {
    "nombre": "Shot de Camarones/Ostiones",
    "precio": 40.0,
    "detalle": null,
    "categoria": "especialidades",
    "orden": 11
  },
  {
    "nombre": "Mojarra frita",
    "precio": 210.0,
    "detalle": null,
    "categoria": "especialidades",
    "orden": 12
  },
  {
    "nombre": "Huachinango",
    "precio": 350.0,
    "detalle": null,
    "categoria": "especialidades",
    "orden": 13
  },
  {
    "nombre": "Mojarra Embarazada (Rellena de mariscos)",
    "precio": 330.0,
    "detalle": null,
    "categoria": "especialidades",
    "orden": 14
  },
  {
    "nombre": "Salmon (ajillo, mojo, etc)",
    "precio": 220.0,
    "detalle": null,
    "categoria": "especialidades",
    "orden": 15
  },
  {
    "nombre": "Pulpos (ajillo, mojo, etc)",
    "precio": 220.0,
    "detalle": null,
    "categoria": "especialidades",
    "orden": 16
  },
  {
    "nombre": "Callo hacha x12",
    "precio": 350.0,
    "detalle": null,
    "categoria": "especialidades",
    "orden": 17
  },
  {
    "nombre": "Media de callo de hacha (x6)",
    "precio": 280.0,
    "detalle": null,
    "categoria": "especialidades",
    "orden": 18
  },
  {
    "nombre": "Torre de mariscos",
    "precio": 250.0,
    "detalle": null,
    "categoria": "especialidades",
    "orden": 19
  },
  {
    "nombre": "Cevichona",
    "precio": 300.0,
    "detalle": null,
    "categoria": "especialidades",
    "orden": 20
  },
  {
    "nombre": "Mariscada",
    "precio": 350.0,
    "detalle": null,
    "categoria": "especialidades",
    "orden": 21
  },
  {
    "nombre": "Molcajete Mar y Tierra",
    "precio": 310.0,
    "detalle": null,
    "categoria": "especialidades",
    "orden": 22
  },
  {
    "nombre": "Atun sellado (mojo, ajillo, diabla, mantequilla)",
    "precio": 310.0,
    "detalle": null,
    "categoria": "especialidades",
    "orden": 23
  },
  {
    "nombre": "Camarón (2x)",
    "precio": 90.0,
    "detalle": null,
    "categoria": "tacos",
    "orden": 0
  },
  {
    "nombre": "Pescado (2x)",
    "precio": 80.0,
    "detalle": null,
    "categoria": "tacos",
    "orden": 1
  },
  {
    "nombre": "Gobber (2x)",
    "precio": 100.0,
    "detalle": null,
    "categoria": "tacos",
    "orden": 2
  },
  {
    "nombre": "Moncho (2x)",
    "precio": 110.0,
    "detalle": null,
    "categoria": "tacos",
    "orden": 3
  },
  {
    "nombre": "Marlin (3x)",
    "precio": 100.0,
    "detalle": null,
    "categoria": "tacos",
    "orden": 4
  },
  {
    "nombre": "Cangrechidos (1x)",
    "precio": 80.0,
    "detalle": null,
    "categoria": "tacos",
    "orden": 5
  },
  {
    "nombre": "Alitas",
    "precio": 120.0,
    "detalle": null,
    "categoria": "snacks",
    "orden": 0
  },
  {
    "nombre": "Pollo estilo KFC",
    "precio": 110.0,
    "detalle": null,
    "categoria": "snacks",
    "orden": 1
  },
  {
    "nombre": "Nuggets",
    "precio": 110.0,
    "detalle": null,
    "categoria": "snacks",
    "orden": 2
  },
  {
    "nombre": "Boneless",
    "precio": 130.0,
    "detalle": null,
    "categoria": "snacks",
    "orden": 3
  },
  {
    "nombre": "1/2 papas a la francesa",
    "precio": 50.0,
    "detalle": null,
    "categoria": "snacks",
    "orden": 4
  },
  {
    "nombre": "Orden papas a la francesa",
    "precio": 80.0,
    "detalle": null,
    "categoria": "snacks",
    "orden": 5
  },
  {
    "nombre": "QK Camarón",
    "precio": 70.0,
    "detalle": null,
    "categoria": "snacks",
    "orden": 6
  },
  {
    "nombre": "QK Pulpo",
    "precio": 70.0,
    "detalle": null,
    "categoria": "snacks",
    "orden": 7
  },
  {
    "nombre": "QK Ostión",
    "precio": 70.0,
    "detalle": null,
    "categoria": "snacks",
    "orden": 8
  },
  {
    "nombre": "QK Marlin",
    "precio": 70.0,
    "detalle": null,
    "categoria": "snacks",
    "orden": 9
  },
  {
    "nombre": "Hamburguesa Res",
    "precio": 90.0,
    "detalle": null,
    "categoria": "hamburguesas",
    "orden": 0
  },
  {
    "nombre": "Hamburguesa Pollo",
    "precio": 90.0,
    "detalle": null,
    "categoria": "hamburguesas",
    "orden": 1
  },
  {
    "nombre": "Hamburguesa Camarón",
    "precio": 100.0,
    "detalle": null,
    "categoria": "hamburguesas",
    "orden": 2
  },
  {
    "nombre": "Hamburguesa Pescado",
    "precio": 100.0,
    "detalle": null,
    "categoria": "hamburguesas",
    "orden": 3
  },
  {
    "nombre": "Ensalada de pollo",
    "precio": 140.0,
    "detalle": null,
    "categoria": "fit",
    "orden": 0
  },
  {
    "nombre": "Ensalada de res",
    "precio": 140.0,
    "detalle": null,
    "categoria": "fit",
    "orden": 1
  },
  {
    "nombre": "Ensalada de pescado",
    "precio": 140.0,
    "detalle": null,
    "categoria": "fit",
    "orden": 2
  },
  {
    "nombre": "Ensalada de camarón",
    "precio": 140.0,
    "detalle": null,
    "categoria": "fit",
    "orden": 3
  },
  {
    "nombre": "Ensalada de surimi",
    "precio": 140.0,
    "detalle": null,
    "categoria": "fit",
    "orden": 4
  },
  {
    "nombre": "Ensalada de atún",
    "precio": 140.0,
    "detalle": null,
    "categoria": "fit",
    "orden": 5
  },
  {
    "nombre": "Ensalada de mariscos",
    "precio": 160.0,
    "detalle": null,
    "categoria": "fit",
    "orden": 6
  },
  {
    "nombre": "Litro de tropical",
    "precio": 200.0,
    "detalle": null,
    "categoria": "litros",
    "orden": 0
  },
  {
    "nombre": "Litro de ceviche negro",
    "precio": 200.0,
    "detalle": null,
    "categoria": "litros",
    "orden": 1
  },
  {
    "nombre": "Litro de ceviche de camarón",
    "precio": 280.0,
    "detalle": null,
    "categoria": "litros",
    "orden": 2
  },
  {
    "nombre": "Litro de ceviche especial",
    "precio": 300.0,
    "detalle": null,
    "categoria": "litros",
    "orden": 3
  },
  {
    "nombre": "Litro de ceviche atún",
    "precio": 300.0,
    "detalle": null,
    "categoria": "litros",
    "orden": 4
  },
  {
    "nombre": "1/2 Litro de tropical",
    "precio": 120.0,
    "detalle": null,
    "categoria": "litros",
    "orden": 5
  },
  {
    "nombre": "1/2 Litro de ceviche negro",
    "precio": 120.0,
    "detalle": null,
    "categoria": "litros",
    "orden": 6
  },
  {
    "nombre": "1/2 Litro de ceviche de camarón",
    "precio": 170.0,
    "detalle": null,
    "categoria": "litros",
    "orden": 7
  },
  {
    "nombre": "1/2 Litro de ceviche especial",
    "precio": 180.0,
    "detalle": null,
    "categoria": "litros",
    "orden": 8
  },
  {
    "nombre": "1/2 Litro de ceviche atún",
    "precio": 180.0,
    "detalle": null,
    "categoria": "litros",
    "orden": 9
  },
  {
    "nombre": "Refresco",
    "precio": 35.0,
    "detalle": null,
    "categoria": "bebidas",
    "orden": 0
  },
  {
    "nombre": "Peke",
    "precio": 25.0,
    "detalle": null,
    "categoria": "bebidas",
    "orden": 1
  },
  {
    "nombre": "Boing",
    "precio": 25.0,
    "detalle": null,
    "categoria": "bebidas",
    "orden": 2
  },
  {
    "nombre": "Agua natural",
    "precio": 25.0,
    "detalle": null,
    "categoria": "bebidas",
    "orden": 3
  },
  {
    "nombre": "Agua de temporada litro",
    "precio": 35.0,
    "detalle": null,
    "categoria": "bebidas",
    "orden": 4
  },
  {
    "nombre": "Agua de temporada 1/2 litro",
    "precio": 25.0,
    "detalle": null,
    "categoria": "bebidas",
    "orden": 5
  },
  {
    "nombre": "Corona",
    "precio": 45.0,
    "detalle": null,
    "categoria": "bebidas",
    "orden": 6
  },
  {
    "nombre": "Victoria",
    "precio": 45.0,
    "detalle": null,
    "categoria": "bebidas",
    "orden": 7
  },
  {
    "nombre": "Modelo Zero",
    "precio": 45.0,
    "detalle": null,
    "categoria": "bebidas",
    "orden": 8
  },
  {
    "nombre": "Ballenita Pacifico",
    "precio": 100.0,
    "detalle": null,
    "categoria": "bebidas",
    "orden": 9
  },
  {
    "nombre": "Vaso Michelado",
    "precio": 30.0,
    "detalle": null,
    "categoria": "bebidas",
    "orden": 10
  },
  {
    "nombre": "Vaso Gringo",
    "precio": 35.0,
    "detalle": null,
    "categoria": "bebidas",
    "orden": 11
  },
  {
    "nombre": "Vaso Chelado",
    "precio": 25.0,
    "detalle": null,
    "categoria": "bebidas",
    "orden": 12
  },
  {
    "nombre": "Vaso Cielo rojo (limón y clamato)",
    "precio": 35.0,
    "detalle": null,
    "categoria": "bebidas",
    "orden": 13
  },
  {
    "nombre": "Vaso Cubano (limón, petroléo, jugo de tomate))",
    "precio": 25.0,
    "detalle": null,
    "categoria": "bebidas",
    "orden": 14
  },
  {
    "nombre": "Redbull",
    "precio": 70.0,
    "detalle": null,
    "categoria": "bebidas",
    "orden": 15
  },
  {
    "nombre": "Arizona",
    "precio": 35.0,
    "detalle": null,
    "categoria": "bebidas",
    "orden": 16
  },
  {
    "nombre": "Fuz tea",
    "precio": 35.0,
    "detalle": null,
    "categoria": "bebidas",
    "orden": 17
  },
  {
    "nombre": "Jose Jose",
    "precio": 90.0,
    "detalle": null,
    "categoria": "bebidas",
    "orden": 18
  },
  {
    "nombre": "Bebida mineralizada",
    "precio": null,
    "detalle": null,
    "opciones": [
      {
        "nombre": "🍋 Rusa",
        "precio": 55.0
      },
      {
        "nombre": "🍋 Limonada",
        "precio": 55.0
      },
      {
        "nombre": "🍊 Naranjada",
        "precio": 55.0
      },
      {
        "nombre": "🍍 Piñada",
        "precio": 55.0
      },
      {
        "nombre": "🍓 Fresada",
        "precio": 55.0
      }
    ],
    "categoria": "bebidas",
    "orden": 19
  }
];
