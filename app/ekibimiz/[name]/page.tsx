import { teamMembers } from "@/app/data/team";
import { notFound } from "next/navigation";
import TeamMemberDetailClient from "../../components/TeamMemberDetailClient";

interface Params {
  name: string;
}

export default async function TeamMemberDetailPage({ params }: { params: Params }) {
  const { name } = params;

  const decodedName = decodeURIComponent(name).toLowerCase();

  const member = teamMembers.find(
    (m) => m.name.toLowerCase().replace(/\s+/g, "-") === decodedName
  );

  if (!member) {
    notFound();
  }

  return <TeamMemberDetailClient member={member} />;
}
