
export default function Home() {
  return (
    <h1>Home</h1>
  );
}

// ~~~ Routing ~~~
// Next.js için routing işlemi klasörleme mantığı ile çalışmaktadır. Örneğin;
//localhost/blogs => sayfası için src app altında blogs klasörü, blogs klasörünün de içinde page.js dosyası oluşturularak kodlama yapılmalıdır.
//localhost/blogs/blog-1

// Klasör ismini (account) şeklinde parantez içerisinde yazarsak url'de account kısmını görmeyiz. Route'ları gruplamış oluruz.