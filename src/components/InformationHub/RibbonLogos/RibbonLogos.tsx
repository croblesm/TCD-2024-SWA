import { LogoItemsBottom, TranslateWrapper, LogoItemsTop } from ".";
import { useSponsor } from "../../../hooks";

export const RibbonLogos = () => {
  const { sponsorQuery } = useSponsor();
  if (sponsorQuery.error) return <p>error...</p>;
  if (sponsorQuery.isLoading) return <p>Loading...</p>;
  return (
    <section className="bg-tech-gray-300 py-24">
      <h2 className="mx-4 mb-12 text-center text-2xl font-medium text-neutral-900 md:text-4xl">
        Agradecemos a nuestros sponsors
      </h2>
      <div className="flex translate-y-[50%] rotate-[7deg] scale-110 overflow-hidden border-y-4 border-neutral-900 bg-neutral-50">
        {sponsorQuery.data != null && (
          <TranslateWrapper>
            <LogoItemsTop sponsors={sponsorQuery.data} />
          </TranslateWrapper>
        )}
        {sponsorQuery.data != null && (
          <TranslateWrapper>
            <LogoItemsTop sponsors={sponsorQuery.data} />
          </TranslateWrapper>
        )}
        {sponsorQuery.data != null && (
          <TranslateWrapper>
            <LogoItemsTop sponsors={sponsorQuery.data} />
          </TranslateWrapper>
        )}
      </div>
      <div className="flex -translate-y-[50%] -rotate-[7deg] scale-110 overflow-hidden border-y-4 border-neutral-900 bg-neutral-50">
        {sponsorQuery.data != null && (
          <TranslateWrapper reverse>
            <LogoItemsBottom sponsors={sponsorQuery.data} />
          </TranslateWrapper>
        )}
        {sponsorQuery.data != null && (
          <TranslateWrapper reverse>
            <LogoItemsBottom sponsors={sponsorQuery.data} />
          </TranslateWrapper>
        )}
        {sponsorQuery.data != null && (
          <TranslateWrapper reverse>
            <LogoItemsBottom sponsors={sponsorQuery.data} />
          </TranslateWrapper>
        )}
      </div>
    </section>
  );
};
