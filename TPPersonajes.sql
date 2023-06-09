USE [master]
GO
/****** Object:  Database [TPPersonajes]    Script Date: 16/6/2023 10:07:52 ******/
CREATE DATABASE [TPPersonajes]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'TPPersonajes', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\TPPersonajes.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'TPPersonajes_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\TPPersonajes_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [TPPersonajes] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [TPPersonajes].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [TPPersonajes] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [TPPersonajes] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [TPPersonajes] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [TPPersonajes] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [TPPersonajes] SET ARITHABORT OFF 
GO
ALTER DATABASE [TPPersonajes] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [TPPersonajes] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [TPPersonajes] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [TPPersonajes] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [TPPersonajes] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [TPPersonajes] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [TPPersonajes] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [TPPersonajes] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [TPPersonajes] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [TPPersonajes] SET  DISABLE_BROKER 
GO
ALTER DATABASE [TPPersonajes] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [TPPersonajes] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [TPPersonajes] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [TPPersonajes] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [TPPersonajes] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [TPPersonajes] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [TPPersonajes] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [TPPersonajes] SET RECOVERY FULL 
GO
ALTER DATABASE [TPPersonajes] SET  MULTI_USER 
GO
ALTER DATABASE [TPPersonajes] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [TPPersonajes] SET DB_CHAINING OFF 
GO
ALTER DATABASE [TPPersonajes] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [TPPersonajes] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [TPPersonajes] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'TPPersonajes', N'ON'
GO
ALTER DATABASE [TPPersonajes] SET QUERY_STORE = OFF
GO
USE [TPPersonajes]
GO
/****** Object:  User [alumno]    Script Date: 16/6/2023 10:07:53 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Pelicula]    Script Date: 16/6/2023 10:07:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pelicula](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Imagen] [varchar](max) NOT NULL,
	[Titulo] [varchar](50) NOT NULL,
	[FechaCreacion] [varchar](50) NOT NULL,
	[Calificacion] [int] NOT NULL,
 CONSTRAINT [PK_Pelicula] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personaje]    Script Date: 16/6/2023 10:07:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personaje](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Imagen] [varchar](1000) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Edad] [int] NOT NULL,
	[Peso] [int] NOT NULL,
	[Historia] [varchar](max) NOT NULL,
 CONSTRAINT [PK_Personaje] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PersonajesAsociados]    Script Date: 16/6/2023 10:07:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonajesAsociados](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FkPersonajes] [int] NOT NULL,
	[FkPeliculas] [int] NOT NULL,
 CONSTRAINT [PK_PersonajesAsociados] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Pelicula] ON 

INSERT [dbo].[Pelicula] ([Id], [Imagen], [Titulo], [FechaCreacion], [Calificacion]) VALUES (1, N'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/244BCFF23678684B22122032D900DFB12177C73DBAC8990CA45196B390967635/scale?width=506&aspectRatio=2.00&format=jpeg', N'Cars', N'2006/04/14', 4)
INSERT [dbo].[Pelicula] ([Id], [Imagen], [Titulo], [FechaCreacion], [Calificacion]) VALUES (2, N'https://pics.filmaffinity.com/Shrek-903764423-large.jpg', N'Shrek', N'2010/06/07', 5)
INSERT [dbo].[Pelicula] ([Id], [Imagen], [Titulo], [FechaCreacion], [Calificacion]) VALUES (4, N'https://i.pinimg.com/564x/5e/01/93/5e0193d6e3a04d11c7b6c22ed3900326--vin-diesel-movieposter.jpg', N'Rapidos y furiosos 4', N'2005/10/04', 4)
INSERT [dbo].[Pelicula] ([Id], [Imagen], [Titulo], [FechaCreacion], [Calificacion]) VALUES (6, N'https://peru21.pe/resizer/gkgSpCVgtgdePEX-6-NT1mh6UhQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/SMIRFF4ESBAGLHXKFYF3KTLRLU.jpg', N'Rapidos y furiosos 5', N'2011/09/07', 2)
INSERT [dbo].[Pelicula] ([Id], [Imagen], [Titulo], [FechaCreacion], [Calificacion]) VALUES (7, N'https://i.blogs.es/7cd5d3/iron-man/450_1000.jpeg', N'Iron Man', N'2006/10/31', 5)
INSERT [dbo].[Pelicula] ([Id], [Imagen], [Titulo], [FechaCreacion], [Calificacion]) VALUES (10, N'https://i.blogs.es/7cd5d3/iron-man/450_1000.jpeg', N'Iron man 2', N'2006/10/31', 4)
INSERT [dbo].[Pelicula] ([Id], [Imagen], [Titulo], [FechaCreacion], [Calificacion]) VALUES (11, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVMYPmGMNwSYd6M_N2wkLpVW1n8MaMslPQw&usqp=CAU', N'Legally Blonde', N'1990/06/09', 5)
INSERT [dbo].[Pelicula] ([Id], [Imagen], [Titulo], [FechaCreacion], [Calificacion]) VALUES (15, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0qOK-v12_3fuiUJBq8ZA_9GLmcMkXdiruQ&usqp=CAU', N'Grandes Heroes', N'01/06/2014', 3)
SET IDENTITY_INSERT [dbo].[Pelicula] OFF
GO
SET IDENTITY_INSERT [dbo].[Personaje] ON 

INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (1, N'https://elcomercio.pe/resizer/4nstuxvcQ_QZdKUBeqJmd2PQJL8=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/E2KQR45FV5GYBKP2OU3JFMP2G4.jpg', N'Burro', 50, 400, N'es un burro que habla')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (4, N'https://elcomercio.pe/resizer/KzChmYDnYa5P9_SxCPGQYBOkBVk=/1200x900/smart/filters:format(jpeg):quality(75)/dvgnzpfv30f28.cloudfront.net/06-14-2020/t_ada45e8190314c0794887d0fa4586c2f_name_MAG_DOM.jpg', N'Dominic Toretto', 50, 120, N'Es un personaje humano y grodo')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (6, N'https://lamenteesmaravillosa.com/wp-content/uploads/2018/05/princesa-fiona.jpg', N'Fiona', 20, 250, N'Era una princesa y ya no.')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (7, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdqnPiddXRNb4diWx57T1hBrVDdTaiMph4HMMyG0bEjl2Dgw7loDrYIUnU5qsp19EZ8uA&usqp=CAU', N'Sally', 35, 100000, N'es un auto mujer que tiene voz')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (9, N'https://i.pinimg.com/736x/4f/25/76/4f257634e245635d29f95e71569d3a78--planes.jpg', N'Finn McMissile', 35, 1000, N'Es un auto atractivo espia')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (10, N'https://depor.com/resizer/1UihI8WGzKmx3JYzeiHcJhBgT6s=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/UC2UGFKULJBJZLO46EYHX5FYKI.jpg', N'groot', 15, 15, N'Es un arbol que solo dice "I am groot"')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (12, N'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/80C64C0B63382CD3ED2653356125F275F63D036028A77D38DC3286AD851A6833/scale?width=1200&aspectRatio=1.78&format=jpeg', N'Tony Stark', 43, 80, N'Es un hombre que quiere ser super heroe y se ahce un supertraje de hierro')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (14, N'https://i.ytimg.com/vi/nFi6e6Rs2so/maxresdefault.jpg', N'Jarvis', 1, 2000, N'FELIZ CUMPLEAÑOS JARVIS! es una inteligencia artificial, like chatgpt, that is really gooddddddd and beter')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (15, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmvZyJY_3CdtCTb0jNLhV2RKByaJ4FytdDXQ&usqp=CAU', N'
Baymax', 12, 2, N'es un robot inflable gordo y blanco')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (17, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-b8-Z2MK2Qhzv8bX-yP362aWQ9rMJNDQnQ&usqp=CAU', N'Hiro Hamada', 17, 200, N'Es un hermano joven')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (18, N'https://i.pinimg.com/originals/ef/ba/9f/efba9fe7e6c550b495087068b0fc4b8b.jpg', N'Honey Lemon', 17, 50, N'Es una mujer amiga de Hiro')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (19, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNXNIoF0RYvvq7LFj-6f8XDktW-AP_byqL9eDvgr_PhLIH-ggB17-wcR5R6Nw_aFlIAc&usqp=CAU', N'
Reese Witherspoon', 44, 60, N'es una chica boba que aprende abogacia por un chico. Es una historia de amor!!')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (21, N'https://i.ebayimg.com/images/g/0B8AAOSwlyJkQY1y/s-l1600.jpg', N'Lord Farquaad', 55, 20, N'Es un enano casi llamado lord balfour (1917)')
SET IDENTITY_INSERT [dbo].[Personaje] OFF
GO
SET IDENTITY_INSERT [dbo].[PersonajesAsociados] ON 

INSERT [dbo].[PersonajesAsociados] ([Id], [FkPersonajes], [FkPeliculas]) VALUES (1, 1, 2)
INSERT [dbo].[PersonajesAsociados] ([Id], [FkPersonajes], [FkPeliculas]) VALUES (3, 4, 4)
INSERT [dbo].[PersonajesAsociados] ([Id], [FkPersonajes], [FkPeliculas]) VALUES (4, 4, 6)
INSERT [dbo].[PersonajesAsociados] ([Id], [FkPersonajes], [FkPeliculas]) VALUES (5, 6, 2)
INSERT [dbo].[PersonajesAsociados] ([Id], [FkPersonajes], [FkPeliculas]) VALUES (7, 7, 1)
INSERT [dbo].[PersonajesAsociados] ([Id], [FkPersonajes], [FkPeliculas]) VALUES (8, 9, 1)
INSERT [dbo].[PersonajesAsociados] ([Id], [FkPersonajes], [FkPeliculas]) VALUES (9, 10, 10)
INSERT [dbo].[PersonajesAsociados] ([Id], [FkPersonajes], [FkPeliculas]) VALUES (11, 12, 7)
INSERT [dbo].[PersonajesAsociados] ([Id], [FkPersonajes], [FkPeliculas]) VALUES (12, 15, 15)
INSERT [dbo].[PersonajesAsociados] ([Id], [FkPersonajes], [FkPeliculas]) VALUES (13, 17, 15)
INSERT [dbo].[PersonajesAsociados] ([Id], [FkPersonajes], [FkPeliculas]) VALUES (14, 18, 15)
INSERT [dbo].[PersonajesAsociados] ([Id], [FkPersonajes], [FkPeliculas]) VALUES (15, 19, 11)
INSERT [dbo].[PersonajesAsociados] ([Id], [FkPersonajes], [FkPeliculas]) VALUES (16, 21, 2)
SET IDENTITY_INSERT [dbo].[PersonajesAsociados] OFF
GO
USE [master]
GO
ALTER DATABASE [TPPersonajes] SET  READ_WRITE 
GO
