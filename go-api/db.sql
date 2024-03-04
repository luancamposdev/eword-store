CREATE DATABASE `gomicroservice`

use `gomicroservice`; 

CREATE TABLE categories (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `gomicroservice`.`categories` (`id`, `name`) VALUES ("5fb17cf5-9770-452b-813e-03cc550adfd6", "Informática")
INSERT INTO `gomicroservice`.`categories` (`id`, `name`) VALUES ("a3297f75-ff47-43d7-9560-0247417e6836", "Eletrodomésticos")
INSERT INTO `gomicroservice`.`categories` (`id`, `name`) VALUES ("e98f4062-ddef-43f9-9a4c-77cc26e707b9", "Moda")

CREATE TABLE products (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `category_id` varchar(36) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_categories_idx` (`category_id`)
);

INSERT INTO `gomicroservice`.`categories` (`id`, `name`, `description`, `price`, `category_id`, `image_url`) 
  VALUES ("f9da45af-1d20-4ca7-a1b8-654cb4766295", "Ténis Nike Winflo 10 Masculino", "Vá com o Winflo 10, uma passada equilibrada para ajudar a impulsionar sua corrida, seja você uma criatura de hábito registrando sua quilometragem semanal, um novato esperando transformar a intriga em rotina ou apenas se juntando a um amigo para uma corrida aleatória no fim de semana.", 349.99, "e98f4062-ddef-43f9-9a4c-77cc26e707b9", "https://http2.mlstatic.com/D_NQ_NP_880233-MLB70537747403_072023-O.webp")
INSERT INTO `gomicroservice`.`categories` (`id`, `name`, `description`, `price`, `category_id`, `image_url`) 
  VALUES ("69db38e1-47a7-4408-a3de-da92b5acfb8d", "Moletom Liso Algodão Unissex Blusa De Frio Canguru Flanelado", "Aposte no conforto e qualidade do moletom para completar seu visual nos dias mais frios.", 55.92, "e98f4062-ddef-43f9-9a4c-77cc26e707b9", "https://http2.mlstatic.com/D_NQ_NP_695430-MLB51733797742_092022-O.webp")
INSERT INTO `gomicroservice`.`categories` (`id`, `name`, `description`, `price`, `category_id`, `image_url`) 
  VALUES ("71f960aa-9b8b-4ce8-bcfc-66fff4e59b10", "Top Cropped Feminino Em Moletom Alfaiatado Hering", "Top cropped feminino em moletom alfaiatado, a combinação perfeita de conforto e elegância consciente.", 42.99, "e98f4062-ddef-43f9-9a4c-77cc26e707b9", "https://http2.mlstatic.com/D_NQ_NP_887526-MLB73183585847_112023-O.webp")

INSERT INTO `gomicroservice`.`categories` (`id`, `name`, `description`, `price`, `category_id`, `image_url`) 
  VALUES ("1d6971d1-b3ae-4838-adc8-e743d7e3568c", "Robô Aspirador Wap Robot W90 3 Modos De Limpeza Fw009026", "Sua autonomia de 1h40 de duração é perfeita para limpar todos os cantos da sua casa. Com seu sistema antiqueda, o W90 é perfeito para trabalhar sozinho, além de ser super fácil de usar, basta um clique para iniciar a limpeza.", 349, "a3297f75-ff47-43d7-9560-0247417e6836", "https://http2.mlstatic.com/D_NQ_NP_675963-MLA52109443628_102022-O.webp")
INSERT INTO `gomicroservice`.`categories` (`id`, `name`, `description`, `price`, `category_id`, `image_url`) 
  VALUES ("05bdc1c0-e7fc-40ee-a8ce-5f329b2e13b2", "Ventilador De Coluna Chão Ajustável Silencioso Eco Dormir", "Verifique a voltagem que você vai usar no momento da compra. Escolha entre 110v ou 220v, o modelo NÃO é bivolt.", 194.75, "a3297f75-ff47-43d7-9560-0247417e6836", "https://http2.mlstatic.com/D_NQ_NP_844481-MLB73797735005_012024-O.webp")