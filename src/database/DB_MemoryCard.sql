create database DB_MemoryCard;
use DB_MemoryCard;

create table TB_Usuarios (
idUsuario int primary key auto_increment,
nickname varchar(12) not null unique,
corPinguim tinyint not null,
email varchar(45) not null unique,
	constraint chkEmail check(email like '%@%'),
senha varchar(45) not null
);
select * from TB_Usuarios;

create table TB_Partidas (
idPartida int auto_increment,
idUsuario int,
	constraint fkPartidaUsuario
		foreign key (idUsuario) references TB_Usuarios(idUsuario),
    constraint pkPartidaUsuario
		primary key (idPartida, idUsuario),
qtd_erros int,
tempo_inicio datetime default current_timestamp not null,
tempo_final datetime
);

create table TB_Estatisticas (
idEstatistica int auto_increment,
idUsuario int,
	constraint fkEstatisticaUsuario
		foreign key (idUsuario) references TB_Usuarios(idUsuario),
    constraint pkEstatisticaUsuario
		primary key (idEstatistica, idUsuario),
media_tempo int not null,
media_erros int not null,
qtd_partidas int not null
);
