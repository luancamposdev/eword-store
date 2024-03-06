CREATE DATABASE `gomicroservice`;

use `gomicroservice`; 

CREATE TABLE categories (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `gomicroservice`.`categories` (`id`,`name`) VALUES ("5fb17cf5-9770-452b-813e-03cc550adfd6", "Informática");
INSERT INTO `gomicroservice`.`categories` (`id`,`name`) VALUES ("a3297f75-ff47-43d7-9560-0247417e6836", "Eletrodomésticos");
INSERT INTO `gomicroservice`.`categories` (`id`,`name`) VALUES ("e98f4062-ddef-43f9-9a4c-77cc26e707b9", "Moda");

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

INSERT INTO `gomicroservice`.`products` (`id`,`name`,`description`,`price`,`category_id`,`image_url`)
VALUES ("f9da45af-1d20-4ca7-a1b8-654cb4766295", "Ténis Nike Winflo 10 Masculino", "uma passada equilibrada para ajudar a impulsionar sua corrida.", 349, "e98f4062-ddef-43f9-9a4c-77cc26e707b9", "https://http2.mlstatic.com/D_NQ_NP_880233-MLB70537747403_072023-O.webp"),
("69db38e1-47a7-4408-a3de-da92b5acfb8d", "Moletom Liso Algodão Unissex Blusa De Frio Canguru Flanelado", "conforto e qualidade do moletom para completar seu visual.", 55, "e98f4062-ddef-43f9-9a4c-77cc26e707b9", "https://http2.mlstatic.com/D_NQ_NP_695430-MLB51733797742_092022-O.webp"),
("71f960aa-9b8b-4ce8-bcfc-66fff4e59b10", "Top Cropped Feminino Em Moletom Alfaiatado Hering", "Top cropped feminino em moletom alfaiatado.", 42, "e98f4062-ddef-43f9-9a4c-77cc26e707b9", "https://http2.mlstatic.com/D_NQ_NP_887526-MLB73183585847_112023-O.webp"),
("1d6971d1-b3ae-4838-adc8-e743d7e3568c", "Robô Aspirador Wap Robot W90 3 Modos De Limpeza Fw009026", "Sua autonomia de 1h40 de duração é perfeita.", 349, "a3297f75-ff47-43d7-9560-0247417e6836", "https://http2.mlstatic.com/D_NQ_NP_675963-MLA52109443628_102022-O.webp"),
("05bdc1c0-e7fc-40ee-a8ce-5f329b2e13b2", "Ventilador De Coluna Chão Ajustável Silencioso Eco Dormir", "Verifique a voltagem que você vai usar no momento da compra.", 194, "a3297f75-ff47-43d7-9560-0247417e6836", "https://http2.mlstatic.com/D_NQ_NP_844481-MLB73797735005_012024-O.webp"),
("8fd59103-8716-44bd-bc49-1d04f3f8f1ec", "Fritadeira Elétrica sem Óleo Air Fryer Mondial AF-34 3,2L 1270W Preta -220v", "Após o tempo pré-definido no Timer, há um aviso sonoro.", 329, "a3297f75-ff47-43d7-9560-0247417e6836", "https://images-americanas.b2w.io/produtos/01/00/img3/15207371/9/1520737145_1SZ.jpg"),
("c8bf8d6d-c810-465c-b2dd-1906485d9beb", "Fritadeira Air Fryer Oster OFRT520 4,6L Preto - 110v", "Chegou a hora de facilitar a sua rotina de preparo das refeições com Fritadeira", 389, "a3297f75-ff47-43d7-9560-0247417e6836", "https://images-americanas.b2w.io/produtos/01/00/img/70466090/9/7046609057_1SZ.jpg"),
("2541be93-0032-460d-9e4d-ae876e70cd91", "Computador Completo Intel Core i5 16GB ssd 256GB Monitor 19", "A Amazing pc é um selo de qualidade", 1365, "5fb17cf5-9770-452b-813e-03cc550adfd6", "https://images-americanas.b2w.io/produtos/6605529134/imagens/computador-completo-intel-core-i5-16gb-ssd-256gb-monitor-19-4-nucleos-super-turbo-pc-hdmi-teclado-e-mouse-strong-tech/6605529134_1_xlarge.jpg"),
("97f9dd95-82d9-4999-b5da-9c32c5015c06", "Pc Gamer Completo Hércules Intel i3 3º Ger. gt 730 4GB 8GB HD 500GB Wi-fi", "Pc Gamer Completo Hércules Intel i3-3220 - gt 730 4GB ", 2355, "5fb17cf5-9770-452b-813e-03cc550adfd6", "https://images-americanas.b2w.io/produtos/2839441717/imagens/pc-gamer-completo-hercules-intel-i3-3-ger-gt-730-4gb-8gb-hd-500gb-wi-fi/2839441717_1_xlarge.jpg"),
("fd7d7456-7209-4183-8ebd-25bce0899dc1", "Pc Gamer Chrono I5 3470 16Gb Hd 1Tb Gt740", "A linha de pc Gamer é ideal para quem busca desempenho.", 2357, "5fb17cf5-9770-452b-813e-03cc550adfd6", "https://images-americanas.b2w.io/produtos/3279667274/imagens/pc-gamer-chrono-i5-3470-16gb-hd-1tb-gt740/3279667274_1_xlarge.jpg"),
("6f5a77e3-3157-49c2-aaef-b49bf00ddc50", "TECLADO MECANICO GAMER MANCER SHADE MK2", "O teclado Mancer Shade MK2 é o item indispensável para sua próxima batalha!.", 134, "5fb17cf5-9770-452b-813e-03cc550adfd6", "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-shm2-rbw01bw2.jpg"),
("413af155-fe20-499a-8184-4c2e00548d7d", "PROCESSADOR AMD RYZEN 5 4600G, 6-CORE, 12-THREADS, 3.7GHZ", "PROCESSADOR AMD RYZEN 5 4600G, 6-CORE, 12-THREADS, 3.7GHZ (4.2GHZ TURBO), CACHE 11MB, AM4, 100-100000147BOX", 628, "5fb17cf5-9770-452b-813e-03cc550adfd6", "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/0/100-100000147box1.jpg"),
("95dcf478-cf68-48fd-9e09-8f7c1c8539e9", "PLACA MAE BIOSTAR B450MHP, DDR4, SOCKET AM4", "BIOSTAR B450MHP AMD B450 é o chipset de ponta para overclockers", 329, "5fb17cf5-9770-452b-813e-03cc550adfd6", "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/4/b450mhp1.jpg"),
("85be7cfd-712f-4b73-a594-d0e779a252fe", "SSD MANCER REAPER S, 480GB, 2.5, SATA III 6GB/S", "SSD MANCER REAPER S, 480GB, 2.5, SATA III 6GB/S, LEITURA 550 MB/S, GRAVACAO 490 MB/S, MCR-RPRS-480", 175, "5fb17cf5-9770-452b-813e-03cc550adfd6", "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-rprs-4804.jpg"),
("a26cfe4d-6459-4775-b810-edcbda8d2055", "MEMORIA MANCER DANTALION Z, 8GB", "MEMORIA MANCER DANTALION Z, 8GB (1X8GB), DDR4, 3200MHZ.", 118, "5fb17cf5-9770-452b-813e-03cc550adfd6", "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-dtlz-8gb.jpg");