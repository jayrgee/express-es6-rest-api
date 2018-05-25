-- add [njsuser] login to SQL Server if it doesn't already exist
-- add [njsuser] to [AdventureWorks2017] db as member of [db_datareader]
--
-- instructions:
-- 1. Restore [AdventureWorks2017] database
--    https://github.com/Microsoft/sql-server-samples/releases/tag/adventureworks
--    https://github.com/Microsoft/sql-server-samples/releases/download/adventureworks/AdventureWorks2017.bak
--
-- 2. run this script!
--
USE [master]
GO
IF NOT EXISTS (SELECT * FROM sys.server_principals WHERE name = N'njsuser')
CREATE LOGIN [njsuser] WITH PASSWORD=N'P@ssw0rd1', DEFAULT_DATABASE=[master], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO

USE [AdventureWorks2017]
GO
IF DB_NAME() = 'AdventureWorks2017'
BEGIN
	DROP USER IF EXISTS [njsuser];
	CREATE USER [njsuser] FOR LOGIN [njsuser]
  ALTER ROLE [db_owner] ADD MEMBER [njsuser]
END;
GO
