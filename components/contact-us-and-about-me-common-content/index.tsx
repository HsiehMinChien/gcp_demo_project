import { convertedImgUrl } from "../utils";
import "./style.styl";
import { ReactNode } from "react";

const PREFIX_CLASS = "contact-us-and-about-me-common-content";

export default function ContactUsAndAboutMeCommonContent({
  type,
  children,
}: {
  type: string;
  children: ReactNode;
}) {
  return (
    <div className={PREFIX_CLASS}>
      <section>
        <img src={convertedImgUrl(`/images/${type}-us-01.jpg`)} />
      </section>
      <section>{children}</section>
      <section>
        <img src={convertedImgUrl(`/images/${type}-bg.jpg`)} />
      </section>
    </div>
  );
}
