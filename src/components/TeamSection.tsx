import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

interface Team1Props {
  heading?: string;
  subheading?: string;
  description?: string;
  members?: TeamMember[];
}

const Team1 = ({
  heading = "Nhóm 7",
  description = "Giới thiệu các thành viên team",
  members = [
    {
      id: "member-1",
      name: "Ngô Chí Kiên",
      role: "Leader",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    },
    {
      id: "member-2",
      name: "Trương Minh Hoàng",
      role: "Member",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    },
    {
      id: "member-3",
      name: "Trần Minh Thư",
      role: "Member",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    },
    {
      id: "member-4",
      name: "Phạm Trần Vương Anh",
      role: "Member",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    },
    {
      id: "member-5",
      name: "Nguyễn Tấn Phong",
      role: "Member",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    },
    {
      id: "member-6",
      name: "Nguyễn Viết Tuấn Kiệt",
      role: "Member",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    },
    {
        id: "member-7",
        name: "Phước Sang",
        role: "Member",
        avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    }
  ],
}: Team1Props) => {
  return (
    <section className="py-32 container mx-auto">
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          {heading}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl lg:text-xl">
          {description}
        </p>
      </div>
      <div className="container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
              <AvatarImage src={member.avatar} />
              <AvatarFallback>{member.name}</AvatarFallback>
            </Avatar>
            <p className="text-center font-medium">{member.name}</p>
            <p className="text-muted-foreground text-center">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Team1 };
