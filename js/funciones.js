
    function sumardosnumeros(a,b){
    
        alert(a+b)
    
    }
    
    function verEdad(edad){
        alert('La edad Seleccionada es: '+ edad)
    }
    

    
    function verestudiantes(){
    
    var nombres=['Alex', 'Pedro', 'Maria', 'Juan'];
    
    var listaestudiantes=[
        {
        'nombre':'Alex',
        'apellido':'Vaccca',
        'telefono':'321541',
        'edad':'25'
        },
        {
        'nombre':'Pedro',
        'apellido':'Perez',
        'telefono':'25844',
        'edad':'40'
        },
        {
        'nombre':'Maria',
        'apellido':'Diaz',
        'telefono':'87458',
        'edad':'60'
        }
    ];
    
    document.write('<h1>Listado de Estudiantes</h1>');
    
    document.write('<table>');
    document.write('<tr>');    
    document.write('<th> N. </th>');
    document.write('<th> Nombre </th>');
    document.write('<th> Apellido </th>');
    document.write('<th> telefono </th>');        
    document.write('<th> Edad </th>');  
    document.write('<th> Acciones </th>');              
    document.write('</tr>');    
    for(var i=0; i<listaestudiantes.length;i++){
            document.write('<tr>'); 
            document.write('<td>'+ (i+1) +'</th>');
            document.write('<td>'+listaestudiantes[i]['nombre']+' </td>');
            document.write('<td>'+listaestudiantes[i]['apellido']+' </td>');
            document.write('<td>' +listaestudiantes[i]['telefono']+' </td>');        
            document.write('<td>'+listaestudiantes[i]['edad']+' </td>'); 
            document.write("<td><button onclick='verEdad("+listaestudiantes[i]['edad'] +")'>Ver</button></td>");               
           document.write('</tr>');    
    }
    
    document.write('</table>');
    
    }
    