CREATE database todoList

CREATE TABLE `todolist`.`todos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(150) NULL,
  `checked` INT NULL,
  PRIMARY KEY (`id`));
