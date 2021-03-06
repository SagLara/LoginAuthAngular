
--- Insercion de datos de tabla CLIENTE

INSERT INTO `shop`.`cliente`(`DOCUMENTO`,`TIPO_DOC`,`NOMBRES`,`APELLIDOS`)
VALUES (1023975000,'C.C','Sergio Alejandro','Gomez Lara');

INSERT INTO `shop`.`cliente`(`DOCUMENTO`,`TIPO_DOC`,`NOMBRES`,`APELLIDOS`)
VALUES (1023976000,'C.E','Andres Felipe','Torres Perez');

INSERT INTO `shop`.`cliente`(`DOCUMENTO`,`TIPO_DOC`,`NOMBRES`,`APELLIDOS`)
VALUES (1023977000,'C.C','Ana','Marquez Marquez');

INSERT INTO `shop`.`cliente`(`DOCUMENTO`,`TIPO_DOC`,`NOMBRES`,`APELLIDOS`)
VALUES (1023978000,'C.C','Juan Sebastian','Rojas Rodriguez');

INSERT INTO `shop`.`cliente`(`DOCUMENTO`,`TIPO_DOC`,`NOMBRES`,`APELLIDOS`)
VALUES (1023979000,'C.E','Cristina','Avila Cruz');

INSERT INTO `shop`.`cliente`(`DOCUMENTO`,`TIPO_DOC`,`NOMBRES`,`APELLIDOS`)
VALUES (1023980000,'C.C','Brayan','Castillo Rodriguez');

INSERT INTO `shop`.`cliente`(`DOCUMENTO`,`TIPO_DOC`,`NOMBRES`,`APELLIDOS`)
VALUES (1023981000,'T.I','David Alejandro','Jimenez Quintero');

INSERT INTO `shop`.`cliente`(`DOCUMENTO`,`TIPO_DOC`,`NOMBRES`,`APELLIDOS`)
VALUES (1023982000,'T.I','Maria Jose','Quiroga Romero');


--- Insercion de datos de tabla UBICACION

INSERT INTO `shop`.`ubicacion`(`ID_CLIENTE`,`CIUDAD`,`LATITUD`,`LONGITUD`)
VALUES (1,'Bogotá',4.576063012590416,-74.09140685121011);

INSERT INTO `shop`.`ubicacion`(`ID_CLIENTE`,`CIUDAD`,`LATITUD`,`LONGITUD`)
VALUES (2,'Bogotá',4.569690059451008,-74.09306152018895);

INSERT INTO `shop`.`ubicacion`(`ID_CLIENTE`,`CIUDAD`,`LATITUD`,`LONGITUD`)
VALUES (3,'Bogotá',4.58264009372853,-74.10525904696654);

INSERT INTO `shop`.`ubicacion`(`ID_CLIENTE`,`CIUDAD`,`LATITUD`,`LONGITUD`)
VALUES (4,'Medellin',6.243686892081431,-75.59228705763418);

INSERT INTO `shop`.`ubicacion`(`ID_CLIENTE`,`CIUDAD`,`LATITUD`,`LONGITUD`)
VALUES (5,'Medellin',6.244028178239396,-75.60481833752698);

INSERT INTO `shop`.`ubicacion`(`ID_CLIENTE`,`CIUDAD`,`LATITUD`,`LONGITUD`)
VALUES (6,'Cali',3.4049931101833733,-76.53520487539897);

INSERT INTO `shop`.`ubicacion`(`ID_CLIENTE`,`CIUDAD`,`LATITUD`,`LONGITUD`)
VALUES (7,'Cali',3.405935580549266,-76.55099772129127);

INSERT INTO `shop`.`ubicacion`(`ID_CLIENTE`,`CIUDAD`,`LATITUD`,`LONGITUD`)
VALUES (8,'Bogotá',4.5709850734171225,-74.10211944687883);



--- Insercion de datos de tabla PRODUCTO

INSERT INTO `shop`.`producto`(`NOMBRE`,`PRECIO`,`STOCK`)
VALUES ('Televisor 4k 50p',1800000,10);

INSERT INTO `shop`.`producto`(`NOMBRE`,`PRECIO`,`STOCK`)
VALUES ('Celular Xiaomi 9 ',800000,6);

INSERT INTO `shop`.`producto`(`NOMBRE`,`PRECIO`,`STOCK`)
VALUES ('Lavadora Whirpool',2800000,4);

INSERT INTO `shop`.`producto`(`NOMBRE`,`PRECIO`,`STOCK`)
VALUES ('Teclado Mecanico',180000,12);

INSERT INTO `shop`.`producto`(`NOMBRE`,`PRECIO`,`STOCK`)
VALUES ('Tennis Nike Originales T-39',380000,18);

INSERT INTO `shop`.`producto`(`NOMBRE`,`PRECIO`,`STOCK`)
VALUES ('Mueble Televisor Hogar',550000,2);

INSERT INTO `shop`.`producto`(`NOMBRE`,`PRECIO`,`STOCK`)
VALUES ('Balon de Futbol Mundial de Rusia',100000,24);

INSERT INTO `shop`.`producto`(`NOMBRE`,`PRECIO`,`STOCK`)
VALUES ('Figura collecionable MaxSteel',50000,0);


--- Insercion de datos de tabla INFORME

INSERT INTO `shop`.`informe`(`FECHA`,`CANT_VENTAS`,`VENTA_MAYOR`,`VENTA_MENOR`,`VENTA_PROMEDIO`)
VALUES ('2021-05-01',2,3200000,2160000,2680000);

INSERT INTO `shop`.`informe`(`FECHA`,`CANT_VENTAS`,`VENTA_MAYOR`,`VENTA_MENOR`,`VENTA_PROMEDIO`)
VALUES ('2021-05-10',1,2200000,2200000,2200000);

INSERT INTO `shop`.`informe`(`FECHA`,`CANT_VENTAS`,`VENTA_MAYOR`,`VENTA_MENOR`,`VENTA_PROMEDIO`)
VALUES ('2021-05-13',1,1700000,1700000,1700000);

--- Insercion de datos de tabla REGISTRO VENTA

INSERT INTO `shop`.`registro_venta`(`FECHA`,`ID_CLIENTE`,`VALOR_TOTAL_VENTA`,`ID_INFORME`)
VALUES ('2021-05-01 12:15:10',1,2160000,1);

INSERT INTO `shop`.`registro_venta`(`FECHA`,`ID_CLIENTE`,`VALOR_TOTAL_VENTA`,`ID_INFORME`)
VALUES ('2021-05-01 17:30:00',4,3200000,1);

INSERT INTO `shop`.`registro_venta`(`FECHA`,`ID_CLIENTE`,`VALOR_TOTAL_VENTA`,`ID_INFORME`)
VALUES ('2021-05-10 18:15:36',6,2200000,2);

INSERT INTO `shop`.`registro_venta`(`FECHA`,`ID_CLIENTE`,`VALOR_TOTAL_VENTA`,`ID_INFORME`)
VALUES ('2021-05-13 10:15:15',1,1700000,3);

--- Insercion de datos de tabla DETALLE VENTA

INSERT INTO `shop`.`detalle_venta`(`ID_REGISTRO`,`ID_PRODUCTO`,`CANTIDAD`,`VALOR_X_CANT`)
VALUES (1,1,1,1800000);

INSERT INTO `shop`.`detalle_venta`(`ID_REGISTRO`,`ID_PRODUCTO`,`CANTIDAD`,`VALOR_X_CANT`)
VALUES (1,4,2,360000);

INSERT INTO `shop`.`detalle_venta`(`ID_REGISTRO`,`ID_PRODUCTO`,`CANTIDAD`,`VALOR_X_CANT`)
VALUES (2,3,1,2800000.00);

INSERT INTO `shop`.`detalle_venta`(`ID_REGISTRO`,`ID_PRODUCTO`,`CANTIDAD`,`VALOR_X_CANT`)
VALUES (2,7,4,400000);

INSERT INTO `shop`.`detalle_venta`(`ID_REGISTRO`,`ID_PRODUCTO`,`CANTIDAD`,`VALOR_X_CANT`)
VALUES (3,6,4,2200000);

INSERT INTO `shop`.`detalle_venta`(`ID_REGISTRO`,`ID_PRODUCTO`,`CANTIDAD`,`VALOR_X_CANT`)
VALUES (4,2,2,1600000);

INSERT INTO `shop`.`detalle_venta`(`ID_REGISTRO`,`ID_PRODUCTO`,`CANTIDAD`,`VALOR_X_CANT`)
VALUES (4,8,2,100000);


--- Insercion de datos de tabla USUARIO

INSERT INTO `shop`.`usuario`(`NOMBRE_USUARIO`,`PASSWORD`,`ID_ROL`)
VALUES ('alejo','1234','user');

INSERT INTO `shop`.`usuario`(`NOMBRE_USUARIO`,`PASSWORD`,`ID_ROL`)
VALUES ('sergio','admin123','admin');

