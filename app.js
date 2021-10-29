
 $("#siguiente").on("click",()=>{
 
 $.get("https://api.chucknorris.io/jokes/random",(res)=>{
     $(".info").html(`
<h3>${res.value}</h3>
`

     )
 })

 })