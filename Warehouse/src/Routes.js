const Routes = [
  { method: 'get', path: '/Warehouses/:warehouseId', controller: 'Warehouse', action: 'GetWarehouse' },
  { method: 'get', path: '/Warehouses', controller: 'Warehouse', action: 'GetWarehouses' },
  { method: 'post', path: '/Warehouses', controller: 'Warehouse', action: 'AddWarehouse' },
  { method: 'put', path: '/Warehouses', controller: 'Warehouse', action: 'UpdateWarehouse' },
  { method: 'delete', path: '/Warehouses', controller: 'Warehouse', action: 'DeleteWarehouse' },

  { method: 'get', path: '/Stocks/:stockId', controller: 'Stock', action: 'GetStock' },
  { method: 'get', path: '/Stocks', controller: 'Stock', action: 'GetStocks' },
  { method: 'post', path: '/Stocks', controller: 'Stock', action: 'AddStock' },
  { method: 'put', path: '/Stocks', controller: 'Stock', action: 'UpdateStock' },
  { method: 'delete', path: '/Stocks', controller: 'Stock', action: 'DeleteStock' },

  { method: 'get', path: '/Stockmovements/:stockmovementId', controller: 'Stockmovement', action: 'GetStockmovement' },
  { method: 'get', path: '/Stockmovements', controller: 'Stockmovement', action: 'GetStockmovements' },
  { method: 'post', path: '/Stockmovements', controller: 'Stockmovement', action: 'AddStockmovement' },
  { method: 'put', path: '/Stockmovements', controller: 'Stockmovement', action: 'UpdateStockmovement' },
  { method: 'delete', path: '/Stockmovements', controller: 'Stockmovement', action: 'DeleteStockmovement' },

  { method: 'get', path: '/Purchaseorders/:purchaseorderId', controller: 'Purchaseorder', action: 'GetPurchaseorder' },
  { method: 'get', path: '/Purchaseorders', controller: 'Purchaseorder', action: 'GetPurchaseorders' },
  { method: 'post', path: '/Purchaseorders', controller: 'Purchaseorder', action: 'AddPurchaseorder' },
  { method: 'put', path: '/Purchaseorders/Complete', controller: 'Purchaseorder', action: 'CompletePurchaseorder' },
  { method: 'put', path: '/Purchaseorders/Deactive', controller: 'Purchaseorder', action: 'DeactivePurchaseorder' },
  { method: 'put', path: '/Purchaseorders', controller: 'Purchaseorder', action: 'UpdatePurchaseorder' },
  { method: 'delete', path: '/Purchaseorders', controller: 'Purchaseorder', action: 'DeletePurchaseorder' },

  { method: 'get', path: '/Purchaseorderstocks/:stockId', controller: 'Purchaseorderstock', action: 'GetPurchaseorderstock' },
  { method: 'get', path: '/Purchaseorderstocks', controller: 'Purchaseorderstock', action: 'GetPurchaseorderstocks' },
  { method: 'post', path: '/Purchaseorderstocks', controller: 'Purchaseorderstock', action: 'AddPurchaseorderstock' },
  { method: 'put', path: '/Purchaseorderstocks', controller: 'Purchaseorderstock', action: 'UpdatePurchaseorderstock' },
  { method: 'delete', path: '/Purchaseorderstocks', controller: 'Purchaseorderstock', action: 'DeletePurchaseorderstock' },

  { method: 'get', path: '/Purchaseorderstockmovements/:stockmovementId', controller: 'Purchaseorderstockmovement', action: 'GetPurchaseorderstockmovement' },
  { method: 'get', path: '/Purchaseorderstockmovements', controller: 'Purchaseorderstockmovement', action: 'GetPurchaseorderstockmovements' },
  { method: 'post', path: '/Purchaseorderstockmovements', controller: 'Purchaseorderstockmovement', action: 'AddPurchaseorderstockmovement' },
  { method: 'put', path: '/Purchaseorderstockmovements', controller: 'Purchaseorderstockmovement', action: 'UpdatePurchaseorderstockmovement' },
  { method: 'delete', path: '/Purchaseorderstockmovements', controller: 'Purchaseorderstockmovement', action: 'DeletePurchaseorderstockmovement' },

  { method: 'get', path: '/Stockdefines/:stockdefineId', controller: 'Stockdefine', action: 'GetStockdefine' },
  { method: 'get', path: '/Stockdefines', controller: 'Stockdefine', action: 'GetStockdefines' },
  { method: 'post', path: '/Stockdefines', controller: 'Stockdefine', action: 'AddStockdefine' },
  { method: 'put', path: '/Stockdefines', controller: 'Stockdefine', action: 'UpdateStockdefine' },
  { method: 'delete', path: '/Stockdefines', controller: 'Stockdefine', action: 'DeleteStockdefine' },



]

module.exports = Routes