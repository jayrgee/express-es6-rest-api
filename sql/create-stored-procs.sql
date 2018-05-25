USE [AdventureWorks2017]
GO
/*
exec dbo.GetProductsByPage 2, 5
*/
CREATE OR ALTER PROCEDURE [dbo].[GetProductsByPage]
	@PageNumber INT = 1,
	@PageSize   INT = 10
AS
BEGIN
SET NOCOUNT ON;
;WITH pg AS 
(
	SELECT p.ProductID 
	FROM [Production].[Product] p 
	INNER JOIN [Production].[ProductModel] pm
	ON p.[ProductModelID] = pm.[ProductModelID] 
	ORDER BY p.ProductID 
	OFFSET @PageSize * (@PageNumber - 1) ROWS
	FETCH NEXT @PageSize ROWS ONLY
)
SELECT 
    p.[ProductID] 
    ,p.[Name] As [ProductName]
  	,p.[ProductNumber]
    ,pm.[Name] AS [ProductModel] 
FROM [Production].[Product] p 
INNER JOIN [Production].[ProductModel] pm
	ON p.[ProductModelID] = pm.[ProductModelID] 
INNER JOIN pg
	ON p.ProductID = pg.ProductID
ORDER BY p.ProductID;
END
GO

