import { Hero1 } from "@/components/FirstSection";
import { SecondSection } from "@/components/SecondSection";
import { ThirdSection } from "@/components/ThirdSection";

export default function Home() {
  return (
    <>
      <Hero1
        description="Presented by Group 7"
        images={[
          {
            src: "/images/home/society.jpg",
            alt: "Hero section demo image 1",
          },
          {
            src: "/images/home/socialist democracy.jpg",
            alt: "Hero section demo image 2",
          },
          {
            src: "/images/home/scale2.jpg",
            alt: "Hero section demo image 3",
          },
          {
            src: "/images/home/bourgeois democracy.jpg",
            alt: "Hero section demo image 4",
          },
        ]}
        heading='Sự khác nhau về bản chất giữa dân chủ xã hội chủ nghĩa và dân chủ tư sản'
      />

      <ThirdSection
        heading='Tìm hiểu dân chủ xã hội chủ nghĩa ở Việt Nam'
        image={{ src: "/images/home/socialist democracy.jpg", alt: "Hero section demo image showing interface components" }}
        description="Dân chủ xã hội chủ nghĩa là hình thức dân chủ do Đảng Cộng sản lãnh đạo, quyền lực thuộc về nhân dân với đầy đủ các quyền tự do và tham gia quản lý nhà nước."
      />
      <SecondSection
        heading='Tìm hiểu dân chủ tư sản ở các nước tư bản'
        image={{ src: "/images/home/bourgeois democracy.jpg", alt: "Hero section demo image showing interface components" }}
        description="Dân chủ tư sản là hình thức dân chủ do giai cấp tư sản kiểm soát, chủ yếu tập trung vào quyền bầu cử mà hạn chế các quyền tự do khác."
      />
    </>
  )
}