const database = require('./db');
const saveOrphanage = require('./saveOrphanage');


database.then( async db => {
     //inserir dados na tabela
 /*await saveOrphanage(db, {
    lat:"-27.252633",
      lng:"-49.6855874",
      name:"Lar dos desabrigados",
      about:"Fub",
      whatsapp:"15994585265",
      images:["https://img.freepik.com/fotos-gratis/criancas-que-jogam-na-grama_1098-504.jpg?size=626&ext=jpg"]
      .toString(),
      instrutions:"Triste",
      opening_hours:"Horario de vistas das 12 as 6",
      open_on_weekends:"1"
   })*/
    //consultar dados da tabelas
    //const selectOrphanages = await db.all("SELECT * FROM orphanages")
    //console.log(selectOrphanages)
        // consultar 1 orphanato, pelo ID
       // const orphanage = await db.all('SELECT * FROM ORPHANAGES WHERE ID="8"')
        //console.log(orphanage)

        //delete tabela
        //console.log(await db.run('DELETE FROM orphanages'))
        //console.log(await db.run('DELETE FROM orphanages'))

})
