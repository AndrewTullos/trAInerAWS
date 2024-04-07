'use client'
import { useId, useState } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { SubmitForm } from '@/components/SubmitForm'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-50 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-50 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-50 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-50"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-50/50 outline-none checked:border-[0.5rem] checked:border-neutral-50 focus-visible:ring-1 focus-visible:ring-neutral-500 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-50">{label}</span>
    </label>
  )
}

function SelectInput({ label, options, ...props }) {
  return (
    <div className="relative z-0 my-4 transition-all focus-within:z-10">
      <label className="mb-2 block text-base/6 text-neutral-50">{label}</label>
      <select
        {...props}
        className="block w-full rounded-2xl border border-neutral-300 border-neutral-300 bg-transparent px-6 pb-4 pt-2 text-base/6 text-neutral-50 ring-4 ring-transparent transition focus:outline-none focus:ring-neutral-950/5"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-neutral-900"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

function GetStartedForm() {
  const [goals, setGoals] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    const formData = {
      goals,
      height,
      age,
      gender,
    }

    try {
      const response = await fetch('http://localhost:3001/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(`Error - $response.statusText`)
      }

      const contentType = response.headers.get('Content-Type')
      if (contentType && contentType.includes('application/pdf')) {
        window.location.href = response.url
      } else {
        const result = await response.json()
        console.log(result.message)
      }
    } catch (error) {
      console.error('Failed to submit form', error)
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleFormSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-50">
          Fill out the form below
        </h2>
        {/* Goal Input Selection */}
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/20">
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset label="Goals" name="goals" autoComplete="goals">
              <legend className="text-base/6 text-neutral-50">Goals</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput
                  label="Lose Fat"
                  name="goals"
                  value="lose_fat"
                  checked={goals === 'lose_fat'}
                  onChange={(e) => setGoals(e.target.value)}
                />
                <RadioInput
                  label="Gain Muscle"
                  name="goals"
                  value="gain_muscle"
                  checked={goals === 'gain_muscle'}
                  onChange={(e) => setGoals(e.target.value)}
                />
                <RadioInput
                  label="Body Recomposition"
                  name="goals"
                  value="body_recomposition"
                  checked={goals === 'body_recomposition'}
                  onChange={(e) => setGoals(e.target.value)}
                />
                <RadioInput
                  label="Maintain Current Weight"
                  name="goals"
                  value="maintain_current_weight"
                  checked={goals === 'maintain_current_weight'}
                  onChange={(e) => setGoals(e.target.value)}
                />
              </div>
            </fieldset>
          </div>

          {/* Height Input */}
          <div className="border border-neutral-300 px-6 py-8 text-neutral-50 first:rounded-t-2xl last:rounded-b-2xl">
            <legend className="text-base/6 text-neutral-50">Height</legend>
            <select
              name="height"
              value={height}
              className="form-control isolate mt-6 -space-y-px rounded-2xl bg-white/20"
              id="height"
              onChange={(e) => setHeight(e.target.value)}
              style={{ width: '150px' }}
            >
              <option value="55">4ft 7in</option>
              <option value="56">4ft 8in</option>
              <option value="57">4ft 9in</option>
              <option value="58">4ft 10in</option>
              <option value="59">4ft 11in</option>
              <option value="60">5ft 0in</option>
              <option value="61">5ft 1in</option>
              <option value="62">5ft 2in</option>
              <option value="63">5ft 3in</option>
              <option value="64">5ft 4in</option>
              <option value="65">5ft 5in</option>
              <option value="66">5ft 6in</option>
              <option value="67">5ft 7in</option>
              <option value="68">5ft 8in</option>
              <option value="69">5ft 9in</option>
              <option value="70">5ft 10in</option>
              <option value="71">5ft 11in</option>
              <option value="72">6ft 0in</option>
              <option value="73">6ft 1in</option>
              <option value="74">6ft 2in</option>
              <option value="75">6ft 3in</option>
              <option value="76">6ft 4in</option>
              <option value="77">6ft 5in</option>
              <option value="78">6ft 6in</option>
              <option value="79">6ft 7in</option>
              <option value="80">6ft 8in</option>
              <option value="81">6ft 9in</option>
              <option value="82">6ft 10in</option>
              <option value="83">6ft 11in</option>
              <option value="84">7ft 0in</option>
            </select>
          </div>

          {/* Age Input */}
          <TextInput
            label="Age"
            type="number"
            name="age"
            value={age}
            autoComplete="age"
            onChange={(e) => setAge(e.target.value)}
          />

          {/* Gender Input */}
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset label="Gender" name="gender" autoComplete="gender">
              <legend className="text-base/6 text-neutral-50">Gender</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput
                  label="Male"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <RadioInput
                  label="Female"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <RadioInput
                  label="Prefer Not to Answer"
                  name="gender"
                  value="prefer_not_to_answer"
                  checked={gender === 'prefer_not_to_answer'}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10 border-neutral-300">
          Submit{' '}
        </Button>
      </form>
    </FadeIn>
  )
}

export default GetStartedForm
