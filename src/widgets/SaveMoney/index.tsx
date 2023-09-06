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
          <a className="inline-block text-white" href="tel:0">
            <span>{t("HOTLINE_LABEL")}: +1234 5678 901</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SaveMoney;
