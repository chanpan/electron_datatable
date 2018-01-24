// $(function(){
//      $("#mytable").load('./table.html');

//      setTimeout(function(){
//         $('#example').DataTable();
//         console.log("OK");
//      },500);
// });
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'yii2_basic'
    }
});
function load_tb_user(url=''){
    url = '' || 'http://localhost/yii2_basic/web/test/user/create3';
    $.get(url,function(res){
        let out = "";
        let result = res.map(function(v,k){
             out += `<tr><td>${v.email}</td><td>${v.username}</td></tr>`;
        });
        $('#tbody_user').html(out);
        $('#tbUser').DataTable();
       
    });  
}
load_tb_user();
    // knex.select("*").from("users").then(response=>{
    //     let out = "";
    //     let result = response.map((res, key) => {
    //         out += "<tr>";
    //             out += "<td><input type='text' value="+res.id+"  onChange='handleChange(event,"+JSON.stringify(res)+" , "+JSON.stringify({key:'id'})+")' /></td>";
    //             out += "<td><input type='text' value="+res.email+" onChange='handleChange(event,"+JSON.stringify(res)+", "+JSON.stringify({key:'email'})+")'></td>";
    //             out += "<td><input type='text' value="+res.username+" onChange='handleChange(event,"+JSON.stringify(res)+", "+JSON.stringify({key:'username'})+")'></td>";
    //             out += "<td><input type='text' value="+res.create_at+" onChange='handleChange(event,"+JSON.stringify(res)+", "+JSON.stringify({key:'create_at'})+")'></td>";
    //         out += "</tr>";
           
    //         $('#tbody_user').html(out);
    //         $('#tbUser').DataTable();
    //         setTimeout(()=>{
                
    //         });
    //     });
 
    // });
    // handleChange=(event,obj, fields)=>{
    //     let data_value = event.target.value;

    //     var date = new Date();
    //     var create_at = date.toLocaleDateString();

    //     obj[fields["key"]] = data_value;
    //     obj["create_at"] = create_at;
    //     let data_id = {id:obj.id};
    //     delete obj.id;
        
    //     knex('users').update(obj).where(data_id).then(res=>{console.warn(res)}).catch(err=>console.error(err));
    // }
    
 