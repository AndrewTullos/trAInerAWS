import { PageIntro } from '@/components/PageIntro'
import { Container } from '@/components/Container'
import GetStartedForm from '@/components/GetStartedForm.client'

export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Elevate Your Fitness Journey:"
        title="Design Your Optimal Workout Nutrition Blueprint!"
      >
        <p>
          Train Smarter, Not Harder - Master Your Workout Nutrition for Results
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <GetStartedForm />
        </div>
      </Container>
    </>
  )
}
