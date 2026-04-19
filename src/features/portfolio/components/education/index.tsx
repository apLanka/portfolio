import { EDUCATION } from "../../data/experiences"
import { Panel, PanelHeader, PanelTitle } from "../panel"
import { ExperienceItem } from "../experiences/experience-item"

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EDUCATION.map((entry) => (
          <ExperienceItem
            key={entry.id}
            experience={entry}
            section="education"
          />
        ))}
      </div>
    </Panel>
  )
}
