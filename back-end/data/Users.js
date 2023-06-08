import bycrpt from 'bcrypt'
const Users =[
    {
    
    name: 'ahmed mohmed',
    email: 'ahmed@amed.com',
   password: bycrpt.hashSync('good product',10),
   isAdmin:true,
    },
    {
    
    name: 'ahmed mohmed',
    email: 'ahmedd@amed.com',
   password: bycrpt.hashSync('good product',10),
    },
    {
    
    name: 'ahmed mohmed',
    email: 'ahmeed@amed.com',
   password:bycrpt.hashSync('good product',10),
  },
    
]
export default Users;