
import {
  FiStar,
  FiEdit2,
  FiTrash2,
  FiCamera,
  FiSend,
} from "react-icons/fi";

import reviews from "../../services/json/review.json";
import type { Review } from "../../types/interface/Review.interface";
import ReviewBanner from "../../components/ReviewBanner";



const Reviews = () => {
  return (
    <div className="min-h-screen bg-[#FFF9FA]">

      {/* ===================== BANNER ===================== */}

      <ReviewBanner />


      {/* ===================== WRITE REVIEW ===================== */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-3xl shadow-md p-6 md:p-8 mb-10">

          {/* Heading */}

          <div>

            <p className="text-[#B08D3B] text-sm font-semibold uppercase tracking-wider">
              Your Experience
            </p>

            <h2 className="text-3xl font-bold text-[#17243D] mt-1">
              Write a Review
            </h2>

            <p className="text-gray-500 mt-2">
              Tell us about your furniture rental experience.
            </p>

          </div>


          {/* Furniture Select */}

          <div className="mt-7">

            <label className="block text-sm font-semibold text-[#17243D] mb-2">
              Select Furniture
            </label>

            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#DDBE70]">

              <option>Select furniture</option>
              <option>Modern Sofa</option>
              <option>Comfort Bed</option>
              <option>Dining Table</option>
              <option>Office Chair</option>

            </select>

          </div>


          {/* Rating */}

          <div className="mt-5">

            <label className="block text-sm font-semibold text-[#17243D] mb-2">
              Your Rating
            </label>

            <div className="flex gap-2">

              {Array.from({ length: 5 }, (_, index) => {

                const star = index + 1;

                return (
                  <button
                    key={star}
                    type="button"
                    className="text-[#DDBE70] hover:scale-110 transition"
                  >

                    <FiStar
                      size={28}
                      fill="currentColor"
                    />

                  </button>
                );

              })}

            </div>

          </div>


          {/* Review Text */}

          <div className="mt-5">

            <label className="block text-sm font-semibold text-[#17243D] mb-2">
              Your Review
            </label>

            <textarea
              rows={5}
              placeholder="Write your experience..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none resize-none focus:border-[#DDBE70]"
            />

          </div>


          {/* Image Upload */}

          <div className="mt-5">

            <label className="block text-sm font-semibold text-[#17243D] mb-2">
              Add Photos
            </label>

            <label className="flex items-center gap-3 w-fit px-5 py-3 rounded-xl border-2 border-dashed border-gray-300 text-gray-500 cursor-pointer hover:border-[#DDBE70] transition">

              <FiCamera size={20} />

              <span>
                Upload Review Image
              </span>

              <input
                type="file"
                accept="image/*"
                className="hidden"
              />

            </label>

          </div>


          {/* Submit Button */}

          <button
            type="button"
            className="flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-[#17243D] text-white font-semibold hover:bg-[#DDBE70] hover:text-[#17243D] transition"
          >

            <FiSend size={18} />

            Submit Review

          </button>

        </div>


        {/* ===================== REVIEWS LIST ===================== */}

        <div>

          {/* Reviews Heading */}

          <div className="flex items-center justify-between mb-7">

            <div>

              <p className="text-[#B08D3B] text-sm font-semibold uppercase tracking-wider">
                Customer Reviews
              </p>

              <h2 className="text-3xl font-bold text-[#17243D] mt-1">
                What Customers Say
              </h2>

            </div>


            {/* Overall Rating */}

            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-[#17243D] text-white">

              <FiStar
                size={17}
                className="text-[#DDBE70]"
                fill="currentColor"
              />

              <span className="font-semibold">
                4.7 / 5
              </span>

            </div>

          </div>


          {/* Review Cards */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {reviews.map((item: Review) => (

              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition"
              >

                {/* User Information */}

                <div className="flex items-start justify-between">

                  <div>

                    <h3 className="text-lg font-bold text-[#17243D]">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-400 mt-1">
                      Reviewed {item.furniture}
                    </p>

                  </div>

                  <span className="text-xs text-gray-400">
                    {item.date}
                  </span>

                </div>


                {/* Rating */}

                <div className="flex items-center gap-1 mt-4">

                  {Array.from({ length: 5 }, (_, index) => {

                    const star = index + 1;

                    return (
                      <FiStar
                        key={star}
                        size={17}
                        className={
                          star <= item.rating
                            ? "text-[#DDBE70]"
                            : "text-gray-300"
                        }
                        fill={
                          star <= item.rating
                            ? "currentColor"
                            : "none"
                        }
                      />
                    );

                  })}

                  <span className="ml-2 text-sm font-semibold text-gray-600">
                    {item.rating}.0
                  </span>

                </div>


                {/* Review */}

                <p className="text-gray-600 leading-relaxed mt-4">
                  {item.review}
                </p>


                {/* Review Image */}

                <div className="mt-5">

                  <img
                    src={item.image}
                    alt={item.furniture}
                    className="w-28 h-24 object-cover rounded-xl"
                  />

                </div>


                {/* Edit / Delete */}

                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">

                  <button
                    type="button"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#17243D] hover:bg-[#DDBE70] transition"
                  >

                    <FiEdit2 size={16} />

                    Edit

                  </button>


                  <button
                    type="button"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition"
                  >

                    <FiTrash2 size={16} />

                    Delete

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Reviews;