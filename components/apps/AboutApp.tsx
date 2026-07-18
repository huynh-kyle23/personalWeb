"use client";

import { PROFILE } from "@/lib/portfolio-data";

export function AboutApp() {
  const { education, skills } = PROFILE;

  return (
    <div className="h-full flex flex-col">
      <div className="vista-toolbar px-3 py-1.5 text-[11px] text-[#333] flex gap-4">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Help</span>
      </div>
      <div className="flex-1 overflow-auto vista-scroll p-0 flex flex-col sm:flex-row min-h-0">
        <aside className="vista-sidebar w-full sm:w-48 shrink-0 p-3 text-[12px]">
          <p className="font-semibold text-[#1a3a5c] mb-2">Profile</p>
          <ul className="space-y-1.5 text-[#2a4a6a]">
            <li>User: {PROFILE.shortName}</li>
            <li>Role: {PROFILE.title}</li>
            <li>Location: {PROFILE.location}</li>
            <li>GPA: {education.gpa}</li>
            <li>Grad: {education.graduation}</li>
          </ul>
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-[#316ac5] underline text-[11px]"
          >
            Open resume (PDF)
          </a>
        </aside>
        <div className="flex-1 p-4 sm:p-5 vista-inset m-2 overflow-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-start mb-4">
            <div className="w-32 h-32 sm:w-36 sm:h-36 shrink-0 rounded border-2 border-[#7a9cbc] overflow-hidden shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PROFILE.photo}
                alt={PROFILE.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#0a246a] mb-1">
                Hi! My name is {PROFILE.shortName}!
              </h2>
              <p className="text-[12px] text-[#555] mb-2">
                {education.degree} · {education.school}
              </p>
              <p className="text-sm text-[#333] leading-relaxed">{PROFILE.bio}</p>
            </div>
          </div>

          <h3 className="text-sm font-semibold text-[#0a246a] mb-1.5 border-b border-[#c0d0e0] pb-1">
            Technical Skills
          </h3>
          <dl className="text-[12px] space-y-2 text-[#333]">
            <div>
              <dt className="font-semibold text-[#1a4a7a]">Languages & libraries</dt>
              <dd>{skills.languages}</dd>
            </div>
            <div>
              <dt className="font-semibold text-[#1a4a7a]">Data & cloud</dt>
              <dd>{skills.dataCloud}</dd>
            </div>
            <div>
              <dt className="font-semibold text-[#1a4a7a]">AI & tools</dt>
              <dd>{skills.aiTools}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
