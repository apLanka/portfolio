import LandingSection from "@/components/section/landing-section";
import AboutSection from "@/components/section/about-section";
import SkillsSection from "@/components/section/skills-section";
import ProjectsSection from "@/components/section/projects-section";
import ExperienceSection from "@/components/section/experience-section";
import ContactSection from "@/components/section/contact-section";

export default function Home() {
    return (
        <div className={'bg-black'}>
            <LandingSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ExperienceSection/>
            <ContactSection/>
        </div>
    );
}
