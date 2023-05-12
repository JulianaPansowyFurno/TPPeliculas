USE [master]
GO
/****** Object:  Database [TPPersonajes]    Script Date: 12/5/2023 12:08:25 ******/
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
/****** Object:  User [Peliculas]    Script Date: 12/5/2023 12:08:26 ******/
CREATE USER [Peliculas] FOR LOGIN [Peliculas] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [alumno]    Script Date: 12/5/2023 12:08:26 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [Peliculas]
GO
/****** Object:  Table [dbo].[Pelicula]    Script Date: 12/5/2023 12:08:26 ******/
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
/****** Object:  Table [dbo].[Personaje]    Script Date: 12/5/2023 12:08:26 ******/
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
/****** Object:  Table [dbo].[PersonajesAsociados]    Script Date: 12/5/2023 12:08:26 ******/
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

INSERT [dbo].[Pelicula] ([Id], [Imagen], [Titulo], [FechaCreacion], [Calificacion]) VALUES (1, N'data:image/jpeg;base64,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', N'Cars', N'10/04/2006', 4)
INSERT [dbo].[Pelicula] ([Id], [Imagen], [Titulo], [FechaCreacion], [Calificacion]) VALUES (2, N'https://pics.filmaffinity.com/Shrek-903764423-large.jpg', N'Shrek', N'05/10/2010', 5)
SET IDENTITY_INSERT [dbo].[Pelicula] OFF
GO
SET IDENTITY_INSERT [dbo].[Personaje] ON 

INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (1, N'https://elcomercio.pe/resizer/4nstuxvcQ_QZdKUBeqJmd2PQJL8=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/E2KQR45FV5GYBKP2OU3JFMP2G4.jpg', N'burro', 40, 400, N'es un burro que habla')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (3, N'https://elcomercio.pe/resizer/4nstuxvcQ_QZdKUBeqJmd2PQJL8=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/E2KQR45FV5GYBKP2OU3JFMP2G4.jpg', N'burro', 40, 400, N'es un burro que habla')
SET IDENTITY_INSERT [dbo].[Personaje] OFF
GO
SET IDENTITY_INSERT [dbo].[PersonajesAsociados] ON 

INSERT [dbo].[PersonajesAsociados] ([Id], [FkPersonajes], [FkPeliculas]) VALUES (1, 1, 1)
INSERT [dbo].[PersonajesAsociados] ([Id], [FkPersonajes], [FkPeliculas]) VALUES (2, 2, 2)
SET IDENTITY_INSERT [dbo].[PersonajesAsociados] OFF
GO
USE [master]
GO
ALTER DATABASE [TPPersonajes] SET  READ_WRITE 
GO
