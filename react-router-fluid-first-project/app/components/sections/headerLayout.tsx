import {AnnouncementBar} from "~/components/sections/headerSections/announcementBar";
import {Header} from "~/components/sections/headerSections/header";

type HeaderProps = {
  sections: any;
}

export function HeaderLayout({sections}: HeaderProps) {
  return (
    <div>
      {sections.map((section, index) => {
        switch (section._type) {
          case "announcementBar":
            return <AnnouncementBar key={`${section._type}-${index}`} text={section.text}/>;
          case "header":
            return <Header key={`${section._type}-${index}`}
                           title={section.title}
                           enableCart={section.enableCart}
                           enableLogin={section.enableLogin}
                           enableSearch={section.enableSearch}
                           navLinks={section.navLinks}/>;
          default:
            return null;
        }
      })}
    </div>
  );
}