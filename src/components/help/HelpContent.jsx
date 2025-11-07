import React, { useState } from "react";
import EditIcon from "./EditIcon";
import { RiTwitterXFill } from "react-icons/ri";
import { Acc1, Acc3 } from "../../assets/Route/Account";
import { TiPlus } from "react-icons/ti";

const InputField = ({
  label,
  placeholder,
  helpText,
  isTextArea,
  type = "text",
}) => {
  const InputComponent = isTextArea ? "textarea" : "input";
  return (
    <div>
      <label className="block font-inter text-[14px] font-[400]  my-1">
        {label}
      </label>
      <InputComponent
        type={type}
        placeholder={placeholder}
        className="w-full p-3 bg-transparent border border-[#2D2E31] rounded-lg   text-white placeholder-gray-500 transition-colors resize-none"
        rows={isTextArea ? 3 : undefined}
      />
      {helpText && (
        <p className="mt-1 font-inter text-[12px] font-[400] text-[#ACADAE]">
          {helpText}
        </p>
      )}
    </div>
  );
};

export default function HelpProfile() {
  const [coverImage, setCoverImage] = useState(Acc3);
  const [profileImage, setProfileImage] = useState(Acc1);

  // Handle file input change for both images
  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      if (type === "cover") {
        setCoverImage(imageUrl);
      } else if (type === "profile") {
        setProfileImage(imageUrl);
      }
    }
  };

  return (
    <div className="bg-black p-8 shadow-lg  min-h-screen">
      {/* <div className="relative">
        <div
          className="h-52 bg-cover bg-center group overflow-hidden"
          style={{ backgroundImage: `url(${Acc3})` }}
        >
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
            <div className="p-3 bg-black/50 rounded-full">
              <EditIcon />
            </div>
          </div>
        </div>

        <div className="absolute -bottom-16 left-4 rounded-full">
          <div className="w-24 h-24 rounded-full  flex items-center justify-center relative group">
            <span className="text-4xl">
              <img src={Acc1} alt="" />
            </span>
            <div className="absolute inset-0 rounded-full bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <div className="p-2 bg-black/50 rounded-full">
                <EditIcon />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="relative">
        {/* Cover Image */}
        <div
          className="h-52 bg-cover bg-center group overflow-hidden"
          style={{ backgroundImage: `url(${coverImage})` }}
        >
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
            <label className="p-3 bg-black/50 rounded-full cursor-pointer">
              <EditIcon />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(e, "cover")}
              />
            </label>
          </div>
        </div>

        {/* Profile Image */}
        <div className="absolute -bottom-16 left-4 rounded-full">
          <div className="w-24 h-24 rounded-full flex items-center justify-center relative group overflow-hidden">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full object-cover w-full h-full"
            />

            <div className="absolute inset-0 rounded-full bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <label className="p-2 bg-black/50 rounded-full cursor-pointer">
                <EditIcon />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, "profile")}
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="h-16" />

      <section className="space-y-6">
        <InputField
          label="Username"
          placeholder="Add username"
          helpText="This is your public username."
        />
        <InputField label="Bio" placeholder="Add a Bio" isTextArea />
        <InputField
          label="URL"
          placeholder="Add a URL"
          helpText="Add a link to your website or profile."
        />
        <InputField
          label="Email Address"
          placeholder="Add an email address"
          type="email"
        />
      </section>

      <section className="mt-10 pt-6 border-t border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Social Connections</h2>
        <div className="flex items-center justify-between p-3 bg-[#17181A] rounded-lg">
          <div className="flex items-center space-x-3">
            <span className="border bg-[#151515] border-[#ffffff25] rounded-md ">
              <a
                href="https://x.com/?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3  p-2 rounded-md text-[16px] transition-colors duration-200 text-[#ACADAE] hover:text-gray-200 hover:bg-[#1B1D1F]"
              >
                <RiTwitterXFill size={21} />
              </a>
            </span>
            <span className="font-medium  ">Connect</span>
          </div>

          <button className="px-3 flex items-center gap-2 py-1.5 bg-transparent border border-[#ffffff25] hover:border-[#fff] text-white font-medium rounded-md transition-colors">
            <TiPlus size={19} />
            Connect
          </button>
        </div>
      </section>

      <div className="flex justify-end mt-10">
        <button className="px-6 py-2 bg-[#fff] hover:border-[#fff] text-black font-semibold rounded-lg shadow-md transition-colors">
          Save
        </button>
      </div>
    </div>
  );
}
