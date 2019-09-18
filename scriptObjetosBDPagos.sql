USE [PagosDB]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 11/09/2019 11:58:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PagoDetalle]    Script Date: 11/09/2019 11:58:41 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PagoDetalle](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PropietarioTarjeta] [nvarchar](100) NOT NULL,
	[NumeroTarjeta] [nvarchar](16) NOT NULL,
	[FechaExpiracion] [nvarchar](5) NOT NULL,
	[CVV] [nvarchar](3) NOT NULL,
 CONSTRAINT [PK_PagoDetalle] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
