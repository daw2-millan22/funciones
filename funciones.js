
		var columnas=parseInt(6);
		var filas=parseInt(4);

		function dibujaUniverso(columnas, filas){
			var html = "<div id=universo><div>";
			for(let i = 0;i<columnas;i++){
				html=html+"<div>";
				for(let j=0;j<filas;j++){
					html=html+"<div id="+i+"-"+j+">"+i+"-"+j+"</div>";
				}
				html=html+"</div>";
			}
			html=html+"</div></div>";
			return html;
		}

		

		var html=dibujaUniverso(columnas, filas);
		//document.write(html);
		function aleatorio(){
			
			const random = Math.random() < 0.5;
					
			return random;	
		}
		 var vivas = 0;
		for(cont=0;cont<1000;cont++){
			if(aleatorio()) vivas++;
		}
		console.log(vivas);

		function aleatorio2(porcentaje){
			const random = Math.random() < porcentaje/100;
				
			return random;
		}
		function crearMatriz(columnas, filas){
			var matriz=[[]];
			for(let i=0;i<columnas;i++){
				matriz[i]=new Array(2);
				for(let j=0;j<filas;j++){
					random=aleatorio();
					if(random==true){
						matriz[i][j]=true;
					}
					else{
						matriz[i][j]=false;
					}
					console.log(matriz[i][j])
				}
			}
			return matriz;

		}
		for(let i=0;i<10;i++){
			document.write("<br>");
		}
		var matriz=crearMatriz(columnas, filas);

		function dibujaUniverso2(array){
			var html = "<div id=universo class=universo><div>";
			for(let i = 0;i<array.length;i++){
				html=html+"<div>";
				for(let j=0;j<array[i].length;j++){
					variableClase="";
					if(array[i][j]==true){
						variableClase="viva";
					}else{
						variableClase="muerta";
					}
					html=html+"<div data-id="+i+"-"+j+" class="+variableClase+">"+i+"-"+j+"</div>";
				}
				html=html+"</div>";
			}
			html=html+"</div></div>";
			return html
		}
		function vecinos(array, x, y){
			vecinosVivos=0;
			if(array[x][y]==true){
				vecinosVivos=vecinosVivos-1;
			}
			//caso1 esquina superior izquierda
			if(x==0 && y==0){
				for(let i=x;i<=x+1;i++){
					for(let j=y;j<=y+1;j++){
						if(array[i][j]==true){
							vecinosVivos++;
						}
					}
				}
			}else if(x==0 && y>=1 && y<array[x].length-1){//caso2 lado izquierdo
				for(let i=x;i<=x+1;i++){
					for(let j=y-1;j<=y+1;j++){
						if(array[i][j]==true){
							vecinosVivos++;
						}
					}
				}
			}else if(x>=1 && x<array.length-1 && y==0){//caso3 lado superior
				for(let i=x-1;i<=x+1;i++){
					for(let j=y;j<=y+1;j++){
						if(array[i][j]==true){
							vecinosVivos++;
						}
					}
				}
			}else if(x==array.length-1 && y==0){//caso4 esquina superior derecha
				for(let i=x-1;i<=x;i++){
					for(let j=y;j<=y+1;j++){
						if(array[i][j]==true){
							vecinosVivos++;
						}
					}
				}
			}else if(x==0 && y==array[x].length-1){//caso5 esquina inferior izquierd
				for(let i = x; i <= x+1; i++){
					for(let j = y-1 ;j <= y;j++){
						if(array[i][j]==true){
							vecinosVivos++;
						}
					}
				}
			}else if(x>=1 && x<array.length-1 && y==array[x].length-1){//caso6 lado inferior
				for(let i=x-1;i<=x+1;i++){
					for(let j=y-1;j<=y;j++){
						if(array[i][j]==true){
							vecinosVivos++;
						}
					}
				}
			}else if(x==array.length-1 && y>=1 && y<array[x].length-1){//caso7 lado derecho 
				for(let i=x-1;i<=x;i++){
					for(let j=y-1;j<=y+1;j++){
						if(array[i][j]==true){
							vecinosVivos++;
						}
					}
				}
			}else if(x==array.length-1 && y==array[x].length-1){//caso 8 esquina inferior derecha
				for(let i=x-1;i<=x;i++){

					for(let j=y-1;j<=y;j++){
						if(array[i][j]==true){
							vecinosVivos++;
						}
					}
				}
			}else{
				for(let i = x-1; i <= x+1 ; i++){
					for(let j = y-1; j <= y+1; j++){
						if(array[i][j]==true){
							vecinosVivos++;
						}
					}
				}
				
			}

			return vecinosVivos;
		}
		function evoluciona(matriz, x , y){

			var celda=matriz[x][y];
			var iVecinos=parseInt(vecinos(matriz, x , y));

			if(celda== true && iVecinos<2){
				celda=false;
			}else if(celda== true && iVecinos>3){
				celda=false;
			}else if(celda== true && iVecinos==2 || iVecinos==3) {
				celda=true;
			}else if(celda == false && iVecinos==3){
				celda=true;
			}
			return celda;
		}

		function crearMatrizEvolucionada(array){
			console.log(array);
			var matriz =[array.length];


			for(let x=0; x <matriz.length; x++){
				matriz[x]= [array[0].length];
			}
			for(let x=0; x <matriz.length; x++){
				for(let y=0; y <matriz.length; y++){
					var celda=evoluciona(array, x ,y);
					matriz[x][y]=array[x][y];
					matriz[x][y]=celda;
				}
			}
			console.log(matriz);

			return matriz;
		}

		function copiaArray(arrayA , arrayB){
			for(let i = 0;i < arrayA.length; i++){

				for(let j = 0;j < arrayA[i].length; j++){

					arrayB[i][j]=arrayA[i][j];					
					
				}
			}
		}

		