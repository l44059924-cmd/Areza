export default function Home() {
  return (
    <main className="min-h-screen">

      {/* هدر */}
      <header className="w-full border-b bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">دیجیتال‌مارکت</div>

          <nav className="flex gap-8 text-gray-700">
            <a className="hover:text-black">خانه</a>
            <a className="hover:text-black">محصولات</a>
            <a className="hover:text-black">درباره ما</a>
            <a className="hover:text-black">تماس</a>
          </nav>

          <button className="px-5 py-2 bg-black text-white rounded-xl">
            ورود / ثبت‌نام
          </button>
        </div>
      </header>

      {/* هیرو */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-snug mb-6">
            تجربه‌ای جدید از خرید آنلاین  
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            هر چیزی که برای خانه، سفر، کار یا روزمره نیاز داری، اینجاست.  
            با ارسال سریع، قیمت مناسب و پشتیبانی واقعی.
          </p>

          <button className="px-8 py-4 bg-black text-white rounded-xl text-lg">
            شروع خرید
          </button>
        </div>

        <div>
          <img
            src="/hero.jpg"
            alt="hero"
            className="rounded-3xl shadow-xl w-full object-cover"
          />
        </div>
      </section>

      {/* دسته‌بندی‌ها */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">دسته‌بندی‌های محبوب</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            "موبایل و گجت",
            "خانه و آشپزخانه",
            "ورزشی و سلامت",
            "سوپرمارکت",
            "مد و پوشاک",
            "زیبایی و مراقبت",
            "خودرو و ابزار",
            "کودک و نوزاد",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-sm rounded-xl p-6 text-center hover:shadow-md transition"
            >
              <div className="text-xl font-semibold mb-2">{item}</div>
              <div className="text-gray-500 text-sm">مشاهده محصولات</div>
            </div>
          ))}
        </div>
      </section>

      {/* پیشنهاد ویژه */}
      <section className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">پیشنهادهای ویژه امروز</h2>
          <p className="text-gray-300 mb-12">
            تخفیف‌های محدود با ارسال سریع
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "هدفون بی‌سیم مدل Pro Max",
                price: "۲,۴۹۰,۰۰۰ تومان",
              },
              {
                title: "پاوربانک ۲۰ هزار میلی‌آمپر",
                price: "۸۹۰,۰۰۰ تومان",
              },
              {
                title: "اسپیکر بلوتوثی قابل حمل",
                price: "۱,۳۵۰,۰۰۰ تومان",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white text-black rounded-2xl p-8 shadow-lg"
              >
                <div className="text-xl font-bold mb-4">{p.title}</div>
                <div className="text-gray-700 mb-6">{p.price}</div>
                <button className="px-6 py-3 bg-black text-white rounded-xl">
                  خرید
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* فوتر */}
      <footer className="bg-gray-100 border-t py-16 mt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">دیجیتال‌مارکت</h3>
            <p className="text-gray-600 leading-relaxed">
              خرید آنلاین با تجربه‌ای سریع، مطمئن و لذت‌بخش.  
              همراه با پشتیبانی واقعی و ارسال سریع.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">لینک‌های مهم</h3>
            <ul className="space-y-3 text-gray-700">
              <li>سوالات متداول</li>
              <li>قوانین و مقررات</li>
              <li>حریم خصوصی</li>
              <li>تماس با ما</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">خبرنامه</h3>
            <p className="text-gray-600 mb-4">
              جدیدترین تخفیف‌ها و محصولات را دریافت کنید.
            </p>
            <input
              type="email"
              placeholder="ایمیل شما"
              className="w-full px-4 py-3 rounded-xl border"
            />
          </div>
        </div>
      </footer>
    </main>
  );
        }
        
