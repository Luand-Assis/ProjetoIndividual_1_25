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

create table TB_Partidas (
idPartida int auto_increment,
idUsuario int,
	constraint fkPartidaUsuario
		foreign key (idUsuario) references TB_Usuarios(idUsuario),
    constraint pkPartidaUsuario
		primary key (idPartida, idUsuario),
qtd_erros int not null,
tempo_segundos int not null
);

create table TB_Conquistas (
idConquista int primary key auto_increment,
nomeConquista varchar(45) not null unique,
descricao varchar(255) not null
);

create table TB_UsuarioConquista (
idConquista int,
idUsuario int,
	constraint fkConquista foreign key (idConquista) references TB_Conquistas(idConquista),
    constraint fkUsuario foreign key (idUsuario) references TB_Usuarios(idUsuario),
    primary key (idConquista, idUsuario),
dataHora datetime default current_timestamp
);

insert into TB_Conquistas values
	(default, 'Primeira Vitória', 'Concluiu o Memory Card Game do Club Penguin.'),
	(default, 'Memória Perfeita', 'Concluiu o Memory Card Game sem erros.'),
	(default, 'Rápido como um Pinguim', 'Concluiu o Memory Card Game em menos de 15 segundos.');