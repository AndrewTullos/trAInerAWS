import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { SubmitForm } from '@/components/SubmitForm'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-900/50 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We&apos;ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 rounded-4xl bg-neutral-900/50 py-20 sm:mt-32 sm:py-32 lg:mt-56"
        // className="mt-24 sm:mt-32 lg:mt-40 rounded-4xl bg-neutral-900/50"
      >
        <p>
          We believe technology is the answer to the world&apos;s greatest
          challenges. It&apos;s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16 rounded-4xl">
        <FadeInStagger className="grid grid-cols-1 gap-8 text-neutral-200 lg:grid-cols-3">
          <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 hover:text-neutral-800 sm:p-8">
            <p className="mt-6 font-display text-2xl font-semibold ">
              <h3>Step One</h3>
            </p>
            <p className="mt-4 text-base">Click on &quot;Get Started&quot;</p>
          </article>

          <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 hover:text-neutral-800 sm:p-8">
            <p className="mt-6 font-display text-2xl font-semibold ">
              <h3>Step Two</h3>
            </p>
            <p className="mt-4 text-base ">
              Fill out all the data on the form and click submit.
            </p>
          </article>

          <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 hover:text-neutral-800 sm:p-8">
            <p className="mt-6 font-display text-2xl font-semibold ">
              <h3>Step Three</h3>
            </p>
            <p className="mt-4 text-base ">
              Wait for the data to populate and download your custom workout &
              nutrition plan!
            </p>
          </article>
        </FadeInStagger>

        {/* <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 hover:text-neutral-800 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-200"></p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-200">
                  <h3>Step One</h3>
                </p>
                <p className="mt-4 text-base text-neutral-200"></p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger> */}
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Workout Programs">
              With TrAIner, users can access custom workout programs designed to
              maximize their fitness results and optimize their training
              sessions. Whether you&apos;re a beginner or a seasoned athlete,
              TrAIner ensures every workout is tailored to your fitness level
              and objectives
            </ListItem>
            <ListItem title="Skilled Engineering">
              We boast a team of proficient developers well-versed in
              cutting-edge technologies, guaranteeing the delivery of accurate
              information.
            </ListItem>
            <ListItem title="Artificial Intelligence">
              We are at the forefront of AI development. Which mainly means we
              are letting OpenAI do all the leg work and tieing in this website
              to their API.
            </ListItem>
            <ListItem title="Custom Plans">
              TrAIner empowers users to achieve their fitness goals with
              personalized diet plans tailored to their unique needs and
              preferences. Say goodbye to generic meal plans and hello to a
              healthier, happier you with TrAIner
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'trAIner is an AI-powered workout and diet tool designed to create personalized programs tailored to individual fitness goals.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-50 [text-wrap:balance] sm:text-7xl">
            Artificial-intelligence, developed to help you live your best life.
          </h1>
          <p className="mt-6 text-xl text-neutral-200">
            At the intersection of design and technology. We are building a
            better future with artificial inteligence bringing access to custom
            tailored health to the masses.
          </p>
        </FadeIn>
      </Container>
      {/* <Clients /> */}
      <CaseStudies caseStudies={caseStudies} />
      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        trAIner helped us and our clients get real working results.
      </Testimonial> */}
      <Services />
      <ContactSection />
    </>
  )
}
