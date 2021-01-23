import Head from 'next/head'

const projects = [
  {
    title: 'Steinfabrikareal 2.0',
    subtitle: 'Gestaltung eines brachliegenden Areals',
    module: 'Modul Planung und Bauprozesse',
    description: 'Interdisziplinäre Gruppenarbeit IUNR',
    tags: ['erleben', 'Natur', 'Wandel'],
    folder: '01-Steinfabrikareal',
    videos: true,
    images: 1,
    Konzept: true,
    Poster: true,
    Arbeit: false,
    Vorstudie: true,
  },
  {
    title: 'Gebäude&shy;begrünungskonzept',
    subtitle: 'Gebäudebegrünungskonzept für eine Zwischennutzung',
    module: 'Modul Gebäudebegrünung',
    tags: ['low-tech', 'low-budget', 'low-maintenance'],
    folder: '02-Gebäudebegrünung',
    videos: false,
    images: 2,
    Konzept: true,
    Poster: true,
  },
  {
    title: 'Natürliche Stadtrundfahrten Basel',
    subtitle: 'Konzeptentwicklung Festival der Natur Basel Stadtnatur entdecken',
    module: 'Modul Biodiversität im Siedlungsraum',
    tags: ['zuhören', 'wahrnehmen', 'weitererzählen'],
    folder: '03-Basel',
    videos: false,
    images: 1,
    audio: 3,
    Konzept: true,
  },
  {
    title: 'Arboretum Zürich',
    subtitle: 'Analyse und Empfehlung Weiterentwicklung Bereich Oststaaten USA Kanada',
    module: 'Modul Urban Forestry',
    tags: ['Baumbeurteilung', 'Sanierung', 'Konzept'],
    folder: '04-Arboretum',
    videos: false,
    images: 3,
    Arbeit: true,
  },
  {
    title: 'Animal Aided Design',
    subtitle: 'Förderung Wasserfledermaus Zürich in Verbindung mit Architektur',
    module: 'Modul urbane Ökosysteme',
    tags: ['Design', 'Naturschutz', 'Wasserfledermaus'],
    folder: '05-ADD',
    videos: false,
    images: 1,
    Konzept: true,
  },
  {
    title: 'Bachelorarbeit',
    subtitle: 'Zwischennatur',
    module: 'ökologische Chancen einer Zwischennutzung',
    folder: '06-BA',
    videos: false,
    images: 1,
    Poster: true,
    Arbeit: true,
  },
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luca Jenal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-lg mx-auto px-4">
        {/* <h1 className="text-4xl mt-16 mb-8">Luca Jenal</h1> */}

        {projects.map((project) => {
          return (
            <div className="my-24" key="{project.folder}">
              {project.tags && (
                <ul className="text-xs px-8">
                  {project.tags.map((tag) => (
                    <li className="inline-block mr-1 tag" key={project.folder + 'tag' + tag}>
                      {tag.toLocaleLowerCase().replace(' ', '-')}
                    </li>
                  ))}
                </ul>
              )}

              <h2
                className="text-4xl my-2"
                dangerouslySetInnerHTML={{ __html: project.title }}
              ></h2>
              <ul className="text-base px-8">
                {['Konzept', 'Poster', 'Arbeit', 'Vorstudie']
                  .filter((type) => (project as any)[type])
                  .map((type) => (
                    <li key={type}>
                      <a href={`/projects/${project.folder}/${type}.pdf`}>{type}</a>
                    </li>
                  ))}
              </ul>
            </div>
          )
        })}
      </main>
    </div>
  )
}
