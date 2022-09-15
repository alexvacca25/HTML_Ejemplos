function verdatos(){

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

    var info="<h1>Listado de Estudiantes</h1>";
    info=info+"<table>"
    info=info+"<tr>"
    info=info+"<th> N. </th>"
    info=info+"<th> Nombre </th>"
    info=info+"<th> Apellido </th>"
    info=info+"<th> telefono </th>"
    info=info+"<th> Edad </th>"
    info=info+"<th> Acciones </th>"
    info=info+"</tr>"
   

    for(var i=0; i<listaestudiantes.length;i++){
        info=info+"<tr>"; 
        info=info+ '<td>'+ (i+1) +'</th>';
        info = info +'<td>'+listaestudiantes[i]['nombre']+' </td>';
        info = info +'<td>'+listaestudiantes[i]['apellido']+' </td>';
        info = info +'<td>' +listaestudiantes[i]['telefono']+' </td>';        
        info = info +'<td>'+listaestudiantes[i]['edad']+' </td>'; 
        info = info +"<td><button onclick='verEdad("+listaestudiantes[i]['edad'] +")'>Ver</button></td>";               
        info = info +'</tr>';    
}

info=info+"</table>"

    document.getElementById("informacion").innerHTML=info;
}

