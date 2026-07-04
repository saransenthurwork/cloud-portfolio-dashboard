import { navigation } from "../../../constants/navigation";
import { NavLink } from "react-router-dom";
import {
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside
      className="
      fixed
      left-4
      top-4
      bottom-4
      w-[260px]
      rounded-[28px]
      border
      border-[#232B36]
      bg-[#11161D]
      flex
      flex-col
      "
    >
      {/* Logo */}

      <div className="px-7 pt-8">

        <div className="flex items-center gap-4">

          <div
            className="
            h-12
            w-12
            rounded-2xl
            bg-gradient-to-br
            from-[#7C6DFF]
            to-[#5A6CF7]
            flex
            items-center
            justify-center
            "
          >

            <Sparkles
              size={22}
              className="text-white"
            />

          </div>

          <div>

            <h1 className="font-semibold text-xl text-white">

              Nimbus

            </h1>

            <p className="text-xs text-[#8E96A5]">

              Cloud Platform

            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="mt-10 px-4 flex-1">

        {navigation.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `
                flex
                items-center
                justify-between
                px-4
                py-3
                rounded-2xl
                mb-2
                transition-all
                duration-200

                ${
                  isActive
                    ? "bg-[#1A2230] text-white"
                    : "text-[#8E96A5] hover:bg-[#171D26] hover:text-white"
                }
                `
              }
            >

              <div className="flex items-center gap-3">

                <Icon size={19} />

                <span className="text-sm">

                  {item.title}

                </span>

              </div>

              <ChevronRight size={16} />

            </NavLink>

          );
        })}

      </nav>

      {/* User */}

      <div
        className="
        m-4
        rounded-2xl
        border
        border-[#232B36]
        p-4
        "
      >

        <div className="flex gap-3 items-center">

          <div
            className="
            h-11
            w-11
            rounded-full
            bg-[#6C7CFF]
            "
          />

          <div>

            <h3 className="font-medium text-white">

              Saran

            </h3>

            <p className="text-xs text-[#8E96A5]">

              Cloud Engineer

            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}