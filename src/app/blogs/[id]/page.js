
export default async function Page({ params }) {
  
  const blog_id = (await params).id; // klasör isminden dinamik olarak blog id'sini alma (klasörleme mantığı ile routing için)

  return <h1>Blog {blog_id} Detay</h1> ;
}
