ALTER TABLE city CONVERT TO CHARACTER SET utf8 COLLATE utf8_unicode_ci;
ALTER TABLE area CONVERT TO CHARACTER SET utf8 COLLATE utf8_unicode_ci;
ALTER TABLE alert CONVERT TO CHARACTER SET utf8 COLLATE utf8_unicode_ci;
ALTER TABLE alerts CONVERT TO CHARACTER SET utf8 COLLATE utf8_unicode_ci;
ALTER TABLE mosquito CONVERT TO CHARACTER SET utf8 COLLATE utf8_unicode_ci;
ALTER TABLE alert MODIFY description LONGTEXT;

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(1,45.7742,19.1122);
INSERT INTO area(name_area, id_coord, key_area) VALUE('Zapadnobački okrug',1,301401);
INSERT INTO city(id_city, name_city, id_coord) VALUE(3190342,'Sombor',1);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(2,44.2751,19.8982);
INSERT INTO area(name_area, id_coord, key_area) VALUE('Kolubarski okrug',2,298665);
INSERT INTO city(id_city, name_city, id_coord) VALUE(3188402,'Valjevo',2);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(3,44.7467,19.69);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Mačvanski okrug',3,299278);
INSERT INTO city(id_city, name_city, id_coord) VALUE(3191376,'Šabac',3);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(4,43.8914,20.3497);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Moravički okrug',4,299491);
INSERT INTO city(id_city, name_city, id_coord) VALUE(792078,'Čačak',4);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(5,43.9814,21.2622);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Pomoravski okrug',5,300195);
INSERT INTO city(id_city, name_city, id_coord) VALUE(789923,'Jagodina',5);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(6,43.58,21.3339);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Rasinski okrug',6,300334);
INSERT INTO city(id_city, name_city, id_coord) VALUE(788975,'Kruševac',6);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(7,43.7258,20.6894);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Raški okrug',7,300366);
INSERT INTO city(id_city, name_city, id_coord) VALUE(789107,'Kraljevo',7);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(8,44.0167,20.9167);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Šumadijski okrug',8,301638);
INSERT INTO city(id_city, name_city, id_coord) VALUE(789128,'Kragujevac',8);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(9,43.8586,19.8488);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Zlatiborski okrug',9,301537);
INSERT INTO city(id_city, name_city, id_coord) VALUE(3188434,'Užice',9);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(10,56.3567,44.0669);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Borski okrug',10,1568927);
INSERT INTO city(id_city, name_city, id_coord) VALUE(572665,'Bor',10);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(11,44.6153,21.1825);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Braničevski okrug',11,297305);
INSERT INTO city(id_city, name_city, id_coord) VALUE(786827,'Požarevac',11);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(12,42.9981,21.9461);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Jablanički okrug',12,298334);
INSERT INTO city(id_city, name_city, id_coord) VALUE(788709,'Leskovac',12);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(13,43.3247,21.9033);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Nišavski okrug',13,299758);
INSERT INTO city(id_city, name_city, id_coord) VALUE(787657,'Niš',13);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(14,42.5514,21.9003);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Pčinjski okrug',14,300091);
INSERT INTO city(id_city, name_city, id_coord) VALUE(784227,'Vranje',14);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(15,43.1531,22.5861);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Pirotski okrug',15,300150);
INSERT INTO city(id_city, name_city, id_coord) VALUE(787050,'Pirot',15);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(16,44.6628,20.93);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Podunavski okrug',16,300176);
INSERT INTO city(id_city, name_city, id_coord) VALUE(785756,'Smederevo',16);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(17,43.2342,21.5881);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Toplički okrug',17,300891);
INSERT INTO city(id_city, name_city, id_coord) VALUE(786690,'Prokuplje',17);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(18,43.9036,22.2641);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Zaječarski okrug',18,301375);
INSERT INTO city(id_city, name_city, id_coord) VALUE(784024,'Zaječar',18);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(19,45.3836,20.3819);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Srednjobanatski okrug',19,300671);
INSERT INTO city(id_city, name_city, id_coord) VALUE(783814,'Zrenjanin',19);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(20,46.1,19.6667);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Severnobački okrug',20,300463);
INSERT INTO city(id_city, name_city, id_coord) VALUE(3189595,'Subotica',20);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(21,45.8297,20.4653);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Severnobanatski okrug',21,300467);
INSERT INTO city(id_city, name_city, id_coord) VALUE(789518,'Kikinda',21);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(22,45.2517,19.8369);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Južnobački okrug',22,298486);
INSERT INTO city(id_city, name_city, id_coord) VALUE(3194360,'Novi Sad',22);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(23,44.8708,20.6403);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Južnobanatski okrug',23,298539);
INSERT INTO city(id_city, name_city, id_coord) VALUE(787237,'Pančevo',23);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(24,44.9764,19.6122);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Sremski okrug',24,300675);
INSERT INTO city(id_city, name_city, id_coord) VALUE(3190103,'Sremska Mitrovica',24);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(25,42.6727,21.1669);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Kosovo',25,298740);
INSERT INTO city(id_city, name_city, id_coord) VALUE(786714,'Priština',25);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(26,42.4604,21.4699);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Kosovsko-Pomoravski okrug',26,298781);
INSERT INTO city(id_city, name_city, id_coord) VALUE(790674,'Gnjilane',26);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(27,42.8833,20.8667);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Kosovskomitrovički okrug',27,298767);
INSERT INTO city(id_city, name_city, id_coord) VALUE(789225,'Kosovska Mitrovica',27);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(28,42.6591,20.2883);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Pećki okrug',28,300125);
INSERT INTO city(id_city, name_city, id_coord) VALUE(787157,'Peć',28);

INSERT INTO coordination(id_coord, lat_coord, lon_coord) VALUE(29,42.2139,20.7397);
INSERT INTO area(name_area, id_coord,key_area) VALUE('Prizrenski okrug',29,300299);
INSERT INTO city(id_city, name_city, id_coord) VALUE(786712,'Prizren',29);