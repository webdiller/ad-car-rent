import { contacts } from "@/shared/contacts";
import { removePlusAndSpaces } from "@/shared/helpers/removePlusAndSpaces";
import useTranslation from "next-translate/useTranslation";

const SaveMoney = () => {
  const { t } = useTranslation("saveMoney");

  return (
    <div className="relative h-[60vh] bg-black">
      <div className="absolute inset-0 h-full w-full">
        <img className="h-full w-full object-cover" src="/images/welcome-bg.jpg" alt="" />
      </div>
      <div className="absolute inset-0 flex h-full w-full flex-col items-start justify-end bg-black/50 text-white">
        <div className="container flex flex-col items-center space-y-4 rounded-md bg-black/20 p-6 text-center">
          <p className="text-2xl sm:text-3xl">{t("TITLE")}</p>

          <a className="flex items-center space-x-2 text-[#bfa37c]" target="_blank" href={`tel:${removePlusAndSpaces({ inputString: contacts.mainPhone, removeSpace: true })}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <span>
              {t("HOTLINE_LABEL")}: {contacts.mainPhone}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SaveMoney;
