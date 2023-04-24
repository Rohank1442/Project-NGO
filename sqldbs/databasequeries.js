function crt_table(tablename,db)
{
  let  q=`CREATE TABLE if not exists ${tablename}(username TEXT , email TEXT , password TEXT)`;
    db.run(q);
   //  console.log(q);

}
 function drp_table(tablename,db) {
    db.run(`drop table if exists ${tablename}`);
    }

   function all_tables(db)
   {
      db.serialize(function () {
         db.all("select name from sqlite_master where type='table'", function (err, table) {
             console.log(table);
         });
     });
   }
 function insrt_val (db,tablename ,username , email, password )
{
    username = username.trim();
    email = email.trim();
   let q =`insert into ${tablename} (username , email , password) 
           values(?,?,?)`;
   arr=[username , email , password];
   db.run(q,arr,(err)=>{
      if(err)return console.error(err.message);

      console.log("new row inserted successfully");
   })
}

 function get_table(tablename,db){
   const q=`select * from  ${tablename}`;
   db.all(q,[],(err,rows)=>{
      if(err) return console.error(err.message);

    rows.forEach((row)=>{
      console.log(row);
    })
   })
 }


 module.exports ={
    crt_table,
    drp_table,
    insrt_val,
    all_tables,
    get_table
 }
