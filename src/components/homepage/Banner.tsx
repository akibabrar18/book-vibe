import Image from "next/image";
import bannerImage from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="relative z-0 my-6 sm:my-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-base-200 via-base-100 to-base-200/50 border border-base-content/5 shadow-xl transition-all duration-300 hover:shadow-2xl">
        {/* Background glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-success/10 rounded-full blur-3xl pointer-events-none" />

        {/* Main Content */}
        <div className="relative z-0 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14 p-8 sm:p-12 lg:p-16">
          {/* Text & Action Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Label */}
            <span className="inline-block px-3.5 py-1 text-xs sm:text-sm font-semibold tracking-wider text-success uppercase bg-success/10 rounded-full">
              Curated Picks
            </span>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-base-content leading-[1.15]">
              Books to freshen up <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-success to-emerald-600 bg-clip-text text-transparent">
                your bookshelf
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-base-content/70 leading-relaxed font-normal">
              Dive into our handpicked collection of inspiring reads, timeless
              classics, and fresh bestsellers designed to spark curiosity.
            </p>

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                className="
                  btn
                  btn-success
                  text-white
                  px-8
                  py-3
                  rounded-xl
                  shadow-lg
                  shadow-success/20
                  hover:shadow-success/30
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  transition-all
                  duration-200
                  w-full
                  sm:w-auto
                "
              >
                View The List
              </button>

              <button
                className="
                  btn
                  btn-ghost
                  hover:bg-base-content/5
                  px-6
                  rounded-xl
                  transition-all
                  duration-200
                  w-full
                  sm:w-auto
                "
              >
                Explore Genres →
              </button>
            </div>
          </div>

          {/* Banner Image */}
          <div className="flex-1 flex justify-center items-center w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <div className="relative group w-full aspect-[4/3] sm:aspect-[16/11]">
              {/* Image shadow / glow */}
              <div
                className="
                  absolute
                  inset-4
                  bg-emerald-500/15
                  rounded-2xl
                  blur-xl
                  transform
                  group-hover:scale-105
                  transition-transform
                  duration-500
                "
              />

              <Image
                src={bannerImage}
                alt="Curated collection of books"
                priority
                className="
                  relative
                  z-0
                  rounded-2xl
                  object-cover
                  w-full
                  h-full
                  shadow-md
                  group-hover:scale-[1.02]
                  transition-transform
                  duration-500
                  ease-out
                "
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 50vw,
                  40vw
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
