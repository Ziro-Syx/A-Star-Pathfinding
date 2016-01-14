define(["metrics"], function(metrics) {	
	var patternBuilders = {
		LMUWALLS: function(board) {
			var columnIndex;
			var fromTop;
			var rowIndex;
			var calculatedRowIndex;

			fromTop = true;

			for (columnIndex = 0; columnIndex <47; columnIndex ++) {
				for (rowIndex = 0; rowIndex < 44; rowIndex++) {
					calculatedRowIndex = fromTop ? rowIndex : board.height-1-rowIndex;
					board.setMovementCost(columnIndex, calculatedRowIndex, board.movementCosts.impassable);
				}
			}
			for (columnIndex = 47; columnIndex <100; columnIndex ++) {
				for (rowIndex = 0; rowIndex < 15; rowIndex++) {
					calculatedRowIndex = fromTop ? rowIndex : board.height-1-rowIndex;
					board.setMovementCost(columnIndex, calculatedRowIndex, board.movementCosts.impassable);
				}
			}
			for (columnIndex = 51; columnIndex <100; columnIndex ++) {
				for (rowIndex = 18; rowIndex < 44; rowIndex++) {
					calculatedRowIndex = fromTop ? rowIndex : board.height-1-rowIndex;
					board.setMovementCost(columnIndex, calculatedRowIndex, board.movementCosts.impassable);
				}
			}
			for (columnIndex = 11; columnIndex <33; columnIndex ++) {
				for (rowIndex = 48; rowIndex < 58; rowIndex++) {
					calculatedRowIndex = fromTop ? rowIndex : board.height-1-rowIndex;
					board.setMovementCost(columnIndex, calculatedRowIndex, board.movementCosts.impassable);
				}
			}
			for (columnIndex = 36; columnIndex <88; columnIndex ++) {
				for (rowIndex = 48; rowIndex < 107; rowIndex++) {
					calculatedRowIndex = fromTop ? rowIndex : board.height-1-rowIndex;
					board.setMovementCost(columnIndex, calculatedRowIndex, board.movementCosts.impassable);
				}
			}
			for (columnIndex = 11; columnIndex <33; columnIndex ++) {
				for (rowIndex = 62; rowIndex < 78; rowIndex++) {
					calculatedRowIndex = fromTop ? rowIndex : board.height-1-rowIndex;
					board.setMovementCost(columnIndex, calculatedRowIndex, board.movementCosts.impassable);
				}
			}
			for (columnIndex = 11; columnIndex <24; columnIndex ++) {
				for (rowIndex = 78; rowIndex < 84; rowIndex++) {
					calculatedRowIndex = fromTop ? rowIndex : board.height-1-rowIndex;
					board.setMovementCost(columnIndex, calculatedRowIndex, board.movementCosts.impassable);
				}
			}
			
		},
		empty: function(board) {
			
		}
	}
		
	return {
		create: function() {
			var board  = [];
			var row;
			var rowIndex;
			var columnIndex;
			
			for (rowIndex = 0; rowIndex < metrics.boardHeight; rowIndex++) {
				row = [];
				for (columnIndex = 0; columnIndex < metrics.boardWidth; columnIndex++) {
					row.push(0);
				}
				board.push(row);
			}
			
			return {
				player: {
					x: 0,
					y: 0
				},
				movementCosts: {
					empty: 1,
					impassable: -1
				},
				width: metrics.boardWidth,
				height: metrics.boardHeight,
				cells: board,
				path: [],
				getMovementCost: function(column, row) {
					return this.cells[row][column];
				},
				setMovementCost: function(column, row, cost) {
					this.cells[row][column] = cost;
				},
				clear: function() {
					var rowIndex;
					var columnIndex;
					
					for (rowIndex = 0; rowIndex < this.height; rowIndex++) {
						for (columnIndex = 0; columnIndex < this.width; columnIndex++) {
							this.setMovementCost(columnIndex, rowIndex, this.movementCosts.empty);
						}
					}
				},
				reset: function(boardType) {
					var rowIndex;
					var columnIndex;
					var found;
					
					this.clear();
					this.path = [];
					patternBuilders[boardType](this);
					
					found = false;
					for (rowIndex = 0; rowIndex < this.height; rowIndex++) {
						for (columnIndex = 0; columnIndex < this.width; columnIndex++) {
							if (this.getMovementCost(columnIndex, rowIndex) === this.movementCosts.empty) {
								this.player.x = columnIndex;
								this.player.y = rowIndex;
								found = true;
								break;
							}
						}
						if (found) {
							break;
						}
					}
				}
			};
		}
	};
})
