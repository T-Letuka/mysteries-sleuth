import React from "react";
import Cards from "@/app/Components/Cards";

const GeneralServices = () => {
  return (
    <div className="pb-[3rem] pt-[5rem] ">
      <div
        className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2
     lg:grid-cols-3 items-center gap-[1.4rem]"
      >
        <div>
          <Cards
            title="Play Therapy"
            paragraph="Gestalt Play Therapy Intervention brings the child into self - awareness. The child is accepted unconditionally."
          />
        </div>
        <div>
          <Cards
            title="Trauma"
            paragraph="Grief, Loss, Family Assistance, Corporate Assistance and Personal face to face assistance."
          />
        </div>
        <div>
          <Cards
            title="Teen and Adults"
            paragraph="A comfortable space to say what you need to say without judgement. A person centred approach."
          />
        </div>

        <div>
          <Cards
            title="Relationships"
            paragraph="Any and all relationship therapy, pre marital, same sex, family and marriage counselling."
          />
        </div>
        <div>
          <Cards
            title="Addiction"
            paragraph="Grief, Loss, Family Assistance, Corporate Assistance and Personal face to face assistance"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralServices;
