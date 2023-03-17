import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../features/tags/tagsSlice";

const Tags = () => {
  const { tags } = useSelector((state) => state.tags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return tags?.length > 0 ? (
    <section>
      <div class="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tags.map((tag) => {
          return (
            <div key={tag.id}>
              <div class="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
                {tag.title}
              </div>
              {/* <div class="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
                redux
              </div> */}
            </div>
          );
        })}
      </div>
    </section>
  ) : null;
};

export default Tags;
